namespace Backend.Infrastructure.Statements
{
    internal class AccountsStatement
    {
        public const string SelectAll = @"
            SELECT
                Id,
                Name,
                Surname,
                Email,
                IsActive,
                CreatedAt
            FROM
                Accounts
            WHERE
                IsActive = 1;";

        public const string SelectById = @"
            SELECT
                Id,
                Name,
                Surname,
                Email,
                IsActive,
                CreatedAt
            FROM
                Accounts
            WHERE
                Id = @Id
                AND IsActive = 1;";
    }
}
