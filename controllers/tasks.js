const Goal = require('../models/goal');
const Task = require('../models/task');

module.exports = function(app) {
  // CREATE task
  app.post("/goals/:goalId/tasks", function (req, res) {
    const task = new Task(req.body);
    task.author = req.user._id;
    task
        .save()
        .then(task => {
            return Promise.all([
                Goal.findById(req.params.goalId)
            ]);
        })
        .then(([goal, user]) => {
            goal.tasks.unshift(task);
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
