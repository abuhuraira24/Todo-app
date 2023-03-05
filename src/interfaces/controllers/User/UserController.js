const CreateUserUseCase = require("../useCases/User/CreateUserUseCase");

class UserController {
  constructor() {
    this.createUserUseCase = new CreateUserUseCase();
  }

  async createUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await this.createUserUseCase.execute({ email, password });

      res.status(201).json({
        message: "User created successfully",
        user,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
