namespace Backend.Models
{
    // CREATE TABLE logins(
    //     id                   UNIQUEIDENTIFIER    PRIMARY KEY    NOT NULL,
    //     name                 NVARCHAR(32)                       NOT NULL,
    //     email                NVARCHAR(64)        UNIQUE         NOT NULL,
    //     password_hash        VARBINARY(256)                     NOT NULL,
    //     password_salt        VARBINARY(256)                     NOT NULL,
    // );
    public class LoginModel
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordSalt { get; set; }
    }
}
