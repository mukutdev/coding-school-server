const express = require('express')
const app = express()
const Port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())


// getting course json file

const  courses = require('./Data/courses.json')

// sending all course details

app.get('/courses' , (req , res) =>{
    res.send(courses)
})



app.listen(Port ,()=>{
    console.log("okk port started" , Port);
})

