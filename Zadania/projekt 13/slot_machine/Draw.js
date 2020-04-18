class Draw {
    constructor () {
        this.option = ['red', 'green', 'blue', 'yellow', 'black'];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }
    drawResult () {
        let colors = [];
        let temp = [];

        for(let i = 0; i < this.option.length; i++){
            const index = Math.floor(Math.random() * this.option.length);
            const color = this.option[index];
            temp.push(color);
            colors = temp.slice(0,3);
        }
        return colors;
    }
    
}

// const wynik = new Draw;
