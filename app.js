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
    if(currentsong < songs.length-1){
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
    if(currentsong > 0){
        currentsong--;
    }
    else{
        currentsong = songs.length-1;
    }
    loadsong(currentsong);

    playyyy();
    boxdance();
}
 
prevbtn.addEventListener("click",prevsong)
