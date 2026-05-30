namespace Backend.Domain.Interfaces
{
    public interface ITasksRepository
    {
        Task<IEnumerable<Entities.TasksEntity>> GetAllAsync();
        Task<Entities.TasksEntity?> GetByIdAsync(int id);
    }
}