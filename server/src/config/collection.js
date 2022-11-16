const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://murpss:welcome123@cluster0.l0nhbct.mongodb.net/?retryWrites=true&w=majority';
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  db.createCollection('employees', (err, res) => {
    if (err) throw err;
    console.log('Collection is created!');
    db.close();
  });
});
