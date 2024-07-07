const express = require('express')
const connection = require('./DB/connectDB')
const subTaskRouter = require('./routes/subtaskRouter')
const taskRouter = require('./routes/taskRouter')
const userRouter = require('./routes/userRouter')
const userModel = require( './models/userModel' )
const cors = require('cors')
const app = express()
const port = 5000;
app.use(express.json())
app.use(cors())
app.use('/subtask', subTaskRouter)
app.use('/task', taskRouter)
app.use('/user', userRouter)


app.post('/user/login', (req, res)=>{
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("success")
            } else{
                res.json("the password or email is incorrect")
            }
        } else{
            res.json('No record existed')
        }
    })
})

app.listen(port, ()=>{
    console.log(`server is listening on ${port} port`)
})