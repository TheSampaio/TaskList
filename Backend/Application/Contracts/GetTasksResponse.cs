namespace Backend.Application.Contracts
{
    public record GetTasksResponse(
        int Id,
        string Title,
        string? Description,
        bool IsDone,
        DateTime CreatedAt,
        DateTime? CompletedAt
    );
}
