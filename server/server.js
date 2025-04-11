const express = require("express");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const path = require("path");
const config = require("./config/config");

const appSetting = require("./config/settings");
global.app = express();
const applicationRoot = __dirname;
appSetting.initialize(applicationRoot);

app.use(
  session({
    store: new pgSession({
      // pgSession: A session store adapter that saves session data in PostgreSQL
      pool: pgPool, // The database connection used to talk to PostgreSQL
      tableName: config.get("postgres.databases.session"), // The name of the table to store session data
      ttl: 86400, // How long a session lasts (in seconds) — here, 86400 = 24 hours
    }),
    secret: config.get("server.session.secret"), //  Secret used to sign session ID cookie
    resave: false, //  Don't save session if nothing changed
    saveUninitialized: false, //  Don't create session until something is stored
    rolling: true, //  Reset expiration on every response
    cookie: {
      httpOnly: config.get("server.session.httpOnly"), // Prevents client-side JS from accessing the cookie
      sameSite: config.get("server.session.sameSite"), // Controls when cookies are sent: 'lax', 'strict', 'none'
      secure: config.get("server.session.secure"),
      maxAge: appSetting.get("inactivityTimeout") * 1000, //Duration the cookie will live in the browser (ms)
    },
  })
);

require("./routes");

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "/../client/dist/MediCare")));

app.listen(appSetting.get("port"), () => {
  console.log(`App listening on port ${appSetting.get("port")}!`);
});
