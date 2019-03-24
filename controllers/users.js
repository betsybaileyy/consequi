const Goal = require('../models/goal')
const User = require('../models/user')


module.exports = app => {
        // showing a users profile
        app.get('/user/:id', (req, res) => {
            var currentUser = req.user;
            console.log(req.cookies);
            Goal.find().populate('author')
                .then(goals => {
                    res.json({
                        goals,
                        currentUser
                    });
                }).catch(err => {
                    console.log(err.message);
                })
        })
        // db.goals.find({
        //     goals.author: req.params.id
        // })

        // SHOW list of favorites! Woo hoo
        app.get('/user/favorites', function(req, res) {
            const currentUser = req.user;
            if (currentUser) {
                User.findById(currentUser)
                    .then(function(currentUser) {
                        console.log(currentUser)
                        res.render('list', {
                            currentUser
                        });
                    })
            } else {
                return res.status(401); // unauthorized
            }
        })


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
            // Goal.findById({
            //         author: req.params.id
            //     }).populate('tasks').lean()
            //     .then(goal => {
            //         res.json({
            //             goal,
            //             currentUser
            //         });
            //         // res.render("goals-show", { goal, currentUser });
            //     })

        }
    })
}
