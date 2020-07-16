const dbr = require('barcode4nodejs');
const cv = require('opencv4nodejs');
dbr.initLicense("LICENSE-KEY")
barcodeTypes = dbr.barcodeTypes
const vCap = new cv.VideoCapture(0);
const drawParams = { color: new cv.Vec(0, 255, 0), thickness: 2 }
const fontFace = cv.FONT_HERSHEY_SIMPLEX;
const fontScale = 0.5;
const textColor = new cv.Vec(255, 0, 0);
const thickness = 2;

results = null;

function getframe() {
    let img = vCap.read();
    

    dbr.decodeBufferAsync(img.getData(), img.cols, img.rows, img.step, barcodeTypes, function (err, msg) {
        results = msg

    }, "", 1);

    if (results != null) {
        for (index in results) {
            let result = results[index];

            let upperLeft = new cv.Point(result.x1, result.y1)
            let bottomLeft = new cv.Point(result.x2, result.y2)
            let upperRight = new cv.Point(result.x3, result.y3)
            let bottomRight = new cv.Point(result.x4, result.y4)

            img.drawLine(
                upperLeft,
                bottomLeft,
                drawParams
            )
            img.drawLine(
                bottomLeft,
                upperRight,
                drawParams
            )

            img.drawLine(
                upperRight,
                bottomRight,
                drawParams
            )
            img.drawLine(
                bottomRight,
                upperLeft,
                drawParams
            )

            img.putText(result.value, new cv.Point(result.x1, result.y1 + 10), fontFace, fontScale, textColor, thickness);
        }


    }
    

    cv.imshow('Webcam', img);
    const key = cv.waitKey(10); // Press ESC to quit
    if (key != 27) {
        setTimeout(getframe, 30);
    }

}

getframe()