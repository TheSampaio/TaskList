using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Backend.Domain.Interfaces;
using Backend.Infrastructure.Repositories;

namespace Backend.Infrastructure.Extensions
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection")
                ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

            services.AddScoped<IDbConnection>(_ => new SqlConnection(connectionString));
            services.AddScoped<IAccountsRepository, AccountsRepository>();
            services.AddScoped<ITasksRepository, TasksRepository>();

            return services;
        }
    }
}