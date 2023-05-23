using Application.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.Associates
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<AppUser>>>
        {
            public PagingParams PagingParams { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<AppUser>>>
        {
            private readonly DataContext _context;
            private readonly UserManager<AppUser> _userManager;
            public Handler(DataContext context, UserManager<AppUser> userManager)
            {
                _context = context;
                _userManager = userManager;
            }
            public async Task<Result<PagedList<AppUser>>> Handle(Query request, CancellationToken cancellationToken)
            {
                IQueryable<AppUser> users = _userManager.Users.Where(u=>!u.Deleted).OrderByDescending(u=>u.CreationDate).AsQueryable();
                return Result<PagedList<AppUser>>.Success(
                    await PagedList<AppUser>.CreateAsync(users,request.PagingParams.PageNumber, request.PagingParams.PageSize)
                );
            }
        }
    }
}