# Node.js Barcode and QR Code Reader for Desktop and Web
Build simple Node.js barcode reader apps for desktop and web using [barcode4nodejs](https://www.npmjs.com/package/barcode4nodejs) (which is based on [Dynamsoft Barcode Reader C++ SDK](https://www.dynamsoft.com/barcode-reader/overview/)) and [opencv4nodejs](https://www.npmjs.com/package/opencv4nodejs).

## SDK Version
[v9.0](https://www.dynamsoft.com/barcode-reader/downloads)

## License Key for SDK
[![](https://img.shields.io/badge/Get-30--day%20FREE%20Trial-blue)](https://www.dynamsoft.com/customer/license/trialLicense/?product=dbr)

## Installation

```bash
npm install opencv4nodejs barcode4nodejs
```

## Usage

### Setting License Key
Set the license key in the `desktop.js` and `web.js` files:

```js
dbr.initLicense("LICENSE-KEY")
```

### Node.js Desktop App
Run the desktop barcode and QR code scanning app in node.js:

```
node desktop.js
```

![desktop barcode and QR code reader](https://www.dynamsoft.com/codepool/wp-content/uploads/2020/07/nodejs-barcode-opencv-webcam.png)

### Node.js Web App
To scan barcode and QR code in any web browser, start the web server and then visit `localhost:2020`:

```
node web.js
```

![reading barcode and QR code in Microsoft Internet Explorer](https://www.dynamsoft.com/codepool/wp-content/uploads/2020/07/opencv-nodejs-barcode-web.png)

## Blog
[Node.js Barcode Reader for Desktop and Web](https://www.dynamsoft.com/codepool/node-js-barcode-reader-for-desktop-and-web.html)
