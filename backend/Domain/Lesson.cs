using System;
using System.Collections.Generic;

namespace Domain
{
    public class Lesson
    {
        public Guid Id { get; set; }
        public Guid SubjectId { get; set; }
        public Guid TypeId { get; set; }
        public Subject Subject { get; set; }
        public SubjectType Type { get; set; }
        public ICollection<CourseLesson> CourseLessons { get; set; }
    }
}