using System.Reflection;
using Application.Core;
using Application.Interfaces;
using Application.Groups;
using AutoMapper;
using Infrastructure.Email;
using Infrastructure.Files;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection
        AddApplicationServices(
            this IServiceCollection services,
            IConfiguration config,
            IWebHostEnvironment env
        )
        {
            services.AddEndpointsApiExplorer();
            services
                .AddSwaggerGen(opt =>
                {

                    var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                    opt.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
                });


            // services
            //     .AddDbContext<DataContext>(opt =>
            //     {
            //         opt
            //             .UseSqlServer(config
            //                 .GetConnectionString("DefaultConnection"));
            //     });

            services
                .AddDbContext<DataContext>(opt =>
                {
                    opt
                        .UseSqlite(config
                            .GetConnectionString("DefaultConnection"));
                });

            services.AddMediatR(typeof(Create.Handler));
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            services.AddScoped<IFileAccessor, FileAccessor>();
            services.AddScoped<IEmailAccessor, EmailAccessor>();
            services.Configure<SFTPSettings>(config.GetSection("SFTPConnection"));
            services.Configure<EmailSettings>(config.GetSection("EmailCredentials"));
            services.AddSignalR();

            return services;
        }
    }
}
