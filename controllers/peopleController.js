const db = require('../utils/db');
class PeopleController{
  constructor(){
    this.addNew = async (res, req, data)=>{
       db.database.collection('people').insertOne(data, (err, result)=>{
         if (!err){
          res.status(200).send({"Status": "success"}) 
	 }
       });
    }
    this.updatePerson = async (res, req, data)=>{
  
    }
    this.deletePerson = async (res, req)=>{

    }
  }
}
