namespace API.DTOs.AccountDTOs
{
    public class RegisterDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Patronymic { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public IFormFile Image { get; set; }
        public Guid SubGroupId { get; set; }
        public string Role { get; set; }
        public int StudentId { get; set; }
    }
}