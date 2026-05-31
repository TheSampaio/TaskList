using Backend.Domain.Interfaces;
using Backend.Domain.Entities;
using Backend.Infrastructure.Statements;
using Dapper;
using System.Data;

namespace Backend.Infrastructure.Repositories
{
    public class TasksRepository(IDbConnection dbConnection) : ITasksRepository
    {
        public async Task<IEnumerable<TasksEntity>> GetAllAsync()
        {
            var result = await dbConnection.QueryAsync<TasksEntity>(TasksStatements.SelectAll);
            return result;
        }

        public async Task<TasksEntity?> GetByIdAsync(int id)
        {
            var parameters = new { Id = id };
            var result = await dbConnection.QueryFirstOrDefaultAsync<TasksEntity?>(
                TasksStatements.SelectById,
                parameters
            );
            return result;
        }
    }
}