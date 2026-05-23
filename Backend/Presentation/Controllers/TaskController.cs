using Backend.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController(
        ITaskService taskService
    )
        : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            var result = taskService.GetAll();
            return Ok(result);
        }

        [HttpGet("{taskId:int}")]
        public IActionResult GetById(int taskId)
        {
            var result = taskService.GetById(taskId);
            return Ok(result);
        }
    }
}
