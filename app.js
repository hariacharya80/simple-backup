const express = require('express');
const app= express();
const PORT = 8003;

app.get('/backup', async (req,res)=>{
    res.sendFile(__dirname + '/backup_before_single_db');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})