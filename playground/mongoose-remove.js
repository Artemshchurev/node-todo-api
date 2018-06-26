const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b31df8bea882949093a21fd'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b31df8bea882949093a21fd').then((todo) => {
  console.log(todo);
});
