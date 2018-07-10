let movie = 'Lord of Rings';

function starWarsFan() {
  let movie = 'Start Wars';
  return movie;
}

function marvelFans() {
   movie = 'The Avengers';
  return movie;
}

function blizzardFan() {
  let isFan = true;
  let phrase = 'Warcraft';
  console.log('Before if:'+ phrase);

  if (isFan){
    let phrase = 'initial text';
    phrase = 'For the Horde';
    console.log('Inside if:'+phrase);
  }
  phrase = 'For the  Alliance!';
  console.log('After if:'+phrase);
}

console.log(movie); //Lord of rings
console.log(starWarsFan()); //Star wars
console.log(marvelFans()); //The Avengers
console.log(movie); //Lord of rings
blizzardFan();//Warcraft For the Hord for the Alliance
