const express = require('express');
const todoRouter = express.Router();
const pool = require('../modules/pool');

// DB CONNECTION


// GET
todoRouter.get('/', (req, res) => {
    console.log('GET /todos');
    const sqlText = 'SELECT * FROM "tasklist";';
    console.log('in Router todo file', sqlText);
    pool.query(sqlText)
    .then((dbResult) => {
        console.log(`${dbResult.rows.length} rows to send.`)
        res.send(dbResult.rows);
    })
    .catch((dbErr) => {
        console.error(dbErr);
        res.sendStatus(500);
    });
});

// POST
todoRouter.post('/', (req, res) => {
    console.log('POST /todo');
    console.log('req.body:', req.body);
    const newTaskItem = req.body;
    const sqlText = `
      INSERT INTO "tasklist"
        ("task")
      VALUES
        ($1);
    `;
    const sqlValues = [
      newTaskItem.task
    ];
    pool.query(sqlText, sqlValues)
    .then((dbResult) => {
        console.log('\todo INSERT succeeded.');
        res.sendStatus(201);
    })
    .catch((dbErr) => {
        console.error(dbErr);
        res.sendStatus(500);
    });
});

/* PUT
koalaRouter.put('/:id', (req, res) => {
  console.log('req.params:', req.params);
  const update = req.params.id;
  const transfer = 'Y';
  const sqlText = `
  UPDATE "koalas"
  SET "ready_to_transfer"=$1
  WHERE "id"=$2
  `;
  const sqlValues = [
    transfer,
    update
  ]
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    }).catch((dbErr) => {
      res.sendStatus(500);
    })
}) */

/* DELETE
// Bennett was here
koalaRouter.delete('/:id', (req, res) => {
  console.log('req.params:', req.params);
  const koalaId = req.params.id;
  const sqlText = `
    DELETE FROM "koalas"
      WHERE "id"=$1;
  `;
  const sqlValues = [ koalaId ];

  pool.query(sqlText, sqlValues)
    .then((dbResult) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    })
}); */

module.exports =todoRouter;