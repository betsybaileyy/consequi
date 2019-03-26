const Goal = require('../models/goal')
const User = require('../models/user')


module.exports = app => {

    // SHOW a user's profile with all of their goals.
    app.get("/user/:id", function(req, res) {
        var currentUser = req.user;
        User.findById(req.params.id)
            .then(function(currentUser) {
                console.log(currentUser)
                res.json({
                    currentUser
                })
            })
    })

    // SHOW all of a user's goals
    app.get("/user/goals/:id", function(req, res) {
        var currentUser = req.user;

        Goal.find({
            author: req.params.id
        }).then(function(goals) {
            res.json({
                goals
            })
        })
    })

    // GETting all of the tasks a user has been assigned as a Bud on. Id is taking in the user's id.
    app.get("/user/your_buddys_goals/:id", function(req, res) {
        var currentUser = req.user.buddysGoals;

        // Goal.find({budUsername: req.params.id}).then(function(goals) {
        //     res.json({goals})
        // })

        // THIS IS THE CODE WORKING TO RETURN ID OF GOALS with user's bud if attached.
        User.findById(req.params.id)
            .then(function(currentUser) {
                let budGoals = currentUser.buddysGoals.title;
                console.log("LOOK HERE - current user's buddy goal's ids: ", currentUser.buddysGoals);
                res.send(budGoals)
            })

    })
}

// app.get("/goals/:id", function (req, res) {
//     var currentUser = req.user;
//     Goal.findById(req.params.id).populate('tasks').lean()
//         .then(goal => {
//             res.json({ goal, currentUser });
//             // res.render("goals-show", { goal, currentUser });
//         })
//         .catch(err => {
//             console.log(err.message);
//         });
// });
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


// THIS IS THE CODE WORKING TO RETURN ID OF GOALS with user's bud if attached.
// User.findById(req.params.id)
//     .then(function(currentUser) {
//         let budGoals = currentUser.buddysGoals.title;
//         console.log("LOOK HERE - current user's buddy goal's ids: ", currentUser.buddysGoals);
//         res.send(budGoals)
//     })
