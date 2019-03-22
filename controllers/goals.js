const Goal = require('../models/goal')
const User = require('../models/user')


module.exports = app => {
  // INDEX
  app.get('/', (req, res) => {
    var currentUser = req.user;
    // res.render('home', {});
    console.log(req.cookies);
    Goal.find().populate('author')
    .then(goals => {
        res.json({ goals, currentUser });
        // res.render('goals-index', { goals, currentUser });
        // res.render('home', {});
    }).catch(err => {
        console.log(err.message);
    })
})

  app.get('/goals/new', (req, res) => {
    var currentUser = req.user;

    res.json({})
    // res.render('goals-new')
  })

  // CREATE
  app.post("/goals/new", (req, res) => {
      console.log('current user:', req.user._id)
    if (req.user) {
        let goal = new Goal(req.body);
        goal.author = req.user._id;
        goal.upVotes = [];
        goal.downVotes = [];
        goal.voteScore = 0;

        goal
            .save()
            .then(goal => {
                return User.findById(req.user._id);
            })
            .then(user => {
                user.goals.unshift(goal);
                user.save();
                // REDIRECT TO THE NEW goal
                res.redirect(`/goals/${goal._id}`);
            })
            .catch(err => {
                console.log(err.message);
            });
    } else {
        return res.status(401); // UNAUTHORIZED
    }
  });

    // SHOW
    app.get("/goals/:id", function (req, res) {
        var currentUser = req.user;
        Goal.findById(req.params.id).populate('tasks').lean()
            .then(goal => {
                res.json({ goal, currentUser });
                // res.render("goals-show", { goal, currentUser });
            })
            .catch(err => {
                console.log(err.message);
            });
    });

    // category
    app.get("/n/:category", function (req, res) {
        var currentUser = req.user;
        Goal.find({ category: req.params.category }).lean()
            .then(goals => {
                res.json({ goals, currentUser })
                // res.render("goals-index", { goals, currentUser });
            })
            .catch(err => {
                console.log(err);
            });
    });

    // VOTE UP
    // app.put("/goals/:id/vote-up", function(req, res) {
    //     Goal.findById(req.params.id).exec(function(err, goal) {
    //         goal.upVotes.push(req.user._id);
    //         goal.voteScore = goal.voteScore + 1;
    //         goal.save();
    //
    //         res.status(200);
    //     });
    // });

    // VOTE DOWN
    // app.put("/goals/:id/vote-down", function(req, res) {
    //     Goal.findById(req.params.id).exec(function(err, goal) {
    //         goal.downVotes.push(req.user._id);
    //         goal.voteScore = goal.voteScore - 1;
    //         goal.save();
    //
    //         res.status(200);
    //     });
    // });
};
