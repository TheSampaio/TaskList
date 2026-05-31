using Backend.Application.Contracts;

namespace Backend.Application.Interfaces
{
    public interface ITasksService
    {
        public Task<IEnumerable<GetTasksResponse>> GetAllAsync();
        public Task<GetTasksResponse?> GetByIdAsync(int taskId);
    }
}
