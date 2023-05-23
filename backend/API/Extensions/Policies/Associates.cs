using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Associates
    {
        public static AuthorizationOptions AssociatePolicy(AuthorizationOptions options)
        {
            options.AddPolicy(PolicyTypes.Associates.Associate, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Associates.Associate);
            });

            options.AddPolicy(PolicyTypes.Associates.View, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Associates.View);
            });

            options.AddPolicy(PolicyTypes.Associates.Add, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Associates.Add);
            });

            options.AddPolicy(PolicyTypes.Associates.Edit, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Associates.Edit);
            });

            options.AddPolicy(PolicyTypes.Associates.PositionChange, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Associates.PositionChange);
            });

            options.AddPolicy(PolicyTypes.Associates.SendNotification, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Associates.SendNotification);
            });

            options.AddPolicy(PolicyTypes.Associates.Delete, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Associates.Delete);
            });

            options.AddPolicy(PolicyTypes.Associates.History, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Associates.History);
            });
            return options;
        }
    }
}