require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connnectDb = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handle')

//middleware
app.use(express.static('./public'))
app.use(express.json())


//General Info:
//app.get('/api/v1/tasks')  --this one gets all the tasks
//app.post('/apiv1/tasks')  --this one creates a new task
//app.get('/api/v1/tasks/:id')  --this one gets a single task
//app.patch('/api/v1/tasks/:id')--this one updates the task
//app.delete('/api/v1/tasks/:id')--this one deletes the task

app.use('/api/v1/tasks', tasks);

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try{
        await connnectDb(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    }

    catch(err){
        console.log(err);
    }
}

start();




