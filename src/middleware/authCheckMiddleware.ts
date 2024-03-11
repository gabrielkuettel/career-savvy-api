export const authCheckMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send("User is not authenticated");
  }

  return next();
};
