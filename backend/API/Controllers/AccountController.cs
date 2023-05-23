using System.Security.Claims;
using API.DTOs.AccountDTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Application.Interfaces;
using Application.Users;

namespace API.Controllers
{

    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly TokenService _tokenService;
        private readonly DataContext _context;
        private readonly IConfiguration _config;
        private readonly IEmailAccessor _emailAccessor;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountController(UserManager<AppUser> userManager, TokenService tokenService, DataContext context, IConfiguration config, IEmailAccessor emailAccessor, RoleManager<IdentityRole> roleManager)
        {
            _config = config;
            _context = context;
            _tokenService = tokenService;
            _userManager = userManager;
            _emailAccessor = emailAccessor;
            _roleManager = roleManager;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {

            AppUser user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null || user.Deleted) return Unauthorized("user_not_exist");

            var result = await _userManager.CheckPasswordAsync(user, loginDto.Password);

            if (!result) return Unauthorized("credentials_error");

            return UserObject(user);
        }

        [Authorize(Roles = "ADMIN")]
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {

            AppUser user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            if (user == null || user.Deleted || (await _userManager.GetRolesAsync(user))[0].ToLower() != "admin") return Unauthorized("user_not_exist");

            if ((await _userManager.GetRolesAsync(user))[0].ToLower() != "admin") return Unauthorized("user_no_right");

            return HandleResult(await Mediator.Send(new Create.Command
            {
                Name = registerDto.Name,
                Surname = registerDto.Surname,
                Patronymic = registerDto.Patronymic,
                Email = registerDto.Email,
                Password = registerDto.Password,
                User = user,
                Role = registerDto.Role,
                StudentId = registerDto.StudentId
            }));
        }


        // [Authorize(Roles = "ADMIN")]
        // AppUser user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

        // if (user == null || user.Deleted || (await _userManager.GetRolesAsync(user))[0].ToLower() != "admin") return Unauthorized("user_not_exist");

        // if ((await _userManager.GetRolesAsync(user))[0].ToLower() != "admin") return Unauthorized("user_no_right");


        [AllowAnonymous]
        [HttpPost("card")]
        public async Task<ActionResult<UserDto>> AddCard(CardDto cardDto)
        {

            return HandleResult(await Mediator.Send(new Card.Command
            {
                StudentId = cardDto.StudentId,
                CardId = cardDto.CardId
            }));
        }

        [AllowAnonymous]
        [HttpPost("turnstile")]
        public async Task<ActionResult<UserDto>> ReadCard(TurnstileDto turnstile)
        {

            return HandleResult(await Mediator.Send(new Turnstile.Command
            {
                StudentId = turnstile.StudentId,
            }));
        }

        [AllowAnonymous]
        [HttpPost("classroom")]
        public async Task<ActionResult<UserDto>> ChangeStatus(ClassroomDto classroomDto)
        {

            return HandleResult(await Mediator.Send(new Classroom.Command
            {
                UserId = classroomDto.User,
            }));
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return UserObject(user);
        }

        [NonAction]
        public UserDto UserObject(AppUser user)
        {
            return new UserDto
            {
                Email = user.Email,
                Name = user.Name,
                Surname = user.Surname,
                Image = user.Image,
                Token = _tokenService.CreateToken(user),
            };
        }





    }
}