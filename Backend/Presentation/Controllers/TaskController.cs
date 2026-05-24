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
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await taskService.GetAllAsync();
            return Ok(result);
        }

        /// <summary>
        /// Get a task by its ID.
        /// </summary>
        /// <param name="taskId">The ID of the task.</param>
        /// <returns>The task with the specified ID.</returns>
        [HttpGet("{taskId:int}")]
        public async Task<IActionResult> GetByIdAsync(int taskId)
        {
            var result = await taskService.GetByIdAsync(taskId);
            return Ok(result);
        }
    }
}
