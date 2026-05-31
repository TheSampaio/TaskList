using Backend.Domain.Entities;

namespace Backend.Domain.Interfaces
{
    public interface ITasksRepository
    {
        Task<IEnumerable<TasksEntity>> GetAllAsync();
        Task<TasksEntity?> GetByIdAsync(int id);
    }
}