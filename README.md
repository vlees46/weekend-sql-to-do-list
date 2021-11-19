# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


# High Level Check List
# INITIALIZING STUFF:

  * Think through table structure.
    -- Actually make some CREATE TABLE statements.
  * Make a new git branch for "initializing" stuff.

 - [x]  Add files and folders to project directory.
 - [x]  Don't forget .gitignore!

  ##### Front-End:
  - [x]  Mock up the basic HTML
  - [x]  Source CSS and JS files

  ##### Back-End:
 - [x] run npm init
 - [x] make sure "start" script exists in our package.json
 - [x] npm install the stuff we need
 - [x] express
 - [x] pg
 - [x] use Postico to make a database
 - [x] use Postico to create "todos" table
 - [x] implement minimum code for working Express server in server.js
 - [x]    * wire up database connection in pool.js file

---

# FEATURES

- [x] create a task
- [x] store new task in database
- [x] re-render DOM

- [x] delete a task
- [x] delete task in database
- [x] re-render DOM

- [ ] complete a task Front - End
    - [ ] background of the task container could change from gray to green
    - [ ] The complete option should be  'checked off'
- [ ] complete a task Back -End
    - [ ] Whether or not a Task is complete should also be stored in the database


    * update task in db
    * should be "checked off"
    * CSS to differentiate
    * re-render DOM

    For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.

  * CSS! make it purdy