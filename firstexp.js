const express=  require("express");
const { listenerCount } = require("nodemailer/lib/xoauth2");
const app = express();
app.post() =[{
    'id':'1',
    'name':'iphone'

},
{
    'id':'2',
    'name':'samsung'

}
]
app.post('/product',(req,res)=>{
    res.json(products)
})
app.get('/product/:id',(req,res)=>{
    const {id,name}=req.body;
    console.log(id,name);
    return res.send('data stored');
})

app.listen(8081,()=>console.log("server is running"));