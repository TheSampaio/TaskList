using Backend.Endpoints;
using Microsoft.Data.SqlClient;
using System.Data;

var builder = WebApplication.CreateBuilder(args);

// Register OpenAPI services and configure the database connection
builder.Services
    .AddOpenApi()
    .AddScoped<IDbConnection>(provider =>
    {
        return new SqlConnection(builder.Configuration.GetConnectionString("DefaultConnection"));
    });

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(options => options.SwaggerEndpoint("/openapi/v1.json", "Task List API"));
}

// Maps all app's endpoints
app.MapTaskEndpoints();

app.Run();
