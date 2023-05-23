using System;
using System.Collections.Generic;

namespace Domain
{
    public class Term
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public ICollection<CourseLesson> CourseLessons { get; set; }
    }
}