// 1) The total number of Users (i.e. count of all users) in the system.

SELECT COUNT(*) FROM Users;

// 2) The total number of Users in the Accounting Department.

SELECT * FROM Users
WHERE Department = 'Accounting';

// 3) The total number of Users that have not activated their account.

SELECT * FROM Users
WHERE NOT Status ='Activated';

// 4) List the first 5 Users that registered for an account in the system.

SELECT * FROM Users
LIMIT 5;

// 5) All Users whose age is greater than 18 but less than 26.

SELECT * FROM Users
WHERE age BETWEEN 19 AND 25;

// 6) All Users that registered for an account last week Thursday.

SELECT * FROM Users
WHERE Created_dt = "06-01-2020";

// 7) All Users that registered for an account between last week Saturday and this week Monday.

SELECT * FROM Users
WHERE Created_dt BETWEEN "08-01-2020" AND "10-01-2020";

// 8) Query to Activate all pending Users in the system.

UPDATE Users
SET Status = 'Activated'
WHERE Status = 'Pending';


// 9) Query to Update the User whose name is Tim to Timothy.

UPDATE Users
SET Name = 'Timothy'
WHERE Name = 'Tim';

// 10) Total Number of Users in each Department.

SELECT Department, COUNT(*)
  FROM Users
  GROUP BY Department;