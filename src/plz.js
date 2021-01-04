"use strict";
const MongoClient = require('mongodb').MongoClient;

//tlqkf  vSubu2AwjAligj62
//test01  UoREXiw7FsvJG3dG
const MONGODB_URI = process.env.MONGODB_URI; // or Atlas connection string
const DB4 = `mongodb+srv://tlqkf:vSubu2AwjAligj62@withawslambda.7aehv.mongodb.net/why?retryWrites=true&w=majority"`


let cachedDb = null;
function connectToDatabase(uri) {
    console.log('=> connect to database');
    if (cachedDb) {
        console.log('=> using cached database instance');
        return Promise.resolve(cachedDb);
    }
    return MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(db => {
            cachedDb = db;
            return cachedDb;
        });
}
function queryDatabase(db,body,operation) {
    console.log('=> query database');
    const obj = {}
    switch(operation){
        case "GET":

        case "POST":
            return db.collection('why').insertOne(body, function (err, res) {
                if (err) throw err;
                console.log(res)
                console.log("1 document inserted");
                db.close();
            }).then(() => { return { statusCode: 200, body: 'success' }; })
                .catch(err => {
                    console.log('=> an error occurred: ', err);
                    return { statusCode: 500, body: 'error' };
                });
    }
    
}
module.exports.plz = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    //console.log('event: ', event);
    let operation = event.httpMethod;
    const body = JSON.stringify(event.body)
    connectToDatabase(DB4)
        .then(db => queryDatabase(db,body,operation))
        .then(result => {
            console.log('=> returning result: ', result);
            callback(null, result);
        })
        .catch(err => {
            console.log('=> an error occurred: ', err);
            callback(err);
        });
};