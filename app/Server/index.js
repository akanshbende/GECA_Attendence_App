const http = require('http');
const fs = require('fs');//core modules
const path = require('path');//core modules
const { extname } = require('path');
const { pipeline } = require('stream');

const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
    // console.log(req.headers);

    console.log('request for' + req.url + 'by method' + req.method);

    if (req.method == 'GET') {
        var fileURL;
        if (req.url == '/') {
            fileURL = '/index.html'


        } else { fileURL = req.url }
        var filePath = path.resolve('./public' + fileURL);//create absolute path ,
        const fileExt = path.extname(filePath);

        if (fileExt == '.html') {
            fs.exist(filePath,(exists) => {
                if (!exists) {
                    res.statusCode = 404;//if connection is sucessful
                    res.setHeader('Content-Type', 'text/html');//give msg in form of html
                    res.end('<html><body> <h1>Error 404:' + fileURL + 'does not exist </h1></body></html>')//show that message

                }

               
                res.statusCode = 200;//if connection is sucessful
                res.setHeader('Content-Type', 'text/html');             //give msg in form of html
                fs.createReadStream(filePath).pipe(res);             //read file
            });                                                    //file exist or not? //fs core module and exists method
        } else {
            res.statusCode = 404;//if connection is sucessful
            res.setHeader('Content-Type', 'text/html');//give msg in form of html
            res.end('<html><body> <h1>Error 404:' + fileURL + 'not a HTML file </h1></body></html>')//show that message

        }

    } else {
        res.statusCode = 404;//if connection is sucessful
        res.setHeader('Content-Type', 'text/html');//give msg in form of html
        res.end('<html><body> <h1>Error 404:' + fileURL + 'does not exist </h1></body></html>')//show that message


    }

    res.statusCode = 200;//if connection is sucessful
    res.setHeader('Content-Type', 'text/html');//give msg in form of html
    res.end('<html><body> <h1> Not Supported :)</h1></body></html>')//show that message
});


//commanding server to start
server.listen(port, hostname, () => {
    console.log(`server running at http:// ${hostname}:${port}`);
})