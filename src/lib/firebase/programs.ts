export interface Program {
  id: string; // from slug/docId
  slug: string;
  name: string;
  description: string;
  price?: number;
  packagePrice?: number;
  privatePrice?: number;
  minParticipants?: number;
  isFixedQuota?: boolean;
  type: "Sertifikasi" | "Kursus";
  category: "sertifikasi" | "kursus";
  level?: "Pemula" | "Menengah" | "Lanjutan";
  details?: string;
  seoTitle?: string;
  seoDescription?: string;
}

interface FirestoreRestDocument {
  name: string;
  fields?: Record<string, {
    stringValue?: string;
    integerValue?: string;
    booleanValue?: boolean;
  }>;
}

export async function getPrograms(): Promise<Program[]> {
  try {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    if (!projectId) throw new Error("Firebase Project ID not set");
    
    // Use Firestore REST API for maximum compatibility with Next.js specific caching and SSR
    const response = await fetch(
      `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/programs`,
      { next: { revalidate: 60 } } // Cache for 60 seconds
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch programs: ${response.statusText}`);
    }

    const data = await response.json();
    if (!data.documents) return [];

    return data.documents.map((doc: FirestoreRestDocument) => {
      const id = doc.name.split("/").pop() || "";
      const fields = doc.fields || {};
      
      return {
        id,
        slug: fields.slug?.stringValue || id,
        name: fields.name?.stringValue || "",
        description: fields.description?.stringValue || "",
        price: fields.price?.integerValue ? parseInt(fields.price.integerValue) : undefined,
        packagePrice: fields.packagePrice?.integerValue ? parseInt(fields.packagePrice.integerValue) : undefined,
        privatePrice: fields.privatePrice?.integerValue ? parseInt(fields.privatePrice.integerValue) : undefined,
        minParticipants: fields.minParticipants?.integerValue ? parseInt(fields.minParticipants.integerValue) : undefined,
        isFixedQuota: fields.isFixedQuota?.booleanValue || false,
        type: fields.type?.stringValue || "Sertifikasi",
        category: fields.category?.stringValue || "sertifikasi",
        level: fields.level?.stringValue || "Pemula",
        details: fields.details?.stringValue || "",
        seoTitle: fields.seoTitle?.stringValue || fields.name?.stringValue || "",
        seoDescription: fields.seoDescription?.stringValue || fields.description?.stringValue || ""
      } as Program;
    });
  } catch (error) {
    console.error("Error fetching programs:", error);
    return []; // Return empty gracefully
  }
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  const programs = await getPrograms();
  return programs.find(p => p.slug === slug) || null;
}
