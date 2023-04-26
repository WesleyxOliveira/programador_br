const front = 'card_front';
const back = 'card_back';

let techs = [
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];

createCardsFromTechs(techs);
function createCardsFromTechs(techs) {
    let cards = [];

    for(let tech of techs) {
        cards.push(createPairFromTech(tech));
    }

    console.log(cards);
}

function createPairFromTech(tech) {
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    },
    {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }
];
}

function createIdWithTech(tech) {
    return tech + parseInt(Math.random() * 1000);
}