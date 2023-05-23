using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Roles
    {
        public static AuthorizationOptions RolePolicy(AuthorizationOptions options)
        {
            options.AddPolicy(PolicyTypes.Roles.Role, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Roles.Role);
            });

            options.AddPolicy(PolicyTypes.Roles.View, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Roles.View);
            });

            options.AddPolicy(PolicyTypes.Roles.Add, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Roles.Add);
            });

            options.AddPolicy(PolicyTypes.Roles.Edit, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Roles.Edit);
            });

            options.AddPolicy(PolicyTypes.Roles.Delete, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Roles.Delete);
            });

            return options;
        }
    }
}