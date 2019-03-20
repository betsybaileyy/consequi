const Goal = require("../models/goal");
const Comment = require("../models/comment");
const User = require("../models/user");

module.exports = app => {
  // NEW REPLY
  app.get("/goals/:goalId/comments/:commentId/replies/new", (req, res) => {
    let goal;
    Goal.findById(req.params.goalId)
      .then(p => {
        goal = p;
        return Comment.findById(req.params.commentId);
      })
      .then(comment => {
        res.render("replies-new", { goal, comment });
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  // CREATE REPLY
  app.post("/goals/:goalId/comments/:commentId/replies", (req, res) => {
    // TURN REPLY INTO A COMMENT OBJECT
    const reply = new Comment(req.body);
    reply.author = req.user._id
    // LOOKUP THE PARENT goal
    Goal.findById(req.params.goalId)
        .then(goal => {
            // FIND THE CHILD COMMENT
            Promise.all([
                reply.save(),
                Comment.findById(req.params.commentId),
            ])
                .then(([reply, comment]) => {
                    // ADD THE REPLY
                    comment.comments.unshift(reply._id);

                    return Promise.all([
                        comment.save(),
                    ]);
                })
                .then(() => {
                    res.redirect(`/goals/${req.params.goalId}`);
                })
                .catch(console.error);
            // SAVE THE CHANGE TO THE PARENT DOCUMENT
            return goal.save();
        })
});
};
