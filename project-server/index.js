const express = require("express");

const app = express();
const data1 = require('./Routes/database');


// const middleware = (req, res, next) => {
//     console.log("Data Scanned");
//     next();
// }

app.use("/home", data1);


// app.get('/home', (rej, res) => {
//     console.log(data1);
//     res.send(data1);
// })

app.listen(2000, () => {
    console.log("Node data server created succfully!!"); 
});