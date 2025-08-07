<body>
  <h1>✅ Task List</h1>

  <p>
    A full-stack task management web application with an <strong>ASP.NET Core Minimal API</strong> backend and a <strong>React.js (Next.js)</strong> frontend. It uses <strong>Dapper</strong> for efficient and lightweight SQL-based data access — without relying on a traditional ORM.
  </p>

  <h2>📚 Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="features">✨ Features</h2>
  <ul>
    <li>Create, read, update, and delete tasks (<strong>CRUD</strong> operations)</li>
    <li>Task model includes: ID, title, status, and creation timestamp</li>
    <li><strong>ASP.NET Core Minimal API</strong> backend for fast and clean development</li>
    <li>Data access powered by <strong>Dapper</strong> (no heavy ORM)</li>
    <li>Responsive and modular <strong>React.js (Next.js)</strong> frontend</li>
    <li><strong>Swagger UI</strong> for easy API testing and exploration</li>
  </ul>

  <h2 id="tech-stack">🧰 Tech Stack</h2>
  <ul>
    <li><strong>Backend:</strong> ASP.NET Core 9 Minimal APIs<br />
      <em>(.NET 9 is currently in preview — .NET 7 recommended for production)</em>
    </li>
    <li><strong>Data Access:</strong> <a href="https://github.com/DapperLib/Dapper" target="_blank" rel="noopener noreferrer">Dapper</a> (lightweight SQL mapper)</li>
    <li><strong>Frontend:</strong> Next.js (React.js)</li>
    <li><strong>Database:</strong> Microsoft SQL Server</li>
    <li><strong>API Documentation:</strong> Swagger / OpenAPI 3.0</li>
  </ul>

  <h2 id="getting-started">🚀 Getting Started</h2>

  <h3>🔧 Prerequisites</h3>
  <ul>
    <li><a href="https://dotnet.microsoft.com/en-us/download/dotnet/9.0" target="_blank" rel="noopener noreferrer">.NET 9 SDK</a></li>
    <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js and npm</a> (for frontend)</li>
    <li>Microsoft SQL Server (local or cloud-based)</li>
  </ul>

  <h3>🖥️ Backend Setup</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/TheSampaio/TaskList.git
cd TaskList/Backend</code></pre>
    </li>
    <li>Update your connection string in <code>appsettings.json</code> under <code>DefaultConnection</code>.</li>
    <li>Ensure your SQL schema is created (manually or via SQL script).</li>
    <li>Run the backend:
      <pre><code>dotnet run</code></pre>
    </li>
    <li>The API will be available at:
      <br /><code>http://localhost:5000</code> or <code>https://localhost:5002</code>
    </li>
  </ol>

  <h3>🌐 Frontend Setup</h3>
  <p>(Work in progress — frontend update coming soon)</p>

  <h2 id="api-documentation">📖 API Documentation</h2>
  <p>
    The backend offers RESTful endpoints with Swagger documentation.
    After running the backend, visit:
  </p>
  <ul>
    <li><code>http://localhost:5000/swagger/index.html</code></li>
    <li><code>https://localhost:5002/swagger/index.html</code></li>
  </ul>

  <h2 id="api-endpoints">📡 API Endpoints</h2>
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
        <td>Retrieve all tasks</td>
        <td>None</td>
      </tr>
      <tr>
        <td>POST</td>
        <td><code>/api/tasks</code></td>
        <td>Create a new task</td>
        <td>
          <pre><code>{
  "id": "uuid",
  "title": "Example Task",
  "isDone": false,
  "creationDatetime": "2025-08-05T22:04:15Z"
}</code></pre>
        </td>
      </tr>
      <tr>
        <td>GET</td>
        <td><code>/api/tasks/{id}</code></td>
        <td>Retrieve task by ID</td>
        <td>None</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td><code>/api/tasks/{id}</code></td>
        <td>Update task by ID</td>
        <td>
          <pre><code>{
  "id": "uuid",
  "title": "Updated Task",
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

  <h2 id="license">📃 License</h2>
  <p>
    This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.
  </p>

  <hr />

  <p><em>💡 Contributions, issues, and suggestions are welcome. Let's build together!</em></p>
</body>
