const passport = require("passport");

function auth(req, res, next) {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.sendStatus(401);
    req.user = user;
    return next();
  })(req, res, next);
}

module.exports = auth;
