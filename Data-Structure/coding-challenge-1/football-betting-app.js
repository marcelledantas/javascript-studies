const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 11.33,
        x: 3.25,
        team2: 6.5,
    },
};


// const players1 = game.players[0];
// const players2 = game.players[1];

const [players1, players2] = game.players; //Destructuring array

// Destructing
console.log(players1);
let [gk, ...fieldPlayers] = players1;

console.log(`gk: ${gk} `);
console.log(`fieldPlayers: ${fieldPlayers}`);

const allPlayers = [...players1, ...players2];

console.log(allPlayers);

console.log(`allPlayers: ${allPlayers} - length: ${allPlayers.length}`);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);


// let { team1, x: draw, team2 } = game.odds;
// const { odds } = game;
// let { team1, x: draw, team2 } = odds;
const { odds: { team1, x: draw, team2 } } = game;

console.log(team1);
console.log(team2);
console.log(draw);

const printGoals = function(...numPlayers) {
    for (i = 0; numPlayers[i]; i++) {
        if (game.scored.includes(numPlayers[i])) {
            console.log(`${numPlayers[i]} - Total goals: ${game.score}`);
        }
    }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// The || short circuit when the first value is true 
// The && short circuit when the first value is false

team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

// console.log(team1);