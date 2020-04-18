class Statistics {
    constructor(){
        this.gameResults = [{win: true, bid: 5}, {win: false, bid: 5}, {win: true, bid: 5}];
    }

    addGameToStatistics(win, bid){
        let gameResult = {
            win: win,
            bid: bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult);
    }
    showGameStatistics(){
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let loss = games - wins;
        console.log(games, wins, loss);
        return [games, wins, loss];
    }
}

const stats = new Statistics;