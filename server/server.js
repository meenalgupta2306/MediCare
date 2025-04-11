const express = require("express");
const path = require("path");

const appSetting = require('./config/settings');
global.app = express();
const applicationRoot = __dirname;
appSetting.initialize(applicationRoot);

require('./routes');



app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/../client/dist/MediCare')));

app.listen(appSetting.get('port'), () => {
    console.log(`App listening on port ${appSetting.get('port')}!`);
});
