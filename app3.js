/*
    PUT 구현하기
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
    const { error } = validateCourse(req.body);
    console.log(error);
    if( error ) return res.status(400).send(error.details[0].message);

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
    // Lookup the course
    // If course not found return 404, 
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if( !course ) return res.status(404).send('The course with the given ID was not found. ');

    /*
    const result = validateCourse(course);
    if( result.error ) return res.status(400).send(result.error.details[0].message);
    // 위와 같은 코드를 javascript destruturing 을 사용하여아래와 같이 수정할 수 있다. => 권장.
    */
   const { error } = validateCourse(req.body);
   console.log(error);
   if( error ) return res.status(400).send(error.details[0].message);

    // otherwise update it and return the updated object
    course.name = req.body.name;
    res.send(course);
});


app.delete('/api/courses/:id', (req, res) => {
    // Lookup the course
    // If course not found return 404

    // otherwise delete it
    // return the deleted object
});


function validateCourse(course_object) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course_object, schema);
};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port : ${port}...`));