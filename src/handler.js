const mongoose = require('mongoose')
// const connectToDatabase = require('./models/db')
const Why = require('./models/Why');

//tlqkf  vSubu2AwjAligj62
//test01  UoREXiw7FsvJG3dG

//화이트리스트에러
let DB2 = `mongodb+srv://test01:UoREXiw7FsvJG3dG@withawslambda.cg7zr.mongodb.net/why?retryWrites=true&w=majority` 

//화이트리스트에러
let DB3 = `mongodb://test01:UoREXiw7FsvJG3dG@withawslambda-shard-00-00.7aehv.mongodb.net:27017,withawslambda-shard-00-01.7aehv.mongodb.net:27017,withawslambda-shard-00-02.7aehv.mongodb.net:27017/why?ssl=true&replicaSet=atlas-36kevc-shard-0&authSource=admin&retryWrites=true&w=majority`

//화이트리스트에러
let DB4 = `mongodb+srv://tlqkf:vSubu2AwjAligj62@withawslambda.7aehv.mongodb.net/why?retryWrites=true&w=majority"`

//화이트리스트에러
let DB5 = `mongodb://tlqkf:vSubu2AwjAligj62@withawslambda-shard-00-00.7aehv.mongodb.net:27017,withawslambda-shard-00-01.7aehv.mongodb.net:27017,withawslambda-shard-00-02.7aehv.mongodb.net:27017/why?ssl=true&replicaSet=atlas-36kevc-shard-0&authSource=admin&retryWrites=true&w=majority"`

const connect = () => {
  return mongoose.connect(DB5,
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });
};

const createResponse = (status, body) => ({
  statusCode: status,
  body: JSON.stringify(body)
});

// create
exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const {title,description} = JSON.stringify(event.body)
  connect().then(
    () => {
      console.log(title,description)
      let why = new Why({
        title,
        description
      })
      why.save({new:true})
      console.log(todo.title,todo.description);
      callback(null, createResponse(200, why));
    }
  ).catch(
    (e) => {
      callback(null, createResponse(500, e));
    }
  )
};
