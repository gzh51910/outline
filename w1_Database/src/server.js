const express = require('express');

const app = express();

const {PORT} = require('./config.json');

const allRouter = require('./routers');

app.use(express.static('./'))
app.use(allRouter);

app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})