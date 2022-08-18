var pointer = 0;
var score = 0;

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


// definerar pointers till element i dokumentet (game.html)
const inp = document.getElementById("inp");
const pic = document.getElementById("bild");
const display_results_text = document.getElementById("results");
const next_button = document.getElementById("next_person");
const guess_button = document.getElementById("guess");
const score_disp = document.getElementById("score");

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
}

// vad som händer när man klickar på test/gissa knaååen
function clicked() {
  val = inp.value;
  val = val.toLowerCase();
  val = val.replace(" ", "_")
  const alla_svar = people[pointer].split("<");

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
  pic.src = images[pointer];
  display_results_text.style.visibility = "hidden";
  next_button.style.visibility = "hidden";
  guess_button.style.visibility = "visible";

}