'use strict';
module.exports = (sequelize, DataTypes) => {
  var TodoList = sequelize.define('TodoList', {
    name: DataTypes.STRING
  });

  TodoList.associate = function(models) {
    models.TodoList.hasMany(models.Todo);
  };

  return TodoList;
};
