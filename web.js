
const http = require('http'); 
const cv = require('opencv4nodejs');
const dbr = require('barcode4nodejs');
dbr.initLicense("LICENSE-KEY")
barcodeTypes = dbr.barcodeTypes
const drawParams = { color: new cv.Vec(0, 255, 0), thickness: 2 }
const fontFace = cv.FONT_HERSHEY_SIMPLEX;
const fontScale = 0.5;
const textColor = new cv.Vec(255, 0, 0);
const thickness = 2;

const wCap = new cv.VideoCapture(0);
wCap.set(cv.CAP_PROP_FRAME_WIDTH, 320);
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 240);

var img = null;
var results = null;
function capture() {
    var frame = wCap.read()
    if (frame.empty) {
        wCap.reset();
        frame = wCap.read();
    }

    dbr.decodeBufferAsync(frame.getData(), frame.cols, frame.rows, frame.step, barcodeTypes, function (err, msg) {
        // console.log(results)
        results = msg

    }, "", 1);

    if (results != null) {
        for (index in results) {
            let result = results[index];

            let upperLeft = new cv.Point(result.x1, result.y1)
            let bottomLeft = new cv.Point(result.x2, result.y2)
            let upperRight = new cv.Point(result.x3, result.y3)
            let bottomRight = new cv.Point(result.x4, result.y4)

            frame.drawLine(
                upperLeft,
                bottomLeft,
                drawParams
            )
            frame.drawLine(
                bottomLeft,
                upperRight,
                drawParams
            )

            frame.drawLine(
                upperRight,
                bottomRight,
                drawParams
            )
            frame.drawLine(
                bottomRight,
                upperLeft,
                drawParams
            )

            frame.putText(result.value, new cv.Point(result.x1, result.y1 + 10), fontFace, fontScale, textColor, thickness);
        }


    }

    img = cv.imencode('.jpg', frame);
    setTimeout(capture, 30);
}

capture();

var fs=require("fs");
var html = fs.readFileSync("index.htm", "utf8");

var server = http.createServer(function (req, res) {   //create web server
    if (req.url.startsWith("/image")) {
        
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.write(img);
        res.end();
    
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write(html);
        res.end();
    }

});

server.listen(2020);

console.log('Node.js web server is running at port 2020...')