const passport = require("passport");

module.exports = function (req, res, next) { 
    passport.authenticate("local", (err, user, info) => {
        req.logIn(user, err => {
            if (err) {
                console.error("passport: authenticate - login failed. Error: ");
                return res.json({
                  status: "FAILED",
                  msg: "Login Failed"
                });
            }
            console.log(" user logged in");
        })
    })
}