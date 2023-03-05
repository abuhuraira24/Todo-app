class TodoController extends ITodoController {
  constructor(todoService) {
    this.todoService = todoService;
  }

  async createTodo(req, res) {
    const todo = req.body;
    const newTodo = await this.todoService.create(todo);
    return res.json(newTodo);
  }

  async updateTodo(req, res) {
    const id = req.params.id;
    const todo = req.body;
    const updatedTodo = await this.todoService.update(id, todo);
    return res.json(updatedTodo);
  }

  async deleteTodo(req, res) {
    const id = req.params.id;
    const deletedTodo = await this.todoService.delete(id);
    return res.json(deletedTodo);
  }

  async getTodos(req, res) {
    const todos = await this.todoService.findAll();
    return res.json(todos);
  }

  async getTodoById(req, res) {
    const id = req.params.id;
    const todo = await this.todoService.findById(id);
    return res.json(todo);
  }
}

module.exports = TodoController;
