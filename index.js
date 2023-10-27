const express=require("express");

const userModel=require('./models/user');
const userRouter=require('./routes/user');
const{connectMongoDb} = require('./connection');
const{logReqRes} =require('./middlewares/index');
 
const app=express();

//Connection    
connectMongoDb('mongodb://127.0.0.1:27017/project1')
.then(()=> console.log('MongoDB Connected'))

//middleware
app.use(express.urlencoded({extended:false }))
app.use(logReqRes('log.txt'));

// Routes 
app.use('/api/users',userRouter);

const PORT=8000;
app.listen(PORT,()=>console.log(`Server is running at port:${PORT}`));