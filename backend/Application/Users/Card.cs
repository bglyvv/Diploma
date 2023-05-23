using Application.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Users
{
    public class Card
    {
         public class Command : IRequest<Result<Unit>>
        {
            public string CardId { get; set; }
            public string StudentId { get; set; }

        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly UserManager<AppUser> _userManager;
            private readonly RoleManager<IdentityRole> _roleManager;
            public Handler(DataContext context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
            {
                _roleManager = roleManager;
                _context = context;
                _userManager = userManager;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                Console.WriteLine(request);
                AppUser user = await _userManager.Users.FirstOrDefaultAsync(u=>u.StudentId == Int32.Parse(request.StudentId));

                if(user == null) return Result<Unit>.Fail("user_not_exist");

                user.CardId = request.CardId;
                await _userManager.UpdateAsync(user);

                return Result<Unit>.Success(Unit.Value);
            }
        }
    
    }
}