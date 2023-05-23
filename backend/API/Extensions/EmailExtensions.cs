using System.Net.Mail;
using System.Text;
using Infrastructure.Email;

namespace API.Extensions
{
    public static class EmailExtensions
    {
        public static bool SendEmail(this string email, string body, string senderEmail, string senderPass)
        {
            string to = email; //To address    
            string from = senderEmail; //From address    
            MailMessage message = new MailMessage(from, to);

            string mailbody = body;
            message.Subject = "Register";
            message.Body = mailbody;
            message.BodyEncoding = Encoding.UTF8;
            message.IsBodyHtml = true;
            SmtpClient client = new SmtpClient("mail.smtp2go.com", 2525);
            System.Net.NetworkCredential basicCredential1 = new
            System.Net.NetworkCredential(senderEmail, senderPass);
            client.EnableSsl = true;
            client.UseDefaultCredentials = false;
            client.Credentials = basicCredential1;
            try
            {
                client.Send(message);
                return true;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}