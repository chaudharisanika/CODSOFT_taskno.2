let title = document.querySelector(".mainh");
let newname = "WebDeveloper";
let index = 1;
const typewriter=()=>{
      let new_title = newname.slice(0,index);
      title.innerText = new_title;
      index > newname.length?index=1:index++;
      setTimeout(()=>{
        typewriter()
      },300)
}
typewriter();

let about = document.querySelector(".abouth");
let newabout = "Developer";

let indexn = 1;
const typewritern=()=>{
      let new_about = newabout.slice(0,indexn);
      about.innerText = new_about;
      indexn > newabout.length?indexn=1:indexn++;
      setTimeout(()=>{
        typewritern();
      },400)
}
typewritern();


// function setNewImage(){
// //    alert("hello")
// document.querySelector("#responsive").id="#sanika"
// }
// function setoldimage(){
//     document.querySelector("#responsive").src="../Portfolio/image/p1.jpg"
// }

window.addEventListener('scroll', reveall);

function reveall(){
  var reveals = document.querySelectorAll('.reveall');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealr);
function revealr(){
  var reveals = document.querySelectorAll('.revealr');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}
