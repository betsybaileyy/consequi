import axios from 'axios'

export default {
  // Signs user in
  signInUser: function(userData) {
    return axios.post('/sign-in', userData)
  },
  // Signs user out
  signOutUser: function(userData) {
    return axios.get('/sign-out', userData)
  },
  // Signs user up
  signUpUser: function(userData) {
    return axios.post('/sign-up', userData)
  },
  // Given a UserId, gets user information
  getUser: function(id) {
    return axios.get('/user/' + id)
  },

  
  // Given a UserId, gets users goals
  getUserGoals: function(id) {
    return axios.get(`/user/:${id}/goals`)
  },
  // Given a GoalId, get all Tasks belonging to Goal
  getGoalTasks: function(id) {
    return axios.get(`/goals/${id}/tasks`)
  },
  // Given a UserId, get all tasks that attribute this UserId as a BuddyId
  getBuddyTasks: function(id) {
    return axios.get('/tasks')
  },


  // Given a goalId, get how many tasks remain for that goal
  getGoalTasksOutstanding: function(id) {
    return axios.get(`/goals/${id}/tasksNum`)
  },
  // Given a userId, get how many tasks remain for that user
  getUserTasksOutstanding: function(id) {
    return axios.get(`/user/${id}/tasksNum`)
  },
  // Given a userId, get how many tasks remain for all their buddies
  getBuddyTasksOutstanding: function(id) {
    return axios.get(`/user/${id}/buddy/tasksNum`)
  },
  // Given a goalId, get how many tasks have been marked completed by the user and buddy
  getTasksComplete: function(id) {
    return axios.get(`/goals/${id}/tasksNum/complete`)
  },
  
  
  // Post a new goal with goalData
  setGoal: function(goalData) {
    return axios.post('/goals/new/', goalData)
  },
  // Given a goalId, post new task with taskData
  setTask: function(id, taskData) {
    return axios.post(`/goals/${id}/tasks/new`, taskData)
  },
  // Given a goalId and taskId, patch User Task's completion with boolData
  setUserTaskCompletion(goalId, taskId, boolData) {
    return axios.patch(`/goals/${goalId}/tasks/${taskId}/user`, boolData)
  },
  // Given a goalId and taskId, patch Buddy Task's completion with boolData
  setBuddyTaskCompletion(goalId, taskId, boolData) {
    return axios.patch(`/goals/${goalId}/tasks/${taskId}/buddy`, boolData)
  },
};
