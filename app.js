const express = require('express');

const app=express();
const project_routes= require('./routes/routes')

app.use('/api', project_routes)


module.exports= app;