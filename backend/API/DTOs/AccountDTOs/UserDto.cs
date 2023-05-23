namespace API.DTOs.AccountDTOs
{
    public class UserDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Image { get; set; }
        public Task<string> Token { get; set; }
    }
}