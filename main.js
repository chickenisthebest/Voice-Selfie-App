var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    
    if(Content == "take my selfie"){
        speak();
        console.log("taking your selfie in 5 seconds");
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speakData = "taking your selfie in 5 seconds";
    
    var saythis = new SpeechSynthesisUtterance(speakData);
    synth.speak(saythis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    
    link.href = image;
    link.click();
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90,
});

var camera = document.getElementById("camera");