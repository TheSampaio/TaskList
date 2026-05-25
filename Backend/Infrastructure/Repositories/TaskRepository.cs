using Backend.Domain.Interfaces;
using Backend.Infrastructure.Queries;
using System.Data;
using Dapper;

namespace Backend.Infrastructure.Repositories
{
    public class TaskRepository(IDbConnection dbConnection) : ITaskRepository
    {
        public async Task<IEnumerable<Domain.Entities.Task>> GetAllAsync()
        {
            return await dbConnection.QueryAsync<Domain.Entities.Task>(TaskQueries.SelectAll);
        }

        public async Task<Domain.Entities.Task?> GetByIdAsync(int id)
        {
            var parameters = new { Id = id };
            return await dbConnection.QueryFirstOrDefaultAsync<Domain.Entities.Task?>(
                TaskQueries.SelectById,
                parameters
            );
        }
    }
}