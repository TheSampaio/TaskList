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
        /// <summary>
        /// Get all tasks.
        /// </summary>
        /// <returns>A list of all tasks.</returns>
        [HttpGet]
        public IActionResult GetAll()
        {
            var result = taskService.GetAll();
            return Ok(result);
        }

        /// <summary>
        /// Get a task by its ID.
        /// </summary>
        /// <param name="taskId">The ID of the task.</param>
        /// <returns>The task with the specified ID.</returns>
        [HttpGet("{taskId:int}")]
        public IActionResult GetById(int taskId)
        {
            var result = taskService.GetById(taskId);
            return Ok(result);
        }
    }
}
