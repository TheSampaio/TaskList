using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Domain.Entities
{
    [Table("Accounts")]
    public class AccountsEntity
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(256)]
        [Required(AllowEmptyStrings = false)]
        public string Email { get; set; } = string.Empty;

        [MaxLength(512)]
        [Required(AllowEmptyStrings = false)]
        public string PasswordHash { get; set; } = string.Empty;
        public bool IsActive { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
