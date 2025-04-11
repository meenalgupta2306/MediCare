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
    session: {
      table: {
        doc: "Table name for a session",
        format: String,
        default: "user_sessions",
      },
      maxAge: {
        doc: 'Maximum age of a session',
        format: Number,
        default: 1000 * 30000, // 10 years
      },
      secret: {
        doc: 'Cookie Secret',
        format: String,
        default: 'medicaresessionsecret',
      },
      inactivityTimeout: {
        doc: 'Inactivity timeout for a session',
        format: Number,
        default: 30000,
      },
      sameSite: {
        doc: 'Allow cross site? remember secure must be true if this is None',
        format: String,
        default: 'None',
      },
    },
  },
  postgres: {
    url: {
      doc: "Postgres Database URL",
      format: String,
      default: "localhost",
    },
    username: {
      doc: "Postgres Username",
      format: String,
      default: "postgres",
    },
    password: {
      doc: "Postgres Password",
      format: String,
      default: "postgres",
    },
    port: {
      doc: "Postgres Database Port",
      format: Number,
      default: 5432,
    },
    databases: {
      name: {
        doc: "Postgres database of Buyer's Edge",
        format: String,
        default: "medicare",
      },
      session: {
        doc: "Postgres database for session management",
        format: String,
        default: "user_sessions",
      },
    },
  },
});

const env = config.get("env");
config.loadFile(`${__dirname}/medicare-${env}-config.json`);
config.validate({ allowed: "strict" });

module.exports = config;
