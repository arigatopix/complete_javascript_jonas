/***************************************************
 *!    Variable Declarations with let and const
 ***************************************************  */
// * Variable
/* 
//  ES5 (variable แบบ function scope) ไม่รวม if, for, while ไม่ถือว่าเป็น function block
function driversLicene5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1992;
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
    // var ประกาศใน function scope ยังไงก็ประกาศออก ต่างจาก let const
}

driversLicene5(true);

//  ES6 (variable แบบ Block scope)
function driversLicene6(passedTest) {
    let firstName = 'Bas';
    const yearOfBirth = 1992;
    // let ประกาศ แต่ยังไม่ assign ค่าจะขึ้น undefined
    // const ต้องประกาศค่าเลย ไม่งั้น syntax error

    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
        // let const ใช้ได้กับ block scope (ภายใต้ {})
        console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
    }
    console.log('Out side if '+firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
}

driversLicene6(true);
 */
/////////////////////////////////////////////////////////

// use var example
// var i = 25
// for(var i = 0; i < 5; i++) {
//     console.log(i); // 0-4
// }
// console.log(i);
// ค่าเปลี่ยนไป เพราะ var สามารถเปลี่ยนค่าได้ตลอด เวลาใช้งานจึงต้องระวังมาก (Dynamically)
// * ใน for ไม่ถือว่าเป็น function scope

// use let example (let จะเหมือนกับโปรแกรมอื่นๆ ถ้าคนละ block ก็จะถูกแยกออกจากกัน)
// let i = 25
// for(let i = 0; i < 5; i++) {
//     console.log(i); // 0-4
// }
// console.log(i); // ไม่ถูกเปลี่ยน เพราะอยู่นอก block for
/////////////////////////////////////////////////////////
/***************************************************
 *!               Blocks and IIFEs
 ***************************************************  */
// Data privacy โดยใช้ block
// IIFEs (ES5) ป้องกันไม่ให้ variable ด้านนอกเข้ามามีผลกระทบกับ variable ข้างใน
/* 
(function() {
    var c = 3;
})();
console.log(c); //! error เพราะเข้าไปข้างในไม่ได้

// new ES6 (ES2015) ใช้แค่ {} และใช้ let,const
{
    // ไม่สามรถใช้ a,b นอก block ได้
    const a = 1;
    let b = 2;
}
// console.log(a+b);
 */
/////////////////////////////////////////////////////////

/***************************************************
 *!               String in ES6 (ES2015)
 ***************************************************  */
/* 
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1992;
function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is '+ firstName +' '+ lastName + '. He was born in ' + yearOfBirth + '. Today, he is '+ calcAge(yearOfBirth) + ' years olds');

// ES6 ใช้ backtick (``) 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} year olds`);

// template literals in ES6
const n = `${firstName} ${lastName}`;
// Startswith
console.log(n.startsWith('J')); // true
console.log(n.startsWith('j')); // false

// Endwith
console.log(n.endsWith('h')); // true

// ระหว่างตัวอักษร
console.log(n.includes(' ')); // true

// repeat
console.log(`${firstName} `.repeat(2));
 */
/////////////////////////////////////////////////////////

/***************************************************
 *!              Arrow Function : Basic
 ***************************************************  */
// map() คือ method ใช้กับ array จะได้ array ใหม่ โดยเป็นไปตาม callback function
/* 
const years = [1999, 1992, 1922, 2000];

// ES5
var agesES5 = years.map(function(el) {
    // el คือ สมาชิกของ array
    return 2019 - el;
})
console.log(agesES5);

// ES6 ใช้ => แทนคำว่า function ลองดูของ brad จะได้หลายๆแนวๆ
let agesES6 = years.map(el => 2019 - el);
// multi argument
agesES6 = years.map((el, index) => `Age element ${index + 1} : ${2019 - el}`);
// multiple lines
agesES6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    // !  ต้อง return ค่าเพื่อไปแสดงด้วย เพราะหลายบรรทัด
    return `Age element ${index + 1} : ${age}`;
})
console.log(agesES6);
 */
/////////////////////////////////////////////////////////
/***************************************************
 *!   Arrow functions : Lexical 'THIS' keyword
 ***************************************************  */
// ARROW function shared this keyword lexical
/* 
var box5 = {
    color : 'green',
    position : 1,
    clickMe : function() {
        // this ตรงนี้สามาถเข้าถึง color, position ได้

        var self = this;
        // วิธีแก้ ไม่สามารถเรียก this.color, this.position ได้ ให้สร้าง variable ใหม่ ชื่อ self เพื่อให้ function call เรียกใช้งาน
        document.querySelector('.green').addEventListener('click', function() {

            // ? this ในนี้คือ window object เลยต้องตั้งค่า self = this
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
        
            alert(str);
            // this keyword undefined ให้เปลี่ยนจาก this เป็น self
        });
    }
}

box5.clickMe();
 */
////////////////////////
// ES6
/* 
 const box6 = {
    color : 'blue',
    position : 2,
    clickMe : function() {
        // ตรงนี้ต้องไม่เป็น arrow function นะ 
        document.querySelector('.blue').addEventListener('click', () => {
            // ใช้ arrow function จะ shared this
            // ! Arrow function จะ share lexical a this keyword มองไปข้างบน
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}

box6.clickMe();
 */
////////////////////////

// *** ES6 again *** ใช้ Arrow function ซ้อน 2 ครั้ง
/* 
 const box66 = {
    color : 'orange',
    position : 3,
    clickMe : () => {
        // * ใช้ arrow function ตรงนี้ this keyword ถูก shared จาก window object แล้ว  (share จาก global)
        document.querySelector('.orange').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            // this ในนี้จึงขึ้น undefined เพราะ this มาจาก window object
            alert(str);
        })
    }
}

box66.clickMe();
 */
////////////////////////
//  Example

function Person(name) {
  this.name = name;
}

// ES5
/* 
Person.prototype.myFriend5 = function(friends) {
    // เรียกใช้ this ของ Person constructors ได้

    var arr = friends.map(function(el) {
        // this ตรงนี้คือ global object
        return this.name + ' is friends with ' + el;
    }.bind(this));
    // ปกติ .bind คือการ copy method โดยเอา object ใหม่ไปใส่ใน arg ตัวแรก
    // .bind(this) เป็น this ของ Person ทำให้ใน block function จึงเป็น this ของ Person ไปโดยปริยาย

    console.log(arr);
}

var myFriends = ['Bob','Bas','Aib'];

new Person('John').myFriend5(myFriends);

// * จะไม่แสดงเพราะว่า this นี้อยู่คนละ scope เหมือนกับ es5  ข้างบน เลยแก้ด้วย function bind();
// ปกติจะสร้าง variable รับค่า this แต่ตรงนี้อยู่นอก function ประกาศ var  ไม่ได้
 */
////////////////////////

// ES6
/* 
Person.prototype.myFriend6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`)
    // Arrow function shared this กับ Person object
    //* ระวังเรื่อง return ใน arrow function ถ้าหลายบรรทัดให้ใส่ return ด้วย

    console.log(arr);
}

const myFriends = ['Bob','Bas','Aib'];

new Person('Mike').myFriend6(myFriends);
 */
/////////////////////////////////////////////////////////
/***************************************************
 *!                Destructuring
 ***************************************************  */
// คือใส่ variable ให้กับ value
/* 
// * ES5
var john = ['John', 20];
// ประกาศ variable พร้อมกับใส่ค่า
var name = john[0];
var age = john[1];

// * ES6 Destructuring
// Array
const [name6, age6] = ['Bas', 26]; // ใส่พร้อมกับได้เลย
console.log(name6);
//////
// Object
const obj1 = {
    firstName : 'Teeruch',
    lastName : 'Kaewsritas'
}

const obj2 = {
    firstName : 'Parichat',
    lastName : 'Thongsri'
}

// ประกาศ variable เก็บค่า value ไว้ใน key โดยใช้ destructuring
// * key กับ variable ต้องชื่อเหมือนกัน
const {firstName, lastName} = obj1;
console.log(firstName);  // ปกติต้อง console.log(obj1.firstName);
console.log(lastName);

// ประกาศ variable ใส่ไว้ใน value
const {firstName : a, lastName : b} = obj2;
// value จะอยู่ใน a และ b
console.log(a);
console.log(b);
//////
// Function
function calcAgeRetirement(year) {
    const ageNow = new Date().getFullYear() - year;
    return [ageNow, 60 - ageNow];
    // return เป็น array 
}

console.log(calcAgeRetirement(1992));
// Destructuring ใส่ variable รับค่า return
const [age1, retirement] = calcAgeRetirement(1992);
console.log(age1);
console.log(retirement);
 */
/////////////////////////////////////////////////////////
/***************************************************
 *!                Array in ES6
 ***************************************************  */
/* 
// จะสร้าง array จาก nodeList หรืออะไรก็ตาม
const boxes = document.querySelectorAll('.box'); // ได้ nodeList

// ES5 : สร้างจาก object Array ซึ่ง prototype ของมันจะมี method สร้าง array คือ slice

var boxesArr5 = Array.prototype.slice.call(boxes);
// The slice() method returns the selected elements in an array, as a new array object. (start, end) แต่ไม่รวม end
// * มี .call เพราะต้องเรียก function จากที่อื่นมาใช้กับ object

// เปลี่ยนสีให้กับทุก element ใน boxesArr5
boxesArr5.forEach(function(current) {
    current.style.backgroundColor = 'coral';
})
 */
//////
/* 
// ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(current => {
    current.style.backgroundColor = 'dodgerblue';
});

//////
// * ใช้ continue กับ break 
// ES5

for (var i = 0; i < boxesArr5.length ; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I Change it!.'
}
 
// ES6 โดย for ... of จะได้ไม่ต้องประกาศเยอะแยะ
/* 
for (const currentElement of boxesArr6) {
    if (currentElement.className.includes('blue')) {
        // includes อยู่ในเรื่อง string literals
        continue;
        // คือข้าม ถ้าเป็นจริง
    }
    currentElement.textContent = 'I Change to blue';
}
 */
/////
/*
// * ดูกลุ่มตัวเลข แล้วแสดงผลเป็น boolean หรือดึง value กลับมาดู

var ages = [12,8,10,19,4]
// ES5

var fullAge = ages.map(function(cur) {
    return cur >= 18;
    // ได้ array ที่เป้น true/false
});

// return ตำแหน่ง โดยใช้ indexOf(boolean)
console.log(fullAge.indexOf(true));
// return value ages[i]
console.log(ages[fullAge.indexOf(true)]);

// ES6 ใช้ findIndex() ต้องมี callback function คล้ายๆ forEach
console.log(ages.findIndex(cur => cur >= 18));
// จะตอบตำแหน่งเมื่อ true
// return value use find();
console.log(ages.find(cur => cur >= 18));
// function(cur) { return cur >= 18}
 */
///////////////////////////////////////////////////////
/***************************************************
 *!       The Spread Operator : function call
 ***************************************************  */
/* 
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(1,2,3,4);
console.log(sum1);

// ES5
ages = [1,2,3,4]
// เรียกใช้ function โดยใช้ apply
var sum2 = addFourAges.apply(null, ages); // ใช้ null เพราะไม่มี this และเรียกใช้ addFourAges ไป apply กับ array ages
console.log(sum2);

// ES6 : Spread Operator คือสั่งให้ expand array (ขยาย)
const sum3 = addFourAges(...ages);
console.log(sum3);



/////

// expand array by Spread Operator
const familySmith = ['John','Jane'];
const familyMiller = ['Marry','Bob'];
// expand ใส่ตรงกลางได้ด้วย
const bigFamily = [...familyMiller, 'Lily', ...familySmith];
console.log(bigFamily);

/////

// Expand ใช้กับ node list ได้ เช่น
const h1 = document.querySelector('h1'); // ได้ element
const boxes = document.querySelectorAll('.box'); // ได้ nodeList
// expand to nodelist
const all = [h1, ...boxes];
console.log(all);

// ลองเปลี่ยนสี fonts โดยต้องเปลี่ยน nodelist เป็น array ก่อน
const nodeToArr = Array.from(all);
// เปลี่ยนสี
nodeToArr.forEach(cur => cur.style.color = '#ccc');
 */

///////////////////////////////////////////////////////
/***************************************************
 *!      Rest Parameters : function declaration
 ***************************************************  */
// คล้ายๆ spread operator คือใช้ ...
// ? rest ใช้กับ function declaration
// ? spread operator  ใช้กับ function call
// rest ...rest คือ รับหลายๆ value จะแปลงเป็น array ให้อัติโนมัติ
// ใช้กับ object ก้ได้

// EX อยากได้คำตอบอายุเป็น 'array'
/* 
// ES5
function isFullAge5() {
    // แปลง arguments ที่รับมาเป็น array
    var argsArr = Array.prototype.slice.call(arguments);

    // คำนวณอายุ
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

// isFullAge5(1992,1990,1999);

// ES6 : ใช้ ...rest ไม่ต้องแปลงเป็น array เพราะมันเป็นอัตโนมัติ
function isFullAge6(...years) {
    years.forEach(curr => console.log((2019-curr) >= 18));
}

isFullAge6(1922,2012,1999,2000);
 */
/////

// * Destructuring Assignment โดยใช้ rest expand array
/* 
let a, b;
[a, b] = [100, 200];
// Rest pattern ... (call spred operator)
[a, b, c, ...rest] = [100,200,300,400,500];
console.log(rest); // value นอกเหนือจาก a,b,c

// * Object มีวงเล็บด้วย
({a, b} = {a: 100, b:200, c:300, e:400, d:5000});
console.log(a,b); // 100,200

// use ...rest
({a, b, ...rest} = {a: 100, b:200, c:300, e:400, d:5000});
console.log(rest); // {c:300, e:400}
 */
/////

// * สร้าง multiple parameter โดยมีบางส่วน จะสร้างเป็น array และบางส่วนเอาไปใช้คำนวณ
/* 
// ES5
function isFullAge5(limit) {
    // ? limit จะถูกเก็บเป็น array จึงต้องแยก limit ออกมาโดยกำหนด slice(start,end) 
    var argsArr = Array.prototype.slice.call(arguments,1);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit); 
        // แต่ละประเทศกำหนดกรอบอายุ limit ไม่เท่ากัน
    })
}

// isFullAge5(20, 1992,1990,1999);

// ES6 : ใส่ค่า parameter อื่นๆ ที่ไม่ได้ทำเป็น array
function isFullAge6(limit,...years) {
    // ? ง่ายกว่าข้างบนมากมาย ดูที่ limit
    years.forEach(curr => console.log((2019-curr) >= limit));
}

// * กำหนด limit ที่ arg อันแรก
isFullAge6(19, 1922,2012,1999,2000);
 */
///////////////////////////////////////////////////////
/***************************************************
 *!              Default Parameters
 ***************************************************  */
// ES5
/* 
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  // ใช้ if ternary ในการเช็คว่า undefined หรือเปล่า แล้วเซ็ตค่า default
  lastName === undefined ? (lastName = 'Smith') : (lastName = lastName);
  nationality === undefined
    ? (nationality = 'american')
    : (nationality = nationality);

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;

  // JS ยอมให้เรียกแบบไม่ใส่ parameter ทุกตัว มันจะแปลงเป็น undefined โดยอัตโนมัติ
  // เราเลยจะกำหนด default parameters ให้มัน
}

// ES6
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = 'Smith',
  nationality = 'american'
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1999);
console.log(john);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(emily); // default value ถูก overwrite
 */
///////////////////////////////////////////////////////
/***************************************************
 *!                  MAPS (ES6)
 ***************************************************  */
// arbitrary = โดยพละการ
// Maps จะเป็น key-value pairs โดยมี key เป็น variable แบบไหนก็ได้

const question = new Map();
// * Set key, value to map
question.set(
  'question',
  'What is the official name of the latest major JavaScript version?'
);
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

// * Get value in Maps
// console.log(question.get('question'));

// * Size in Maps
// console.log(question.size);

// * Delete Data โดยใส่ค่า key เข้าไป
// question.delete(4); // gone
// question.delete(4); // nothing เพราะ key 4 ลบไปแล้ว เช็คได้โดยใช้ had() method เช็คว่ายังอยู่มั้ย

// if(question.has(4)) {
//     // เช็คว่ามี key = 4 มั้ย
//     question.delete(4); // gone
//     console.log('Answer 4 is here');
// }

// * Remove all in Maps
// question.clear(); // empty

/////
// การวนลูป มี key กับ value เลือกใช้ได้ทั้งคู่
// * Iterate Maps โดยใช้ forEach(key, value)
// question.forEach((key, value) => {
//     console.log(`This is key ${key} : and it's value ${value}`);
// });

/////

// ? Iterate ผ่าน question.entries() โดยใช้ for... of
// question.entries() เป็น Maps iterate return array ที่มีทั้ง key และ value
// ลองสร้างคำถาม และคำตอบ
/* 
for (let [key, value] of question.entries()) {
  // [key, value] ใช้ destructure ประกาศ variable ธรรมดา
  // ให้แสดงเฉพาะ key ที่เป็นตัวเลข
  if (typeof key === 'number') {
    console.log(`This is key ${key} : and it's value ${value}`);
  }
}
const answer = parseInt(prompt('Write the correct answer?'));

// เช็คคำตอบใช้ answer === question.get('correct') ได้ true/false
// และ  true/false ส่งคำตอบกลับมาแสดงผล console.log('true')
console.log(question.get(answer === question.get('correct')));
// มี 2 วงเล็บ ลองไปดูดีๆ

// เปลี่ยน keys เป็น array
const keysValArr = Array.from(question.keys());
console.log(keysValArr);

// เปลี่ยน values เป็น array
const valuesValArr = Array.from(question.values());
console.log(valuesValArr);
 */
// * สรุปข้อดีของ Maps
// 1.ใช้ key type อะไรก้ได้
// 2.Maps สามารถ iterate ได้ง่าย
// 3. get size property ได้ง่ายๆ
// 4. add (set) และ delete ได้ง่าย

///////////////////////////////////////////////////////
/***************************************************
 *!                  SETS
 ***************************************************  */
/* 
const set1 = new Set();

set1.add(100);
set1.add('A string');
set1.add({name : 'John'});

console.log(set1);

// Get values, keys, entries (ได้ object ไม่ค่อยได้ใช้) คือเอา value ใน set ออกมา

for (let item of set1.values()) {
  console.log(item);
}
 */

///////////////////////////////////////////////////////
/***************************************************
 *!                   Iterator
 ***************************************************  */
/* 
function nameIterator(names) {
  let nextIndex = 0; //เอาไว้ข้างนอก next
  // ถ้าเอาไว้ใน next เรียกครั้งถัดไป index ก็จะมีค่า 0
  
  return {
    // return ของ function ปกติ
    next : function() {
      // iterator return อะไรบางอย่าง next หมายถึงต่อไปจะทำอะไรต่อ
      return nextIndex < names.length ?
      { value : names[nextIndex++], done : false } :
      { done : true }
      // ใช้ iterator ternary ปกติ (true/false) ? { true do something } : { false do some thing}
    }
  }
}

// Create an Array of names
const nameArr = ["Bas", "Aiib", "Parichat", "Teeruch"];

// Init iterator and pass in the nameArr
const names = nameIterator(nameArr);

console.log(names.next().value);
// names.next ได้ () Object value  ชื่อแรกใน index 0 และ status done : false

// อยากได้ชื่อถัดไปก็เรียก names.next()
console.log(names.next().value); // index 1
console.log(names.next().value); // index 2
console.log(names.next().value); // index 3
console.log(names.next().value); // undefined เพราะไม่มีชื่อแล้ว
 */
///////////////////////////////////////////////////////
/***************************************************
 *!                   Generators
 ***************************************************  */
// * Generators : เหมือนกับ iterators แต่ return multiple value

// ** Generators Example : ต้องใส่ * หลัง function บอก JS ว่าเป็น generators นะ
/* 
function* sayNames() {
  yield 'Bas';
  yield 'Aiib';
  yield 'Teeruch';
  yield 'Parichat';
}

// เรียก function
const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value); // undefined
 */
// ได้คำตอบเหมือนกันกับ iterator
// ข้อแตกต่างคือเอา array ไว้ใน Generator (yield)

/////////////////////////////////////

// * Example Generators
// ID Creator
/* 
function* createIDs() {
  let index = 0;
  
  while(true) {
    // สร้าง index ไปเรื่อยๆ เมื่อเรียก generators ไปใช้ ใช้งานกับอะไรที่ต้องสร้างไปเรื่อยๆ
    yield index++;
  }
}

const genID = createIDs();
// สร้างเรื่อยเปื่อย
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
console.log(genID.next().value);
 */

///////////////////////////////////////////////////////
/***************************************************
 *!                  Classes
 ***************************************************  */
/* 
// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
};

const john5 = new Person5('John', 1990, 'teacher');

// ES6
// ข้อแตกต่างระหว่า es5 กับ es6 คือ Class ไม่มี hoisted (VO: undefined กับ function) และเราสามารถสร้าง method ให้กับ class แต่เพิ่ม property ไม่ได้ (ทำแบบ es5 ที่เป็น Object.create ไม่ได้)
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    const age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }

  // Static method ไม่สามารถ inharit ได้โดย instance แต่สามารถ called ไปใช้งานโดยเรียกชื่อ class
  static greeting() {
    console.log('Hey there!');
  }
}

const john6 = new Person6('John', 1990, 'teacher');
// ได้โครงสร้างเหมือน es5 แค่เปลี่ยน syntax
// เราต้องเข้าใจ behind the scense Constructure และ Prototype

// Call static method
Person6.greeting();
 */
///////////////////////////////////////////////////////
/***************************************************
 *!           Classes with Subclasses
 ***************************************************  */
// ** ES5 **
/* 
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var john5 = new Person5('John', 1990, 'teacher');

// * Subclasses in ES5
var Athlete5 = function(name, yearOfBirth, job, olympicGames, modals) {
  // Call super classes โดยใช้ method call โดยก๊อปปี้โครงสร้างจาก Person5 ให้กับ Athlete5
  // เมื่อ Athlete5 ถูกสร้าง จะเป็น new Empty object
  // * this ในที่นี้คือ this ของ Athlete5
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.modals = modals;
};

// ? สร้าง prototype ของ Athlete5 เชื่อมกับ prototype ของ Person5 โดยใช้ Object.create([ในนี้คือของ Person5])
// *** สำคัญ เพราะมันต้องเชื่อมกัน
Athlete5.prototype = Object.create(Person5.prototype); // เชื่อมกัน prototype chain

// Create method Athlete5 ได้ แต่ Person5 ใช้ไม่ได้ เพราะ inherit ไปหา Super ไม่ได้
Athlete5.prototype.wonModal = function() {
  this.modals++;
  console.log(this.modals);
};

// create instance สามารถใช้ function calculateAge ได้ เพราะเชื่อมด้วย prototype chain ที่ inherit มาจาก Person5.prototype
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

// ใช้ method ของ Person5
johnAthlete5.calculateAge();

// call subclass method
johnAthlete5.wonModal();
 */
//////
// *** ES6 ***
/* 
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    const age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log('Hey there!');
  }
}

class Athlete6 extends Person6 {
  // * sub class extends Super class
  constructor(name, yearOfBirth, job, olympicGames, modals) {
    // ** เหมือน python คือต้องเรียก super class
    super(name, yearOfBirth, job); // ไม่ต้องใส่ this เพราะมัน auto

    this.olympicGames = olympicGames;
    this.modals = modals;
  }

  wonModal() {
    this.modals++;
    console.log(this.modals);
  }
}

var johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonModal();
johnAthlete6.calculateAge();
 */

///////////////////////////////////////////////////////
/***************************************************
 *!              CODING CHALLENGE
 ***************************************************  */
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
//////////////////////////////////////////////////////
/***************************************************
 *!              CODING CHALLENGE ทำเอง
 ***************************************************  */
/* 
class Structure {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}
class Parks extends Structure {
  constructor(name, numTrees, parkArea, buildYear = 2000) {
    super(name, buildYear);

    this.numTrees = numTrees;
    this.parkArea = parkArea;
  }

  treeDensity() {
    return this.numTrees / this.parkArea;
  }

  Age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.buildYear;
  }
}

class Streets extends Structure {
  constructor(name, buildYear, width = 3, distance) {
    super(name, buildYear);

    this.width = width;
    this.distance = distance;
  }
}

function parksReport() {
  console.log('-----------Park Report-----------');

  let age = 0;

  allParks.forEach((park, index) => {
    age += park.Age();
    console.log(
      `${index + 1}. ${park.name} density : ${park.treeDensity()} tree/area`
    );
    if (park.numTrees >= 1000) {
      console.log(`${park.name} tree greater than 1000`);
    }
  });

  // Park total ages
  console.log(`Sum of age : ${age} years`);
  // Park age average
  console.log(`Average age ${age / allParks.length} years`);
}

function streetsReport() {
  console.log('-----------Street Report-----------');
  let sumDistance = 0;

  allStreets.forEach((street, index) => {
    sumDistance += street.distance;
    console.log(
      `${index + 1} ถนนชื่อ ${street.name} มีความกว้างแบบ ${sizeClass.get(
        street.width
      )}`
    );
  });

  console.log(
    `ระยะทางรวม ${sumDistance} km และระยะทางเฉลี่ย ${sumDistance /
      allStreets.length} km`
  );
}

const allParks = [
  new Parks('Green Park', 1075, 2000),
  new Parks('Nation Park', 4000, 1870, 1900),
  new Parks('Oak Park', 700, 1000, 2015)
];

const allStreets = [
  new Streets('Ocean Avenue', 1999, 1, 120),
  new Streets('Evergreen Street', 2008, 4, 200),
  new Streets('4th Street', 2015, 3, 60),
  new Streets('Sunset Boulevard', 1982, 5, 300)
];

// console.log(allStreets);
// console.log(allStreets[0].width);

const sizeClass = new Map();
sizeClass.set(1, 'tiny');
sizeClass.set(2, 'small');
sizeClass.set(3, 'normal');
sizeClass.set(4, 'big');
sizeClass.set(5, 'huge');
// const type = size.get(allStreets[0].width);
// console.log(type);

streetsReport();
parksReport();
 */
//////////////

/***************************************************
 *!              CODING CHALLENGE เฉลย
 ***************************************************  */
/* 
class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; // km^2
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    return console.log(
      `${this.name} has a tree density of ${density} trees per squre km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    // Set default
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    // ใช้ map
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

// Create Object
const allParks1 = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('Nation Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets1 = [
  new Street('Ocean Avenue', 1999, 1.1, 4),
  new Street('Evergreen Street', 2008, 2.7, 2),
  new Street('4th Street', 2015, 0.8), // set default ไว้แล้ว ไม่ต้องใส่หมดก็ได้
  new Street('Sunset Boulevard', 1982, 2.5, 5)
];

// Total , average
function calculate(arr) {
  // * ใช้ reduce method จะรวม array เป็นค่าเดียว
  const sum = arr.reduce((previous, current, index) => previous + current, 0);
  //อันแรกจะเริ่มจากค่า 0 จากคอมม่า(,) สุดท้าย current คือค่าปัจจุบัน

  return [sum, sum / arr.length];
  // return แบบ destructuring ตัวแรกรวม ตัวสองคือ average
}

function reportParks(p) {
  console.log('-------------Park Report-----------------');
  // Density
  p.forEach(park => park.treeDensity());

  // * Average Age
  // สร้าง array age ของทุก park ก่อน ใช้ map สร้าง array ใหม่
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  // เอา array ส่งไปคำนวณ
  const [totalAge, averageAge] = calculate(ages);
  console.log(`Our ${p.length} parks have an average of ${averageAge} years`);

  // Which park has more than 1000 trees
  // get numTrees และใช้ find หาคำตอบ
  const indexArr = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  // ! NOTE
  console.log(`${p[indexArr].name} has more than 1000 trees`);
}

function reportStreet(s) {
  console.log('-------------Street Report-----------------');

  // Classify size
  s.forEach(el => el.classifyStreet());

  // Total and average length of town
  const length = s.map(el => el.length);
  const [totalLength, averageLength] = calculate(length);
  console.log(
    `Our ${
      s.length
    } streets have a total length of ${totalLength} km, with an average of ${averageLength} km`
  );
}

// Run report
reportParks(allParks1);
reportStreet(allStreets1);
 */
//////////////

/***************************************************
 *!              CODING CHALLENGE ทำเองอีกรอบ
 ***************************************************  */
/* 
class Structure {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Parks extends Structure {
  constructor(name, numTrees, parkArea, buildYear = 2000) {
    super(name, buildYear);

    this.numTrees = numTrees;
    this.parkArea = parkArea;
  }

  treeDensity() {
    const density = this.numTrees / this.parkArea;
    return console.log(
      `${this.name} has a tree density of ${density} trees per squre km.`
    );
  }
}

class Streets extends Structure {
  constructor(name, buildYear, distance, width = 3) {
    super(name, buildYear);

    this.width = width;
    this.distance = distance;
  }

  sizeClassify() {
    const sizeClass = new Map();

    sizeClass.set(1, 'tiny');
    sizeClass.set(2, 'small');
    sizeClass.set(3, 'normal');
    sizeClass.set(4, 'big');
    sizeClass.set(5, 'huge');

    console.log(
      `${this.name} , build in ${this.buildYear}, is a ${sizeClass.get(
        this.width
      )} street.`
    );
  }
}

// Calculate age and Average age
function calc(array) {
  // ใช้ reduce() รวม array เป็นค่าเดียว
  // ค่า array ต้องเป็น value
  const sum = array.reduce((previous, current, index) => previous + current, 0);

  return [sum, sum / array.length];
}

function parksReport(parkArray) {
  console.log('-----------Park Report-----------');

  // * Trees Density
  parkArray.forEach(el => el.treeDensity());

  // * Age / Average Age ใช้ function ข้างนอก
  let ages = parkArray.map(el => new Date().getFullYear() - el.buildYear); // ได้ array age

  // * Destructuring ใส่ function
  const [totalAge, averageAge] = calc(ages);
  console.log(
    `Our ${parkArray.length} parks have an average of ${averageAge} years`
  );

  // * Greater than 1000 trees ใช้ findIndex
  // ทำเป็น array จำนวนต้นไม้ก่อน ต่อมาก็หาที่มากกว่า 1000 โดย callback function ของ findIndex
  // console.log(parkArray.map(el => el.numTrees).findIndex(el => el >= 1000));
  const i = parkArray.map(el => el.numTrees).findIndex(el => el >= 1000); // i คือ index ที่ findIndex หาเจอ
  console.log(`${parkArray[i].name} has more than 1000 trees`);
}

function streetsReport(streetArray) {
  console.log('-----------Street Report-----------');

  //*  Classify width อย่าลืมใส่ () เพราะเป็น function
  streetArray.forEach(el => el.sizeClassify());

  // Total / Average distance
  const distance = streetArray.map(el => el.distance);
  const [totalDistance, averageDistance] = calc(distance);
  console.log(
    `Our ${
      streetArray.distance
    } streets have a total length of ${totalDistance} km, with an average of ${averageDistance} km`
  );
}

// * Create object
const allParks = [
  new Parks('Green Park', 215, 0.2, 1987),
  new Parks('Nation Park', 3541, 2.9, 1894),
  new Parks('Oak Park', 949, 0.4, 1953)
];

const allStreets = [
  new Streets('Ocean Avenue', 1999, 1.1, 4),
  new Streets('Evergreen Street', 2008, 4, 2),
  new Streets('4th Street', 2015, 0.8),
  new Streets('Sunset Boulevard', 1982, 2.5, 5)
];

// * Run output
streetsReport(allStreets);
parksReport(allParks);
 */
