//importing express.js
const  express = require('express');
//creating instance(object) of express to create express app
const app=express();
//create router instance for routing from express
const router=express.Router();
//enabling json data read
app.use(express.json());
//get api creation router.get(path,callback function)
//Router is also a set of objects
//Router has all the control of APIs
//path param -> : ,/user is a part of this path
router.get('/:country/user/:state',function (req,res){
    //getting vaslues from query params
    // const name = req.query.sharad;
    // const brand = req.query.brand;
    //getting query
    // const data = req.query;
    //destructuring thequery params
    const {product,brand} = req.query;
    //accessing the path params
    const countryName = req.params;
    const user = req.body;
    console.log(countryName,user);
    res.send({status : 'ok',message:{name:product,brand:brand}, user});
})
//global middleware for all api calling initialized in defined with router
app.use('/', router)
//creation of server
// server listens on port number 3000
// broser sirf get api k liye kaam krta hai
app.listen(3000, function (){
    console.log('server started at port:' ,3000);
});
