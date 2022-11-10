 const express = require('express');


 const app = express();

 const cors = require('cors');


 app.use(cors());

const middleware = (req, res, next) => {
    console.log(2+2);
    console.log("Got a login request");
    next();
}

const middleware2 = (req, res, next) => {
    console.log(req);
    console.log("we used middleware 2");
    next();
}


app.get('/', (req, res) => {
    res.send("Welcome");
})


app.get('/home', cors(),  (req, res) => {
    res.json({
        "Student": [
            {
                "name": "Raghav Khandelwal" 
            }

        ]
    })
})


app.get('/api', middleware, (req, res) => {
    console.log("Logged In");
    res.send("Logged In");
});
 

app.get('/type', middleware2, (req, res) => {
    console.log("using middleware 2");
    res.send("routing successful!");
})


app.listen(6000, () => {
    console.log("New Server Started");
})










