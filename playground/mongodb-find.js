const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connect to mongodb server');
  const db = client.db('TodoApp');
  
  db.collection('Todos').find({
    _id: new ObjectID('5ab8e80a8f98ec4555f64f50')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch data', err);
  });
  // 
  // client.close();
});
