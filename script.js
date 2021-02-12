//conditionals

// const age =17;

// if (age <= 15) {
//     console.log('You are old enough to participate in the quiz');
// } else {
//     console.log('You aren\'t legally old enough to participate in the quiz');
// }

const weather ='sunny';

if (weather === 'hot') {
    console.log('It\'s too hot, You might want to wear light clothes');
} else if (weather === 'cold'){
    console.log('It\'s chilly outside, You might want to wear a jackect');
} else if (weather === 'rainy') {
    console.log('It\'s raining, You might want to carry an umbrella');
} else {
    console.log('The weather is great have an awesome day!');}

const pet1 = 'bunny'
const pet2 = 'puppy'

if (pet1 === 'bunny' && pet2 === 'puppy') {
    console.log('This means you have a puppy and bunny');
} else if (pet1 !== 'bunny' || pet2 !== 'puppy') {
    console.log('What type of pets do you own ?');
}