using Backend.Application.Contracts;

namespace Backend.Application.Interfaces
{
    public interface IAccountService
    {
        public Task<IEnumerable<GetAccountsResponse>> GetAllAsync();
        public Task<GetAccountsResponse?> GetByIdAsync(int accountId);
    }
}
