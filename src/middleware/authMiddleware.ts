import payload from "payload";

export const authMiddleware = (req: any, res, next) => {
  // Note: Payload must be initialized before the `payload.authenticate` middleware can be used
  payload.authenticate(req, res, function (error) {
    if (error || !req.user) {
      return res.redirect("/admin/login");
    }

    return next();
  });
};
