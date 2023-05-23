using System;
using System.Collections.Generic;

namespace Domain
{
    public class Course
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public ICollection<CourseLesson> CourseLessons { get; set; }
    }
}