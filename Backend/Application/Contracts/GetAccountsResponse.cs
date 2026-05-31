namespace Backend.Application.Contracts
{
    public record GetAccountsResponse(
        int Id,
        string Name,
        string Surname,
        string Email,
        DateTime CreatedAt
    );
}
