const express = require('express');
const app = express.Router();
const path = require('path');

app.get('/notes',(req,res) => {
    const resPath = path.join(__dirname,'..','public','notes.html');
    res.sendFile(resPath);
});

app.get('*',(req,res) => {
    const resPath = path.join(__dirname,'..','public','index.html');
    res.sendFile(resPath);
});

module.exports = app;