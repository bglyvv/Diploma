using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Documents
    {
        public static AuthorizationOptions DocumentPolicy (AuthorizationOptions options) 
        {
            options.AddPolicy(PolicyTypes.Documents.Document, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Documents.Document);
            });

            options.AddPolicy(PolicyTypes.Documents.View, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Documents.View);
            });

            options.AddPolicy(PolicyTypes.Documents.Add, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Documents.Add);
            });

            options.AddPolicy(PolicyTypes.Documents.Edit, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Documents.Edit);
            });

            options.AddPolicy(PolicyTypes.Documents.Delete, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Documents.Delete);
            });

            options.AddPolicy(PolicyTypes.Documents.History, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Documents.History);
            });

            options.AddPolicy(PolicyTypes.Documents.ChangeStatus, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Documents.ChangeStatus);
            });

            return options;
        }
    }
}