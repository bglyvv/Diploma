using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class CourseLessonTime
    {
        public Guid Id { get; set; }
        public Guid CourseLessonId { get; set; }
        public Guid TimeTemplateId { get; set; }
        public Guid GroupId { get; set; }
        [ForeignKey("Teacher")]
        public string TeachingBy { get; set; }
        public CourseLesson CourseLesson { get; set; }
        public TimeTemplate TimeTemplate { get; set; }
        public Group Group { get; set; }
        public AppUser Teacher { get; set; }
        public ICollection<AppUser> Students { get; set; }
        public ICollection<AppUser> Users { get; set; }
    }
}