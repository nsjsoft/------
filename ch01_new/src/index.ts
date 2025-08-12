let nickname = Math.random() > 0.5 ? "A" : "B";

nickname.length;

//nickname = true;

/*
let user: String; // 타입: any
user = "nsj";
user.toUpperCase();
*/

function add3(num1:number, num2:number) {
  console.log(num1 + num2);
}

function showItems(arr:number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1,2,3]);
add(1,2);

// 타입추론
let car='bmw';

function showError():void{
  console.log('hello');
}

enum Os {
  Window,
  Ios,
  Android
}

type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender? : string;
  readonly birthYear : number;
  [grade:number] : Score;
}

let user : User = {
  name: 'xx',
  age: 30,
  birthYear: 2000,
  1:'A',
  2:'B'

}

interface Add2 {
  (num1:number, num2:number):void;
}

const add2 : Add2 = function(x, y) {
  return x + y;
}
console.log(user.name);

const a2 = "bob";
let user2: string | number = "tom";

user2 = 3;
// Union 타입
type Job = "police" | "developer" | "teacher";

interface User3 {
  name : string;
  job : Job;
}

/*
const toyUser: User & User3 = {

}
*/

class Car {
  private color: string;
  #color2 : string;
  protected name2 : string;
  constructor(color: string) {
    this.color = color;

  }

  start() {
    console.log("start");
  }
}

// Generic
function g<T>(arr:T[]): number {
  return arr.length;
}

const arr2 = [1,2,3];
g<number>(arr2);

const bmw = new Car("red");

interface ggg {
  id:number;
  name:string;
}

//let admin: Required<ggg> = {
let admin: Partial<ggg> = {
  id:1
}

type Grade = 1 | 2;
type Score3 = "A" | "B";

const score2: Record<Grade, Score3> = {
  1:"A",
  2:"B"
}