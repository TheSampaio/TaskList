CREATE DATABASE TaskListManager;
GO

USE TaskListManager;
GO

CREATE TABLE Tasks (
    TaskId          INT IDENTITY(1,1)   NOT NULL,
    Title           NVARCHAR(128)       NOT NULL,
    Description     NVARCHAR(512)       NULL,
    IsDone          BIT                 NOT NULL    DEFAULT 0,
    IsActive        BIT                 NOT NULL    DEFAULT 1,
    CreatedAt       DATETIME2(7)        NOT NULL    DEFAULT SYSDATETIME(),
    CompletedAt     DATETIME2(7)        NULL,
    
    CONSTRAINT PK_Tasks PRIMARY KEY CLUSTERED (TaskId)
);
GO