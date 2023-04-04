var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

Webcam.attach(camera);

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event)

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    speak();
    Webcam.attach(camera);
    
    
    if( Content == "take my selfie"){
        picture = Webcam.snap( function(data_uri) {
            // display results in page
            document.getElementById('result').innerHTML = 
             '<img src="'+data_uri+'"/>';
        } );
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);


    synth.speak(utterThis);
}
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90

    
})
camera = document.getElementById("camera");