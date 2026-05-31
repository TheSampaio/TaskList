CREATE DATABASE TaskListManager;
GO


USE TaskListManager;
GO


CREATE TABLE Accounts (
    [Id]            INT IDENTITY(1,1)   NOT NULL,
    [Email]         VARCHAR(256)        NOT NULL,
    [PasswordHash]  VARCHAR(512)        NOT NULL,
    [IsActive]      BIT                 NOT NULL    DEFAULT 1,
    [CreatedAt]     DATETIME2(7)        NOT NULL    DEFAULT SYSDATETIME(),
    
    CONSTRAINT PK_Accounts PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT UQ_Accounts_Email UNIQUE (Email)
);
GO


CREATE TABLE Tasks (
    [Id]            INT IDENTITY(1,1)   NOT NULL,
    [AccountId]     INT                 NOT NULL,
    [Title]         NVARCHAR(128)       NOT NULL,
    [Description]   NVARCHAR(512)       NULL,
    [IsDone]        BIT                 NOT NULL    DEFAULT 0,
    [IsActive]      BIT                 NOT NULL    DEFAULT 1,
    [CreatedAt]     DATETIME2(7)        NOT NULL    DEFAULT SYSDATETIME(),
    [CompletedAt]   DATETIME2(7)        NULL,
    
    CONSTRAINT PK_Tasks PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT FK_Tasks_Accounts FOREIGN KEY (AccountId) REFERENCES Accounts(Id)
);
GO


CREATE INDEX
    IX_Tasks_AccountId
ON
    Tasks(AccountId);
GO
