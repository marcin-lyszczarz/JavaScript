class Result {
    static monyeWinInGame(result, bid){
        if(result) return bid * 3;
        else return 0;
    }

    static checkWinner (draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || 
            draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])
            return true;
            else return false;

    }
}

// console.log(Result.monyeWinInGame(true, 10));
