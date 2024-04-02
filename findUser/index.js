const express = require ('express');
const app = express();
const router = express.Router();
app.use(express.json());
//let users = ['mohit', 'sharad', 'ravi', 'pradeep'];
let users = [{name:"sharad", pass:"1234"}, {name:"shaurya", pass:"2345"}, {name:"aditya", pass:"3456"}];
router.get('/user', function(req,res){
    const {user} = req.body;
    for(let i=0;i<users.length;i++){
        //"user"-> can be named as anything you want and in postman -> body -> raw -> JSON
        if(users[i].name==user){
        return res.send(users[i]);
        }
    }
    // use return to tackle this error {Cannot set headers after they are sent to the client}
    return res.send('user not found')
})
app.use('/',router);
app.listen(3000, function(){
    console.log('server started' ,3000);
})