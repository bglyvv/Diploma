using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.SignalR
{
    public class AttendanceHub : Hub
    {
        private readonly DataContext _context;
        public UserManager<AppUser> _userManager;
        public AttendanceHub(DataContext context, UserManager<AppUser> userManager)
        {
            _userManager = userManager;
            _context = context;
        }

        public async Task TurnstileStatus(string studentId)
        {
            AppUser user = await _userManager.Users.FirstOrDefaultAsync(u => u.StudentId == Int32.Parse(studentId));
            if (user == null)
            {
                await Clients.Caller.SendAsync("Error", "User doesn't exist");
                return;
            }
            user.Turnstile = !user.Turnstile;
            await _context.SaveChangesAsync();
            await Clients.All.SendAsync("getTurnstileStatus", user);
            await Clients.All.SendAsync("getTurnstileStatusForAll", _userManager.Users.ToListAsync());
        }

        public async Task ClassroomStatus(string userId)
        {
            AppUser user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                await Clients.Caller.SendAsync("Error", "User doesn't exist");
                return;
            }

            TimeTemplate timeTemplate = await _context.TimeTemplates.FirstOrDefaultAsync(t =>
            Int32.Parse((t.Hour.Split(":", System.StringSplitOptions.None))[0].ToString()) == Int32.Parse(DateTime.Now.Hour.ToString())
            && Math.Abs(Int32.Parse((t.Hour.Split(":", System.StringSplitOptions.None))[1]) - Int32.Parse(DateTime.Now.Hour.ToString())) <= 5);

            user.ActiveLessonId = _context.CourseLessonTimes.FirstOrDefault(c => c.GroupId == user.SubGroup.GroupId && c.TimeTemplateId == timeTemplate.Id).Id;

            await _userManager.UpdateAsync(user);
            await Clients.All.SendAsync("getClassRoomStatus", user);
            await Clients.All.SendAsync("getClassRoomStatusForAll", _userManager.Users.ToListAsync());
        }

        //     public async Task StartApplication(string ip)
        //     {
        //         Record record = await _context.Records.FirstOrDefaultAsync(r => r.IP == ip);
        //         if (record == null)
        //         {
        //             Record newRecord = new Record
        //             {
        //                 IP = ip,
        //                 ApplicationOpened = true,
        //                 Connected = false,
        //                 Recording = false
        //             };
        //             await _context.Records.AddAsync(newRecord);
        //         }
        //         else
        //         {
        //             record.ApplicationOpened = true;
        //         }
        //         await _context.SaveChangesAsync();
        //         await Clients.All.SendAsync("getChanges", _context.Records.ToListAsync());

        //         // await Clients.
        //     }

        //     public async Task StopApplication(string ip)
        //     {
        //         Record record = await _context.Records.FirstOrDefaultAsync(r => r.IP == ip);
        //         record.Connected = false;
        //         record.Recording = false;
        //         record.ApplicationOpened = false;
        //         await _context.SaveChangesAsync();
        //         await Clients.All.SendAsync("getChanges", _context.Records.ToListAsync());
        //         // await Clients.
        //     }

        //     public async Task StartRecord(string ip)
        //     {
        //         Record record = await _context.Records.FirstOrDefaultAsync(r => r.IP == ip);
        //         if (record.Connected == false)
        //         {
        //             await Clients.Caller.SendAsync("getError", "First you must be connected to device");
        //             return;
        //         }
        //         record.Recording = true;
        //         await _context.SaveChangesAsync();
        //         await Clients.All.SendAsync("getChanges", _context.Records.ToListAsync());
        //         await Clients.All.SendAsync("startRecord", ip);

        //         // await Clients.
        //     }

        //     public async Task StopConnection(string ip)
        //     {
        //         Record record = await _context.Records.FirstOrDefaultAsync
        //         (r => r.IP == ip);
        //         if (record.Recording == true)
        //         {
        //             record.Recording = false;
        //             await Clients.All.SendAsync("stopRecord", ip);
        //         }
        //         record.Connected = false;
        //         await _context.SaveChangesAsync();
        //         await Clients.All.SendAsync("getChanges", _context.Records.ToListAsync());

        //         // await Clients.
        //     }

        //     public async Task StopRecord(string ip)
        //     {
        //         Record record = await _context.Records.FirstOrDefaultAsync(r => r.IP == ip);

        //         record.Recording = false;
        //         await _context.SaveChangesAsync();
        //         await Clients.All.SendAsync("getChanges", _context.Records.ToListAsync());
        //         await Clients.All.SendAsync("stopRecord", ip);
        //     }
        // }
    }
}