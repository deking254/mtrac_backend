const peopleCtrlr = require('./controllers/peopleController');
const accountsCtrlr = require('./controllers/accountsController');
const transactionsCtrlr = require('./controllers/transactionsController');
const urlDecoder = require('qs');
const router = require('express').Router();
router.post('/add_person', (req, res)=>{
  req.on('data', (data)=>{
	  console.log(String(data));
    res.status(200).send(urlDecoder.parse(String(data)));
  })
})

router.post('/add_account', (req, res)=>{

})

router.post('update_person/:id', (req, res)=>{

})

router.post('/update_transaction/:id', (req, res)=>{

})

router.post('/add_transaction', (req, res)=>{
  req.on('data', (data)=>{
    let dataJson = urlDecoder.parse(String(data))
	  console.log(dataJson);
    transactionsCtrlr.addNew(req, res, dataJson);
  });
})
module.exports = router;
