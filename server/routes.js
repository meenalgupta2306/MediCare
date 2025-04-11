const authenticate = require('./middlewares/authenticate');

app.post('/auth/login', authenticate);