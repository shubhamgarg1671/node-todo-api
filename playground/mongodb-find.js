//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to Mongodb server');
    
    // db.collection('Todos').find({
    //     _id: new ObjectId('5f619cbcbfac030e08a13211')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch the documents', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todo count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch the documents', err);
    // })

    db.collection('Users').find({text: 'Shubham'}).count().then((count) => {
        console.log(`Todo count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch the documents', err);
    })

    db.close();
});