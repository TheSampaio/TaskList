namespace Backend.Endpoints
{
    public static class LoginEndpoints
    {
        public static IEndpointRouteBuilder MapLoginEndpoints(this IEndpointRouteBuilder builder)
        {
            builder.MapGet("login", () =>
            {
                return "GET /login";
            });

            builder.MapPost("login", () =>
            {
                return "POST /login";
            });

            return builder;
        }
    }
}
