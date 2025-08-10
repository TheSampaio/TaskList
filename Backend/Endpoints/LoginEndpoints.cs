using Backend.Models;
using Dapper;
using System.Data;

namespace Backend.Endpoints
{
    public static class LoginEndpoints
    {
        public static IEndpointRouteBuilder MapLoginEndpoints(this IEndpointRouteBuilder builder)
        {
            builder.MapPost("login", (IDbConnection connection) =>
            {
                return "POST /login";
            });

            return builder;
        }
    }
}
