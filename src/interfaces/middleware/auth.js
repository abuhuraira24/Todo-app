class AuthMiddleware {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  checkAuth(req, res, next) {
    // Get the authorization header from the request
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      // If the authorization header is missing, send an error response
      return res.status(401).json({ error: "Authorization header missing" });
    }

    // Split the authorization header into the token type and the token itself
    const [tokenType, token] = authHeader.split(" ");

    if (tokenType !== "Bearer" || !token) {
      // If the token type is not Bearer or the token is missing, send an error response
      return res.status(401).json({ error: "Invalid token" });
    }

    try {
      // Verify the JWT token using the secret key
      const decoded = jwt.verify(token, this.secretKey);

      // Add the decoded user information to the request object
      req.user = decoded;

      // Call the next middleware function
      next();
    } catch (error) {
      // If there is an error verifying the JWT token, send an error response
      return res.status(401).json({ error: "Invalid token" });
    }
  }
}

module.exports = AuthMiddleware;
