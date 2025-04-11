const convict = require("convict");

let config = convict({
  env: {
    doc: "The applicaton environment.",
    format: ["production", "development", "staging"],
    default: "development",
    env: "NODE_ENV",
    arg: "env",
  },
  client: {
    url: {
      doc: "Client HTTP/S URL",
      format: "url",
      default: "http://localhost:4200",
      env: "CLIENT_URL",
    },
  },
  server: {
    port: {
      doc: "HTTP port to bind",
      format: "port",
      default: 8080,
      env: "PORT",
    },
    host: {
      doc: "The IP address to bind.",
      format: "ipaddress",
      default: "0.0.0.0",
      env: "HOST",
    },
  },
});

const env = config.get("env");
config.loadFile(`${__dirname}/medicare-${env}-config.json`);
config.validate({ allowed: "strict" });

module.exports = config;
