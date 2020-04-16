// problem utraty wiązania

// const szarik = {
//     children: ['fafik', 'żabcia'],
//     showChildren: function () {
//         this.children.forEach(function(child, index){
//             console.log(this.children[index])
//         })
//     }
// }

// szarik.showChildren();


//1. that = this
// const szarik = {
//     children: ['fafik', 'żabcia'],
//     showChildren: function () {
//         //that przechowuje informacje o this i pozwala na zastosowanie w zakresie lokalnym
//         const that = this; 
//         this.children.forEach(function(child, index){
//             console.log(that.children[index])
//         })
//     }
// }

// szarik.showChildren();

//2. Bez funkcji - za pomocą pentli for of

// const szarik = {
//     children: ['fafik', 'żabcia'],
//     showChildren: function (){
//         for (const child of this.children) {
//             console.log(child);
//         }
//     }
// }

// szarik.showChildren();

//3. Arrow function 

// const szarik = {
//     children: ['fafik', 'żabcia'],
//     showChildren: function () {
//         this.children.forEach((child, index) => {
//             console.log(this.children[index])
//             //this w forEach jest dziedziczony
//         })
//     }
// }

// szarik.showChildren();

//4. bind

const szarik = {
    children: ['fafik', 'żabcia'],
    showChildren: function () {
        this.children.forEach(function (child, index) {
            console.log(this.children[index])
        }.bind(this))
    }
}

szarik.showChildren();