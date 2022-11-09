 const express = require('express');


 const app = express();

 const cors = require('cors');



//---------------------------------------------------------------------------------



// app.get('/', function(req, res) {
//     res.send('hello world');
//     console.log("you are home page");
// });

// app.get('/search', (req, res) => {
//     console.log(req.body);
//     res.send("we are on the search page");npm 
// });

// app.listen(3000, ()=> {
//     console.log("SERVER STARTED");
// });[]




//---------------------------------------------------------------------------------


// const http = require("http");

// const server = http.createServer((req, res) => {
//     if(req.url === "/") {
//         res.write('Hello World');
//         res.end();
//     }

//     else if(req.url === "/api") {
//         res.write(JSON.stringify([1, 2, 3]))
//         res.end();
//     }

//     else if(req.method === "GET" && req.url === "/login") {
//         console.log("/data" + ": calling via Method");
//         res.write(JSON.stringify(["Logged", "You are now logged in"]))
//         res.end();
//     }

//     else if(req.method === "POST" && req.url === "/send") {
//         let raw_data;
//         req.on('data', (data_chunk) => {
//             raw_data = data_chunk;
//             console.log(raw_data);
//         });
//         req.on('end', () => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             console.log(raw_data.toString('utf8'));
//             res.end(`${raw_data}`)
//         })
//     }
// })

// server.on('connection', (socket) => {
//     console.log('New Connection Created');
// })


// server.listen(3000, () => {
//     console.log("New Server Started");
// });


//---------------------------------------------------------------------------------


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










