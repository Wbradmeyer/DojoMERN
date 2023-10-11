let animalNoises = [
    { 'dog': {
        'America' : 'Woof! Woof!',
        'Germany' : 'Wau Wau!',
        'England' : 'Bow wow!',
        'Uruguay' : 'Jua jua!',
        'Afrikaans' : 'Blaf!',
        'Korea' : 'Mong mong!',
        'Iceland' : 'Voff voff!',
        'Albania' : 'Ham!',
        'Algeria' : 'Ouaf ouaf!'
        }
    },
    { 'cat': {
        'America' : 'Meow',
        'Germany' : 'Miauw!',
        'England' : 'mew mew',
        'Uruguay' : 'Miau Miau!',
        'Afrikaans' : 'Purr',
        'Korea' : 'Nyaong!',
        'Iceland' : 'Kurnau!',
        'Albania' : 'Miau',
        'Algeria' : 'Miaou!'
        }
    },
    { 'chicken': {
        'America' : 'Cluck cluck',
        'Germany' : 'tock tock tock',
        'England' : 'Cluck Cluck',
        'Uruguay' : 'gut gut gdak',
        'Afrikaans' : 'kukeleku',
        'Korea' : 'ko-ko-ko',
        'Iceland' : 'Chuck-chuck!',
        'Albania' : 'Kotkot',
        'Algeria' : 'Cotcotcodet'
        }
    }
];

// print what a dog says in Iceland
// console.log(animalNoises[0].dog.Iceland)

// print what a cat says in Germany
// console.log(animalNoises[1].cat.Germany)

// print what a chicken says in Uruguay
// console.log(animalNoises[2].chicken.Uruguay)


// Write a function petSounds that takes an animal name and a country name.
// Using the globally-defined animalNoises array, petSounds should return a sentence that explains which sound the animal makes in the given country.

// const petSounds = (animal, country) => {
//     const oneAnimal = animalNoises.filter(a => a[animal])
//     let sound = oneAnimal[0][animal][country]
//     return `${animal}s in ${country} say ${sound}`
// }




// console.log(animalNoises[0].dog.Iceland)

// console.log(animalNoises[1].cat.Germany)

// console.log(animalNoises[2].chicken.Uruguay)

const petSounds = (animal, country) => {
    const oneAnimal = animalNoises.filter(a => a[animal])
    let sound = oneAnimal[0][animal][country]
    
    return `${animal[0].toUpperCase() + animal.slice(1)}s in ${country} say ${sound}`
}

console.log(petSounds('dog', 'Iceland')); // => Dogs in Iceland say Voff voff!
console.log(petSounds('cat', 'Korea')); // => Cats in Korea say Nyaong!