function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 475);
    canvas.position(700,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('initialisied posnet.');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log("Results:" + results);
    }
}