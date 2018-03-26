const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connect to mongodb server');
  const db = client.db('TodoApp');
  
  db.collection('Todos').insertOne({
    text: 'Something ToDo',
    complete: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert data', err);
    }
  
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  
  db.collection('Users').insertOne({
    name: 'Petar Kamenov',
    age: 28,
    location: 'Bulgaria'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert data', err);
    }
    
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  
  client.close();
});
