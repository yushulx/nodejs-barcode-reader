# Node.js Barcode Reader
Build simple barcode reader apps for desktop and web using Node.js.

## Installation
- OpenCV

    ```
    npm install opencv4nodejs
    ```

- Dynamsoft Barcode Reader SDK

    ```
    npm install barcode4nodejs
    ```

## Usage

Get a [free trial license](https://www.dynamsoft.com/CustomerPortal/Portal/Triallicense.aspx) and update the following line:

```js
dbr.initLicense("LICENSE-KEY")
```

### Desktop

Run the app:

```
node desktop.js
```

![desktop barcode reader](https://www.dynamsoft.com/codepool/wp-content/uploads/2020/07/nodejs-barcode-opencv-webcam.png)

### Web

Run the web server:

```
node web.js
```

Visit `localhost:2020` from a web browser.

![reading barcodes in Microsoft Internet Explorer](https://www.dynamsoft.com/codepool/wp-content/uploads/2020/07/opencv-nodejs-barcode-web.png)