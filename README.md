
![Image of consequiheader](https://i.ibb.co/QCCYF9w/consequi-Header.png)
# Welcome to **Consequi**
### **Helping you remain accountable in reaching your goals.**

Consequi is a new web application that allows users to create goals and find people to help them remain accountable to acheiving those goals.

## [API](https://consequi.herokuapp.com/)

Consequi's API is fully equipped to allow users to create an account, sign in, sign out, create, read, update, and delete a goal as well as create, read, update, and delete tasks on a goal. Users are able to assign a buddy to a goal and Buddies are able to see all of the goals assigned to them. Consequi's API also is fully equipped to enable user authentication and authorization using Json Web Tokens and Browser Cookies.



Users have the ability to create an account which enables them to save articles or other content they like or want to refer to later, to a list. They are also able to upload content accoding to different moods themselves to create a richer list of resources for people to use.

Our API is hosted on Heroku, [**here**.](https://consequi.herokuapp.com/)

### API Calls
GET /sign-up | renders a sign up page

POST /sign-up | posts a new user to a system

POST /sign-in | logs user in

GET /sign-out | clears cookie to log user out

GET /user/:id | returns all of a user’s data including goals

GET /user/goals/:id | returns all of a user’s goals

GET /goals/:id | returns all tasks for a goal (and all of goal’s data)

GET /goals/new | returns the form to create a new goal

POST /goals/new | creates a new goal

POST /goals/:id/tasks | creates a task on a goal


## Team Development Process
Consequi is developed by Tori Murray and Betsy Bailey. We are two students studying applied computer science in San Francisco. We made use of traditional Agile development processes, utilizing SCRUM methodology. Our sprints traditionally last one week and sought to ship (design, code, & deliver).
### Consequi's Developers
[**Tori Murray**](https://www.makeschool.com/portfolio/victoria), Frontend Engineer & Design Lead

[**Betsy Bailey**](https://www.makeschool.com/portfolio/Betsy-Bailey) Backend Engineer


## Web Development
Consequi's web application was built using JavaScript, Node.js, Express, React, MongoDB with Mongoose as our database, and deployed with Heroku.

### Our Web Development Team
Tori Murray & Betsy Bailey

## Design
Consequi has a simple, sleek, and appealing design in order to help users feel at ease and better do what they came here to do, acheive their goals.

Here, users are prompted to set a new goal with the goal's title and then assign their accountability buddy's email to that goal.

![Image of consequi setting new goal](https://i.ibb.co/MSfHyhZ/Screen-Shot-2019-03-26-at-2-01-12-PM.png)

Then, users are taken to a screen housing all of the information on this goal including how many tasks of this goal have been approved for by their accountability buddy and how many tasks still need to be completed. Each task of a goal must be marked complete by the user and their accountability buddy to be considered fully completed.

![Image of consequi goal screen](https://i.ibb.co/q17vYmN/Screen-Shot-2019-03-26-at-2-01-20-PM.png)

Users also have a dashbaord that shows all of their goals, how many outstanding tasks they have to complete for their goals, and how many goals on which they have been assigned as an accountability buddy are ready to be approved.

![Image of consequi dashboard](https://i.ibb.co/wCf3Mj3/Screen-Shot-2019-03-26-at-2-01-30-PM.png)

### Design Team
**Tori Murray** -  Frontend Lead Developer & Designer

## Work With Consequi
To suggest edits, add additional content, or make any contribution please leave a pull request.

### To run Consequi's web app locally
Clone into this repository by running the following command in your terminal:
`git clone https://github.com/betsybaileyy/consequi`

Change directory into the new Consequi File
`cd Consequi`

Be sure you have Node Package Manager installed on you computer and run
`npm install`
Note: it is important to have Express.js and MongoDB installed on your computer, as well as Mongoose

Insure Nodemon is installed on your computer and run
`nodemon server.js`

Navigate to [LocalHost](http://localhost:3000/) in your browser window to see your changes locally once you save them.

You will need to have Postman installed in order to use this API locally. Download and familarize yourself with Postman [here](https://www.getpostman.com/).


# We hope you enjoy using Consequi!
### Thank you for learning more about us.
