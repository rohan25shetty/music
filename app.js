var menu=document.getElementById("side");
var change=document.getElementById("bars");
function openmenu(){
    menu.style.right="0";
    change.setAttribute("onclick","closemenu()");
    change.setAttribute("class","fa-regular fa-circle-xmark togg");
}

function closemenu(){
    menu.style.right="-100%";
    change.setAttribute("onclick","openmenu()");
    change.setAttribute("class","fa-solid fa-bars togg");
}

var header=document.querySelector("header");
let lastscrollY=window.scrollY;

window.addEventListener("scroll",function(){
  
    if(lastscrollY < window.scrollY){
    header.classList.add("nav-hidden")
    }
    else{
        header.classList.remove("nav-hidden")
    }
    lastscrollY=window.scrollY;
})


var box=document.getElementById("disco");
function boxdance() {
    box.classList.add("image-box");
}
function boxdanceend(){
    box.classList.remove("image-box");
}
//< -----------------MUSIC CONTROL------------------------------>




let repeat=0,
currentsong=0,
playing=false,
shuffel=false,
audio = new Audio();




const songs=[
    {
    title:"ON MY WAY",
    img_src:"images/img.1.jpeg",
    src:"music/1.mp3"
    },
    {
        title:"The Nights",
        img_src:"images/img2.jpg",
        src:"music/AVIICI.mp3"
    },
    {
        title:"DANCE MONKEY",
        img_src:"images/img3.jpeg",
        src:"music/dance-m.mp3"
    },
    {
        title:"GOKU THEME",
        img_src:"images/img4.jpg",
        src:"music/dbs.mp3"
    },
    {
        title:"gurenge",
        img_src:"images/img5.jpg",
        src:"music/demon-s.mp3"
    },
    {
        title:"MY HERO ACADEMIA",
        img_src:"images/img6.webp",
        src:"music/mha.mp3"
    },
    {
        title:"shinzo sasageyo",
        img_src:"images/img7.jpg",
        src:"music/sasageyo.mp3"
    },
    {
        title:"My heart stereo",
        img_src:"images/img8.jpg",
        src:"music/sterio.mp3",
    },
];






// add songs

var songname=document.getElementById("s-title");
var coverimg=document.getElementById("random");
audio=new Audio(`${songs[0].src}`);

function loadsong(num){
    songname.innerHTML=`${songs[num].title}`;
    coverimg.src=`${songs[num].img_src}`;
    audio.src=`${songs[num].src}`;
}

const play=document.getElementById("play"),
prevbtn=document.getElementById("prev"),
nextbtn=document.getElementById("next");

function playyyy(){
    audio.play();
    play.setAttribute("class","bx bx-pause");
    play.setAttribute("onclick","boxdanceend();pausee()");
}
function pausee(){
    audio.pause();
    play.setAttribute("class","bx bx-play");
    play.setAttribute("onclick","boxdance();playyyy()");
}

function nextsong(){

    if(shuffel){
        shuffelfunc();
        loadsong(currentsong);
        playyyy();
    }
    else if(currentsong < songs.length-1){
        currentsong++;
    }
    else{
        currentsong = 0;
    }
    loadsong(currentsong);
    playyyy();
    boxdance();
}

nextbtn.addEventListener("click",nextsong);

function prevsong(){
    if(shuffel){
        shuffelfunc();
        loadsong(currentsong);
        playyyy();
    }
    else if(currentsong > 0){
        currentsong--;
    }
    else{
        currentsong = songs.length-1;
    }
    loadsong(currentsong);

    playyyy();
    boxdance();
}
 
prevbtn.addEventListener("click",prevsong);


//shuffle 
const shufflebtn=document.getElementById("shuff");
function shufflesongs(){
    shuffel =!shuffel;
    shufflebtn.classList.toggle("active");
}

shufflebtn.addEventListener("click",shufflesongs);

function shuffelfunc(){
    if(shuffel){
        currentsong=Math.floor(Math.random()*songs.length);
    }
    
}


//repeat functionality
const repeatbtn=document.getElementById("repeat")

function repeatsong(){
    if(repeat===0){
        repeat=1;
        repeatbtn.classList.add("active")
    }
    else if(repeat===1){
        repeat=2;
        repeatbtn.classList.add("active");
    }
    else{
        repeat=0;
        repeatbtn.classList.remove("active");
    }
}

repeatbtn.addEventListener("click",repeatsong)

audio.addEventListener("ended",()=>{
    if(repeat===1){
        playyyy();
    }
    else if(repeat===2){
        nextsong();
    }
    else{
        if(currentsong===songs.length-1){
            pausee();
        }else{
            nextsong();
        }
    }
});



//progresss bar
const progressbar=document.getElementById("pro-barr"),
    progressdot=document.querySelector(".dot"),
    currenttimeel=document.querySelector(".current-time"),
    timeelapsed=document.querySelector(".duration");

   

    function formatTime(time){
        let minutes=Math.floor(time/60);
        let seconds=Math.floor(time%60);
        seconds=seconds<10?`0${seconds}`:seconds;
        return `${minutes}:${seconds}`;
    }

    function progress(){
        let {duration,currentTime}=audio;

        isNaN(duration)?(duration=0):duration;
        isNaN(currentTime)?(currentTime=0):currentTime;
        currenttimeel.innerHTML=formatTime(currentTime);
        timeelapsed.innerHTML=formatTime(duration);

        let progressper=(currentTime/duration)*100;
        progressdot.style.left=`${progressper}%`
    }

    audio.addEventListener("timeupdate",progress);

    function setprogress(e){
        let width=this.clientWidth;
        let clickX=e.offsetX;
        let duration=audio.duration;
        audio.currentTime=(clickX/width)*duration;
        playyyy();
        boxdance();

    }

    progressbar.addEventListener("click",setprogress);

   
