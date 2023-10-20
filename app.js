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
    box.classList.toggle("image-box")
}
//< -----------------MUSIC CONTROL------------------------------>




let repeat=false,
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
]



// add songs
function init(){
    loadsong(currentsong);
}

var songname=document.getElementById("s-title");
var coverimg=document.getElementById("random")

function loadsong(num){
    songname.innerHTML=`${songs[num].title}`;
    coverimg.src=`${songs[num].img_src}`;
    audio.src=`${songs[num].src}`
}

const play=document.getElementById("play"),
prevbtn=document.getElementById("prev"),
nextbtn=document.getElementById("next");

play.addEventListener("click",()=>{
    if(playing){
        play.classList.replace("bx-pause" ,"bx-play");
        playing=false;
        audio.pause();
    }
    else{
        play.classList.replace("bx-play" ,"bx-pause");
        playing=true;
        audio.play();
    }
});


function nextsong(){
    if(currentsong < songs.length-1){
        currentsong++;
    }
    else{
        currentsong = 0;
    }
    loadsong(currentsong);
    if(playing){
        audio.play();
    }
}

nextbtn.addEventListener("click",nextsong);

function prevsong(){
    if(currentsong > 0){
        currentsong--;
    }
    else{
        currentsong = songs.length-1;
    }
    loadsong(currentsong);

    if(playing){
        audio.play();
    }
}
 
prevbtn.addEventListener("click",prevsong)