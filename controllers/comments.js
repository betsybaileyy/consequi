const Goal = require('../models/goal');
const Comment = require('../models/comment');

module.exports = function(app) {
  // CREATE Comment
  app.post("/goals/:goalId/comments", function (req, res) {
    const comment = new Comment(req.body);
    comment.author = req.user._id;
    comment
        .save()
        .then(comment => {
            return Promise.all([
                Goal.findById(req.params.goalId)
            ]);
        })
        .then(([goal, user]) => {
            goal.comments.unshift(comment);
            return Promise.all([
                goal.save()
            ]);
        })
        .then(goal => {
            res.redirect(`/goals/${req.params.goalId}`);
        })
        .catch(err => {
            console.log(err);
        });
});
};
