using Backend.Domain.Interfaces;
using Backend.Infrastructure.Statements;
using System.Data;
using Dapper;

namespace Backend.Infrastructure.Repositories
{
    public class TasksRepository(IDbConnection dbConnection) : ITasksRepository
    {
        public async Task<IEnumerable<Domain.Entities.TasksEntity>> GetAllAsync()
        {
            var result = await dbConnection.QueryAsync<Domain.Entities.TasksEntity>(TasksStatements.SelectAll);
            return result;
        }

        public async Task<Domain.Entities.TasksEntity?> GetByIdAsync(int id)
        {
            var parameters = new { Id = id };
            var result = await dbConnection.QueryFirstOrDefaultAsync<Domain.Entities.TasksEntity?>(
                TasksStatements.SelectById,
                parameters
            );
            return result;
        }
    }
}