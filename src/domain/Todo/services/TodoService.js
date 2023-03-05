const TodoRepository = require("../domain/repositories/TodoRepository");

class TodoService {
  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async create(userId, data) {
    const todo = await this.todoRepository.create({ ...data, user: userId });
    return todo;
  }

  async getByUser(userId) {
    const todos = await this.todoRepository.findByUser(userId);
    return todos;
  }

  async getByIdAndUser(id, userId) {
    const todo = await this.todoRepository.findByIdAndUser(id, userId);

    if (!todo) {
      throw new Error("Todo not found");
    }

    return todo;
  }

  async updateByIdAndUser(id, userId, data) {
    const todo = await this.todoRepository.updateByIdAndUser(id, userId, data);

    if (!todo) {
      throw new Error("Todo not found");
    }

    return todo;
  }

  async deleteByIdAndUser(id, userId) {
    const todo = await this.todoRepository.deleteByIdAndUser(id, userId);

    if (!todo) {
      throw new Error("Todo not found");
    }

    return todo;
  }
}

module.exports = TodoService;
