const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRepository = require("../domain/repositories/UserRepository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    const { email, password } = data;
    const existingUser = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.create({
      email,
      password: hashedPassword,
    });
    return user;
  }

  async authenticate(data) {
    const { email, password } = data;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { user, token };
  }
}

module.exports = UserService;
