using Application.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.Associates
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string Id { get; set; }
            public AppUser User { get; set; }

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
                AppUser user = await _userManager.FindByIdAsync(request.Id);
                if (user == null) return Result<Unit>.Fail("user_not_exist");

                user.Deleted = true;
                user.DeletedBy = request.User.Id;
                user.DeletionDate = DateTime.UtcNow;
                
                await _userManager.UpdateAsync(user);
                
                return Result<Unit>.Success(Unit.Value);
            }
        }

    }
}