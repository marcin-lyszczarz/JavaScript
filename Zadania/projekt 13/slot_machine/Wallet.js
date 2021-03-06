class Wallet {
    constructor(money){
        let _money = money;
        this.getWalletValue = () => _money; //pobieranie zawartości portfela

        //sprawdzenie czy użytkownik ma wystarczającą ilość środków do gry
        this.checkCanPlay = value => {
            if(_money >= value) return true;
            return false;
        } 

        this.updateWallet = (value, type ='+') => {
            if(typeof value === 'number' && !isNaN(value)){
                if(type === '+'){
                    return _money += value;
                } else if (type === '-'){
                    return _money -= value;
                } else {
                    throw new Error('nieprawidłowy typ działania');
                }
            } else {
                console.log(typeof value);
                throw new Error ('nieprawidłowa wartoć');
            }
        }
        
    }

}