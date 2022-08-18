var pointer = 0;
var score = 0;

// ändra denna för att sätta på eller stänga av random ordning 1 = random    0 = inte random
var random = 1


const images = ["personer/donald_trump.png",
  "personer/ryan_gosling.png",
  "personer/20220715_213252.jpg",
  "personer/Kirby.webp",
  "personer/Spongebob.png",
  "personer/Elon_Musk_Smoke.webp",
  "personer/Felix_Kjellberg.jpeg"];

const people = ["donald_trump<donald<trump",
  "ryan_gosling<ryan<gosling",
  "viktor_rozman<viktor<rozman",
  "kirby",
  "spongebob<sponge_bob<svampbob<svamp_bob",
  "elon_musk<elon<musk",
  "Felix_Kjellberg<felix<pewdi"];

const random_array = shuffle(generate_array(people.length))


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

    display_results_text.innerHTML = "Fel!";
    display_results_text.style = "color: red";
    console.log("fel");
  }

  score_disp.innerHTML =  score
  display_results_text.style.visibility = "visable";
  next_button.style.visibility = "visible";
  guess_button.style.visibility = "hidden";
  inp.value = "";
}

// vad som händer när man klickar på test/gissa knaååen
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



}

//vad som händer när man klickar på next knappen
function next_person() {
  pointer = pointer + 1
  console.log(pointer)
  pic.src = images[getPointerVal(pointer)];
  display_results_text.style.visibility = "hidden";
  next_button.style.visibility = "hidden";
  guess_button.style.visibility = "visible";

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
