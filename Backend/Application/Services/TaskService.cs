using Backend.Application.Interfaces;
using Backend.Domain.Interfaces;
using Backend.Application.Contracts;

namespace Backend.Application.Services
{
    public class TaskService(
        ITaskRepository taskRepository
    )
        : ITaskService
    {
        public async Task<IEnumerable<TaskResponse>> GetAllAsync()
        {
            var result = await taskRepository.GetAllAsync();

            return result.Select(task => new TaskResponse
            (
                task.Id,
                task.Title,
                task.Description,
                task.IsDone,
                task.CreatedAt,
                task.CompletedAt
            ));
        }

        public async Task<TaskResponse?> GetByIdAsync(int taskId)
        {
            var task = await taskRepository.GetByIdAsync(taskId);

            if (task is null)
                return null;

            return new TaskResponse
            (
                task.Id,
                task.Title,
                task.Description,
                task.IsDone,
                task.CreatedAt,
                task.CompletedAt
            );
        }
    }
}