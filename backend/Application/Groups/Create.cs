using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Groups
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid CourseId { get; set; }
            public string EntranceYear { get; set; }

        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                Course course = await _context.Courses.FindAsync(request.CourseId);
                if(course == null) return Result<Unit>.Fail("course_not_exist");

                Group group = new Group 
                {
                    Course = course,
                    EntranceYear = request.EntranceYear
                };

                await _context.Groups.AddAsync(group);

                bool result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Fail("error_occured");

                return Result<Unit>.Success(Unit.Value);

            }
        }
    }
}