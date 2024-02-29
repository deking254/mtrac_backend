const db = require('../utils/db');
const urlDecoder = require('qs');

class TransactionsController{
  constructor(){
    this.addNew = async (res, req, data)=>{
       if (data){
         db.database.collection('transactions').insertOne(urlDecoder.parse(String(data)), (err, result)=>{
           if(!err){
             if (result){
               res.status(200).send({"status": "success"});
	     }
	   }
	 })
       }
    }
    this.updateTransaction = async (res, req)=>{
      
    }
    this.deleteTransaction = async (res, req)=>{

    }
  }
}
const txController = new TransactionsController();
module.exports = txController;
