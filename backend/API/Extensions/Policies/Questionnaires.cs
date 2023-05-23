using Domain.Claims;
using Microsoft.AspNetCore.Authorization;

namespace API.Extensions.Policies
{
    public static class Questionnaires
    {
        public static AuthorizationOptions QuestionnairePolicy(AuthorizationOptions options)
        {
            options.AddPolicy(PolicyTypes.Questionnaires.Questionnaire, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Questionnaires.Questionnaire);
            });

            options.AddPolicy(PolicyTypes.Questionnaires.View, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Questionnaires.View);
            });

            options.AddPolicy(PolicyTypes.Questionnaires.Add, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Questionnaires.Add);
            });

            options.AddPolicy(PolicyTypes.Questionnaires.Edit, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Questionnaires.Edit);
            });

            options.AddPolicy(PolicyTypes.Questionnaires.Delete, policy =>
            {
                policy.RequireClaim(ClaimType.Permission, Permissions.Questionnaires.Delete);
            });

            return options;
        }
    }
}