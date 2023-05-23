using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.Users
{

    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string Name { get; set; }
            public string Surname { get; set; }
            public string Patronymic { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public IFormFile Image { get; set; }
            public Guid SubGroupId { get; set; }
            public AppUser User { get; set; }
            public string Role { get; set; }
            public int StudentId { get; set; }

        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IFileAccessor _fileAccessor;
            private readonly UserManager<AppUser> _userManager;
            private readonly RoleManager<IdentityRole> _roleManager;
            public Handler(DataContext context, IFileAccessor fileAccessor, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
            {
                _roleManager = roleManager;
                _context = context;
                _fileAccessor = fileAccessor;
                _userManager = userManager;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                // string image = _fileAccessor.AddFile(request.Image, "/UserPictures");
                // if (request.SubGroupId != null)
                // {
                //     SubGroup subGroup = await _context.SubGroups.FindAsync(request.SubGroupId);
                //     if (subGroup == null) return Result<Unit>.Fail("sub_group_not_exist");
                // }


                AppUser newUser = new AppUser
                {
                    Name = request.Name,
                    Surname = request.Surname,
                    Patronymic = request.Patronymic,
                    Email = request.Email,
                    UserName = request.Email,
                    StudentId = request.StudentId
                };

                IdentityResult res = await _userManager.CreateAsync(newUser, request.Password);
                if (!res.Succeeded) return Result<Unit>.Fail(res.Errors.ToString());

                await _userManager.AddToRoleAsync(newUser, request.Role.ToUpper());

                bool result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Fail("error_occured");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}