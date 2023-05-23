using Application.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Users
{
    public class Turnstile
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string StudentId { get; set; }

        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly UserManager<AppUser> _userManager;
            public Handler(DataContext context, UserManager<AppUser> userManager)
            {
                _context = context;
                _userManager = userManager;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                AppUser user = await _userManager.Users.FirstOrDefaultAsync(u=>u.StudentId == Int32.Parse(request.StudentId));

                if(user == null) return Result<Unit>.Fail("user_not_exist");

                user.Turnstile = !user.Turnstile;
                await _userManager.UpdateAsync(user);

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}