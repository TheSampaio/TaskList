USE TaskListManager;
GO


INSERT INTO
    Accounts
    (
        Email,
        PasswordHash,
        IsActive,
        CreatedAt
    )
VALUES
    (
        'admin@email.com',
        '$argon2id$v=19$m=65536,t=4,p=4$c3VwZXJhZG1pbg$PcF8unfTuEvAYD+9WB0o3fMX6VdZ7XUQEPrDBZ7cKCI',
        1,
        '2026-05-24 18:30:24.1644444'
    );

        
INSERT INTO
    Tasks
    (
        AccountId,
        Title,
        Description,
        IsDone,
        IsActive,
        CreatedAt,
        CompletedAt
    )
VALUES
    (1, 'Get milk', NULL, 0, 1, '2026-05-24 19:54:21.6533333', NULL),
    (1, 'Pick up paycheck', NULL, 0, 1, '2026-05-24 20:38:52.6700000', NULL),
    (1, 'Cash paycheck', NULL, 0, 1, '2026-05-24 22:38:55.6422222', NULL);
GO
