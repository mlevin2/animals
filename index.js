const fs = require('fs');

const animals = fs.readFileSync('animals.txt').toString().trimEnd().split("\n");

for (let i = 0; i < animals.length; i++) {
    for (let j = (i + 1) % animals.length, count = 0; count < animals.length - 1; j = (j + 1) % animals.length, count++) {
        console.log(`You're the ${animals[i]} now, ${animals[j]}!`);
    }
}
