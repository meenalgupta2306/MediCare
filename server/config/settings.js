const config = require("./config");

class SystemSettings {
    static initialize(applicationRoot) {
        this.root = applicationRoot;
        this.port = config.get("server.port");
        this.clientURL = config.get('client.url');

        this.databaseConfig = {
            user: config.get('postgres.username'),
            host: config.get('postgres.url'),
            database: config.get('postgres.databases.data'),
            password: config.get('postgres.password'),
            port: config.get('postgres.port'),
            max: config.get('postgres.max'),
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 200000,
          };
      
      
          this.inactivityTimeout = config.get('server.session.inactivityTimeout');
    }
    
    static get(key) {
       return this[key]; 
    }
}


module.exports = SystemSettings;
