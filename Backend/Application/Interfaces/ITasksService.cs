using Backend.Application.Contracts;

namespace Backend.Application.Interfaces
{
    public interface ITasksService
    {
        Task<IEnumerable<GetTasksResponse>> GetAllAsync();

        Task<GetTasksResponse?> GetByIdAsync(int taskId);
    }
}
