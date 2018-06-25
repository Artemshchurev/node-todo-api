const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '5b302d0e88a4a0f80204009d';

// if(!ObjectID.isValid(id)){
//   console.log('Id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then((todoById) => {
//     if(!todoById){
//       return console.log('Id not found');
//     }
//   console.log('Todo by id', todoById);
// }).catch((e) => console.log(e));

User.findById('5b2c9a9c82aeb9f507cbc1dc').then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
