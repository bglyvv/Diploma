using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Clubs
    {
        public static AuthorizationOptions ClubPolicy(AuthorizationOptions options)
        {
            options.AddPolicy(PolicyTypes.Clubs.Club, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Clubs.Club);
            });

            options.AddPolicy(PolicyTypes.Clubs.View, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Clubs.View);
            });

            options.AddPolicy(PolicyTypes.Clubs.Add, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Clubs.Add);
            });

            options.AddPolicy(PolicyTypes.Clubs.Edit, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Clubs.Edit);
            });

            options.AddPolicy(PolicyTypes.Clubs.NameChange, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Clubs.NameChange);
            });

            options.AddPolicy(PolicyTypes.Clubs.History, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Clubs.History);
            });

            options.AddPolicy(PolicyTypes.Clubs.Delete, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Clubs.Delete);
            });

            return options;

        }
    }
}