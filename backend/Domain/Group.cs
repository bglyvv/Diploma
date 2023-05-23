using System;

namespace Domain
{
    public class Group
    {
        public Guid Id { get; set; }
        public Guid CourseId { get; set; }
        public string EntranceYear { get; set; }
        public Course Course { get; set; }
    }
}