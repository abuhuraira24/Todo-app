class TodoRouter {
  constructor(todoController) {
    this.todoController = todoController;
  }

  applyRoutes(router) {
    router.get(
      "/todos",
      this.todoController.getTodos.bind(this.todoController)
    );
    router.get(
      "/todos/:id",
      this.todoController.getTodoById.bind(this.todoController)
    );
    router.post(
      "/todos",
      this.todoController.createTodo.bind(this.todoController)
    );
    router.put(
      "/todos/:id",
      this.todoController.updateTodo.bind(this.todoController)
    );
    router.delete(
      "/todos/:id",
      this.todoController.deleteTodo.bind(this.todoController)
    );
  }
}

module.exports = TodoRouter;
