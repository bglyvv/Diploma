using API.Extensions.Policies;

namespace API.Extensions
{
    public static class PolicyServiceExtensions
    {
        
        public static IServiceCollection AddPolicyExtensions (this IServiceCollection services, IConfiguration config) 
        {
            services.AddAuthorization(opt => 
            {

                // Club Policies
                Clubs.ClubPolicy(opt);

                // Associate Policy
                Associates.AssociatePolicy(opt);

                // Document Policy
                Documents.DocumentPolicy(opt);

                // Questionnaire Policy
                Questionnaires.QuestionnairePolicy(opt);

                // Announcement Policy
                Announcements.AnnouncementPolicy(opt);

                // Role Policy
                Roles.RolePolicy(opt);

                // Meeting Policy
                Meetings.MeetingPolicy(opt);

                // Season Policy
                Seasons.SesonPolicy(opt);

                // Template Policy
                Templates.TemplatePolicy(opt);

                // Report Policy 
                Reports.ReportPolicy(opt);




            });
            return services;
        } 
    }
}