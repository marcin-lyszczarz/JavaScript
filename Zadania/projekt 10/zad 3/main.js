const user = (name = "", age)=>{
    let userName = name;
    let userAge = age;
    function showName(){
        console.log(`Cześć ${userName}, ${userAge >= 18 ? "Jesteś pełnoletni" : "Jesteś niepełnoletni"}`);
    }
    return showName;
}

const user1 = user("Paweł", 25);
const user2 = user("Marcin", 16);

user1();
user2();