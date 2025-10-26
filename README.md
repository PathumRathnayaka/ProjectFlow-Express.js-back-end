# ProjectFlow - Express.js Backend

A robust RESTful API built with Express.js, TypeScript, and MongoDB for managing projects, tasks, teams, and members.

## 🚀 Features

- **Project Management**: Create, update, and track projects with status and progress
- **Task Management**: Organize tasks with priorities, assignments, and deadlines
- **Team Management**: Manage teams with leaders and members
- **User Management**: Handle user roles, departments, and activity status
- **RESTful API**: Clean and intuitive API endpoints
- **TypeScript**: Full type safety and better developer experience
- **MongoDB**: Flexible NoSQL database with Mongoose ODM

## 🛠️ Tech Stack

- **Runtime**: Node.js 22.x
- **Framework**: Express.js 5.1.0
- **Language**: TypeScript 5.9.3
- **Database**: MongoDB with Mongoose 8.19.2
- **CORS**: Enabled for cross-origin requests
- **Environment Variables**: dotenv for configuration

## 📋 Prerequisites

- Node.js 22.x or higher
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/PathumRathnayaka/ProjectFlow-Express.js-back-end.git
cd ProjectFlow-Express.js-back-end
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/projectflow?retryWrites=true&w=majority
PORT=8080
NODE_ENV=development
```

4. **Build the project**
```bash
npm run build
```

5. **Run the development server**
```bash
npm run dev
```

The server will start at `http://localhost:8080`

## 📁 Project Structure

```
ProjectFlow-Express.js-back-end/
├── src/
│   ├── config/
│   │   └── db.ts                 # Database configuration
│   ├── controllers/
│   │   ├── memberController.ts   # Member/User logic
│   │   ├── projectController.ts  # Project logic
│   │   ├── taskController.ts     # Task logic
│   │   └── teamController.ts     # Team logic
│   ├── models/
│   │   ├── Member.ts             # User/Member schema
│   │   ├── Project.ts            # Project schema
│   │   ├── Task.ts               # Task schema
│   │   └── Team.ts               # Team schema
│   ├── routes/
│   │   ├── memberRoutes.ts       # Member API routes
│   │   ├── projectRoutes.ts      # Project API routes
│   │   ├── taskRoutes.ts         # Task API routes
│   │   └── teamRoutes.ts         # Team API routes
│   └── server.ts                 # Main application entry
├── .env                          # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── vercel.json                   # Vercel deployment config
```

## 🌐 API Endpoints

### Base URL
- **Local**: `http://localhost:8080/api/v1/projectflow`
- **Production**: `https://project-flow-express-js-back-end.vercel.app/api/v1/projectflow`

### Projects
- `GET /project` - Get all projects
- `GET /project/:id` - Get project by ID
- `POST /project` - Create new project
- `PUT /project/:id` - Update project
- `DELETE /project/:id` - Delete project

### Tasks
- `GET /task` - Get all tasks
- `GET /task/:id` - Get task by ID
- `POST /task` - Create new task
- `PUT /task/:id` - Update task
- `DELETE /task/:id` - Delete task

### Teams
- `GET /team` - Get all teams
- `GET /team/:id` - Get team by ID
- `POST /team` - Create new team
- `PUT /team/:id` - Update team
- `DELETE /team/:id` - Delete team

### Members (Users)
- `GET /member` - Get all members
- `GET /member/:id` - Get member by ID
- `POST /member` - Create new member
- `PUT /member/:id` - Update member
- `DELETE /member/:id` - Delete member

## 📝 Example API Usage

### Create a Task
```bash
POST /api/v1/projectflow/task
Content-Type: application/json

{
  "title": "Design Homepage Mockup",
  "description": "Create high-fidelity mockup for the new homepage design",
  "status": "new",
  "priority": "high",
  "projectId": "1",
  "assigneeId": "1",
  "reporterId": "1",
  "dueDate": "2024-01-25",
  "estimatedHours": 16,
  "actualHours": 0,
  "tags": ["design", "ui/ux"]
}
```

### Get All Projects
```bash
GET /api/v1/projectflow/project
```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel --prod
```

4. **Set Environment Variables in Vercel Dashboard**
- Go to Project Settings → Environment Variables
- Add `MONGO_URI` with your MongoDB connection string
- Add `PORT` with value `8080`
- Add `NODE_ENV` with value `production`

### MongoDB Atlas Setup

1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user
3. Whitelist IP addresses (use `0.0.0.0/0` for all IPs or add Vercel IPs)
4. Get your connection string and add it to environment variables

## 🔒 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `PORT` | Server port | `8080` |
| `NODE_ENV` | Environment mode | `development` or `production` |

## 🧪 Available Scripts

```bash
npm run dev        # Run development server with nodemon
npm run build      # Compile TypeScript to JavaScript
npm start          # Run production server
npm run vercel-build # Build for Vercel deployment
```

## 🐛 Common Issues

### CORS Error
If you get CORS errors, make sure your frontend URL is added to the CORS whitelist in `src/server.ts`

### Database Connection Failed
- Check if `MONGO_URI` is correctly set in environment variables
- Verify MongoDB Atlas IP whitelist includes your server's IP
- Ensure database user has correct permissions

### Vercel Deployment Timeout
- Vercel serverless functions have a 10-second timeout
- Database connections are cached for better performance
- Check Vercel function logs for detailed errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Pathum Rathnayaka**
- GitHub: [@PathumRathnayaka](https://github.com/PathumRathnayaka)

## 🔗 Related Projects

- [ProjectFlow Frontend](https://github.com/PathumRathnayaka/ProjectFlow-Frontend) - React + TypeScript frontend

## 📞 Support

For support, email thilinapathumrathnayaka@gmial.com or open an issue in the repository.

---

Made with ❤️ by Pathum Rathnayaka
