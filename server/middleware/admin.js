export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ error: "Just users with admin role can access this resource" });
  }
  next();
};
