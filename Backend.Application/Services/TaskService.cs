using Backend.Application.Interfaces;

namespace Backend.Application.Services
{
    public class TaskService : ITaskService
    {
        public IEnumerable<string> GetAll()
        {
            return ["Task 1", "Task 2", "Task 3"];
        }
    }
}
