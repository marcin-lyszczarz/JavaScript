
const cat = new Object();

cat.name = "Gacek";
//cat["age"] = 2;
cat.age = 2; // to samo co wyżej
cat.eyeColor = "red";
cat.meow = function (){
	console.log("miau miau");
}


const dog = {
	name: "Puszek",
	age: 5,
	"eye color": "blue",
	barking: function(){
		console.log("hauu hauu");
	},
	squeaking(){
		console.log("aaaa uuuu")
	},
}

dog.castrated = true;
dog.childrens = ["Jagódka", "Azor"];

console.log(dog.name);
console.log(dog.childrens);
dog.barking();
dog.squeaking();
console.log(dog["eye color"]);

delete dog.childrens;

console.log(dog.childrens);



const result = {
	value: 1,
}

function plus(){
	result.value ++
}

const counter = {
	score: 0,
	
	increment(){
		this.score++;
		console.log(this.score);
		return "zwięszono";
	},
	decrease(){
		this.score-=2;
		console.log(this.score);
		return "zmniejszono o 2";
	}
}










