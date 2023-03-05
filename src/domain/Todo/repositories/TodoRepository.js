const Todo = require("../domain/models/Todo");

class TodoRepository {
  async create(data) {
    const todo = new Todo(data);
    await todo.save();
    return todo.toObject();
  }
  async findByUser(userId) {
    const todos = await Todo.find({ user: userId }).sort({ createdAt: "desc" });
    return todos.map((todo) => todo.toObject());
  }

  async findByIdAndUser(id, userId) {
    const todo = await Todo.findOne({ _id: id, user: userId });
    return todo ? todo.toObject() : null;
  }

  async updateByIdAndUser(id, userId, data) {
    const todo = await Todo.findOneAndUpdate({ _id: id, user: userId }, data, {
      new: true,
    });
    return todo ? todo.toObject() : null;
  }

  async deleteByIdAndUser(id, userId) {
    const todo = await Todo.findOneAndDelete({ _id: id, user: userId });
    return todo ? todo.toObject() : null;
  }
}

module.exports = TodoRepository;
