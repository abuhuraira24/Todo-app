const express = require("express");
const app = express();
const router = express.Router();

const db = require("./db");

const UserRepository = require("./src/modules/user/UserRepository");
const UserService = require("./src/modules/user/UserService");
const UserController = require("./src/modules/user/UserController");
const UserRouter = require("./src/modules/user/UserRouter");

const TodoRepository = require("./src/modules/todo/TodoRepository");
const TodoService = require("./src/modules/todo/TodoService");
const TodoController = require("./src/modules/todo/TodoController");
const TodoRouter = require("./src/modules/todo/TodoRouter");

// User module
const userRepository = new UserRepository(db);
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);
userRouter.applyRoutes(router);

// Todo module
const todoRepository = new TodoRepository(db);
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);
const todoRouter = new TodoRouter(todoController);
todoRouter.applyRoutes(router);

authRouter.applyRoutes(router);

app.use(express.json());
app.use("/api", router);

module.exports = app;
