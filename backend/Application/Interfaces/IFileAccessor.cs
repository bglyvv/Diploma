using Microsoft.AspNetCore.Http;

namespace Application.Interfaces
{
    public interface IFileAccessor
    {
        string AddFile (IFormFile file, string destination);
    }
}