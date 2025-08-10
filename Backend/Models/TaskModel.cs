namespace Backend.Models
{
    // CREATE TABLE tasks(
    //     id                   UNIQUEIDENTIFIER    PRIMARY KEY    NOT NULL,
    //     title                NVARCHAR(64)                       NOT NULL,
    //     is_done              BIT                                NOT NULL,
    //     creation_datetime    DATETIME2                          NOT NULL
    // );
    public class TaskModel
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public bool IsDone { get; set; }
        public DateTime CreationDatetime { get; set; }
    }
}
