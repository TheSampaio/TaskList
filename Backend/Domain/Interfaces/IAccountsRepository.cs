using Backend.Domain.Entities;

namespace Backend.Domain.Interfaces
{
    public interface IAccountsRepository
    {
        Task<IEnumerable<AccountsEntity>> GetAllAsync();
        Task<AccountsEntity?> GetByIdAsync(int id);
    }
}
