using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.Associates
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string Id { get; set; }
            public string Name { get; set; }
            public string Surname { get; set; }
            public string Patronymic { get; set; }
            public string Email { get; set; }
            public string PhoneNumber { get; set; }
            public string RoleId { get; set; }
            public IFormFile Image { get; set; }
            public Guid SubGroupId { get; set; }
            public AppUser User { get; set; }

        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IFileAccessor _fileAccessor;
            private readonly UserManager<AppUser> _userManager;
            private readonly RoleManager<IdentityRole> _roleManager;
            public Handler(DataContext context, IFileAccessor fileAccessor, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
            {
                _context = context;
                _fileAccessor = fileAccessor;
                _userManager = userManager;
                _roleManager = roleManager;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                AppUser user = await _userManager.FindByIdAsync(request.Id);
                if (user == null) return Result<Unit>.Fail("user_not_exist");

                if (request.Image != null)
                {
                    string image = _fileAccessor.AddFile(request.Image, "/UserPictures");
                    user.Image = image;
                }

                if (request.SubGroupId != null)
                {
                    SubGroup subGroup = await _context.SubGroups.FindAsync(request.SubGroupId);
                    if (subGroup == null) return Result<Unit>.Fail("sub_group_not_exist");
                }

                if (_context.Roles.FindAsync(request.RoleId) == null) return Result<Unit>.Fail("role_not_exist");

                user.Name = request.Name;
                user.Surname = request.Surname;
                user.Patronymic = request.Patronymic;
                user.Email = request.Email;
                user.PhoneNumber = request.PhoneNumber;
                user.SubGroupId = request.SubGroupId;

                await _userManager.AddToRoleAsync(user, await _roleManager.GetRoleNameAsync(_roleManager.Roles.FirstOrDefault(r => r.Id == request.RoleId)));
                
                await _userManager.UpdateAsync(user);

                return Result<Unit>.Success(Unit.Value);
            }
        }

    }
}