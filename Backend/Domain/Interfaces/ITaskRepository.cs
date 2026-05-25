namespace Backend.Domain.Interfaces
{
    public interface ITaskRepository
    {
        Task<IEnumerable<Entities.Task>> GetAllAsync();
        Task<Entities.Task?> GetByIdAsync(int id);
    }
}