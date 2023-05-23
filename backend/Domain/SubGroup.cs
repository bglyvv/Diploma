using System;

namespace Domain
{
    public class SubGroup
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid GroupId { get; set; }
        public Group Group { get; set; }
    }
}