using Backend.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController(
        IAccountService accountService
    )
        : ControllerBase
    {
        /// <summary>
        /// Get all accounts.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await accountService.GetAllAsync();
            return Ok(result);
        }

        /// <summary>
        /// Get an account by its ID.
        /// </summary>
        /// <param name="accountId">The ID of the account.</param>
        /// <returns>The account with the specified ID, or a 404 Not Found if the account does not exist.</returns>
        [HttpGet("{accountId:int}")]
        public async Task<IActionResult> GetByIdAsync(int accountId)
        {
            var result = await accountService.GetByIdAsync(accountId);
            return result is null
                ? NotFound()
                : Ok(result);
        }
    }
}
