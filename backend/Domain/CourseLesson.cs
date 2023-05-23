using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class CourseLesson
    {
        public Guid Id { get; set; }
        public Guid CourseId { get; set; }
        public Guid LessonId { get; set; }
        public Guid TermId { get; set; }
        public Course Course { get; set; }
        public Lesson Lesson { get; set; }
        public Term Term { get; set; }
        public ICollection<CourseLessonTime> CourseLessonTimes { get; set; }
    }
}