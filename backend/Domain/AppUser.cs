using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Patronymic { get; set; }
        public string Image { get; set; }
        public int? StudentId { get; set; }
        public string CardId { get; set; }
        public string DeletedBy{ get; set; }
        [ForeignKey("CourseLessonTime")]
        public Guid? ActiveLessonId { get; set; }
        public Guid? SubGroupId { get; set; }
        public SubGroup SubGroup { get; set; }
        public CourseLessonTime CourseLessonTime { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime DeletionDate { get; set; }
        public bool Deleted { get; set; }
        public bool Turnstile { get; set; }

        public AppUser()
        {
            Deleted = false;
            Image = "/UserPictures/placeholder.png";
        }
        

    }
}