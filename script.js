console.log("Welcome to Spotify");
let Index=0;
let audioElement = new Audio("/songs/18 Jan, 1.09 pm.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let songitem= Array.from(document.getElementsByClassName("songitem"));
let about=document.getElementById("about");
var i=0

let songs = [
     {songName : "let", filepath: "/songs/18 Jan, 1.09 pm.mp3", coverPath:"wp2971721-music-graffiti-wallpapers.jpg"},
     {songName : "me",filepath: "/songs/2.mp3", coverPath:"logo.png.png"},
     {songName : "rabba", filepath: "songs/Titanic - Jacks Death Music.mp3", coverPath:"logo.png.png"},
     {songName : "idk", filepath: "/songs/18 Jan, 1.09 pm.mp3", coverPath:"wp2971721-music-graffiti-wallpapers.jpg"},
     {songName : "you", filepath: "/songs/2.mp3", coverPath:"logo.png.png"},
     {songName : "me", filepath: "/songs/18 Jan, 1.09 pm.mp3", coverPath:"wp2971721-music-graffiti-wallpapers.jpg"},
     {songName : "badal", filepath: "songs/2.mp3", coverPath:"logo.png.png"},
];

songitem.forEach((Element ,i) =>{
   // console.log(Element ,i);
    Element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    Element.getElementsByClassName("name")[0].innerHTML= songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
      
        

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play'); 
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressbar.value=progress;
    if(progress==100)
    {  if(i>=7){
          for(i=0; i<=6;i++)
          {
            check(i);
          }
        }
        else{
            i=0;
          }

    
        
    }
  function check(i){
   
    
        audioElement.src=songs[Index+i].filepath;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        
    
  }

    
})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressbar.value *audioElement.duration/100;
})

const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause')
        
    })}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element,i) =>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        Index=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=songs[Index].filepath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        about.innerHTML=songs[Index].songName;
    })
});
document.getElementById("left").addEventListener('click',()=>
{
  if(Index>=7)
  {
      Index=0;
  }
  else
  {
      Index=Index-1;
  }
  
        audioElement.src=songs[Index].filepath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        about.innerHTML=songs[Index].songName;
})
document.getElementById("right").addEventListener('click',()=>
{
  if(Index>=7)
  {
      Index=0;
  }
  else
  {
      Index=Index+1;
  }

        audioElement.src=songs[Index].filepath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        about.innerHTML=songs[Index].songName;
})




