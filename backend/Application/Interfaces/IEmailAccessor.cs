namespace Application.Interfaces
{
    public interface IEmailAccessor
    {
        bool SendEmail (string email, string body, string SenderEmail, string SenderPass);
    }
}