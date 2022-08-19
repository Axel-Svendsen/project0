var pointer = 0;
var score = 0;
var gamestate = "onging";

// ändra denna för att sätta på eller stänga av random ordning 1 = random    0 = inte random
var random = 1


const images = ["personer/donald_trump.png",
  "personer/ryan_gosling.png",
  "personer/20220715_213252.jpg",
  "personer/Kirby.webp",
  "personer/Spongebob.png",
  "personer/Elon_Musk_Smoke.webp",
  "personer/Felix_Kjellberg.jpeg",
  "personer/jonas_blom.png"];

const people = ["Donald_Trump<donald_trump<donald<trump",
  "Ryan_Gosling<ryan_gosling<ryan<gosling",
  "Viktor_Rozman<viktor_rozman<viktor<rozman",
  "Kirby<kirby",
  "Spongebob<spongebob<sponge_bob<svampbob<svamp_bob",
  "Elon_Musk<elon_musk<elon<musk",
  "Felix_Kjellberg<felix_kjellberg<felix",
  "Jonas_Blom<jonas_blom<jonas<blom"];


var random_array = shuffle(generate_array(people.length))

var fel = [];

// definerar pointers till element i dokumentet (game.html)
const inp = document.getElementById("inp");
const pic = document.getElementById("bild");
const display_results_text = document.getElementById("results");
const next_button = document.getElementById("next_person");
const guess_button = document.getElementById("guess");
const score_disp = document.getElementById("score");

// ser till att första bilden altid är rätt person
pic.src = images[getPointerVal(pointer)]

// har hand om att förmedla ifall svaret var rätt eller fel till användaren
function results(correct) {

  if (correct == 1) {

    display_results_text.innerHTML = "Rätt!";
    display_results_text.style = "color: green";
    console.log("rätt");
    score = score + 1;
  }
  else if (correct == 0) {
    display_results_text.innerHTML = people[getPointerVal(pointer)];
    display_results_text.style = "color: red";
    console.log("fel");
    fel.push(getPointerVal(pointer));
    console.log(fel);
  }

  score_disp.innerHTML =  score
  display_results_text.style.visibility = "visable";
  next_button.style.visibility = "visible";
  guess_button.style.visibility = "hidden";
  inp.value = "";
}

// vad som händer när man klickar på test/gissa knappen
function clicked() {


  val = inp.value;
  val = val.toLowerCase();
  val = val.replace(" ", "_")
  const alla_svar = people[getPointerVal(pointer)].split("<");

  if (alla_svar.includes(val)) {
    results(1)
  }
  else {
    results(0)
  }


  console.log(alla_svar);

  console.log(val);

  if (random_array.length == pointer + 1){
    game_over()  
  }

}

function game_over(){
  next_button.innerHTML = "play again?"
  gamestate = "over"
}

//vad som händer när man klickar på next knappen
function next_person() {
  if (gamestate == "over"){
    restart()
  }
  else  {
    pointer = pointer + 1
    console.log(pointer)
    pic.src = images[getPointerVal(pointer)];
    display_results_text.style.visibility = "hidden";
    next_button.style.visibility = "hidden";
    guess_button.style.visibility = "visible";

  }
}

function restart(){
  gamestate = "ongoing"
  random_array = shuffle(fel)
  pointer = 0
  next_button.innerHTML = "next"
  pic.src = images[getPointerVal(pointer)];
  display_results_text.style.visibility = "hidden";
  next_button.style.visibility = "hidden";
  guess_button.style.visibility = "visible";
  fel = []
}

function generate_array(length){
  var arr = [];
  x = 0;
  while (x != length){
    arr.push(x);
    x += 1;
  }
  return arr;

}

function getPointerVal(pointer){
  if (random == 1){
    return random_array[pointer];
  }
  else{
    return pointer
  }
}

// funktion som kan shuffela en array randomly
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
