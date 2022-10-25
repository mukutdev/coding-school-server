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


// sending  single courses
app.get('/course/:id', (req , res) =>{

    const courseId = parseInt(req.params.id)
    const singleCourse = courses.find(course => course.id === courseId)
    res.send(singleCourse)
})

app.listen(Port ,()=>{
    console.log("okk port started" , Port);
})

