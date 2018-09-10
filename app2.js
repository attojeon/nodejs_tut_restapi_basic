/*
    get, post 구현하기
    메모리 객체 사용하기
    input validation 을 위해 Joi 패키지 설치하고 사용함.
*/
const express = require('express');
const Joi = require('joi');
const app = express();

// post를 사용할 때 json 포맷을 사용하기 위해 필요함.
app.use(express.json());

const courses = [
    { id: 1, name: 'C Language'},
    { id: 2, name: 'Javascript Language'},
    { id: 3, name: 'Python Language'}
];


app.post('/api/courses', (req, res) => {
    // Validation input message
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    //console.log(result);
    //return res.send(result);  // 메시지 전체 내용을 POSTMAN에서 볼 수 있음.
    if( result.error) return res.status(400).send(result.error.details[0]);

    // Create the course and return the course object
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.get('/api/courses', (req, res) => {
    // To read all the courses 

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
app.listen(port, () => console.log(`Listening port : ${port}...`));