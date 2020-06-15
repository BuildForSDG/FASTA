const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    sw: "/service-worker.js",
  }
});
// const { parsed: localEnv } = require('dotenv').config();
// const webpack = require('webpack');

// module.exports = {
//   webpack(config) {
//     config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

//     return config
//   }
// }

module.exports = {
  env: {
    customKey: "my-value",
    apiKey: "AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s"
  }
};
