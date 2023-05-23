using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Seasons
    {
        public static AuthorizationOptions SesonPolicy(AuthorizationOptions options)
        {
            options.AddPolicy(PolicyTypes.Seasons.Season, policy => 
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.Season);
            });

            options.AddPolicy(PolicyTypes.Seasons.View, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.View);
            });

            options.AddPolicy(PolicyTypes.Seasons.Add, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.Add);
            });

            options.AddPolicy(PolicyTypes.Seasons.Edit, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.Edit);
            });

            options.AddPolicy(PolicyTypes.Seasons.Delete, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.Delete);
            });

            options.AddPolicy(PolicyTypes.Seasons.Verify, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.Verify);
            });

            options.AddPolicy(PolicyTypes.Seasons.Conclusion, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.Conclusion);
            });

            options.AddPolicy(PolicyTypes.Seasons.History, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.History);
            });                          

            options.AddPolicy(PolicyTypes.Seasons.ViewColor, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.ViewColor);
            });

            options.AddPolicy(PolicyTypes.Seasons.EditColor, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.EditColor);
            });

            options.AddPolicy(PolicyTypes.Seasons.ViewClub, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.ViewClub);
            });

            options.AddPolicy(PolicyTypes.Seasons.AddClub, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.AddClub);
            });

            options.AddPolicy(PolicyTypes.Seasons.EditClub, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.EditClub);
            });

            options.AddPolicy(PolicyTypes.Seasons.DeleteClub, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.DeleteClub);
            });

            options.AddPolicy(PolicyTypes.Seasons.ClubHistory, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.ClubHistory);
            });

            options.AddPolicy(PolicyTypes.Seasons.CancelLicense, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.CancelLicense);
            });

            options.AddPolicy(PolicyTypes.Seasons.ViewSection, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.ViewSection);
            });

            options.AddPolicy(PolicyTypes.Seasons.AddSection, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.AddSection);
            });

            options.AddPolicy(PolicyTypes.Seasons.EditSection, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.EditSection);
            });

            options.AddPolicy(PolicyTypes.Seasons.SectionHistory, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.SectionHistory);
            });                          

            options.AddPolicy(PolicyTypes.Seasons.CriterionOverview, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.CriterionOverview);
            });

            options.AddPolicy(PolicyTypes.Seasons.AddCriterion, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.AddCriterion);
            });

            options.AddPolicy(PolicyTypes.Seasons.EditCriterion, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.EditCriterion);
            });

            options.AddPolicy(PolicyTypes.Seasons.DeleteCriterion, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.DeleteCriterion);
            });

            options.AddPolicy(PolicyTypes.Seasons.CriterionPreview, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.CriterionPreview);
            });

            options.AddPolicy(PolicyTypes.Seasons.VerifyCriterion, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.VerifyCriterion);
            });

            options.AddPolicy(PolicyTypes.Seasons.CriterionHistory, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.CriterionHistory);
            });

            options.AddPolicy(PolicyTypes.Seasons.ViewDocument, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.ViewDocument);
            });

            options.AddPolicy(PolicyTypes.Seasons.AddDocument, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.AddDocument);
            });

            options.AddPolicy(PolicyTypes.Seasons.DeleteDocument, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.DeleteDocument);
            });

            options.AddPolicy(PolicyTypes.Seasons.EditDocument, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.EditDocument);
            });

            options.AddPolicy(PolicyTypes.Seasons.DocumentHistory, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Seasons.DocumentHistory);
            });

            return options;
        }
    }
}