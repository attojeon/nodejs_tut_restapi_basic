/*
    app의 기본 구조 생성
    post
    get
    put
    delete
*/

const express = require('express');
const app = express();


app.post('/api/courses', (req, res) => {
    // Create the course and return the course object
    res.send(coures);
});

app.get('/api/courses', (req, res) => {
    // To read all the courses 
    const sortBy = req.query.sortBy;

    // Return the courses
    res.send(courses);
});


app.get('/api/courses/:id', (req, res) => {
    const courseId = req.params.id;

    // Lookup the course
    // If not found, return 404
    res.status(404).send('Course not found');

    // Else return the course object
    res.send(course);
});


app.put('/api/courses/:id', (req, res) => {
    const courseId = req.params.id;
    // Lookup the course
    // If course not found return 404, 

    // otherwise update it and return the updated object
});


app.delete('/api/courses/:id', (req, res) => {
    // Lookup the course
    // If course not found return 404

    // otherwise delete it
    // return the deleted object
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port : {port}`));