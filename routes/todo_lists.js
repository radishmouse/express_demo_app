var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.TodoList.create({
    name: req.body.name
  }).then(function() {
    res.redirect('/');
  });
});

// Interesting choice to use a GET request for modifying
// the database. Any reason why you didn't use one of the
// other HTTP verbs?
router.get('/:todo_list_id/destroy', function(req, res) {
  models.TodoList.destroy({
    where: {
      id: req.params.todo_list_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:todo_list_id/todos/create', function (req, res) {
  models.Todo.create({
    title: req.body.title,
    TodoListId: req.params.todo_list_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:todo_list_id/todos/:todo_id/destroy', function (req, res) {
  models.Todo.destroy({
    where: {
      id: req.params.todo_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
