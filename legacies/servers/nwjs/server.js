const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

const frontPage = async (req, res, cb) => {
    const marked = require('marked').marked;
    const prism = require('prismjs');
    const loadLanguages = require('prismjs/components/');
    marked.setOptions({
        highlight: function(code, lang, cb) {
            loadLanguages(lang);
            var strRes = prism.highlight(code, prism.languages[lang], lang);
            if (cb) {
                cb(null, strRes);
            } else {
                return strRes;
            }
        }
    });
    var result;
    fs.readFile(path.join(__dirname, ".", "/book/intro.md"), "utf-8", (err, data) => {
        if (err) {
            res.writeHead(err.code, err.message);
            res.end();
        }
        /**
         * marked.parse() kalau kita beri callback akan menambah kesulitan untuk menangani
         * async call, jadi mendingan dibiarkan saja tetap sync.
         */
        result = marked.parse(data, {gfm: true});
        console.log("Got result: %s", result);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\">" +
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
            "<title>Memanah Burung Rajawali</title>" +
            "<link rel=\"stylesheet\" href=\"/styles/w3.css\">" +
            "<link rel=\"stylesheet\" href=\"/styles/xcode.min.css\">" +
            "</head><body><main class=\"w3-container\">" + 
            "<div class=\"w3-content w3-padding-16\">" +
            result +
            "</div></main></body></html>"
        );
        res.end();
    });
}

var server = http.createServer(async (req, res) => {
    if (req.method === "GET") {
        const q = url.parse(req.url, true);
        if (q.pathname === "/") {
            return frontPage(req, res, null);
        } else if (path.extname(q.pathname).match("css")) {
            fs.readFile(path.join(__dirname, "public", q.pathname), "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(404, err.message);
                    return res.end();
                }
                res.writeHead(200, {"Content-Type": "text/css"});
                res.write(data);
                console.log("Server: Sent %s", q.pathname);
                return res.end();
            });
        } else if (path.extname(q.pathname).match("jpg|png|ico|svg")) {
            const filename = q.pathname;
            const imgPath = path.join(__dirname, ".", filename);
            console.log("GET: Asking for an image at: %s", filename);
            console.log("GET: Will send data from: %s", imgPath);
            fs.readFile(imgPath, (err, data) => {
                if (err) {
                    res.writeHead(err.code, err.message);
                    return res.end();
                }
                let strType = "image/ico";
                let strExt = path.extname(filename);
                if (strExt === ".jpg")
                    strType = "image/jpeg";
                console.log("Sending content-type as: %s, extname: %s", strType, strExt);
                res.writeHead(200, {"Content-Type": strType});
                res.write(data);
                return res.end();
            });
        }
    }
});

const start = async () => {
    console.log("Starting server on port 3000");
    server.listen(3000);
}
start();
