using System.ComponentModel.DataAnnotations;

namespace Backend.Domain.Entities
{
    public class Task
    {
        [Key]
        public int Id { get; set; }

        [Required(AllowEmptyStrings = false)]
        [MaxLength(128)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(512)]
        public string? Description { get; set; }

        public bool IsDone { get; set; }

        public bool IsActive { get; set; } = true;

        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime CompletedAt { get; set; }
    }
}
