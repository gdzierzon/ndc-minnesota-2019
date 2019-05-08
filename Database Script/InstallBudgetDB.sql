CREATE DATABASE Finance
GO

USE Finance
GO

CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](100) NOT NULL
)
GO

CREATE TABLE [dbo].[Category](
	[CategoryId] [INT] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Title] [NVARCHAR](100) NOT NULL,
	[Description] [NVARCHAR](MAX) NULL
)
GO

CREATE TABLE [dbo].[BudgetItem](
	[BudgetItemId] [INT] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[UserId] [INT] NOT NULL,
	[CategoryId] [INT] NOT NULL,
	[Title] [NVARCHAR](200) NOT NULL,
	[Amount] [DECIMAL](18, 2) NOT NULL,
	[Date] [DATE] NOT NULL,
	[Description] [NVARCHAR](MAX) NULL,
	[Vendor] [NVARCHAR](100) NOT NULL,
	[IsBusinessExpense] [BIT] NOT NULL
)
GO

ALTER TABLE [dbo].[BudgetItem] ADD  CONSTRAINT [DF_BudgetItem_Title]  DEFAULT ('') FOR [Title]
GO

ALTER TABLE [dbo].[BudgetItem] ADD  CONSTRAINT [DF_BudgetItem_Date]  DEFAULT (GETDATE()) FOR [Date]
GO

ALTER TABLE [dbo].[BudgetItem] ADD  CONSTRAINT [DF_BudgetItem_Vendor]  DEFAULT ('') FOR [Vendor]
GO

ALTER TABLE [dbo].[BudgetItem] ADD  CONSTRAINT [DF_BudgetItem_IsBusinessExpense]  DEFAULT (0) FOR [IsBusinessExpense]
GO

ALTER TABLE [dbo].[BudgetItem]  WITH CHECK ADD  CONSTRAINT [FK_BudgetItem_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([CategoryId])
GO

ALTER TABLE [dbo].[BudgetItem] CHECK CONSTRAINT [FK_BudgetItem_Category]
GO

ALTER TABLE [dbo].[BudgetItem]  WITH CHECK ADD  CONSTRAINT [FK_BudgetItem_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO

ALTER TABLE [dbo].[BudgetItem] CHECK CONSTRAINT [FK_BudgetItem_User]
GO

-- Insert demo Users
INSERT INTO [dbo].[User] ( [FirstName], [LastName] ) VALUES('Richard', 'Jenkins')
INSERT INTO [dbo].[User] ( [FirstName], [LastName] ) VALUES('Nicole', 'King')
INSERT INTO [dbo].[User] ( [FirstName], [LastName] ) VALUES('Juan', 'Jones')
INSERT INTO [dbo].[User] ( [FirstName], [LastName] ) VALUES('Frank', 'Hall')
INSERT INTO [dbo].[User] ( [FirstName], [LastName] ) VALUES('Irene', 'Hughes')

-- Insert demo Categories
INSERT INTO [dbo].[Category] ( [Title], [Description] ) VALUES('Food', 'Groceries, Dine Out, Snacks, etc')
INSERT INTO [dbo].[Category] ( [Title], [Description] ) VALUES('Housing', 'Mortgage, utilities, yard etc.')
INSERT INTO [dbo].[Category] ( [Title], [Description] ) VALUES('Transportation', 'Car, Bus, Train, Uber, Lyft etc')
INSERT INTO [dbo].[Category] ( [Title], [Description] ) VALUES('Travel', 'Flight, Hotels, Car Rental')
INSERT INTO [dbo].[Category] ( [Title], [Description] ) VALUES('Entertainment', 'Movies, Sporting Events, Theater, etc')
INSERT INTO [dbo].[Category] ( [Title], [Description] ) VALUES('Electronics', 'TVs, Computers, etc')
INSERT INTO [dbo].[Category] ( [Title], [Description] ) VALUES('Communication', 'Phone, Internet, Etc')
INSERT INTO [dbo].[Category] ( [Title], [Description] ) VALUES('Miscellaneous', 'Whatever else I forgot')

-- Insert demo Expenses
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(1, 1,'Dinner',27.50,'2019-05-07', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(1, 1,'Lunch',15.27,'2019-05-07', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(2, 1,'Lunch',13.45,'2019-05-07', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(1, 3,'Lyft to hotel',21.50,'2019-05-07', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(2, 1,'Dinner',23.16,'2019-05-07', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(1, 1,'Lunch',13.89,'2019-05-08', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(1, 1,'Dinner',31.87,'2019-05-08', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(2, 1,'Lunch',18.93,'2019-05-08', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(2, 1,'Dinner',25.61,'2019-05-08', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(1, 1,'Lunch',17.12,'2019-05-09', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(1, 1,'Dinner',28.50,'2019-05-09', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(2, 1,'Lunch',16.12,'2019-05-09', 0)
INSERT INTO [dbo].[BudgetItem] ( [UserId], [CategoryId],[Title],[Amount],[Date],[IsBusinessExpense] ) VALUES(2, 1,'Dinner',34.34,'2019-05-09', 0)