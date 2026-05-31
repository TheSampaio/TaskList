namespace Backend.Application.Contracts
{
    public record GetAccountsResponse(
        int Id,
        string Email,
        DateTime CreatedAt
    );
}
