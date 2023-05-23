using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Templates
    {
        public static AuthorizationOptions TemplatePolicy (AuthorizationOptions options) 
        {
            options.AddPolicy(PolicyTypes.Templates.Template, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Templates.Template);
            });

            options.AddPolicy(PolicyTypes.Templates.View, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Templates.View);
            });

            options.AddPolicy(PolicyTypes.Templates.Edit, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Templates.Edit);
            });

            return options;
        }
    }
}