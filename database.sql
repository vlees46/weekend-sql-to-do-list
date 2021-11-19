Database Name: todo

CREATE TABLE "tasklist" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (100) NOT NULL,
	"completed" VARCHAR (1)
	
);

INSERT INTO "tasklist" 
	("task") 
VALUES 
	('Take out the trash'),
    ('Mow the lawn');

SELECT * FROM "tasklist";
