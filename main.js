Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("resultt").innerHTML='<img id="ci" src="'+data_uri+'">';
            }) ;
    }
    console.log('ml5 version',ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wyb4s1A3v/model.json',modelloaded);
    function modelloaded(){
        console.log('modelloaded');
    }
    function check (){
        img= document.getElementById("ci");
        classifier.classify(img,gotresult);
    }
    function gotresult(error,results){
        if(error){
            console.error(error);
        }else{
            console.log(results);
            document.getElementById("result_object_name").innerHTML=results[0].label;
            document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
        }
    }