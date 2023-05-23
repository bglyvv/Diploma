using Application.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Users
{
    public class Classroom
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string UserId { get; set; }

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
                AppUser user = await _userManager.FindByIdAsync(request.UserId);

                if(user!=null) return Result<Unit>.Fail("user_not_exist");

                TimeTemplate timeTemplate = await _context.TimeTemplates.FirstOrDefaultAsync(t=>
                Int32.Parse((t.Hour.Split(":", System.StringSplitOptions.None))[0].ToString()) == Int32.Parse(DateTime.Now.Hour.ToString())
                && Math.Abs(Int32.Parse((t.Hour.Split(":", System.StringSplitOptions.None))[1]) - Int32.Parse(DateTime.Now.Hour.ToString())) <= 5);

                user.ActiveLessonId =  _context.CourseLessonTimes.FirstOrDefault(c=>c.GroupId == user.SubGroup.GroupId && c.TimeTemplateId == timeTemplate.Id).Id;

                await _userManager.UpdateAsync(user);

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}