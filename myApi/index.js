const express = require('express');

const app = express();

const router = express.Router();

router.get('/', function(req,res){
    res.send({name : 'sharad', class : 'B.TECH',city : 'Ghazipur', age : '18' });
})

app.use('/', router);

app.listen(4000,function(){
    console.log("Server is running on port:" ,4000);
});
