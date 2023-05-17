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
        'Hummels', 'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

let counter = 1;

for(const player of game.scored){
	console.log(`Goal ${counter}: ${player}`);
	counter++;
}

//Loop key
const oddsValue = Object.values(game.odds);
const propertiesName = Object.keys(game.odds);

let avgOdd = 0;
for(const odd of oddsValue){
	avgOdd += odd;
}
console.log(`Average odd: ${avgOdd/oddsValue.length}`);

for(const team of propertiesName){
	if(game[`${team}`]){
		console.log(`Odd of victory ${game[`${team}`]}: ${game.odds[`${team}`]}`);	
	} else{
		console.log(`Odd of draw: ${game.odds[`${team}`]}`);
	}
}

let scorers = {};

const entries = Object.entries(scorers);
let players = [];


for(const playerOut of game.scored){
	
	let count = 0;

	for(const player of game.scored){
		if(playerOut == player){
			count++;
		}
	}

	scorers[playerOut] = count;

}
console.log(scorers);






