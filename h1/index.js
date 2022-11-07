const http = require('http');


const server = http.createServer((req, res) => {
    if(req.url === "/type1") {
    res.write(JSON.stringify([1, 2, 3, 4, 5]))
    res.end();
    }

    else if (req.url === "/type2") {
        res.write("<h1>Hello World</h1>")
        res.end();
    }
})


server.listen(8000, () => {
    console.log('Application in running');
})