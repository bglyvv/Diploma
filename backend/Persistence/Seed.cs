using Domain;
using Domain.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Claim = Domain.Claims.ClaimType;
using Data = Domain.StaticData.SeedData;

namespace Persistence
{
    public static class Seed
    {
        public static async Task
        SeedData(DataContext context, RoleManager<IdentityRole> roleManager, UserManager<AppUser> userManager)
        {

            List<EntranceType> types = await context.EntranceTypes.ToListAsync();
            if (!context.EntranceTypes.Any())
            {
                types =
                    new List<EntranceType>
                    {
                        new EntranceType {Name = Data.EntranceTypes.classroom.ToString().ToLower() },
                        new EntranceType {Name = Data.EntranceTypes.tourniquet.ToString().ToLower() }
                    };

                await context.EntranceTypes.AddRangeAsync(types);

            }

            if (!context.Courses.Any())
            {
                List<Course> courses = new List<Course>
                {
                    new Course{Name = Data.Courses.pae.ToString().ToLower()},
                    new Course{Name = Data.Courses.pe.ToString().ToLower()},
                    new Course{Name = Data.Courses.ce.ToString().ToLower()},
                    new Course{Name = Data.Courses.infosec.ToString().ToLower()},
                    new Course{Name = Data.Courses.ceng.ToString().ToLower()},
                    new Course{Name = Data.Courses.bba.ToString().ToLower()},
                };

                await context.Courses.AddRangeAsync(courses);

            }

            if (!context.Terms.Any())
            {
                List<Term> terms = new List<Term>
                {
                    new Term {Name = Data.Terms.fall.ToString().ToLower()},
                    new Term {Name = Data.Terms.spring.ToString().ToLower()}
                };

                await context.Terms.AddRangeAsync(terms);

            }

            if (!context.SubjectTypes.Any())
            {

                List<SubjectType> subjectTypes = new List<SubjectType>
                {
                    new SubjectType{Name = Data.SubjectTypes.lecture.ToString().ToLower()},
                    new SubjectType{Name=Data.SubjectTypes.tutorial.ToString().ToLower()},
                    new SubjectType{Name=Data.SubjectTypes.laboratory.ToString().ToLower()}

                };

                await context.SubjectTypes.AddRangeAsync(subjectTypes);

            }

            if (!roleManager.Roles.Any())
            {
                await roleManager
                    .CreateAsync(new IdentityRole
                    {
                        Id = Guid.NewGuid().ToString(),
                        Name = Data.Roles.admin.ToString().ToUpper(),
                    });
                await roleManager
                    .CreateAsync(new IdentityRole
                    {
                        Id = Guid.NewGuid().ToString(),
                        Name = Data.Roles.student.ToString().ToUpper(),
                    });

                await roleManager
                    .CreateAsync(new IdentityRole
                    {
                        Id = Guid.NewGuid().ToString(),
                        Name = Data.Roles.teacher.ToString().ToUpper(),
                    });
            }

            if (!userManager.Users.Any())
            {
                AppUser newUser = new AppUser
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = "Diploma",
                    Surname = "Admin",
                    Email = "bglyvv@gmail.com",
                    UserName = "bglyvv@gmail.com",
                    CreationDate = DateTime.UtcNow
                };
                await userManager.CreateAsync(newUser, "admin1234");
                await userManager.AddToRoleAsync(newUser, Data.Roles.admin.ToString().ToUpper());
            }

            if (!context.TimeTemplates.Any())
            {
                TimeTemplate tt = new TimeTemplate
                {
                    Id = Guid.NewGuid(),
                    Hour = "09:00",
                    Weekday = Data.WeekDays.monday.ToString()
                };
                await context.TimeTemplates.AddAsync(tt);
            }

            if (!context.Groups.Any())
            {
                Group group = new Group
                {
                    Id = Guid.NewGuid(),
                    CourseId = (await context.Courses.FirstOrDefaultAsync(c => c.Name == Data.Courses.pae.ToString())).Id,
                    EntranceYear = "2018"
                };
                await context.Groups.AddAsync(group);
            }

            if (!context.SubGroups.Any())
            {

                List<SubGroup> subGroups = new List<SubGroup>
                {
                    new SubGroup{Id = Guid.NewGuid(), Name="PAE18.1", GroupId = (await context.Groups.FirstOrDefaultAsync(g => g.CourseId ==  context.Courses.FirstOrDefault(c => c.Name == Data.Courses.pae.ToString()).Id && g.EntranceYear == "2018")).Id},
                    new SubGroup{Id = Guid.NewGuid(), Name="PAE18.2", GroupId = (await context.Groups.FirstOrDefaultAsync(g => g.CourseId ==  context.Courses.FirstOrDefault(c => c.Name == Data.Courses.pae.ToString()).Id && g.EntranceYear == "2018")).Id}
                };
                await context.SubGroups.AddRangeAsync(subGroups);

            }

            if (!context.Subjects.Any())
            {

                List<Subject> subjects = new List<Subject>
                {
                    new Subject{Id = Guid.NewGuid(), Name="Physics"},
                    new Subject{Id = Guid.NewGuid(), Name="Math"}
                };
                await context.Subjects.AddRangeAsync(subjects);
                

            }
            
            await context.SaveChangesAsync();

            if (!context.Lessons.Any())
            {

                List<Lesson> lessons = new List<Lesson>
                {
                    new Lesson{Id = Guid.NewGuid(), SubjectId=(await context.Subjects.FirstOrDefaultAsync(s => s.Name == "Physics")).Id, TypeId = (await context.SubjectTypes.FirstOrDefaultAsync(s=>s.Name == Data.SubjectTypes.lecture.ToString())).Id},
                    new Lesson{Id = Guid.NewGuid(), SubjectId=(await context.Subjects.FirstOrDefaultAsync(s => s.Name == "Physics")).Id, TypeId = (await context.SubjectTypes.FirstOrDefaultAsync(s=>s.Name == Data.SubjectTypes.laboratory.ToString())).Id},
                };
                await context.Lessons.AddRangeAsync(lessons);

            }
            await context.SaveChangesAsync();

            DateTime date1 = new DateTime();
Console.WriteLine(DateTime.Now.Hour);  
Console.WriteLine(DateTime.Now.Minute);
string hour = "18:05";
Console.WriteLine(hour.Split(":")[0]);
Console.WriteLine(Int32.Parse(hour.Split(":")[1]));
Console.WriteLine(Int32.Parse("05"));
        }
    }
}
