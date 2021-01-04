const mongoose = require("mongoose");
require('dotenv').config();

let DB2 = `mongodb+srv://test01:UoREXiw7FsvJG3dG@withawslambda.cg7zr.mongodb.net/test?retryWrites=true&w=majority`
let DB3 = `mongodb://test01:UoREXiw7FsvJG3dG@withawslambda-shard-00-00.7aehv.mongodb.net:27017,withawslambda-shard-00-01.7aehv.mongodb.net:27017,withawslambda-shard-00-02.7aehv.mongodb.net:27017/test?ssl=true&replicaSet=atlas-36kevc-shard-0&authSource=admin&retryWrites=true&w=majority`
let DB4 = `mongodb://test01:UoREXiw7FsvJG3dG@withawslambda.cg7zr.mongodb.net/test`
module.exports = connect = (response) => {
    
};
