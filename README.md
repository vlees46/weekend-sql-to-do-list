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

  * Add files and folders to project directory.
    * Don't forget .gitignore!

  ##### Front-End:
    * Mock up the basic HTML
    * Source CSS and JS files

  ##### Back-End:
    * run npm init
    * make sure "start" script exists in our package.json
    * npm install the stuff we need
      * express
      * pg
    * use Postico to make a database
    * use Postico to create "todos" table
    * implement minimum code for working Express server in server.js
    * wire up database connection in pool.js file

---

# FEATURES

  * create a task
    * store in db
    * re-render DOM

  * delete a task
    * delete task in db
    * re-render DOM

  * complete a task
    * update task in db
    * should be "checked off"
    * CSS to differentiate
    * re-render DOM

  * CSS! make it purdy