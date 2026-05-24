namespace Backend.Application.Interfaces
{
    public interface ITaskService
    {
        Task<IEnumerable<Domain.Entities.Task>> GetAllAsync();

        Task<Domain.Entities.Task?> GetByIdAsync(int taskId);
    }
}
