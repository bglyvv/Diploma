using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseLesson> CourseLessons { get; set; }
        public DbSet<CourseLessonTime> CourseLessonTimes { get; set; }
        public DbSet<EntranceLog> EntranceLogs { get; set; }
        public DbSet<EntranceType> EntranceTypes { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<SubGroup> SubGroups { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<SubjectType> SubjectTypes { get; set; }
        public DbSet<Term> Terms { get; set; }
        public DbSet<TimeTemplate> TimeTemplates { get; set; }
        


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<AppUser>().HasOne(u=>u.CourseLessonTime).WithMany(c=>c.Students).HasForeignKey(u=>u.ActiveLessonId);

        }

    }
}