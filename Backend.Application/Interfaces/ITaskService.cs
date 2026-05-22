using Microsoft.AspNetCore.Mvc;

namespace Backend.Application.Interfaces
{
    public interface ITaskService
    {
        IEnumerable<string> GetAll();
    }
}
