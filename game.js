                 
var pointer = 0;
var score = 0;
var gamestate = "onging";

// ändra denna för att sätta på eller stänga av random ordning 1 = random    0 = inte random
var random = 1


var images = [
  "personer/alexander-fransson.jpeg",
  "personer/alexander-gudmundsson.jpeg",
  "personer/axel-jobson.jpeg",
  "personer/axel-svendsen.jpeg",
  "personer/daniel-ljung.jpeg",
  "personer/eric-dahlgren.jpeg",
  "personer/frans-karlsson.jpeg",
  "personer/isac-ekeroth.jpeg",
  "personer/jack-blomquist.jpeg",
  "personer/joel-lundhag.jpeg",
  "personer/jonas-olanders.jpeg",
  "personer/linus-gamborn.jpeg",
  "personer/linus-eriksson.jpeg",
  "personer/nichlas-jensen.jpeg",
  "personer/sebastian-martinsson.jpeg",
  "personer/simon-liander.jpeg",
  "personer/viktor-rozman.jpeg",
  "personer/viktor-söderborg.jpeg",
  "personer/daniel_berg.jpeg",
  "personer/ola_lindberg",
];

  var people = [
    "Alexander_Fransson<alexander_fransson<alexander<fransson",
    "Alexander_Gudmundsson<alexander_gudmundsson<alexander<gudmundsson",
    "Axel_Jobson<axel_jobson<axel<jobson",
    "Axel_Svendsen<axel_svendsen<axel<svendsen",
    "Daniel_Ljung<daniel_ljung<daniel<ljung",
    "Eric_Dahlgren<eric<dahlgren<eric<dahlgren",
    "Frans_Karlsson<frans_karlsson<frans<karlsson",
    "Isac_Ekeroth<isac_ekeroth<isac<ekeroth",
    "Jack_Blomquist<jack_blomquist<jack<blomquist",
    "Joel_Lundhag<joel_lundhag<daniel<daniel_lundhag<joel<lundhag",
    "Jonas_Olanders<jonas_olanders<jonas<olanders",
    "Linus_Gamborn<linus_gamborn<linus<gamborn",
    "Linus_Eriksson<linus_eriksson<linus<eriksson",
    "Nichlas_Jensen<nichlas_jensen<nichlas<jensen",
    "Sebastian_Martinsson<sebastian_martinsson<sebastian<martinsson",
    "Simon_Liander<simon_liander<simon<liander",
    "Viktor_Rozman<viktor_rozman<viktor<rozman",
    "Viktor_Söderborg<viktor_söderborg<viktor<söderborg",
    "Ola_Lindberg<ola_lindberg<ola<lindberg",
    "Daniel_Berg<daniel_berg<daniel<berg"
  ];


var random_array = shuffle(generate_array(people.length))

var fel = [];

// definerar pointers till element i dokumentet (game.html)
const inp = document.getElementById("inp");
const pic = document.getElementById("bild");
const display_results_text = document.getElementById("results");
const next_button = document.getElementById("next_person");
const guess_button = document.getElementById("guess");
const score_disp = document.getElementById("score");
const tjock = document.getElementById("tjock");
const end = document.getElementById("end");
const display_list_length = document.getElementById("person");
const end_text_score = document.getElementById("end_text_score");
const end_text_message = document.getElementById("end_text_message");

display_list_length.innerHTML = people.length;

// ser till att första bilden altid är rätt person
pic.src = images[getPointerVal(pointer)]



// har hand om att förmedla ifall svaret var rätt eller fel till användaren
function results(correct) {

  if (correct == 1) {

    display_results_text.innerHTML = `Correct! It was ${people[getPointerVal(pointer)].replace("_", " ")}`;
    display_results_text.style = "color: green";
    console.log("correct");
    score = score + 1;
  }
  else if (correct == 0) {
    display_results_text.innerHTML = `Incorrect! It was ${people[getPointerVal(pointer)].replace("_", " ")}`;
    display_results_text.style = "color: red";
    console.log("incorrect");
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

  if (random_array.length == pointer + 1 && fel.length != 0){
    game_over()  
  }
  else if(random_array.length == pointer + 1){
    game_end()
  }

}

// 2 Situationer som utspelas efter du har gissat på alla svaren baserat på hur mång rätt du fick
function game_over(){
  end_text_score.innerHTML = `You got ${score} out of ${people.length} correct!`
  end_text_message.innerHTML = "Do you want to try again with the answers you got wrong?"
  gamestate = "over"
  tjock.style.width = "100%";
  end.style.visibility = "visible";
}

function game_end(){
  end_text_score.innerHTML = `Well done you got everyone correct!`
  end_text_message.innerHTML = "Do you want to play again?"
  next_button.style.visibility = "hidden";
  guess_button.style.visibility = "hidden";
  tjock.style.width = "100%";
  end.style.visibility = "visible";
}

function yes(){
  if (random_array.length == pointer + 1 && fel.length != 0){
    next_person()
  }
  else if(random_array.length == pointer + 1){
    window.location.reload();

  }

}

//vad som händer när man klickar på next knappen
function next_person() {
  if (gamestate == "over"){
    restart()
  }
  else  {
    pointer = pointer + 1
    pic.src = images[getPointerVal(pointer)];
    display_results_text.style.visibility = "hidden";
    next_button.style.visibility = "hidden";
    guess_button.style.visibility = "visible";

  }
}

// restart funktion för att starta om spelet
function restart(){
  gamestate = "ongoing"
  random_array = shuffle(fel)
  pointer = 0
  next_button.innerHTML = "next"
  pic.src = images[getPointerVal(pointer)];
  display_results_text.style.visibility = "hidden";
  next_button.style.visibility = "hidden";
  guess_button.style.visibility = "visible";
  end.style.visibility = "hidden";
  fel = [];
  tjock.style.width = "0%" ;
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
