song=""
song_1=""
leftWristX=0;
rightWristY = 0;
leftWristY=0;
rightWristX=0;
song_status="";
song_status_1="";
scoreleftwrist=0;
scorerightwrist=0;


function preload()
{
    song = loadSound("Clear.mp3");
    song_1=loadSound("Pycres.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

    function modelLoaded()
    {
        console.log('The pose is seen')
    }



function draw()
{
    image(video, 0, 0, 600, 500);
    song_status=song.isPlaying();
    song_status_1=song_1.isPlaying();
    fill("blue");
    stroke("green");

    
    if(scoreleftwrist>0.2)
    {
circle(leftWristX, leftWristY, 20);
song_1.stop();
if(song_status_1==false)
{
song.play();
document.getElementById("james").innerHTML=" playing Pycres";

}
    }

if(scorerightwrist>0.2)
{
circle(rightWristX, rightWristY, 20);
song.stop();
if(song_status==false)
{
song_1.play();
document.getElementById("james").innerHTML=" playing Clear";

} 
}
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);

}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX +"leftWristY"+ leftWristY)

        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX +"rightWristY"+ rightWristY)
    }
}