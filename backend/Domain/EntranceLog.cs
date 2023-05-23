using System;

namespace Domain
{
    public class EntranceLog
    {
        public Guid Id { get; set; }
        public string AppUserId { get; set; }
        public Guid EnteanceTypeId { get; set; }
        public Guid CourseLessonTimeId { get; set; }
        public AppUser User { get; set; }
        public EntranceType EntranceType { get; set; }
        public CourseLessonTime CourseLessonTime { get; set; }
        public DateTime Time { get; set; }
    }
}