function a () {
  return 1 + 2;  
}

function b (a) {
  return a();
}

var c = function() {
  return 1 + 2;
}
console.log(b(a)); // This will return 3

function d() {
  return [1, 2];
}

//const [ab, cd] = [1, 2];
const [ab, cd] = d();

console.log(ab); // This will log 1

const introObject = {
  name: 'John',
  age: 30,
  city: 'New York',
  getIntro: function() {
    const intro = () => {
      return `My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`;
      
    }
    console.log(intro()); 
  }
}

const getIntro = function() {
    const intro = function(){
      return `ggg`;
    }
    console.log(intro()); 
}

//getIntro(); // This will log the introduction string

introObject.getIntro(); // This will return the introduction string
