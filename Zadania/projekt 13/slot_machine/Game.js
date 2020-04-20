class Game {
    constructor(startMoney){
        this.stats = new Statistics();
        this.wallet = new Wallet(startMoney);

        document.querySelector('#start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.divColor = document.querySelectorAll('div.color');
        this.input = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number')
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render();
    }
    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), 
        result = '', stats = [0,0,0], bid = 0, wonMoney = 0){
        //console.log('gramy');
        this.divColor.forEach((div, index) => {
            div.style.backgroundColor = colors[index]
        })
        this.spanWallet.textContent = money;
        if(result){
            result = `Wygrałeś: ${wonMoney},`
        }else if (!result && result !== ''){
            result = `Przergrałeś: ${bid},`;
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

    }
    startGame(){
        if(this.input.value < 1) return alert ('Zbyt mała kwota ! Minimum 1');   
        const bid = Math.floor(this.input.value);
        
        if(!this.wallet.checkCanPlay(bid)){
            return alert('Masz za mało środków na koncie lub podana została nieprawidłowa wartość');
        }

        this.wallet.updateWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.monyeWinInGame(win, bid);
        this.wallet.updateWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney);

        this.input.value = '';
        //console.log(wonMoney, this.wallet.getWalletValue());
    }
}

