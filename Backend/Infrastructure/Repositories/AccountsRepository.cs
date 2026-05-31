using Backend.Domain.Entities;
using Backend.Domain.Interfaces;
using Backend.Infrastructure.Statements;
using Dapper;
using System.Data;

namespace Backend.Infrastructure.Repositories
{
    public class AccountsRepository(
        IDbConnection dbConnection
    )
        : IAccountsRepository
    {
        public async Task<IEnumerable<AccountsEntity>> GetAllAsync()
        {
            var result = await dbConnection.QueryAsync<AccountsEntity>(AccountsStatement.SelectAll);
            return result;
        }

        public async Task<AccountsEntity?> GetByIdAsync(int id)
        {
            var parameters = new { Id = id };
            var result = await dbConnection.QueryFirstOrDefaultAsync<AccountsEntity>(
                AccountsStatement.SelectById,
                parameters
            );
            return result;
        }
    }
}
