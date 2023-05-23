using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class TimeTemplate
    {
        public Guid Id { get; set; }
        public string Hour { get; set; }
        public string Weekday { get; set; }
        public ICollection<CourseLessonTime> CourseLessonTimes { get; set; }
    }
}