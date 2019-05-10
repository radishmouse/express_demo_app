var models  = require('../models');
var express = require('express');
var router  = express.Router();

// It seems like the `index` routes are for all todo lists
// and the `todo_lists` routes pertain to the management
// of individual todo lists?
router.get('/', function(req, res) {
  models.TodoList.findAll({
    include: [ models.Todo ]
  }).then(function(todo_lists) {
    res.render('index', {
      title: 'Todo Demo',
      todo_lists: todo_lists
    });
  });
});

module.exports = router;
