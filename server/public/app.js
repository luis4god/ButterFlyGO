// This function accepts three arguments, the URL of the image to be 
// converted, the mime type of the Base64 image to be output, and a 
// callback function that will be called with the data URL as its argument 
// once processing is complete

// Here we define the function that will send the request to the server. 
// It will accept the image name, and the base64 data as arguments

var sendBase64ToServer = function(base64){
    console.log('Sending the base64 Image:' + base64 + ' to the server')
    var httpPost = new XMLHttpRequest(),
        path = "../uploadpic"
        data = JSON.stringify({image: base64});
    httpPost.onreadystatechange = function(err) {
            if (httpPost.readyState == 4 && httpPost.status == 200){
                console.log(httpPost.responseText);
            } else {
                console.log(err);
            }
        };
    // Set the content type of the request to json since that's what's being sent
    httpPost.open("POST", path, true);
    httpPost.setRequestHeader('Content-Type', 'image/jpeg');
    httpPost.send(data);
    console.log('Image SENT to: '+ path)
};


// Call the function with the provided values. The mime type could also be png
// or webp

//uploadImage(imgsrc, '', 'image/jpeg')


// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    console.log('Access the device camera and stream to cameraView')
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    console.log('Take a picture when cameraTrigger is tapped')
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    console.log('Is going to SEND the image the server')
    sendBase64ToServer(cameraOutput.src);
};




// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);