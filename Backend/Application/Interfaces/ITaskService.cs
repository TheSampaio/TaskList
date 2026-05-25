using Backend.Application.Contracts;

namespace Backend.Application.Interfaces
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskResponse>> GetAllAsync();

        Task<TaskResponse?> GetByIdAsync(int taskId);
    }
}
