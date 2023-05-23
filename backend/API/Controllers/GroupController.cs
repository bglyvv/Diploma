using System.Security.Claims;
using API.DTOs.GroupDTOs;
using Application.Groups;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class GroupController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        public GroupController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("create")]
        public async Task<IActionResult> CreateGroup(GroupDto groupDto) 
        {
            AppUser user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            if(user == null || user.Deleted) return NotFound("user_not_exist");

            return HandleResult(await Mediator.Send(new Create.Command 
            {
                CourseId =  groupDto.CourseId,
                EntranceYear = groupDto.EntranceYear
            }));
        }

        // [Authorize(Roles = "Admin")]
        // [HttpPost("sub-group/create")]
        // public async Task<IActionResult> CreateSubGroup() {return Ok("");}
    }
}