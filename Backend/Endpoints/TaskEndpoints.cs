using Backend.Models;
using Dapper;
using System.Data;

namespace Backend.Endpoints
{
    public static class TaskEndpoints
    {
        public static IEndpointRouteBuilder MapTaskEndpoints(this IEndpointRouteBuilder builder)
        {
            // [GET] Retrieve All Tasks
            builder.MapGet("/api/tasks", async (IDbConnection connection) =>
            {
                const string selectQuery = @"
                    SELECT
                        id,
                        title,
                        is_done AS IsDone,
                        creation_datetime AS CreationDatetime

                    FROM tasks;
                ";

                var selectResult = await connection.QueryAsync<TaskModel>(selectQuery);
                return Results.Ok(selectResult);
            });

            // [GET] Retrieve Tasks By ID
            builder.MapGet("/api/tasks/{id:Guid}", async (IDbConnection connection, Guid id) =>
            {
                const string selectQuery = @"
                    SELECT
                        id,
                        title,
                        is_done AS IsDone,
                        creation_datetime AS CreationDatetime

                    FROM tasks
                    WHERE id = @Id;
                ";

                var selectResult = await connection.QueryFirstOrDefaultAsync<TaskModel>(selectQuery, new { Id = id });

                if (selectResult is null)
                    return Results.NotFound(new
                    {
                        error = "NotFound",
                        message = $"No task found with ID: {id}"
                    });

                return Results.Ok(selectResult);
            });

            // [POST] Create One New Task
            builder.MapPost("/api/tasks", async (IDbConnection connection, TaskModel? task) =>
            {
                if (task is null)
                    return Results.BadRequest("The request body is missing or empty.");

                if (string.IsNullOrWhiteSpace(task.Title) || task.Title.Length > 64)
                    return Results.BadRequest("Task title is required and max 64 characters.");

                // Generates the GUID and DATETIME in the backend
                task.Id = Guid.NewGuid();
                task.IsDone = false;
                task.CreationDatetime = DateTime.Now;

                const string insertQuery = @"
                    INSERT INTO tasks(id, title, is_done, creation_datetime)
                    VALUES(@Id, @Title, @IsDone, @CreationDatetime);
                ";

                await connection.ExecuteAsync(insertQuery, task);
                return Results.Created($"/api/tasks/{task.Id}", task);
            });

            // [PUT] Update Tasks By ID
            builder.MapPut("/api/tasks/{id:Guid}", async (IDbConnection connection, Guid id, TaskModel? task) =>
            {
                if (task is null)
                    return Results.BadRequest("The request body is missing or invalid.");

                if (string.IsNullOrWhiteSpace(task.Title) || task.Title.Length > 64)
                    return Results.BadRequest("Task title is required and max 64 characters.");

                const string updateQuery = @"
                    UPDATE tasks
                    SET
                        title = @Title,
                        is_done = @IsDone

                    WHERE id = @Id;
                ";

                var rowsAffected = await connection.ExecuteAsync(updateQuery, new
                {
                    Id = id,
                    task.Title,
                    task.IsDone
                });

                if (rowsAffected == 0)
                    return Results.NotFound($"No task found with ID: {id}");

                return Results.NoContent();
            });

            // [DELETE] Delete Tasks By ID
            builder.MapDelete("/api/tasks/{id:Guid}", async (IDbConnection connection, Guid id) =>
            {
                const string deleteQuery = @"
                    DELETE FROM tasks
                    WHERE id = @Id;
                ";

                var rowsAffected = await connection.ExecuteAsync(deleteQuery, new
                {
                    Id = id,
                });

                if (rowsAffected == 0)
                    return Results.NotFound($"No task found with ID: {id}");

                return Results.NoContent();
            });

            return builder;
        }
    }
}