Webcam.set({
    width:350,
    height:300,
    image_format:"jpg",
    image_quality:90
});
var cam=document.getElementById("camopen");
Webcam.attach("#camopen");
function take_snapshot(){
    Webcam.snap(function (data_uri){
        result=document.getElementById("result_div").innerHTML="<img id='resulted_img' src='" + data_uri + "'>";
    });
};
console.log( "ml5_version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tSd8ZUR8O/model.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}