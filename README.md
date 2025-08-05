<body>
  <h1>Task Manager</h1>

  <p>A full-stack task manager web application featuring an ASP.NET Core Minimal API backend and a React.js frontend.</p>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="features">Features</h2>
  <ul>
    <li>Create, read, update, and delete tasks (CRUD operations)</li>
    <li>Task attributes: ID, title, completion status, and creation timestamp</li>
    <li>Minimal and fast backend using ASP.NET Core Minimal APIs</li>
    <li>Responsive React.js frontend (frontend repo/link can be added here)</li>
    <li>OpenAPI (Swagger) documentation included for easy API exploration</li>
  </ul>

  <h2 id="tech-stack">Tech Stack</h2>
  <ul>
    <li><strong>Backend:</strong> ASP.NET Core 9 Minimal APIs <br /><em>(.NET 9 is currently in preview; consider .NET 7 for production)</em></li>
    <li><strong>Frontend:</strong> React.js</li>
    <li><strong>Database:</strong> Microsoft SQL Server</li>
    <li><strong>API Docs:</strong> Swagger / OpenAPI 3.0</li>
  </ul>

  <h2 id="getting-started">Getting Started</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li><a href="https://dotnet.microsoft.com/en-us/download/dotnet/9.0" target="_blank" rel="noopener noreferrer">.NET 9 SDK</a></li>
    <li>Node.js and npm (for frontend)</li>
    <li>Microsoft SQL Server or other DB server setup</li>
  </ul>

  <h3>Setup Backend</h3>
  <ol>
    <li>Clone this repository<br />
      <pre><code>git clone https://github.com/TheSampaio/TaskManager.git
cd TaskManager/Backend</code></pre>
    </li>
    <li>Configure your database connection string in <code>appsettings.json</code> under <code>DefaultConnection</code>.</li>
    <li>Run the backend:<br />
      <pre><code>dotnet run</code></pre>
    </li>
    <li>The backend API will be available at:<br />
      <code>http://localhost:5000</code>
    </li>
  </ol>

  <h3>Setup Frontend</h3>
  <p>(Work in progress)</p>

  <h2 id="api-documentation">API Documentation</h2>
  <p>The backend exposes a RESTful API documented with OpenAPI 3.0.<br />
    You can explore and test the API by running the backend and navigating to:</p>
  <p><code>http://localhost:5000/swagger/index.html</code></p>

  <h2 id="api-endpoints">API Endpoints</h2>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
        <th>Request Body Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>GET</td>
        <td><code>/api/tasks</code></td>
        <td>Get all tasks</td>
        <td>None</td>
      </tr>
      <tr>
        <td>POST</td>
        <td><code>/api/tasks</code></td>
        <td>Create a new task</td>
        <td>
          <pre><code>{
  "id": "uuid",
  "title": "string",
  "isDone": true,
  "creationDatetime": "2025-08-05T22:04:15Z"
}</code></pre>
        </td>
      </tr>
      <tr>
        <td>GET</td>
        <td><code>/api/tasks/{id}</code></td>
        <td>Get task by ID</td>
        <td>None</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td><code>/api/tasks/{id}</code></td>
        <td>Update task by ID</td>
        <td>
          <pre><code>{
  "id": "uuid",
  "title": "string",
  "isDone": true,
  "creationDatetime": "2025-08-05T22:04:15Z"
}</code></pre>
        </td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td><code>/api/tasks/{id}</code></td>
        <td>Delete task by ID</td>
        <td>None</td>
      </tr>
    </tbody>
  </table>

  <h2 id="license">License</h2>
  <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

  <hr />

  <p><em>Feel free to contribute or open issues!</em></p>
</body>
