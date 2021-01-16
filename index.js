const express=require('express');
const rateLimiter=require('express-rate-limit');
const app=express();
const limit=rateLimiter({
  windowMs:1*60*1000,
  max:4
});
app.get('/',limit,(req,res)=>{
  res.send('hi');
});
app.listen(4010);