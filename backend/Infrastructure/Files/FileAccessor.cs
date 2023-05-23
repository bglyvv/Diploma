using Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Renci.SshNet;

namespace Infrastructure.Files
{
    public class FileAccessor : IFileAccessor
    {
        private readonly IOptions<SFTPSettings> _config;
        public FileAccessor(IOptions<SFTPSettings> config)
        {
            _config = config;

        }
        public string AddFile(IFormFile file, string destination)
        {
            string filename = Guid.NewGuid().ToString() + "-" + file.FileName.Replace(" ","") ;
            if (file.Length > 0)
            {
                UploadFile(_config.Value.Host, _config.Value.Username, _config.Value.Password, destination, file, filename);
            }
            return $"{destination}/{filename}";
        }



        private void UploadFile(string host, string username, string password, string destination, IFormFile file, string filename)
        {
            using (SftpClient client = new SftpClient(new PasswordConnectionInfo(host, username, password)))
            {
                client.Connect();
                client.ChangeDirectory(destination);
                using (Stream fileStream = file.OpenReadStream())
                {
                    client.UploadFile(fileStream, filename);
                }

                client.Disconnect();
            }
        }

    }
}