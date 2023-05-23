using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Announcements
    {
        public static AuthorizationOptions AnnouncementPolicy(AuthorizationOptions options)
        {
            options.AddPolicy(PolicyTypes.Announcements.Announcement, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Announcements.Announcement);
            });

            options.AddPolicy(PolicyTypes.Announcements.View, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Announcements.View);
            });

            options.AddPolicy(PolicyTypes.Announcements.Add, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Announcements.Add);
            });

            options.AddPolicy(PolicyTypes.Announcements.Edit, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Announcements.Edit);
            });

            options.AddPolicy(PolicyTypes.Announcements.Delete, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Announcements.Delete);
            });

            options.AddPolicy(PolicyTypes.Announcements.SendNotification, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Announcements.SendNotification);
            });

            options.AddPolicy(PolicyTypes.Announcements.ViewAll, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Announcements.ViewAll);
            });

            options.AddPolicy(PolicyTypes.Announcements.DeleteComment, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Announcements.DeleteComment);
            });

            options.AddPolicy(PolicyTypes.Announcements.ChangeStatus, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Announcements.ChangeStatus);
            });

            return options;
        }
    }
}