using Backend.Application.Contracts;
using Backend.Application.Interfaces;
using Backend.Domain.Interfaces;

namespace Backend.Application.Services
{
    public class AccountsService(
        IAccountsRepository accountsRepository
    )
        : IAccountService
    {
        public async Task<IEnumerable<GetAccountsResponse>> GetAllAsync()
        {
            var result = await accountsRepository.GetAllAsync();
            return result.Select(account => new GetAccountsResponse
            (
                account.Id,
                account.Name,
                account.Surname,
                account.Email,
                account.CreatedAt
            ));
        }

        public async Task<GetAccountsResponse?> GetByIdAsync(int accountId)
        {
            var result = await accountsRepository.GetByIdAsync(accountId);
            return result is null
                ? null
                : new GetAccountsResponse
                (
                    result.Id,
                    result.Name,
                    result.Surname,
                    result.Email,
                    result.CreatedAt
                );
        }
    }
}
