using System.Net.Mail;
using System.Text;
using Application.Interfaces;

namespace Infrastructure.Email
{
    public class EmailAccessor : IEmailAccessor
    {

        public bool SendEmail(string email, string body, string SenderEmail, string SenderPass)
        {
            string to = email; //To address    
            string from = SenderEmail; //From address    
            MailMessage message = new MailMessage(from, to);

            string mailbody = body;
            message.Subject = "Register";
            message.Body = mailbody;
            message.BodyEncoding = Encoding.UTF8;
            message.IsBodyHtml = true;
            SmtpClient client = new SmtpClient("mail.smtp2go.com", 2525);
            System.Net.NetworkCredential basicCredential1 = new
            System.Net.NetworkCredential(SenderEmail, SenderPass);
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