using System;
using System.Collections.Generic;

namespace Domain
{
    public class SubjectType
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public ICollection<Lesson> Lessons { get; set; }
    }
}