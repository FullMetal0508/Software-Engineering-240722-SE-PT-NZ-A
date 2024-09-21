function Person (name, age){
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = this.age >= 16;
  }
  

let person1 = new Person("Josh", 12)

console.log(person1)

function PersonClass(name, age) {

  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = this.age >= 16;

  }

let person2 = new PersonClass("Sarai", 30)

console.log(person2)