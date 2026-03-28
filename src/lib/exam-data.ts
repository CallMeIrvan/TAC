// ============================================================
//  TAC TRYOUT ENGINE — Exam Data
//  Sertifikasi: ITS-DATABASE
//  Latihan 1: Q1–Q45  |  Latihan 2: Q46–Q73
// ============================================================

export type QuestionType = "single" | "multiple" | "true_false" | "drag_and_drop";

export interface ExamOption {
  label: string;
  text: string;
}

export interface TrueFalseStatement {
  text: string;
  /** The correct answer for this statement */
  answer: "True" | "False";
}

export interface ExamQuestion {
  id: number;
  question: string;
  imageUrl?: string;
  type: QuestionType;
  options: ExamOption[];
  /** correct answer label(s), e.g. ["B"] or ["A","F"] */
  answers: string[];
  /** optional note shown below the question */
  note?: string;
  /** For true_false type: list of statements each with a True/False answer */
  statements?: TrueFalseStatement[];
}

// ─── All 73 questions ────────────────────────────────────────
const ALL_QUESTIONS: ExamQuestion[] = [
  // ── Q1: True/False ────────────────────────────────────────
  {
    id: 1,
    question:
      "You are structuring a table relational database. For each statement, select True or False.",
    note: "You will receive partial credit for each correct selection.",
    type: "true_false",
    options: [],
    answers: [],
    statements: [
      { text: "Each value in a field in a table must be unique", answer: "False" },
      { text: "Each row in a table must be unique", answer: "True" },
      { text: "Each column name in a table must be unique", answer: "True" },
    ],
  },
  {
    id: 2,
    question:
      "You have a table named Product with columns productDescription and ProductCategory. You need to change the ProductCategory value for all spoons in the Product to 43. Which statement should you use?",
    type: "single",
    options: [
      { label: "A", text: "UPDATE Product WHERE ProductDescription = 'spoon' SET ProductCategory = 43" },
      { label: "B", text: "UPDATE Product SET ProductCategory = 43 WHERE ProductDescription = 'spoon'" },
      { label: "C", text: "UPDATE Product WHERE ProductDescription = 'spoon' TO ProductCategory = 43" },
      { label: "D", text: "UPDATE Product TO ProductCategory = 43 WHERE ProductDescription = 'spoon'" },
    ],
    answers: ["B"],
  },
  {
    id: 3,
    question:
      "You accept an IT internship at a local charity. You need to delete all records with the GivenName 'Tia' from the Volunteer table. Which SQL statement should you use?",
    type: "single",
    options: [
      { label: "A", text: "DELETE FROM Volunteer WHERE GivenName == 'Tia'" },
      { label: "B", text: "DELETE FROM Volunteer WHERE GivenName = 'Tia'" },
      { label: "C", text: "DELETE FROM Volunteer WHERE GivenName EQUALS 'Tia'" },
      { label: "D", text: "DELETE FROM Volunteer WHERE GivenName IS 'Tia'" },
    ],
    answers: ["B"],
  },
  {
    id: 4,
    question:
      "You delete a row in a table named Order. The corresponding row in the OrderItem table are automatically deleted. This process is an example of a/an:",
    type: "single",
    options: [
      { label: "A", text: "Domino delete" },
      { label: "B", text: "Waterfall delete" },
      { label: "C", text: "Functional delete" },
      { label: "D", text: "Cascade delete" },
      { label: "E", text: "Inherited delete" },
    ],
    answers: ["D"],
  },
  {
    id: 5,
    question:
      "A table named PlayerStat contains: PlayerID (INT, not null), TeamID (INT, not null), GameDate (DATETIME, nullable), Point (INT, nullable). You need to display the total number of points per player on the team whose ID is 1. Which SQL query achieves this?",
    type: "single",
    options: [
      { label: "A", text: "SELECT PlayerID, SUM(Point) FROM PlayerStat WHERE TeamID = 1 GROUP BY PlayerID" },
      { label: "B", text: "SELECT PlayerID, COUNT(Point) FROM PlayerStat WHERE TeamID = 1" },
      { label: "C", text: "SELECT PlayerID, SUM(Point) FROM PlayerStat GROUP BY PlayerID" },
      { label: "D", text: "SELECT PlayerID, SUM(Point) FROM PlayerStat HAVING TeamID = 1" },
    ],
    answers: ["A"],
  },
  {
    id: 6,
    question:
      "You create a query: SELECT Title FROM Movie WHERE Title = 'Sample Movie' ORDER BY Title GROUP BY Title HAVING COUNT(*) = 1. It returns a syntax error. You need to modify the query to run without error. What should you do?",
    type: "single",
    options: [
      { label: "A", text: "Remove the GROUP BY clause" },
      { label: "B", text: "Change the HAVING clause to HAVING COUNT(title) = 1" },
      { label: "C", text: "Remove the ORDER BY clause" },
      { label: "D", text: "Change the HAVING clause to HAVING COUNT(1) = 1" },
    ],
    answers: ["C"],
  },
  {
    id: 7,
    question: "Which statement creates an index?",
    type: "single",
    options: [
      { label: "A", text: "CREATE TABLE Employee (EmployeeID INTEGER DISTINCT)" },
      { label: "B", text: "CREATE TABLE Employee (EmployeeID INTEGER INDEX)" },
      { label: "C", text: "CREATE TABLE Employee (EmployeeID INTEGER PRIMARY KEY)" },
      { label: "D", text: "CREATE TABLE Employee (EmployeeID INTEGER NULL)" },
    ],
    answers: ["C"],
  },
  {
    id: 8,
    question:
      "You have a Road table (RoadID INT NOT NULL, Distance INT NOT NULL) with rows (1234, 22) and (1384, 34). You execute: INSERT INTO Road VALUES (1234, 36). What is the result?",
    type: "single",
    options: [
      { label: "A", text: "A new row in table" },
      { label: "B", text: "A syntax error" },
      { label: "C", text: "An error stating that null values are not allowed" },
      { label: "D", text: "An error stating that duplicate ids are not allowed" },
    ],
    answers: ["D"],
  },
  {
    id: 9,
    question:
      "A stored procedure contains: SELECT 'Greetings' + Prefix + ' ' + Firstname FROM Person; The stored procedure returns all null values. You verify there is data in the Person table. What is likely the cause?",
    type: "single",
    options: [
      { label: "A", text: "You must specify the NULLIF keyword in the query" },
      { label: "B", text: "The plus (+) operator cannot be used to append character data" },
      { label: "C", text: "The Prefix or FirstName columns have null values" },
      { label: "D", text: "You must specify the JOIN keyword in the SELECT statement" },
    ],
    answers: ["C"],
  },
  {
    id: 10,
    question:
      "You are writing a SELECT statement to find every product whose name contains a specific character. Which keyword should you use in your WHERE clause?",
    type: "single",
    options: [
      { label: "A", text: "LIKE" },
      { label: "B", text: "IN" },
      { label: "C", text: "BETWEEN" },
      { label: "D", text: "FETCH" },
    ],
    answers: ["A"],
  },
  {
    id: 11,
    question:
      "Which feature does a relational database use to ensure that data entered into a column is valid?",
    type: "single",
    options: [
      { label: "A", text: "An attribute" },
      { label: "B", text: "A primary key" },
      { label: "C", text: "A constraint" },
      { label: "D", text: "An index" },
    ],
    answers: ["C"],
  },
  {
    id: 12,
    question:
      "The customers table has: ID, FirstName, Lastname, PhoneNumber, Extension (some are NULL). You need a query that returns lastname, phonenumber, and extension that are valid numbers, sorted by last name. Which clause is used to exclude NULLs from Extension?",
    type: "single",
    options: [
      { label: "A", text: "WHERE Extension IS NOT NULL ORDER BY LastName" },
      { label: "B", text: "WHERE Extension != 0 ORDER BY LastName" },
      { label: "C", text: "WHERE Extension IS NULL ORDER BY LastName" },
      { label: "D", text: "HAVING Extension != NULL ORDER BY LastName" },
    ],
    answers: ["A"],
  },
  {
    id: 13,
    question:
      "You have a Product table with one million rows. You execute: SELECT ProductName, Price FROM Product WHERE Category = 'Science Books'. What will make this search more efficient?",
    type: "single",
    options: [
      { label: "A", text: "A clustered index on the ProductName column" },
      { label: "B", text: "A clustered index on the Price column" },
      { label: "C", text: "A non-clustered index on the Category column" },
      { label: "D", text: "A non-clustered index on the Price column" },
    ],
    answers: ["C"],
  },
  {
    id: 14,
    question:
      "You join a Customer table and an Order table on CustomerID. The query selects: All customers and their orders; Customers who have no orders. Which type of join do these results represent?",
    type: "single",
    options: [
      { label: "A", text: "Full join" },
      { label: "B", text: "Partial join" },
      { label: "C", text: "Inner join" },
      { label: "D", text: "Complete join" },
    ],
    answers: ["A"],
  },
  {
    id: 15,
    question:
      "You need a query from the students table that: (1) shows all students enrolled >= June 1 2020, (2) shows all students graduated in 2020, (3) sorted by most recent enrollment first. Which query should you use?",
    type: "single",
    options: [
      { label: "A", text: "SELECT * FROM student WHERE enrollment_date >= '2020-06-01' OR academic_status ='graduated' AND graduation_date >= '2020-01-01' ORDER BY enrollment_date DESC" },
      { label: "B", text: "SELECT * FROM student WHERE enrollment_date >= '2020-06-01' AND academic_status ='graduated' AND graduation_date >= '2020-01-01' ORDER BY enrollment_date ASC" },
      { label: "C", text: "SELECT * FROM student WHERE enrollment_date >= '2020-06-01' AND academic_status ='graduated' OR graduation_date >= '2020-01-01' ORDER BY enrollment_date" },
      { label: "D", text: "SELECT * FROM student WHERE enrollment_date >= '2020-06-01' OR academic_status ='graduated' OR graduation_date >= '2020-01-01' ORDER BY enrollment_date DESC" },
    ],
    answers: ["A"],
  },
  {
    id: 16,
    question: "Which statement should you use to remove a foreign key?",
    type: "single",
    options: [
      { label: "A", text: "DELETE TABLE" },
      { label: "B", text: "ALTER TABLE" },
      { label: "C", text: "ALTER FOREIGN KEY" },
      { label: "D", text: "DELETE FOREIGN KEY" },
    ],
    answers: ["B"],
  },
  {
    id: 17,
    question:
      "You have a Chapter table (ChapterID, City, Region, Country) and a Language table (LanguageID, LanguageName, Locale). You create a ChapterLanguage table to relate them. Which TWO columns should you use to create a composite primary key? (Choose 2)",
    type: "multiple",
    options: [
      { label: "A", text: "ChapterID" },
      { label: "B", text: "City" },
      { label: "C", text: "Region" },
      { label: "D", text: "LanguageName" },
      { label: "E", text: "Country" },
      { label: "F", text: "LanguageID" },
    ],
    answers: ["A", "F"],
  },
  {
    id: 18,
    question:
      "You write SQL statements that perform a long, complex query and send the result in an email. You want to manually call the code any time. Which database object can you use to store the code?",
    type: "single",
    options: [
      { label: "A", text: "Stored procedure" },
      { label: "B", text: "Function" },
      { label: "C", text: "Trigger" },
      { label: "D", text: "View" },
    ],
    answers: ["A"],
  },
  {
    id: 19,
    question:
      "The Products table contains item data. Which query will increase the price of item 1 by 6 percent?",
    type: "single",
    options: [
      { label: "A", text: "USE Products SET Price = Price * 1.06 WHERE ItemNumber = 1" },
      { label: "B", text: "SET Price = Price * 1.06 FROM Products WHERE ItemNumber = 1" },
      { label: "C", text: "ALTER Products SET Price = Price * 1.06 WHERE ItemNumber = 1" },
      { label: "D", text: "UPDATE Products SET Price = Price * 1.06 WHERE ItemNumber = 1" },
    ],
    answers: ["D"],
  },
  {
    id: 20,
    question:
      "You need to delete a database table. Which data definition language (DDL) keyword should you use?",
    type: "single",
    options: [
      { label: "A", text: "ALTER" },
      { label: "B", text: "DELETE" },
      { label: "C", text: "DROP" },
      { label: "D", text: "TRUNCATE" },
    ],
    answers: ["C"],
  },
  {
    id: 21,
    question:
      "You execute: SELECT EmployeeID, FirstName, DepartmentName FROM Employee, Department. This type of operation is called a/an:",
    type: "single",
    options: [
      { label: "A", text: "Intersection" },
      { label: "B", text: "Outer join" },
      { label: "C", text: "Cartesian product" },
      { label: "D", text: "Equi-join" },
    ],
    answers: ["C"],
  },
  {
    id: 22,
    question:
      "You need to normalize a database to first normal form (1NF). Which TWO requirements must you meet? (Choose 2)",
    type: "multiple",
    options: [
      { label: "A", text: "Exclude repeating groups" },
      { label: "B", text: "Exclude foreign keys" },
      { label: "C", text: "Exclude composite keys" },
      { label: "D", text: "Exclude duplicate rows" },
    ],
    answers: ["A", "D"],
  },
  {
    id: 23,
    question:
      "A database table stores school attendance: StudentName (string), GradeLevel (whole number), DaysAbsent (one decimal place). Which data types are correct?",
    type: "single",
    options: [
      { label: "A", text: "VARCHAR, INT, DECIMAL" },
      { label: "B", text: "VARCHAR, FLOAT, INT" },
      { label: "C", text: "CHAR, INT, DECIMAL" },
      { label: "D", text: "VARCHAR, INT, FLOAT" },
    ],
    answers: ["A"],
  },
  {
    id: 24,
    question:
      "Which statement deletes the rows where the employee's phone number is not entered?",
    type: "single",
    options: [
      { label: "A", text: "DELETE FROM employee WHERE phone = NULL" },
      { label: "B", text: "DELETE FROM employee WHERE phone IS NULL" },
      { label: "C", text: "DELETE FROM employee WHERE phone IS NOT NULL" },
      { label: "D", text: "DELETE FROM employee WHERE phone = NULLABLE" },
    ],
    answers: ["B"],
  },
  {
    id: 25,
    question:
      "You have a Customer table (CustomerId PRIMARY KEY, Firstname, DateJoined). You execute: SELECT CustomerID, FirstName, DateJoined FROM Customer. How are the rows organized in the result set?",
    type: "single",
    options: [
      { label: "A", text: "In chronological order by DateJoined" },
      { label: "B", text: "In the order in which the rows were inserted" },
      { label: "C", text: "In no predictable order" },
      { label: "D", text: "In alphabetical order by FirstName" },
    ],
    answers: ["C"],
  },
  {
    id: 26,
    question:
      "You need to remove a view named EmployeeView from your database. Which statement should you use?",
    type: "single",
    options: [
      { label: "A", text: "DROP VIEW EmployeeView" },
      { label: "B", text: "DELETE EmployeeView" },
      { label: "C", text: "DELETE View EmployeeView" },
      { label: "D", text: "DROP EmployeeView" },
    ],
    answers: ["A"],
  },
  {
    id: 27,
    question:
      "Which SQL statement will return the country and number of orders in each country where the number of orders is less than 50?",
    type: "single",
    options: [
      { label: "A", text: "SELECT COUNT(OrderId), Country FROM Orders HAVING COUNT(OrderId) < 50; GROUP BY Country" },
      { label: "B", text: "SELECT Country, OrderId FROM Orders GROUP BY Country WHERE COUNT(OrderId) < 50;" },
      { label: "C", text: "SELECT COUNT(OrderId), Country FROM Orders GROUP BY Country HAVING COUNT(OrderId) < 50;" },
      { label: "D", text: "SELECT Country, OrderId FROM Orders WHERE Count(OrderId) < 50; GROUP BY Country" },
    ],
    answers: ["C"],
  },
  {
    id: 28,
    question:
      "A table has ProductID and ProductCategory columns. Which database term describes the relationship where ProductCategory is determined by ProductID?",
    type: "single",
    options: [
      { label: "A", text: "Deterministic" },
      { label: "B", text: "Cohort" },
      { label: "C", text: "Compositional" },
      { label: "D", text: "Functionally dependent" },
      { label: "E", text: "Relationally dependent" },
    ],
    answers: ["D"],
  },
  {
    id: 29,
    question:
      "You execute a statement inside a transaction to delete 100 rows from a table. The transaction fails after only 40 rows are deleted. What is the result in the database?",
    type: "single",
    options: [
      { label: "A", text: "The table will be corrupted" },
      { label: "B", text: "40 rows will be deleted from the table" },
      { label: "C", text: "No rows will be deleted from the table" },
      { label: "D", text: "The transaction will restart" },
    ],
    answers: ["C"],
  },
  {
    id: 30,
    question:
      "Your company runs: ALTER TABLE Customers REMOVE SSN; and gets an error. What change is needed to remove the SSN column?",
    type: "single",
    options: [
      { label: "A", text: "ALTER TABLE Customers DELETE SSN;" },
      { label: "B", text: "ALTER TABLE Customers DELETE COLUMN SSN;" },
      { label: "C", text: "ALTER TABLE Customers DROP SSN;" },
      { label: "D", text: "ALTER TABLE Customers DROP COLUMN SSN;" },
    ],
    answers: ["D"],
  },
  {
    id: 31,
    question:
      "Cars table: (Sedan/2-Door/ColorID=2), (Truck/4-Door/ColorID=NULL), (Minivan/3-Door/ColorID=1). Colors table: (Red/1), (Gold/2). You run: SELECT * FROM Cars LEFT OUTER JOIN Colors ON Cars.ColorID = Colors.ColorID. How many rows does the statement return?",
    type: "single",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "6" },
    ],
    answers: ["C"],
  },
  {
    id: 32,
    question:
      "You are developing a SQL CREATE TABLE statement. Which TWO SQL keywords are valid to use? (Choose 2)",
    type: "multiple",
    options: [
      { label: "A", text: "ORDER BY" },
      { label: "B", text: "PRIMARY KEY" },
      { label: "C", text: "INSERT INTO" },
      { label: "D", text: "CONSTRAINT" },
    ],
    answers: ["B", "D"],
  },
  {
    id: 33,
    question:
      "Building table: BuildingID (INT, NOT NULL), Address (VARCHAR, NOT NULL), InspectorID (CHAR, nullable), InspectionDate (DATETIME, nullable). NULL in InspectionDate = not yet inspected. You need to display the address of the 10 earliest-inspected buildings. Which SQL concept completes the query?",
    type: "single",
    options: [
      { label: "A", text: "SELECT TOP 10 Address FROM Building WHERE InspectionDate IS NOT NULL ORDER BY InspectionDate ASC" },
      { label: "B", text: "SELECT TOP 10 Address FROM Building ORDER BY InspectionDate ASC" },
      { label: "C", text: "SELECT Address FROM Building WHERE InspectionDate IS NOT NULL LIMIT 10" },
      { label: "D", text: "SELECT TOP 10 Address FROM Building WHERE InspectionDate = NULL ORDER BY InspectionDate" },
    ],
    answers: ["A"],
  },
  {
    id: 34,
    question:
      "Which query correctly returns a result set for all orders where the ship_state excludes Texas (TX) and Arizona (AZ)?",
    type: "single",
    options: [
      { label: "A", text: "SELECT * FROM Orders WHERE NOT Ship_State = 'TX' AND NOT Ship_State = 'AZ'" },
      { label: "B", text: "SELECT * FROM Orders WHERE NOT Ship_State = 'TX' OR NOT Ship_State = 'AZ'" },
      { label: "C", text: "SELECT * FROM Orders WHERE Ship_State NOT = 'TX' AND Ship_State NOT = 'AZ'" },
      { label: "D", text: "SELECT * FROM Orders WHERE Ship_State NOT = 'TX' OR Ship_State NOT = 'AZ'" },
    ],
    answers: ["A"],
  },
  {
    id: 35,
    question:
      "For each statement, select True or False about database backup types.",
    note: "You will receive partial credit for each correct selection.",
    type: "true_false",
    options: [],
    answers: [],
    statements: [
      { text: "A full database backup is a copy of all of the data in the entire database", answer: "True" },
      { text: "A transaction log backup backs up all the data in the database", answer: "False" },
      { text: "A differential backup copies only data that was changed before the last full backup", answer: "False" },
      { text: "A file or filegroup restore specifies a portion of the database to recover", answer: "True" },
    ],
  },
  {
    id: 36,
    question:
      "You need to create a view that returns an alphabetical list of game names from the Games table. Name represents the game name. Which query should you use?",
    type: "single",
    options: [
      { label: "A", text: "CREATE VIEW Mygames AS SELECT Name FROM Games" },
      { label: "B", text: "CREATE VIEW Mygames AS SELECT * FROM Games" },
      { label: "C", text: "CREATE VIEW Mygames AS SELECT Name FROM Games ORDER BY Name" },
      { label: "D", text: "CREATE VIEW Mygames AS SELECT * FROM Games WHERE Name BETWEEN 'A' AND 'Z'" },
    ],
    answers: ["C"],
  },
  {
    id: 37,
    question: "One reason to create a stored procedure is to:",
    type: "single",
    options: [
      { label: "A", text: "Minimize storage space" },
      { label: "B", text: "Improve performance" },
      { label: "C", text: "Give the user control of the query logic" },
      { label: "D", text: "Bypass case sensitivity requirements" },
    ],
    answers: ["B"],
  },
  {
    id: 38,
    question:
      "You have a Department table and an Employee table. You need to ensure that an employee can only be assigned to an existing department. What should you apply to the Employee table?",
    type: "single",
    options: [
      { label: "A", text: "A foreign key" },
      { label: "B", text: "A primary key" },
      { label: "C", text: "An index" },
      { label: "D", text: "A unique constraint" },
      { label: "E", text: "A data type" },
    ],
    answers: ["A"],
  },
  {
    id: 39,
    question:
      "You need to populate a table named employeecopy with data from an existing table named employee. Which statement should you use?",
    type: "single",
    options: [
      { label: "A", text: "Copy * Into Employee Select * From Employee" },
      { label: "B", text: "Select * Into Employeecopy From Employee" },
      { label: "C", text: "Insert * From Employee Into Employeecopy" },
      { label: "D", text: "Insert Into Employeecopy Select * From Employee" },
    ],
    answers: ["D"],
  },
  {
    id: 40,
    question:
      "The ItemsOnOrder table has: ID, ItemNumber, Quantity, UnitPrice, LineItemTotal. You need a query that displays: total number of orders, average line item total, highest line item total, and grand total of all items. Which query should you use?",
    type: "single",
    options: [
      { label: "A", text: "SELECT COUNT(ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemsOnOrder HAVING ItemNumber, Quantity, UnitPrice" },
      { label: "B", text: "SELECT COUNT(ID), AVG(Unitprice*Quantity), MAX(UnitPrice*Quantity), SUM(UnitPrice*Quantity) FROM ItemsOnOrder GROUP BY ItemNumber, LineItemTotal" },
      { label: "C", text: "SELECT SUM(ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemsOnOrder" },
      { label: "D", text: "SELECT COUNT(ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemsOnOrder" },
    ],
    answers: ["D"],
  },
  {
    id: 41,
    question:
      "Your database contains a Customer table. You need to delete the record with CustomerID = 12345. Which statement should you use?",
    type: "single",
    options: [
      { label: "A", text: "DELETE CustomerID FORM Customer WHERE CustomerID = 12345" },
      { label: "B", text: "DELETE FROM Customer WHERE CustomerID = 12345" },
      { label: "C", text: "UPDATE Customer DELETE * WHERE CustomerID = 12345" },
      { label: "D", text: "UPDATE CustomerID FROM Customer DELETE * WHERE CustomerID = 12345" },
    ],
    answers: ["B"],
  },
  {
    id: 42,
    question:
      "Product table (ProductID PRIMARY KEY, ProductName, CategoryID FOREIGN KEY). Existing data: (3296, 'Spoon', 2222), (1114, 'Chair', 4444). You execute: INSERT INTO Product VALUES (3296, 'Table', 4444). What is the result?",
    type: "single",
    options: [
      { label: "A", text: "A new row in the Product table" },
      { label: "B", text: "A syntax error" },
      { label: "C", text: "A foreign key constraint violation" },
      { label: "D", text: "A new row in the Category table" },
      { label: "E", text: "A primary key constraint violation" },
    ],
    answers: ["E"],
  },
  {
    id: 43,
    question:
      "You delete rows in a table named Order. The corresponding rows in the OrderItem table are automatically deleted. This process is an example of a/an:",
    type: "single",
    options: [
      { label: "A", text: "Waterfall delete" },
      { label: "B", text: "Inherited delete" },
      { label: "C", text: "Cascade delete" },
      { label: "D", text: "Domino delete" },
      { label: "E", text: "Functional delete" },
    ],
    answers: ["C"],
  },
  {
    id: 44,
    question:
      "Which keyword combines the results of two queries and returns only rows that appear in both result sets?",
    type: "single",
    options: [
      { label: "A", text: "UNION" },
      { label: "B", text: "INTERSECT" },
      { label: "C", text: "ALL" },
      { label: "D", text: "JOIN" },
    ],
    answers: ["B"],
  },
  {
    id: 45,
    question:
      "LoanedBooks table: ID=4, Name='Harry', City='San Francisco', Books=3. Harry in San Francisco returns your books. Which statement will correctly update the table to set Books = 0 for Harry in San Francisco?",
    type: "single",
    options: [
      { label: "A", text: "UPDATE LoanedBooks SET Books = 0 WHERE (Name = 'Harry' OR City = 'San Francisco')" },
      { label: "B", text: "UPDATE LoanedBooks SET Books = 0 WHERE (Name In 'Harry', 'San Francisco')" },
      { label: "C", text: "UPDATE LoanedBooks SET Books = 0 WHERE (Name = 'Harry' AND City = 'San Francisco')" },
      { label: "D", text: "INSERT INTO LoanedBooks SET Books = 0 WHERE ID = 4" },
    ],
    answers: ["C"],
  },

  // ── LATIHAN 2: Q46–Q73 ─────────────────────────────────────
  {
    id: 46,
    question:
      "You have a Product table and a view that includes all products in the Furniture category. You execute a query that deletes all products in the Furniture category from the Product table. After you execute the statement, the result set of the view is:",
    type: "single",
    options: [
      { label: "A", text: "Empty" },
      { label: "B", text: "Deleted" },
      { label: "C", text: "Unchanged" },
      { label: "D", text: "Archived" },
    ],
    answers: ["A"],
  },
  {
    id: 47,
    question:
      "You have two tables, each with three rows. You create a SQL query that uses a cross join without a WHERE clause. How many rows will be included in the Cartesian product?",
    type: "single",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "3" },
      { label: "C", text: "6" },
      { label: "D", text: "9" },
    ],
    answers: ["D"],
  },
  {
    id: 48,
    question:
      "You have a table named Customer. You need to create a new column named District. Which statement should you use?",
    type: "single",
    options: [
      { label: "A", text: "ALTER TABLE Customer MODIFY (District INTEGER)" },
      { label: "B", text: "ALTER TABLE Customer ADD (INTEGER District)" },
      { label: "C", text: "ALTER TABLE Customer ADD (District INTEGER)" },
      { label: "D", text: "MODIFY TABLE Customer ADD (INTEGER District)" },
    ],
    answers: ["C"],
  },
  {
    id: 49,
    question:
      "One difference between a function and a stored procedure is that a function:",
    type: "single",
    options: [
      { label: "A", text: "Cannot accept parameters" },
      { label: "B", text: "Cannot contain a transaction" },
      { label: "C", text: "Must be called from a trigger" },
      { label: "D", text: "Must return a value" },
    ],
    answers: ["D"],
  },
  {
    id: 50,
    question: "Which SQL statement is a data manipulation language (DML) statement?",
    type: "single",
    options: [
      { label: "A", text: "ALTER TABLE Employee ADD EmployeeName Varchar;" },
      { label: "B", text: "SELECT EmployeeName FROM Employee WHERE EmployeeName = 'Jack Smith';" },
      { label: "C", text: "SELECT * INTO Employee FROM NewHires" },
      { label: "D", text: "INSERT INTO Employee VALUES ('Jack Smith');" },
    ],
    answers: ["B"],
  },
  {
    id: 51,
    question:
      "Pet Competition Winners table: ID, Event, Year, PetID, Birthdate, City. Which column prevents the table from being in third normal form (3NF)?",
    type: "single",
    options: [
      { label: "A", text: "PetID" },
      { label: "B", text: "Birthdate" },
      { label: "C", text: "ID" },
      { label: "D", text: "Year" },
    ],
    answers: ["B"],
  },
  {
    id: 52,
    question:
      "For each statement, select True or False about stored procedures and functions.",
    note: "You will receive partial credit for each correct selection.",
    type: "true_false",
    options: [],
    answers: [],
    statements: [
      { text: "You can delete data by using a stored procedure", answer: "True" },
      { text: "A function must have a return value", answer: "True" },
      { text: "A stored procedure must have a return value", answer: "False" },
    ],
  },
  {
    id: 53,
    question:
      "You are creating a database object named Student to store: ID (INT), Name (VARCHAR 100), Age (INT). Which syntax should you use?",
    type: "single",
    options: [
      { label: "A", text: "CREATE TABLE Student (ID INT, Name VARCHAR(100), Age INT)" },
      { label: "B", text: "CREATE Student (ID INT, Name VARCHAR(100), Age INT)" },
      { label: "C", text: "CREATE TABLE (ID INT, Name VARCHAR(100), Age INT)" },
      { label: "D", text: "CREATE (TABLE Student ID INT, Name VARCHAR(100))" },
    ],
    answers: ["A"],
  },
  {
    id: 54,
    question:
      "You need to disable User1's access to view the data in the Customer table. Which statement should you use?",
    type: "single",
    options: [
      { label: "A", text: "REVOKE User1 FROM Customer" },
      { label: "B", text: "REVOKE SELECT ON Customer FROM User1" },
      { label: "C", text: "REMOVE SELECT ON Customer FROM User1" },
      { label: "D", text: "REMOVE User1 FROM Customer" },
    ],
    answers: ["B"],
  },
  {
    id: 55,
    question:
      "You must insert the following record: StreetAddress='1234 Main Street', City='Dallas', State='TX', PostalCode='75201'. Which TWO SQL statements can you use? (Choose 2)",
    type: "multiple",
    options: [
      { label: "A", text: "INSERT INTO AddressInfo ('1234 Main Street', 'Dallas', 'TX', '75201') VALUES ([StreetAddress], [City], [State], [PostalCode])" },
      { label: "B", text: "INSERT INTO AddressInfo VALUES ('1234 Main Street', 'Dallas', 'TX', '75201')" },
      { label: "C", text: "UPDATE AddressInfo SET [StreetAddress] = '1234 Main Street', [City] = 'Dallas', [State] = 'TX', [PostalCode] = '75201'" },
      { label: "D", text: "INSERT INTO AddressInfo ([StreetAddress], [City], [State], [PostalCode]) VALUES ('1234 Main Street', 'Dallas', 'TX', '75201')" },
    ],
    answers: ["B", "D"],
  },
  {
    id: 56,
    question:
      "You execute: SELECT students.name, courses.name FROM students OUTER JOIN courses WHERE student.courseID = courses.courseID. The query returns an error. How should you correct the query?",
    type: "single",
    options: [
      { label: "A", text: "SELECT students.name, courses.name FROM students INNER JOIN courses WHERE students.courseID = courses.courseID" },
      { label: "B", text: "SELECT students.name, courses.name FROM students INNER JOIN courses ON students.courseID = courses.courseID" },
      { label: "C", text: "SELECT students.name, courses.name FROM students INNER JOIN ON students.courseID = courses.courseID" },
      { label: "D", text: "SELECT students.name, courses.name FROM students INNER JOIN ON courses WHERE students.courseID = courses.courseID" },
    ],
    answers: ["B"],
  },
  {
    id: 57,
    question:
      "A developer runs: ALTER TABLE Person ADD Prefix varchar(4) NOT NULL; and receives an error. The Person table already has existing rows. What is likely the cause?",
    type: "single",
    options: [
      { label: "A", text: "The Person table is empty" },
      { label: "B", text: "You should run the DROP CONSTRAINT query before running ALTER TABLE" },
      { label: "C", text: "The varchar(4) data type is invalid for the Person table" },
      { label: "D", text: "The DEFAULT keyword should be used to specify a default value for existing rows" },
    ],
    answers: ["D"],
  },
  {
    id: 58,
    question:
      "You have a Student table containing 100 rows (some with NULL in FirstName). You execute: DELETE FROM Student. What is the result?",
    type: "single",
    options: [
      { label: "A", text: "All rows and the table definition will be deleted" },
      { label: "B", text: "All rows containing a NULL value in FirstName will be deleted" },
      { label: "C", text: "All rows in the table will be deleted" },
      { label: "D", text: "You will receive an error message" },
    ],
    answers: ["C"],
  },
  {
    id: 59,
    question:
      "A table has ProductID and ProductCategory columns. Which database term describes the relationship where ProductCategory value is determined by ProductID?",
    type: "single",
    options: [
      { label: "A", text: "Compositional" },
      { label: "B", text: "Cohort" },
      { label: "C", text: "Deterministic" },
      { label: "D", text: "Relationally dependent" },
      { label: "E", text: "Functionally dependent" },
    ],
    answers: ["E"],
  },
  {
    id: 60,
    question:
      "You have SalesPerson and Sales tables. You need to ensure each record in the Sales table has a valid associated salesperson record in the SalesPerson table. Which database object should you add to the Sales table?",
    type: "single",
    options: [
      { label: "A", text: "Clustered index" },
      { label: "B", text: "Primary key" },
      { label: "C", text: "Foreign key" },
      { label: "D", text: "Nonclustered index" },
    ],
    answers: ["C"],
  },
  {
    id: 61,
    question:
      "You have an Employee table with columns EmployeeID and EmployeeName. Which statement should you use to return the number of rows in the table?",
    type: "single",
    options: [
      { label: "A", text: "SELECT * FROM Employee" },
      { label: "B", text: "SELECT COUNT(*) FROM Employee" },
      { label: "C", text: "SELECT COUNT(rows) FROM Employee" },
      { label: "D", text: "SELECT SUM(*) FROM Employee" },
    ],
    answers: ["B"],
  },
  {
    id: 62,
    question:
      "The Products table has ItemNumber, ItemName, ItemDescription, Price. Which query will retrieve ItemName and Price when 'chocolate' appears in the ItemDescription column?",
    type: "single",
    options: [
      { label: "A", text: "SELECT ItemName, Price FROM Products WHERE ItemDescription = 'chocolate'" },
      { label: "B", text: "SELECT ItemName, Price FROM Products WHERE ItemDescription LIKE '%chocolate%'" },
      { label: "C", text: "SELECT ItemName, Price FROM Products WHERE ItemDescription LIKE 'chocolate'" },
      { label: "D", text: "SELECT ItemName, Price FROM Products WHERE ItemDescription IN '%chocolate%'" },
    ],
    answers: ["B"],
  },
  {
    id: 63,
    question:
      "You need to combine the results of two queries into a single result that contains all of the rows from both queries. Which SQL statement should you use?",
    type: "single",
    options: [
      { label: "A", text: "UNION" },
      { label: "B", text: "JOIN" },
      { label: "C", text: "EXCEPT" },
      { label: "D", text: "TRUNCATE" },
    ],
    answers: ["A"],
  },
  {
    id: 64,
    question:
      "You need to set up a database view of North American Mammals (NorthAmericanMammals_View). Which SQL statement creates a view?",
    type: "single",
    options: [
      { label: "A", text: "CREATE VIEW NorthAmericanMammals_View AS SELECT * FROM Mammals WHERE Origin = 'North America'" },
      { label: "B", text: "MAKE VIEW NorthAmericanMammals_View FROM Mammals WHERE Origin = 'North America'" },
      { label: "C", text: "CREATE TABLE NorthAmericanMammals_View AS SELECT * FROM Mammals" },
      { label: "D", text: "CREATE VIEW NorthAmericanMammals_View FROM Mammals" },
    ],
    answers: ["A"],
  },
  {
    id: 65,
    question: "Which statement creates a composite primary key?",
    type: "single",
    options: [
      { label: "A", text: "CREATE TABLE Order (OrderID INTEGER, OrderItemID INTEGER, PRIMARY KEY OrderID, PRIMARY KEY OrderItemID)" },
      { label: "B", text: "CREATE TABLE Order (OrderID INTEGER PRIMARY KEY, OrderItemID INTEGER PRIMARY KEY)" },
      { label: "C", text: "CREATE TABLE Order (OrderID INTEGER, OrderItemID INTEGER, PRIMARY KEY)" },
      { label: "D", text: "CREATE TABLE Order (OrderID INTEGER, OrderItemID INTEGER, PRIMARY KEY(OrderID, OrderItemID))" },
    ],
    answers: ["D"],
  },
  {
    id: 66,
    question:
      "You work at a coffee shop and need to store charged amounts for financial calculations. Which data type should you recommend?",
    type: "single",
    options: [
      { label: "A", text: "Decimal" },
      { label: "B", text: "Binary" },
      { label: "C", text: "Bit" },
      { label: "D", text: "Varchar" },
    ],
    answers: ["A"],
  },
  {
    id: 67,
    question:
      "Which statement removes all rows from a table without logging the individual row deletions?",
    type: "single",
    options: [
      { label: "A", text: "ALTER TABLE" },
      { label: "B", text: "DROP TABLE" },
      { label: "C", text: "TRUNCATE TABLE" },
      { label: "D", text: "CREATE TABLE" },
    ],
    answers: ["C"],
  },
  {
    id: 68,
    question:
      "Cars table: (Sedan/Red/Japan), (Truck/Red/USA), (Minivan/Silver/Japan), (Hatchback/Red/Japan), (Compact/Black/Japan), (SUV/Silver/Germany), (Convertible/Black/USA), (Hybrid/Black/Germany). SQL: SELECT * FROM Cars C WHERE c.Origin <> 'USA' AND c.Color <> 'Black'. How many rows are returned?",
    type: "single",
    options: [
      { label: "A", text: "4" },
      { label: "B", text: "5" },
      { label: "C", text: "6" },
      { label: "D", text: "7" },
    ],
    answers: ["A"],
  },
  {
    id: 69,
    question:
      "You execute: SELECT EmployeeID, FirstName, DepartmentName FROM Employee, Department. This type of operation is called a/an:",
    type: "single",
    options: [
      { label: "A", text: "Equi-join" },
      { label: "B", text: "Cartesian product" },
      { label: "C", text: "Intersection" },
      { label: "D", text: "Outer join" },
    ],
    answers: ["B"],
  },
  {
    id: 70,
    question:
      "A Flight table has: ID, FlightNumber, OriginAirport, DestinationAirport, DepartureTime, ArrivalTime — all NOT NULL. You need to display flight numbers arriving at LaGuardia Airport (LGA) later today, sorted by most recent arrival time. Which query should you use?",
    type: "single",
    options: [
      { label: "A", text: "SELECT FlightNumber FROM Flight WHERE DestinationAirport = 'LGA' AND ArrivalTime > GETDATE() ORDER BY ArrivalTime DESC" },
      { label: "B", text: "SELECT FlightNumber FROM Flight WHERE DestinationAirport = 'LGA' AND ArrivalTime > GETDATE() ORDER BY ArrivalTime ASC" },
      { label: "C", text: "SELECT FlightNumber FROM Flight WHERE OriginAirport = 'LGA' ORDER BY ArrivalTime DESC" },
      { label: "D", text: "SELECT * FROM Flight WHERE DestinationAirport = 'LGA' ORDER BY ArrivalTime DESC" },
    ],
    answers: ["A"],
  },
  {
    id: 71,
    question:
      "Which query returns a result set of orders placed after January 2017 in all states except California (CA)?",
    type: "single",
    options: [
      { label: "A", text: "SELECT * FROM orders WHERE order_date > '2017-01-01' AND ship_state <> 'CA'" },
      { label: "B", text: "SELECT * FROM orders WHERE order_date > '2017-01-01' OR ship_state <> 'CA'" },
      { label: "C", text: "SELECT * FROM orders WHERE order_date > '2017-01-01' AND ship_state LIKE 'CA'" },
      { label: "D", text: "SELECT * FROM orders WHERE order_date > '2017-01-01' OR ship_state LIKE 'CA'" },
    ],
    answers: ["A"],
  },
  {
    id: 72,
    question:
      "A clustered index on a table: which of the following statements about clustered indexes are TRUE? (Choose 2)",
    type: "multiple",
    options: [
      { label: "A", text: "A table can have only one clustered index" },
      { label: "B", text: "A table can have multiple clustered indexes" },
      { label: "C", text: "A clustered index physically sorts the data in the table" },
      { label: "D", text: "A clustered index stores data separately from the table" },
    ],
    answers: ["A", "C"],
  },
  {
    id: 73,
    question:
      "Which query correctly combines rows from two tables using a condition, and returns only rows where there is a match in both tables?",
    type: "single",
    options: [
      { label: "A", text: "SELECT * FROM A INNER JOIN B ON A.id = B.id" },
      { label: "B", text: "SELECT * FROM A LEFT JOIN B ON A.id = B.id" },
      { label: "C", text: "SELECT * FROM A CROSS JOIN B" },
      { label: "D", text: "SELECT * FROM A FULL OUTER JOIN B ON A.id = B.id" },
    ],
    answers: ["A"],
  },
];

// ─── Latihan 1: Q1–Q45  ──────────────────────────────────────
export const LATIHAN_1 = ALL_QUESTIONS.filter(q => q.id <= 45);

// ─── Latihan 2: Q46–Q73 ──────────────────────────────────────
export const LATIHAN_2 = ALL_QUESTIONS.filter(q => q.id >= 46);

import { NETWORKING_LATIHAN_1, NETWORKING_LATIHAN_2 } from "./exam-data-networking";

// Helper: get questions by programId and type
export function getExamQuestions(programId: string, type: "1" | "2"): ExamQuestion[] {
  if (programId === "its-networking") {
    return type === "1" ? NETWORKING_LATIHAN_1 : NETWORKING_LATIHAN_2;
  }
  
  // Default to IT-Database (or other programs sharing the same pool for now)
  return type === "1" ? LATIHAN_1 : LATIHAN_2;
}
