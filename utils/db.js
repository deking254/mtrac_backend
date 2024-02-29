const mongodb = require('mongodb');
const env = require('process').env;
const client = mongodb.connect('mongodb://localhost:27017/mtracdb')
class DbClient{
  constructor(){
    mongodb.connect('mongodb://localhost:27017/mtracdb', (err, client)=>{
      if (!err){
        this.client = client;
      }
    });
  }

  isAlive(){
    if (this.client){
      return true;
    }
    return false;
  }

  nbPeople(){

  }

  nbTransactions(){

  }
}
const dbClient = new DbClient();
module.exports = dbClient;
