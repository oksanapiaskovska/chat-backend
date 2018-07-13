const user = require("./user");
const messege = require("./messege");

module.exports = function(app) {
  app.use("/api/user", user);
  app.use("/api/messege", messege);
};
