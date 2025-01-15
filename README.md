# To-Do List API

A simple RESTful API for managing a to-do list using Node.js, Express, and MongoDB.

## Features
- Create, read, update, and delete tasks.
- Built with RESTful design principles.
- Automatically tracks task creation and update times.

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)

## Setup Instructions

### Prerequisites
- Node.js and npm or Yarn installed.
- MongoDB database (local or MongoDB Atlas).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/restful-to-do-list-backend
   cd restful-to-do-list-backend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```
   or
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string and server port:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   yarn start
   ```
   or
   ```bash
   npm start
   ```

   For development with hot-reloading:
   ```bash
   yarn dev
   ```
   or
   ```bash
   npm run dev
   ```

5. The server will run on `http://localhost:5000` by default.

## API Endpoints

### Base URL
```
http://localhost:5000/api/tasks
```

### Endpoints

#### Create a Task
- **POST** `/api/tasks`
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "completed": false
  }
  ```
- **Response**:
  ```json
  {
    "_id": "64b1ff3f2a6f1c1e8575b23c",
    "title": "Task Title",
    "completed": false,
    "createdAt": "2025-01-14T12:00:00.000Z",
    "updatedAt": "2025-01-14T12:00:00.000Z"
  }
  ```

#### Get All Tasks
- **GET** `/api/tasks`
- **Response**:
  ```json
  [
    {
      "_id": "64b1ff3f2a6f1c1e8575b23c",
      "title": "Task Title",
      "completed": false,
      "createdAt": "2025-01-14T12:00:00.000Z",
      "updatedAt": "2025-01-14T12:00:00.000Z"
    }
  ]
  ```

#### Update a Task
- **PUT** `/api/tasks/:id`
- **Request Body**:
  ```json
  {
    "title": "Updated Task Title",
    "completed": true
  }
  ```
- **Response**:
  ```json
  {
    "_id": "64b1ff3f2a6f1c1e8575b23c",
    "title": "Updated Task Title",
    "completed": true,
    "createdAt": "2025-01-14T12:00:00.000Z",
    "updatedAt": "2025-01-14T14:00:00.000Z"
  }
  ```

#### Delete a Task
- **DELETE** `/api/tasks/:id`
- **Response**:
  ```json
  {
    "message": "Task deleted"
  }
  ```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome!
