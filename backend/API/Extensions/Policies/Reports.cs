using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Reports
    {
        public static AuthorizationOptions ReportPolicy (AuthorizationOptions options) 
        {
            options.AddPolicy(PolicyTypes.Reports.Report, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Reports.Report);
            });

            options.AddPolicy(PolicyTypes.Reports.View, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Reports.View);
            });

            return options;
        }
    }
}