const config = require("./config");

class SystemSettings {
    static initialize(applicationRoot) {
        this.root = applicationRoot;
        this.port = config.get("server.port");
        this.clientURL = config.get('client.url');
    }
    
    static get(key) {
       return this[key]; 
    }
}


module.exports = SystemSettings;
