const { User } = require("../models/UserModel");

module.exports = async function (req, res, next) {
  if (req.user.type != "admin") return res.status(403).send("Access Denied");
  next();
};
