namespace Backend.Infrastructure.Statements
{
    internal class TasksStatements
    {
        public const string SelectAll = @"
            SELECT
                Id,
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
                Id,
                Title,
                Description,
                IsDone,
                IsActive,
                CreatedAt,
                CompletedAt
            FROM
                Tasks
            WHERE
                Id = @Id
                AND IsActive = 1;";
    }
}
