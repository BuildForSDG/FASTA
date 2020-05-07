const users = require("./users");


module.exports = (server) => {
  server.use("/api/v1/users", users);
};
