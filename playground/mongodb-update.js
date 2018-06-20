//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b2a05a310368564cea274ae')
  }, {
    $set: {
      name: 'Artem'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

});
