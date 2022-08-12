const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // console.log('request made to server');
    console.log(req.url, req.method);

    // set header content
    res.setHeader('Content-Type', 'text/html');

    // simple route path
    let path = './views/';
        switch (req.url) {
            case '/':
                path += 'index.html';
                break;
            case '/about':
                path += 'about.html';
                break;
            default:
                path += '404.html';
                break;
        }

    // send html file to view
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');  
});