
/*change style of an element*/
/*document.querySelector("h1").style.color="red";*/
/*document.querySelector("h1").style.fontSize="12rem";*/

/* change property of a class*/
/*document.querySelector("img").classList.add("invisible");*/
/*document.querySelector("img").classList.remove("invisible");*/
/*document.querySelector("img").classList.toggle("invisible");*/
/*document.querySelectorAll("p")[0].classList.add("huge");*/
/*document.querySelectorAll("p")[1].classList.add("huge");*/

/*change html text*/
/*document.querySelector("h1").innerHTML="good bye!";*/
/*document.querySelector("h1").textContent="good bye!";*/


/*geting attribute*/
/*document.querySelector("img").getAttribute;*/
/*document.querySelector("img").attributes;*/

/* change attribute
document.querySelector("img").setAttribute( "what", "how");*/

/*document.querySelector(".img1").setAttribute("src", "images/dice4.png");*/

var randomNumber1=(Math.floor(Math.random()*6)+1);

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+ ".png");

var randomNumber2=(Math.floor(Math.random()*6)+1);

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+ ".png");

if (randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="✨  Player 1 win!";
  }
  else if  (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 win! ✨"
      }
 else {
     document.querySelector("h1").innerHTML="Draw!";
      }
/*
      var randomNumber3=(Math.floor(Math.random()*2));/*
      document.querySelectorAll("p")[0].classList.add("invisible");
      document.querySelectorAll("p")[1].classList.add("invisible");
      document.querySelectorAll("p")[randomNumber3].classList.remove("invisible");*/
