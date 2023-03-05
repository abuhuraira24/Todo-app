class UserRouter {
  constructor(userController) {
    this.userController = userController;
  }

  applyRouter(router) {
    router.post(
      "/user",
      this.userController.createUser.bind(this.userController)
    );
  }
}

module.exports = UserRouter;
