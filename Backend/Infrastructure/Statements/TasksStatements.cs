namespace Backend.Infrastructure.Statements
{
    internal class TasksStatements
    {
        public const string SelectAll = @"
            SELECT
                TaskId AS Id,
                Title,
                Description,
                IsDone,
                IsActive,
                CreatedAt,
                CompletedAt
            FROM
                Tasks
            WHERE
                IsActive = 1;";

        public const string SelectById = @"
            SELECT
                TaskId AS Id,
                Title,
                Description,
                IsDone,
                IsActive,
                CreatedAt,
                CompletedAt
            FROM
                Tasks
            WHERE
                TaskId = @Id
                AND IsActive = 1;";
    }
}
