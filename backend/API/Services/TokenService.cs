using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class TokenService
    {
        private readonly IConfiguration _config;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public TokenService(IConfiguration config, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _config = config;
            _userManager = userManager;
            _roleManager = roleManager;

        }

        public async Task<string> CreateToken(AppUser user, Guid? OTPid = null, string resetPassToken =null)
        {
            List<Claim> claims = new List<Claim>();
            string role =  ((IEnumerable<string>) await _userManager.GetRolesAsync(user)).FirstOrDefault();
            IEnumerable<Claim> userClaims = await _userManager.GetClaimsAsync(user).ConfigureAwait(false);
            List<Claim> roleClaims = new List<Claim>();
            List<Claim> userRoles = new List<Claim>();

            if(role != null) 
            {
                
                userRoles.Add(new Claim(ClaimTypes.Role, role));
                roleClaims = (List<Claim>)await _roleManager.GetClaimsAsync(await _roleManager.FindByNameAsync(role)).ConfigureAwait(false);
            }
            
            if (OTPid == null && resetPassToken == null)
            {
                claims.AddRange
                (
                    new List<Claim>
                    {
                            new Claim(ClaimTypes.Email, user.Email),
                            new Claim(ClaimTypes.NameIdentifier, user.Id),
                            new Claim(ClaimTypes.Name, user.Name),
                            new Claim(ClaimTypes.Surname, user.Surname)
                    }.Union(userClaims).Union(roleClaims).Union(userRoles)
                );
            }
            else
            {
                claims.AddRange
                (
                    new List<Claim>
                    {
                            new Claim(ClaimTypes.Email, user.Email),
                            new Claim(ClaimTypes.NameIdentifier, OTPid.ToString()),
                            new Claim(ClaimTypes.Authentication, resetPassToken),
                    }
                );
            }
            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["TokenKey"]));
            SigningCredentials credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = credentials
            };

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        // private async Task<IList<Claim>> GetRoleClaimsAsync(IList<string> roles)
        // {
        //     IList<Claim> roleClaims; 
        //     foreach (string role in roles) 
        //     {
        //         roleClaims = await _roleManager.GetClaimsAsync(await _roleManager.FindByNameAsync(role));
        //     }
        //     return roleClaims;
        // }
    }
}