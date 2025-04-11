const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


class Passport{
    static initialize() {
        passport.use(new LocalStrategy(
            {
                usernameField: 'Username',
                passwordField: 'Password',
                passReqToCallback: true
            },
            async (username, password, done) => {
                try {
                    console.log('++ Is authenticated request ? ++', req.isAuthenticated());
                    console.info('username ', username);
                    console.info('password ', password);
                    //1. get user from db
        
                    //2. compare password
        
                    //3. if all good pass the user
                    
                } catch (error) {
                    
                }
            }
        
        
        ));
    }
}

module.exports = Passport
