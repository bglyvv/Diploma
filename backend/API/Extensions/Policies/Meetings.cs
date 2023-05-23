using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Meetings
    {
        public static AuthorizationOptions MeetingPolicy (AuthorizationOptions options) 
        {
            options.AddPolicy(PolicyTypes.Meetings.Meeting, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.Meeting);
            });

            options.AddPolicy(PolicyTypes.Meetings.View, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.View);
            });

            options.AddPolicy(PolicyTypes.Meetings.Add, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.Add);
            });

            options.AddPolicy(PolicyTypes.Meetings.Edit, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.Edit);
            });

            options.AddPolicy(PolicyTypes.Meetings.Calendar, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.Calendar);
            });

            options.AddPolicy(PolicyTypes.Meetings.Cancel, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.Cancel);
            });

            options.AddPolicy(PolicyTypes.Meetings.Verify, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.Verify);
            });

            options.AddPolicy(PolicyTypes.Meetings.Conclusion, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.Conclusion);
            });

            options.AddPolicy(PolicyTypes.Meetings.SendNotification, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.SendNotification);
            });

            options.AddPolicy(PolicyTypes.Meetings.Execution, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Meetings.Execution);
            });
    
            return options;
        }
    }
}