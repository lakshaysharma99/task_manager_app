const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

app.use(express.json())

app.get('/hello', (req,res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

app.listen(5000, console.log('server is listening on port 5000...'));