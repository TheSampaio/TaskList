namespace Backend.Application.Interfaces
{
    public interface ITaskService
    {
        IEnumerable<string> GetAll();
        string GetById(int taskId);
    }
}
