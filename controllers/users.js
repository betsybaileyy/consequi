const Goal = require('../models/goal')
const User = require('../models/user')


module.exports = app => {

    // SHOW a user's profile with all of their goals.
    app.get("/user/:id", function(req, res) {
        var currentUser = req.user;
        if (currentUser) {
            User.findById(currentUser)
                .then(function(currentUser) {
                    console.log(currentUser)
                    res.json({
                        currentUser
                    })
                })
        }
    })
}


// showing a users profile
// app.get('/user/:id', (req, res) => {
//     var currentUser = req.user;
//     console.log(req.cookies);
//     Goal.find().populate('author')
//         .then(goals => {
//             res.json({
//                 goals,
//                 currentUser
//             });
//         }).catch(err => {
//             console.log(err.message);
//         })
// })
