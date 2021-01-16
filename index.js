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
const PORT=process.env.PORT || 4010;
app.listen(PORT);