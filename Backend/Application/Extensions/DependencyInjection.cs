using Microsoft.Extensions.DependencyInjection;
using Backend.Application.Interfaces;
using Backend.Application.Services;

namespace Backend.Application.Extensions
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddScoped<ITasksService, TasksService>();
            return services;
        }
    }
}