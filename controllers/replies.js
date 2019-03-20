const Goal = require("../models/goal");
const Task = require("../models/task");
const User = require("../models/user");

module.exports = app => {
  // NEW REPLY
  app.get("/goals/:goalId/tasks/:taskId/replies/new", (req, res) => {
    let goal;
    Goal.findById(req.params.goalId)
      .then(p => {
        goal = p;
        return Task.findById(req.params.taskId);
      })
      .then(task => {
        res.render("replies-new", { goal, task });
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  // CREATE REPLY
  app.post("/goals/:goalId/tasks/:taskId/replies", (req, res) => {
    // TURN REPLY INTO A task OBJECT
    const reply = new Task(req.body);
    reply.author = req.user._id
    // LOOKUP THE PARENT goal
    Goal.findById(req.params.goalId)
        .then(goal => {
            // FIND THE CHILD task
            Promise.all([
                reply.save(),
                Task.findById(req.params.taskId),
            ])
                .then(([reply, task]) => {
                    // ADD THE REPLY
                    task.tasks.unshift(reply._id);

                    return Promise.all([
                        task.save(),
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
