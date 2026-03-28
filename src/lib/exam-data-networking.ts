// ============================================================
// TAC TRYOUT ENGINE — Exam Data
// Sertifikasi: KISI-KISI SERTIFIKASI ITS-NETWORKING
// ============================================================

import { ExamQuestion } from "./exam-data";

export const ITS_NETWORKING_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "Move each address from the list on the correct IPv4 address class on the right.",
    type: "multiple",
    note: "You will receive partial credit for each correct answer.",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 2,
    question: "For each statement about switches, select True or False.",
    type: "true_false",
    note: "You will receive partial credit for each correct selection.",
    statements: [
      { text: "A switch sends unicast frames to only one destination port", answer: "True" }, // Modify answer manually if needed
      { text: "A switch floods ports if it does not know where to send a frame", answer: "True" }, // Modify answer manually if needed
      { text: "A switch sends broadcast frames to only the uplink port", answer: "True" }, // Modify answer manually if needed
    ],
    answers: [],
    options: [],
  },
  {
    id: 3,
    question: "How is a router's static routing table updated?",
    type: "single",
    options: [
      { label: "A", text: "By monitoring adjacent subnets" },
      { label: "B", text: "With updates from the physically nearest routers" },
      { label: "C", text: "Through direct action by the network administrator" },
      { label: "D", text: "From the RIP protocol after resetting the router" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 4,
    question: "You are a network administrator at a small business. One morning at the start of business, you realize that no employees at the company can access external websites. However, all employees can access intranet sites. All computers are on the same intranet connected by a single router. You need to troubleshoot the problem. Which two actions should you complete?",
    type: "multiple",
    options: [
      { label: "A", text: "Check for bad network adapters on individual computers" },
      { label: "B", text: "Check that each computer has a valid IP address" },
      { label: "C", text: "Contact the internet service provider" },
      { label: "D", text: "Check the router for proper physical connectivity" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 5,
    question: "Which media type is least susceptible to external interference including EMI and RFI?",
    type: "single",
    options: [
      { label: "A", text: "STP" },
      { label: "B", text: "Wireless" },
      { label: "C", text: "Fiber Optic" },
      { label: "D", text: "UTP" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 6,
    question: "Move the appropriate address types from the list on the left to the correct ranges on the right. You may use each address type once or not at all.",
    type: "multiple",
    note: "You will receive partial credit for each correct answer.",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 7,
    question: "For each statement about wide area networks (WANs), select True or False.",
    type: "true_false",
    note: "You will receive partial credit for each correct selection.",
    statements: [
      { text: "Statement 1 about WAN", answer: "True" }, // Modify answer manually if needed
      { text: "Statement 2 about WAN", answer: "True" }, // Modify answer manually if needed
      { text: "Statement 3 about WAN", answer: "True" }, // Modify answer manually if needed
    ],
    answers: [],
    options: [],
  },
  {
    id: 8,
    question: "What is a VPN?",
    type: "single",
    options: [
      { label: "A", text: "A secure private connection over a public network" },
      { label: "B", text: "A communication tunnel between VLANs" },
      { label: "C", text: "A virtual network within your local area network (LAN)" },
      { label: "D", text: "A personal network for your use only" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 9,
    question: "CompanyPro plans to migrate several servers to cloud-based virtual machines. You need to identify the administrative responsibilities that will be reduced after the planned migration. Which two responsibilities will be reduced?",
    type: "multiple",
    note: "You will receive partial credit for each correct selection.",
    options: [
      { label: "A", text: "Updating server operating systems" },
      { label: "B", text: "Replacing failed server hardware" },
      { label: "C", text: "Backing up application data" },
      { label: "D", text: "Managing physical server security" },
      { label: "E", text: "Managing permissions to shared documents" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 10,
    question: "For each statement about hypervisors, select True or False.",
    type: "true_false",
    note: "You will receive partial credit for each correct selection.",
    statements: [
      { text: "Statement 1 about hypervisors", answer: "True" }, // Modify answer manually if needed
      { text: "Statement 2 about hypervisors", answer: "True" }, // Modify answer manually if needed
      { text: "Statement 3 about hypervisors", answer: "True" }, // Modify answer manually if needed
    ],
    answers: [],
    options: [],
  },
  {
    id: 11,
    question: "The fiber network connection between Building A and Building B is 550 meters. There is attenuation on the line. Which tool should you use to test this?",
    type: "single",
    options: [
      { label: "A", text: "Time-domain reflectometer (TDR)" },
      { label: "B", text: "Optical time-domain reflectometer (OTDR)" },
      { label: "C", text: "Multimeter" },
      { label: "D", text: "Toner" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 12,
    question: "Your home computer is having problems accessing the internet. You suspect that your internet router's DHCP service is not functioning, so you check your computer's IP address. Which address indicates that your router's DHCP service is NOT functioning?",
    type: "single",
    options: [
      { label: "A", text: "10.19.1.15" },
      { label: "B", text: "169.254.1.15" },
      { label: "C", text: "192.168.1.15" },
      { label: "D", text: "172.16.1.15" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 18,
    question: "You are studying for finals in the students lounge. When your laptop is connected to the wireless network, access to the internet is slow. When you connect to the network by using an Ethernet cable, you can no longer access the internet. You run the ipconfig /all command. The results are shown in the image. Evaluate the image and complete the statement by selecting the correct option from each drop-down list.",
    type: "multiple",
    note: "You will receive partial credit for each correct selection.",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 19,
    question: "Which physical network topology provides fault-tolerant communication by providing redundant communication paths?",
    type: "single",
    options: [
      { label: "A", text: "Mesh" },
      { label: "B", text: "Bus" },
      { label: "C", text: "Ring" },
      { label: "D", text: "Star" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 20,
    question: "What is an advantage of dynamic routing?",
    type: "single",
    options: [
      { label: "A", text: "It reduces broadcast traffic" },
      { label: "B", text: "It automatically maintains routing tables" },
      { label: "C", text: "It automatically enables DHCP" },
      { label: "D", text: "It limits traffic derived from routing protocols" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 21,
    question: "You are a network administrator at a small business. An employee is not able to access any website. No other employees are having this problem. All computers are on the same intranet. You need to troubleshoot the problem. Which three actions should you complete?",
    type: "multiple",
    options: [
      { label: "A", text: "Check the employee's network adapter to verify that it is working" },
      { label: "B", text: "Determine whether the employee's computer has a valid IP address" },
      { label: "C", text: "Contact the internet service provider" },
      { label: "D", text: "Check to see if the router is working properly" },
      { label: "E", text: "Ensure that the router has a connection to the internet" },
      { label: "F", text: "Check the DNS settings on the employee's computer" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 22,
    question: "On a Windows computer, which utility should you use to determine whether your Domain Name System (DNS) service is properly resolving fully qualified domain names (FQDNs) to IP addresses?",
    type: "single",
    options: [
      { label: "A", text: "nslookup" },
      { label: "B", text: "netstat" },
      { label: "C", text: "nbtstat" },
      { label: "D", text: "ipconfig" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 23,
    question: "On a wireless router, what is an SSID?",
    type: "single",
    options: [
      { label: "A", text: "A WAN encryption protocol" },
      { label: "B", text: "The broadcast ID" },
      { label: "C", text: "The default communication protocol" },
      { label: "D", text: "The default administrator account" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 24,
    question: "You work for a small office that has 15 computers. Your local ISP provides you with one public IP address. You need to enable internet access for all 15 computers. Which routing function should you enable?",
    type: "single",
    options: [
      { label: "A", text: "RIP" },
      { label: "B", text: "Static routing" },
      { label: "C", text: "NAT" },
      { label: "D", text: "Port forwarding (PAT)" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 25,
    question: "What is a reason to incorporate VLANs into a network?",
    type: "single",
    options: [
      { label: "A", text: "To reduce the number of broadcast domains" },
      { label: "B", text: "To increase the number of available IP addresses" },
      { label: "C", text: "To reduce the number of nodes in a broadcast domain" },
      { label: "D", text: "To increase the number of available Media Access Control (MAC) address" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 26,
    question: "What are two characteristics of a mesh network topology?",
    type: "multiple",
    options: [
      { label: "A", text: "It works best for networks with a large number of nodes" },
      { label: "B", text: "It requires less cabling than either a star or ring topology" },
      { label: "C", text: "It is fault tolerant because of redundant connections" },
      { label: "D", text: "Every node connects every other node on the network" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 27,
    question: "In which range are IPv4 multicast addresses?",
    type: "single",
    options: [
      { label: "A", text: "From 224.0.0.0 to 239.255.255.255" },
      { label: "B", text: "From 127.0.0.0 to 127.255.255.255" },
      { label: "C", text: "From 172.16.0.0 to 172.31.255.255" },
      { label: "D", text: "From 192.168.0.0 to 192.168.255.255" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 28,
    question: "What is the primary purpose of a perimeter network?",
    type: "single",
    options: [
      { label: "A", text: "To provide a buffer area between a private intranet and the public internet" },
      { label: "B", text: "To monitor traffic between routed subnets in a private LAN" },
      { label: "C", text: "To act as a hidden location in which to deploy network clients" },
      { label: "D", text: "To act as a secure location for deploying highly sensitive network servers" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 29,
    question: "A computer is connected to a switch through a network patch panel by using copper cable. The computer is getting lower-than-expected data speeds. Which two actions should you perform to identify the issue?",
    type: "multiple",
    note: "You will receive partial credit for each correct selection.",
    options: [
      { label: "A", text: "Tone the line from Unit A to Unit B" },
      { label: "B", text: "Search for broken wires in the cable by using a cable tester" },
      { label: "C", text: "Use an optical time-domain reflectometer (OTDR) to test the line" },
      { label: "D", text: "Test the data speed of the cable" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 30,
    question: "What is a justification for using STP cable instead of UTP cable to wire a network expansion?",
    type: "single",
    options: [
      { label: "A", text: "You are routing cables through an area with high external interference" },
      { label: "B", text: "You need to reduce attenuation" },
      { label: "C", text: "You need the cable to be as light and flexible as possible" },
      { label: "D", text: "You want to minimize the costs relating to the new installation" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 31,
    question: "Complete the sentences by selecting the correct option from each drop-down list.",
    type: "multiple",
    note: "You will receive partial credit for each correct selection.",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 32,
    question: "In Linux, which command-line tool should you use to list a host's active incoming connections?",
    type: "single",
    options: [
      { label: "A", text: "host" },
      { label: "B", text: "ip addr" },
      { label: "C", text: "dig" },
      { label: "D", text: "netstat" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 33,
    question: "What are two characteristics of VLANs?",
    type: "multiple",
    options: [
      { label: "A", text: "VLANs act as though they are on the same LAN regardless of physical location" },
      { label: "B", text: "A VLAN compartmentalizes a network and isolates traffic" },
      { label: "C", text: "A single switch can service only a single VLAN" },
      { label: "D", text: "A VLAN can logically address packets by using IP" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 34,
    question: "You are trying to access a music-sharing service on the internet. The service is located at the IP address 173.194.75.105. You experience problems connecting. You run a trace route to the server and receive the output shown in the image. Evaluate the image and complete the statements by selecting the correct options from the drop-down lists.",
    type: "multiple",
    note: "You will receive partial credit for each correct selection.",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 35,
    question: "Which type of port supports VLAN traffic between two switches?",
    type: "single",
    options: [
      { label: "A", text: "LAN port" },
      { label: "B", text: "Virtual port" },
      { label: "C", text: "WAN port" },
      { label: "D", text: "Trunk port" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 36,
    question: "Which option represents an IPv6 loopback address?",
    type: "single",
    options: [
      { label: "A", text: "FF00::127" },
      { label: "B", text: "FE80::127" },
      { label: "C", text: ":1" },
      { label: "D", text: "::1" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 37,
    question: "What happens when a client's DHCP-issued address expires?",
    type: "single",
    options: [
      { label: "A", text: "The client generates a new address valid to the subnet and requests approval from the DHCP server" },
      { label: "B", text: "The client disconnects from the network" },
      { label: "C", text: "The client continues to use the address until it is notified to stop" },
      { label: "D", text: "The client attempts to renew its lease on the address" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 38,
    question: "Move each VPN term from the list on the left to the correct definition on the right.",
    type: "multiple",
    note: "You will receive partial credit for each correct answer.",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 39,
    question: "Move the appropriate protocols from the list on the left to the correct descriptions on the right. You may use each protocol once or not at all.",
    type: "multiple",
    note: "You will receive partial credit for each correct answer.",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 40,
    question: "You ping a server by using the fully qualified domain name (FQDN) and do not receive a response. You then ping the same server by using its IP address and receive a response. Why do you receive a response on the second attempt but not on the first attempt?",
    type: "single",
    options: [
      { label: "A", text: "The DHCP server is offline" },
      { label: "B", text: "The DNS is not resolving" },
      { label: "C", text: "NSLOOKUP is stopped" },
      { label: "D", text: "PING is improperly configured" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 41,
    question: "One reason to incorporate VLANs in a network is to:",
    type: "single",
    options: [
      { label: "A", text: "reduce the number of broadcast domains" },
      { label: "B", text: "reduce the number of nodes in a broadcast domain" },
      { label: "C", text: "increase the number of available Media Access Control (MAC) addresses" },
      { label: "D", text: "increase the number of available IP addresses" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 42,
    question: "Which of the following types of attacks can be used to gain credentials by setting up rogue APs with identical corporate SSIDs?",
    type: "single",
    options: [
      { label: "A", text: "VLAN hopping" },
      { label: "B", text: "Evil twin" },
      { label: "C", text: "DNS poisoning" },
      { label: "D", text: "Social engineering" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 43,
    question: "A fully functional WLAN is deployed in a campus network using the following script. [script shown in image] Which part of the script can a network administrator re-use to assign a different default role to users when they connect to the same SSID in a second building?",
    type: "single",
    options: [
      { label: "A", text: "server group and ssid profile" },
      { label: "B", text: "server group and VAP profile" },
      { label: "C", text: "server group, aaa profile, and ssid profile" },
      { label: "D", text: "server group and VAP" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 44,
    question: "Your school network has multiple routers. Student in one of the dorms report that they cannot connect to the email server. You verify that email server is operational. You suspect that the router on the subnet is causing the problem. Which two action should you perform?",
    type: "multiple",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 45,
    question: "For each statement about wide area network (WAN), select True or False.",
    type: "true_false",
    note: "You will receive partial credit for each correct selection.",
    statements: [
      { text: "Statement 1 about WAN", answer: "True" }, // Modify answer manually if needed
      { text: "Statement 2 about WAN", answer: "True" }, // Modify answer manually if needed
      { text: "Statement 3 about WAN", answer: "True" }, // Modify answer manually if needed
    ],
    answers: [],
    options: [],
  },
  {
    id: 46,
    question: "Complete the sentence by Selecting the correct option from the drop-down list. The command-line tool used in linux to list a host's active incoming connections is",
    type: "single",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 47,
    question: "An organization needs to move its infrastructure completely off-premise. Where should they locate their data center?",
    type: "single",
    options: [
      { label: "A", text: "A virtual machine" },
      { label: "B", text: "A hybrid cloud" },
      { label: "C", text: "A public cloud" },
      { label: "D", text: "A private cloud" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 48,
    question: "When a client's DHCP-issued address expires, the client will:",
    type: "single",
    options: [
      { label: "A", text: "Continue to use the address until it is notified to stop" },
      { label: "B", text: "Generate a new address valid to the subnet and request approval from dhcp server" },
      { label: "C", text: "Disconnect from the network" },
      { label: "D", text: "Attempt to renew its lease on the address" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 49,
    question: "Which of these is an application layer protocol?",
    type: "single",
    options: [
      { label: "A", text: "TCP" },
      { label: "B", text: "FTP" },
      { label: "C", text: "IP" },
      { label: "D", text: "UDP" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 50,
    question: "The top-level domain of www.adventureworks.com is:",
    type: "single",
    options: [
      { label: "A", text: "www" },
      { label: "B", text: "adventureworks" },
      { label: "C", text: "adventureworks.com" },
      { label: "D", text: "com" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 51,
    question: "At what layer in the OSI model are hardware addresses referenced?",
    type: "single",
    options: [
      { label: "A", text: "Network" },
      { label: "B", text: "Application" },
      { label: "C", text: "Data link" },
      { label: "D", text: "Physical" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 52,
    question: "The default port used for telnet is:",
    type: "single",
    options: [
      { label: "A", text: "23" },
      { label: "B", text: "25" },
      { label: "C", text: "80" },
      { label: "D", text: "8080" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 53,
    question: "When a client's DHCP-issued address expires, the client will:",
    type: "single",
    options: [
      { label: "A", text: "Select a new address and request approval from the DHCP server" },
      { label: "B", text: "Require manual configuration with a static IP address" },
      { label: "C", text: "Attempt to obtain a new address by broadcasting" },
      { label: "D", text: "Continue to use the address until it is notified to stop" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 54,
    question: "You ping a server by using fully qualified domain name (FQDN) and do not receive a response. You then ping the same server by using its IP address and receive a response. Why do you receive a response on the second attempt but not on the first attempt?",
    type: "single",
    options: [
      { label: "A", text: "PING is improperly configured" },
      { label: "B", text: "The DNS is not resolving" },
      { label: "C", text: "The DHCP server is offline" },
      { label: "D", text: "NSLOOKUP is stopped" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 55,
    question: "A Media Access Control (MAC) address identifies a/an:",
    type: "single",
    options: [
      { label: "A", text: "UPnP device" },
      { label: "B", text: "Local broadcast domain" },
      { label: "C", text: "Network interface card (NIC)" },
      { label: "D", text: "Local area network (LAN)" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 56,
    question: "A company wants to create a mobile app that allows users to stream slow-motion video clips on their mobile devices. Currently, the app captures video clips and uploads the video clips in raw format into an Amazon S3 bucket. The app retrieves these video clips directly from the S3 bucket. However the videos are large in their raw format. Users are experiencing issues with buffering and playback on mobile devices. The company wants to implement solutions to maximize the performance and scalability of the app while minimizing operational overhead. Which combination of solutions will meet these requirements? (Select TWO.)",
    type: "multiple",
    options: [
      { label: "A", text: "Deploy Amazon CloudFront for content delivery and caching" },
      { label: "B", text: "Use AWS DataSync to replicate the video files across AWS Regions in other S3 buckets" },
      { label: "C", text: "Use Amazon Elastic Transcoder to convert the video files to more appropriate formats" },
      { label: "D", text: "Deploy an Auto Scaling group of Amazon EC2 instances in Local Zones for content delivery and caching" },
      { label: "E", text: "Deploy an Auto Scaling group of Amazon EC2 instances to convert the video files to more appropriate formats" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 57,
    question: "An engineer is configuring a dedicated SSID for onboarding devices. Which SSID type accomplishes this configuration?",
    type: "single",
    options: [
      { label: "A", text: "Hidden" },
      { label: "B", text: "Guest" },
      { label: "C", text: "Dual" },
      { label: "D", text: "broadcast" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 58,
    question: "An engineer is configuring posture assessment for their network access control and needs to use an agent that supports using service conditions as conditions for the assessment. The agent should be run as a background process to avoid user interruption but when it is run. the user can see it. What is the problem?",
    type: "single",
    options: [
      { label: "A", text: "The engineer is using the 'Anyconnect' posture agent but should be using the 'Stealth Anyconnect posture agent" },
      { label: "B", text: "The posture module was deployed using the headend instead of installing it with SCCM" },
      { label: "C", text: "The user was in need of remediation so the agent appeared in the notifications" },
      { label: "D", text: "The proper permissions were not given to the temporal agent to conduct the assessment" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 59,
    question: "An engineer is creating a new authorization policy to give the endpoints access to VLAN 310 upon successful authentication. The administrator tests the 802.1X authentication for the endpoint and sees that it is authenticating successfully. What must be done to ensure that the endpoint is placed into the correct VLAN?",
    type: "single",
    options: [
      { label: "A", text: "Configure the switchport access vlan 310 command on the switch port" },
      { label: "B", text: "Ensure that the security group is not preventing the endpoint from being in VLAN 310" },
      { label: "C", text: "Add VLAN 310 in the common tasks of the authorization profile" },
      { label: "D", text: "Ensure that the endpoint is using The correct policy set" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 60,
    question: "An administrator is manually adding a device to a Cisco ISE identity group to ensure that it is able to access the network when needed without authentication. Upon testing, the administrator notices that the device never hits the correct authorization policy line using the condition EndPoints LogicalProfile EQUALS static_list. Why is this occurring?",
    type: "single",
    options: [
      { label: "A", text: "The dynamic logical profile is overriding the statically assigned profile" },
      { label: "B", text: "The device is changing identity groups after profiling instead of remaining static" },
      { label: "C", text: "The logical profile is being statically assigned instead of the identity group" },
      { label: "D", text: "The identity group is being assigned instead of the logical profile" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 61,
    question: "An engineer is configuring a client but cannot authenticate to Cisco ISE. During troubleshooting, the show authentication sessions command was issued to display the authentication status of each port. Which command gives additional information to help identify the problem with the authentication?",
    type: "single",
    options: [
      { label: "A", text: "show authentication sessions" },
      { label: "B", text: "show authentication sessions Interface Gil/0/1 output" },
      { label: "C", text: "show authentication sessions interface Gil/0/1 details" },
      { label: "D", text: "show authentication sessions output" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 62,
    question: "Which of these addresses is a multicast address?",
    type: "single",
    options: [
      { label: "A", text: "127.0.0.1" },
      { label: "B", text: "169.254.0.1" },
      { label: "C", text: "192.168.0.1" },
      { label: "D", text: "224.0.0.1" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 63,
    question: "Which of the following uses pointer records and A records?",
    type: "single",
    options: [
      { label: "A", text: "IDS" },
      { label: "B", text: "DNS Server" },
      { label: "C", text: "NAT Server" },
      { label: "D", text: "IPS" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 64,
    question: "The ipconfig command will:",
    type: "single",
    options: [
      { label: "A", text: "Configure routers" },
      { label: "B", text: "Display a client's address" },
      { label: "C", text: "Display a client's broadcast mode" },
      { label: "D", text: "Configure DHCP clients" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 65,
    question: "Which kind of API that is used with Cisco DNA Center provisions SSIDs, QoS policies, and update software versions on switches?",
    type: "single",
    options: [
      { label: "A", text: "Integration" },
      { label: "B", text: "Intent" },
      { label: "C", text: "Event" },
      { label: "D", text: "Multivendor" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 66,
    question: "A user reports that she cannot connect to network resources from a computer on the company network. The user was able to connect to the network resources yesterday. You verify that the user's computer is properly physically connected to the network. You discover that the computer's IP address is 169.254.48.97. You need to restore access to network resources. What should you do next?",
    type: "single",
    options: [
      { label: "A", text: "Flush the cache on the DNS server" },
      { label: "B", text: "Reset the user's password on the server" },
      { label: "C", text: "Check your router's current routing tables" },
      { label: "D", text: "Verify that the DHCP service is available" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 67,
    question: "The host name of the fully qualified domain name (FQDN) mail.exchange.corp.nwtrader.com is:",
    type: "single",
    options: [
      { label: "A", text: "corp" },
      { label: "B", text: "com" },
      { label: "C", text: "nwtrader" },
      { label: "D", text: "exchange" },
      { label: "E", text: "mail" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 68,
    question: "To which IP configuration does the CIDR notation 192.168.1.1/25 refer?",
    type: "single",
    options: [
      { label: "A", text: "192.168.1.1 255.255.255.64" },
      { label: "B", text: "192.168.1.1 255.255.255.1" },
      { label: "C", text: "192.168.1.1 255.255.255.32" },
      { label: "D", text: "192.168.1.1 255.255.255.256" },
      { label: "E", text: "192.168.1.1 255.255.255.128" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 69,
    question: "Which command is used to verify that a server is connected to the network?",
    type: "single",
    options: [
      { label: "A", text: "IPCONFIG" },
      { label: "B", text: "ROUTE" },
      { label: "C", text: "PING" },
      { label: "D", text: "CHECK" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 70,
    question: "A node within a local area network (LAN) must have a network interface device and a:",
    type: "single",
    options: [
      { label: "A", text: "Network account" },
      { label: "B", text: "Table of all network nodes" },
      { label: "C", text: "Host address" },
      { label: "D", text: "Resource to share" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 71,
    question: "Which of the following is a Layer 2 WAN protocol?",
    type: "single",
    options: [
      { label: "A", text: "Point-to-Point Protocol (PPP)" },
      { label: "B", text: "Simple Network Management Protocol (SNMP)" },
      { label: "C", text: "Transmission Control Protocol (TCP)" },
      { label: "D", text: "Internet Protocol (IP)" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 72,
    question: "Which type of port is used to support VLAN traffic between two switches?",
    type: "single",
    options: [
      { label: "A", text: "Virtual port" },
      { label: "B", text: "WAN port" },
      { label: "C", text: "Trunk port" },
      { label: "D", text: "LAN port" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 73,
    question: "The protocol that maps IP addresses to a Media Access Control (MAC) address is:",
    type: "single",
    options: [
      { label: "A", text: "Internet Message Access Protocol (IMAP)" },
      { label: "B", text: "Dynamic Host Configuration Protocol (DHCP)" },
      { label: "C", text: "Routing Information Protocol (RIP)" },
      { label: "D", text: "User Datagram Protocol (UDP)" },
      { label: "E", text: "Address Resolution Protocol (ARP)" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 74,
    question: "Which of the following determines the media access method that is used in a network?",
    type: "single",
    options: [
      { label: "A", text: "Number of hosts connected to the network" },
      { label: "B", text: "Number of domain servers on the segment" },
      { label: "C", text: "Maximum speed of the media" },
      { label: "D", text: "Topology and protocols" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 75,
    question: "Which wireless authentication method provides the highest level of security?",
    type: "single",
    options: [
      { label: "A", text: "Wired Equivalency Privacy (WEP)" },
      { label: "B", text: "IEEE 802.11n" },
      { label: "C", text: "WI-FI Protected Access (WPA)" },
      { label: "D", text: "IEEE 802.11a" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 76,
    question: "The topology of a local area network (LAN) is defined by the:",
    type: "single",
    options: [
      { label: "A", text: "Number of devices to connect" },
      { label: "B", text: "Physical and logical characteristics" },
      { label: "C", text: "Distance between workstations" },
      { label: "D", text: "Type of cable being used" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 77,
    question: "The maximum throughput of an 802.11g network is:",
    type: "single",
    options: [
      { label: "A", text: "2.4 GHz" },
      { label: "B", text: "54 GHz" },
      { label: "C", text: "2.4 Mbps" },
      { label: "D", text: "54 Mbps" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 78,
    question: "Which two are published IEEE 802.11 wireless transmission standards? (Choose two.)",
    type: "multiple",
    options: [
      { label: "A", text: "802.1f" },
      { label: "B", text: "802.11g" },
      { label: "C", text: "802.11k" },
      { label: "D", text: "802.11m" },
      { label: "E", text: "802.11n" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 79,
    question: "What happens when an 802.11b node starts broadcasting within the range of an 802.11g access point?",
    type: "single",
    options: [
      { label: "A", text: "The access point will transmit, but the node will be unable to receive" },
      { label: "B", text: "A connection will be established" },
      { label: "C", text: "Both the node and the access point will be unable to transmit" },
      { label: "D", text: "The node will transmit, but the access point will be unable to receive" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 80,
    question: "Which technology provides the highest bit rate?",
    type: "single",
    options: [
      { label: "A", text: "T1" },
      { label: "B", text: "E1" },
      { label: "C", text: "DS3" },
      { label: "D", text: "ISDN" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 81,
    question: "A VPN is a/an:",
    type: "single",
    options: [
      { label: "A", text: "Encrypted connection across the Internet" },
      { label: "B", text: "Virtual network within your local area network (LAN)" },
      { label: "C", text: "Communication tunnel between VLANs" },
      { label: "D", text: "Personal network for your use only" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 82,
    question: "Which type of network covers the broadest area?",
    type: "single",
    options: [
      { label: "A", text: "WAN" },
      { label: "B", text: "CAN" },
      { label: "C", text: "LAN" },
      { label: "D", text: "PAN" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 83,
    question: "In local area network (LAN) topologies, the primary media access methods are: (Choose two.)",
    type: "multiple",
    options: [
      { label: "A", text: "Contention" },
      { label: "B", text: "Negotiation" },
      { label: "C", text: "Kerberos" },
      { label: "D", text: "Token passing" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 84,
    question: "In a physical star topology, the central device is referred to as a:",
    type: "single",
    options: [
      { label: "A", text: "Bridge" },
      { label: "B", text: "Server" },
      { label: "C", text: "Segmenter" },
      { label: "D", text: "Hub" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 85,
    question: "Which technology can you use to extend an internal network across shared or public networks?",
    type: "single",
    options: [
      { label: "A", text: "VLAN" },
      { label: "B", text: "Microsoft ASP.NET" },
      { label: "C", text: "Microsoft .NET Framework" },
      { label: "D", text: "VPN" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 86,
    question: "Which of the following uses a tunneling protocol?",
    type: "single",
    options: [
      { label: "A", text: "Internet" },
      { label: "B", text: "VPN" },
      { label: "C", text: "Extranet" },
      { label: "D", text: "VLAN" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 87,
    question: "A network that separates an organization's private network from a public network is a/an:",
    type: "single",
    options: [
      { label: "A", text: "Firewall" },
      { label: "B", text: "Extranet" },
      { label: "C", text: "Perimeter" },
      { label: "D", text: "Internet" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 88,
    question: "Which type of network is most vulnerable to intrusion?",
    type: "single",
    options: [
      { label: "A", text: "Dial-up" },
      { label: "B", text: "Wireless" },
      { label: "C", text: "Broadband" },
      { label: "D", text: "Leased line" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 89,
    question: "Attenuation in a wireless network signal is a result of:",
    type: "single",
    options: [
      { label: "A", text: "Number of wireless nodes connected" },
      { label: "B", text: "Distance from the access point" },
      { label: "C", text: "Interference from cellular phones" },
      { label: "D", text: "Encryption of the signal" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 90,
    question: "Two companies want to share data by using the Internet. Which type of network provides the solution?",
    type: "single",
    options: [
      { label: "A", text: "Ethernet" },
      { label: "B", text: "Intranet" },
      { label: "C", text: "Extranet" },
      { label: "D", text: "Perimeter" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 91,
    question: "VPNs are implemented to provide:",
    type: "single",
    options: [
      { label: "A", text: "A secure connection within a private network" },
      { label: "B", text: "A secure connection through public networks" },
      { label: "C", text: "Additional encryption by using IPSec" },
      { label: "D", text: "Additional security for selected computers" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 92,
    question: "If an 802.11g Internet connection has connectivity problems, what may be the cause?",
    type: "single",
    options: [
      { label: "A", text: "A cordless phone" },
      { label: "B", text: "A cellular phone" },
      { label: "C", text: "Incandescent lights" },
      { label: "D", text: "Electromagnetic interference (EMI)" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 93,
    question: "Which of these factors has the biggest impact on data transmission speed in a wireless network?",
    type: "single",
    options: [
      { label: "A", text: "The access method used for the network" },
      { label: "B", text: "The transmission standard of the equipment used" },
      { label: "C", text: "The use of strong encryption for transmissions" },
      { label: "D", text: "The transmission wattage rating used on the NIC" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 94,
    question: "Which protocol operates at the transport layer of the TCP model?",
    type: "single",
    options: [
      { label: "A", text: "UDP" },
      { label: "B", text: "FTP" },
      { label: "C", text: "IP" },
      { label: "D", text: "IGMP" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 95,
    question: "Remote users need to connect to your network through a server running Windows Server that is deployed on your perimeter network. For each statement, select True or False.",
    type: "true_false",
    note: "You will receive partial credit for each correct selection.",
    statements: [
      { text: "You can use a VPN to enable users to make a secure connection to your network through the internet", answer: "True" }, // Modify answer manually if needed
      { text: "If users connect to the internet through dial-up connections the server must also connect through a dial-up connection", answer: "True" }, // Modify answer manually if needed
      { text: "You can use RAS Gateway to configure a VPN connection for Windows 10 clients that is achieved whenever the client connects to the internet", answer: "True" }, // Modify answer manually if needed
    ],
    answers: [],
    options: [],
  },
  {
    id: 96,
    question: "You are a network administrator in the finance area complaining about slow data speeds while accessing the company network. One of the computers in the department shows the connection is only 100Mbps, but the line should be 1000Mbps. Which network hardware tool should you use to determine whether a cable is capable of 1000Mbps full-duplex transmission?",
    type: "single",
    options: [
      { label: "A", text: "Cable tester" },
      { label: "B", text: "Toner" },
      { label: "C", text: "Multimeter" },
      { label: "D", text: "Time-domain reflectometer (TDR)" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 97,
    question: "Which type of network covers the broadest area?",
    type: "single",
    options: [
      { label: "A", text: "CAN" },
      { label: "B", text: "LAN" },
      { label: "C", text: "PAN" },
      { label: "D", text: "WAN" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 98,
    question: "For each statement about the Internet of Things (IoT), select True or False.",
    type: "true_false",
    note: "You will receive partial credit for each correct selection.",
    statements: [
      { text: "IoT devices have IP address", answer: "True" }, // Modify answer manually if needed
      { text: "IoT devices require human interaction to communicate with a network", answer: "True" }, // Modify answer manually if needed
      { text: "A smart thermostat and a lightbulb that can be switched on by using an app are examples of IoT devices", answer: "True" }, // Modify answer manually if needed
    ],
    answers: [],
    options: [],
  },
  {
    id: 99,
    question: "For each statement about using a Type 2 hypervisor and virtual machines, select True or False.",
    type: "true_false",
    note: "You will receive partial credit for each correct selection.",
    statements: [
      { text: "If you reboot one virtual machine, all the other virtual machines on the server reboot at the same time", answer: "True" }, // Modify answer manually if needed
      { text: "You can reboot the host machine without it having any effect on the other virtual machines on the same physical server", answer: "True" }, // Modify answer manually if needed
      { text: "If you need to reboot one virtual machine, you must first reboot the physical server", answer: "True" }, // Modify answer manually if needed
    ],
    answers: [],
    options: [],
  },
  {
    id: 100,
    question: "You are a network support technician at an internet service provider (ISP). You receive a call from a customer indicating that they cannot access the internet. You need to troubleshoot the problem. Which three actions should you complete first?",
    type: "multiple",
    options: [
      { label: "A", text: "Ask the customer to check for the appropriate status lights on the modem" },
      { label: "B", text: "Ask the customer to delete the hosts file" },
      { label: "C", text: "Perform a line test to check connectivity between the ISP and the customer" },
      { label: "D", text: "Ask the customer to update the operating system to the latest version" },
      { label: "E", text: "Log in to the customer's computer remotely" },
      { label: "F", text: "Ask the customer to restart the modem" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 101,
    question: "In addition to switching, which feature is specific to a multilayer switch?",
    type: "single",
    options: [
      { label: "A", text: "Translates between various network protocols" },
      { label: "B", text: "Manages addresses for client computers" },
      { label: "C", text: "Bridges traffic between different physical topologies" },
      { label: "D", text: "Provides Layer 3 routing functions" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 102,
    question: "You need to run four Ethernet network drops on your company's manufacturing floor. Each drop is approximately 125 feet/38 meters. Each drop passes near heavy manufacturing equipment. You need to ensure that interference is reduced. Which cable type should you use?",
    type: "single",
    options: [
      { label: "A", text: "UTP Cat6" },
      { label: "B", text: "STP Cat5e" },
      { label: "C", text: "Cat3" },
      { label: "D", text: "UTP Cat5e" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 103,
    question: "What are two characteristics of switches? (Choose 2)",
    type: "multiple",
    options: [
      { label: "A", text: "Switches identify the intended destination of the data that they receive" },
      { label: "B", text: "Switches send each frame to all of the computers that are connected to them" },
      { label: "C", text: "Switches are capable of sending and receiving data at the same time" },
      { label: "D", text: "Switches cause more data collisions than hubs" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 104,
    question: "What is a feature of the Teredo tunneling protocol?",
    type: "single",
    options: [
      { label: "A", text: "It dynamically allocates IPv6 addresses" },
      { label: "B", text: "It provides VPN security" },
      { label: "C", text: "It translates IPv4 traffic to IPv6 traffic" },
      { label: "D", text: "It enables the passing of IPv6 traffic through IPv4 networks" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 105,
    question: "You are helping a friend set up a public-facing web server in their home office. Your friend wants to protect the internal network from intrusion. What should you do?",
    type: "single",
    options: [
      { label: "A", text: "Deploy the web server in a perimeter network (also known as a DMZ)" },
      { label: "B", text: "Configure the firewall to block access on ports 80 and 443" },
      { label: "C", text: "Configure the web server to block access on ports 80 and 443" },
      { label: "D", text: "Set the IP address of the web server to be within the LAN" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 106,
    question: "You are setting up a network computer game. You need to open up ports on your firewall so your friends can join the network. Which command displays the ports that your computer is listening for?",
    type: "single",
    options: [
      { label: "A", text: "netstat" },
      { label: "B", text: "nbstat" },
      { label: "C", text: "ping" },
      { label: "D", text: "nslookup" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 107,
    question: "You are a network support technician. The company president reports that his wired network printer is not working. To test the line, you need to know where the jack is plugged into the patch panel. However, there are no labels. In the main distribution frame (MDF), you discover a bundle of 35 cables. Which tool should you use to isolate the correct cable?",
    type: "single",
    options: [
      { label: "A", text: "Multimeter" },
      { label: "B", text: "Toner" },
      { label: "C", text: "Time-domain reflectometer (TDR)" },
      { label: "D", text: "Cable tester" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 108,
    question: "What are two characteristics of a wired Ethernet network topology? (Choose 2)",
    type: "multiple",
    options: [
      { label: "A", text: "It can negotiate different transmission speeds" },
      { label: "B", text: "It uses tokens to avoid collisions on the network" },
      { label: "C", text: "It uses network adapters that are physically encoded with IP addresses" },
      { label: "D", text: "It is typically employed by using twisted pair or fiber optic media" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 109,
    question: "Which hardware is required to properly connect a LAN to a WAN?",
    type: "single",
    options: [
      { label: "A", text: "Stand-alone access point" },
      { label: "B", text: "Transceiver" },
      { label: "C", text: "Layer 2 switch" },
      { label: "D", text: "Router" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 110,
    question: "What is the top-level domain of ftp.susnetweb.org?",
    type: "single",
    options: [
      { label: "A", text: "ftp" },
      { label: "B", text: "susnetweb" },
      { label: "C", text: "susnetweb.org" },
      { label: "D", text: "org" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 112,
    question: "Which wireless authentication method provides the highest level of security?",
    type: "single",
    options: [
      { label: "A", text: "Wi-Fi Protected Access (WPA)" },
      { label: "B", text: "Wi-Fi Protected Access 2 (WPA2)" },
      { label: "C", text: "Wired Equivalent Privacy (WEP)" },
      { label: "D", text: "WPS Authentication" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 113,
    question: "What does a VPN provide?",
    type: "single",
    options: [
      { label: "A", text: "Additional encryption by using IPSec" },
      { label: "B", text: "Additional security for selected computers" },
      { label: "C", text: "A secure connection through public networks" },
      { label: "D", text: "A secure connection within a private network" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 114,
    question: "What are two purposes of the ping utility? (Choose 2)",
    type: "multiple",
    options: [
      { label: "A", text: "To resolve host names to IP addresses" },
      { label: "B", text: "To scan for open host firewall ports" },
      { label: "C", text: "To self-test a host's own network interface" },
      { label: "D", text: "To determine whether a host is reachable" },
      { label: "E", text: "To search for duplicate addresses" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 115,
    question: "What is an advantage of dynamic routing?",
    type: "single",
    options: [
      { label: "A", text: "It reduces broadcast traffic" },
      { label: "B", text: "It automatically maintains routing tables" },
      { label: "C", text: "It limits traffic derived from routing protocols" },
      { label: "D", text: "It automatically enables DHCP" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 116,
    question: "Move the appropriate TCP port numbers from the list on the left to the correct services on the right. You may use each port number once or not at all.",
    type: "multiple",
    note: "You will receive partial credit for each correct answer.",
    options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 117,
    question: "Which protocol does the ping utility use to test communication with a remote host?",
    type: "single",
    options: [
      { label: "A", text: "ICMP" },
      { label: "B", text: "HTTP" },
      { label: "C", text: "BOOTP" },
      { label: "D", text: "OSPF" },
      { label: "E", text: "SNMP" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 118,
    question: "Which network topology is the internet designed around?",
    type: "single",
    options: [
      { label: "A", text: "Bus" },
      { label: "B", text: "Ring" },
      { label: "C", text: "Mesh" },
      { label: "D", text: "Star" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 119,
    question: "Which wireless encryption type is the most susceptible to interception and decryption?",
    type: "single",
    options: [
      { label: "A", text: "WPA2" },
      { label: "B", text: "WPA-AES" },
      { label: "C", text: "WEP" },
      { label: "D", text: "WPA-PSK" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 120,
    question: "You need to install a network cable between two locations that are approximately six miles/ten kilometers from each other. Which cable should you use?",
    type: "single",
    options: [
      { label: "A", text: "Multi-mode fiber" },
      { label: "B", text: "Single-mode fiber" },
      { label: "C", text: "Cat5e" },
      { label: "D", text: "Cat6" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 121,
    question: "You need to configure a router to enable internal clients with private IPv4 addresses to accesses the internet and navigate to multiple websites. What should you configure?",
    type: "single",
    options: [
      { label: "A", text: "NAT" },
      { label: "B", text: "WAP" },
      { label: "C", text: "DHCP" },
      { label: "D", text: "VPN" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 122,
    question: "Which network device interconnects computers in a workgroup, can be remotely configured, and provides the best throughput?",
    type: "single",
    options: [
      { label: "A", text: "Router" },
      { label: "B", text: "Managed switch" },
      { label: "C", text: "Hub" },
      { label: "D", text: "Unmanaged switch" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 123,
    question: "Your company's computers exchange data through a set of routed private Wi-Fi networks at a single geographic location. What type of network is this is an example of?",
    type: "single",
    options: [
      { label: "A", text: "Internet" },
      { label: "B", text: "Intranet" },
      { label: "C", text: "Perimeter" },
      { label: "D", text: "Extranet" },
    ],
    answers: [], // Note: Need answers from user manually
  },
  {
    id: 124,
    question: "For each statement about switches, select True or False.",
    type: "true_false",
    note: "You will receive partial credit for each correct selection.",
    statements: [
      { text: "A switch sends unicast frames to only one destination port", answer: "True" }, // Modify answer manually if needed
      { text: "A switch floods ports if it does not know where to send a frame", answer: "True" }, // Modify answer manually if needed
      { text: "A switch sends broadcast frames to only the uplink port", answer: "True" }, // Modify answer manually if needed
    ],
    answers: [],
    options: [],
  },
  {
    id: 125,
    question: "What does each IPv4 address consist of?",
    type: "single",
    options: [
      { label: "A", text: "A DNS record and a default route" },
      { label: "B", text: "A 64-bit binary number divided into octets" },
      { label: "C", text: "A network ID and a host ID" },
      { label: "D", text: "A MAC address and a data-link layer address" },
    ],
    answers: [], // Note: Need answers from user manually
  },
];

export const NETWORKING_LATIHAN_1 = ITS_NETWORKING_QUESTIONS.filter(q => q.id <= Math.floor(ITS_NETWORKING_QUESTIONS.length / 2));
export const NETWORKING_LATIHAN_2 = ITS_NETWORKING_QUESTIONS.filter(q => q.id > Math.floor(ITS_NETWORKING_QUESTIONS.length / 2));
