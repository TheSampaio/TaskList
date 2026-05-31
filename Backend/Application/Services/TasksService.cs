using Backend.Application.Contracts;
using Backend.Application.Interfaces;
using Backend.Domain.Interfaces;

namespace Backend.Application.Services
{
    public class TasksService(
        ITasksRepository taskRepository
    )
        : ITasksService
    {
        public async Task<IEnumerable<GetTasksResponse>> GetAllAsync()
        {
            var result = await taskRepository.GetAllAsync();
            return result.Select(task => new GetTasksResponse
            (
                task.Id,
                task.Title,
                task.Description,
                task.IsDone,
                task.CreatedAt,
                task.CompletedAt
            ));
        }

        public async Task<GetTasksResponse?> GetByIdAsync(int taskId)
        {
            var task = await taskRepository.GetByIdAsync(taskId);
            return task is null 
                ? null
                : new GetTasksResponse
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