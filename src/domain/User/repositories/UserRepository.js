const User = require('../domain/models/User');

class UserRepository {
  async create(data) {
    const user = new User(data);
    await user.save();
    return user.toObject();
  }

  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user ? user.toObject() : null;
  }
}

module.exports = UserRepository;
