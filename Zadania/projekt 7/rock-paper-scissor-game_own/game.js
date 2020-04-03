const gameStatistic  = {
    numberOfGame: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const gameplay = {
    playerHand: '',
    compHand: '',
}

const hands = document.querySelectorAll('.select img');

function selectOption(){
    gameplay.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px orange';
}

function selectAiOption(){
    return compHand = hands[Math.floor(Math.random()*hands.length)].dataset.option;
}

function checkHands(player, ai){
    if(player === ai){
        return 'draw';
    }else if (player === 'nożyczki' && ai === 'papier' || player === 'kamień' && ai ==='nożyczki' || player === 'papier' && ai === 'kamień'){
        return 'win'
    }else{
        return 'loss'
    }
}

function showResult(player, com, result){
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = com;
    document.querySelector('p.numbers span').textContent = ++gameStatistic.numberOfGame;

    if(result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameStatistic.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'WYGRAŁEŚ !';
    }else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameStatistic.losses;
        document.querySelector('[data-summary="who-win"]').textContent = 'PRZEGRAŁEŚ !';
    }else {
        document.querySelector('p.draws span').textContent = ++gameStatistic.draws;
        document.querySelector('[data-summary="who-win"]').textContent = 'REMIS !';
    }

}

function fnishGame(){
    gameplay.playerHand = '';
    hands.forEach(hand => hand.style.boxShadow = '');
}

function startGame(){
    if(!gameplay.playerHand) alert('Wybierz dłoń');
    gameplay.compHand = selectAiOption();
    console.log("JA: "+gameplay.playerHand);
    console.log("COMP: "+gameplay.compHand);
    const matchResult = checkHands(gameplay.playerHand, gameplay.compHand);
    console.log(matchResult);

    showResult(gameplay.playerHand, gameplay.compHand, matchResult);
    fnishGame();

}



hands.forEach(hand => hand.addEventListener('click', selectOption));

document.querySelector('.start').addEventListener('click', startGame);