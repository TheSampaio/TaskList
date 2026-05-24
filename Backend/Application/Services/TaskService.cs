using Backend.Application.Interfaces;
using Backend.Domain.Interfaces;

namespace Backend.Application.Services
{
    public class TaskService(
        ITaskRepository taskRepository
    )
        : ITaskService
    {
        public async Task<IEnumerable<Domain.Entities.Task>> GetAllAsync()
        {
            return await taskRepository.GetAllAsync();
        }

        public async Task<Domain.Entities.Task?> GetByIdAsync(int taskId)
        {
            return await taskRepository.GetByIdAsync(taskId);
        }
    }
}