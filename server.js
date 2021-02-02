if(process.env.NODE_ENV !== "production"){
require('dotenv').config()
}
const stripeSecretKey=process.env.SECRET_KEY;
const stripePublicKey=process.env.PUBLIC_KEY;
//console.log(stripeSecretKey,stripePublicKey)
const express=require("express");
const app=express();
const fs=require('fs')
const stripe=require('stripe')(stripeSecretKey)

app.set("view engine","ejs")
app.use(express.json())
app.use(express.static('public'))

app.get('/store',(req,res)=>{
fs.readFile('items.json',(error,data)=>{
    if(error){
        res.status(500).end();
    }else{
        res.render("store.ejs",{
            stripePublicKey:stripePublicKey,
            items:JSON.parse(data)
        })
    }
})
})

app.post('/purchase-item',(req,res)=>{
    fs.readFile('items.json',(error,data)=>{
        if(error){
            res.status(500).end()
        }else{
          console.log("Purchase")

        }
    })
    })
app.listen(3000)