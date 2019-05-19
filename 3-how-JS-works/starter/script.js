// Global Execution Context. ตัวแปรที่ประกาศทุกตัวถือว่าอยู่ใน global object ยกเว้น ใน function
///////////////////////////////////////

// *****************************************
/* Execution Stack เรียกเป็นชั้นๆ อยู่ภายใต้ global object
 *******************************************/
/* 
// EX สามารถแสดงผลของตัวเอง กับ name ที่เป็น global เท่านั้น
var name = "Bas";
function first() {
    var a = "Hello";
    second();
    var x = a + name;
    console.log(x);
}

function second() {
    var b = "Hey!";
    third();
    var y = b + name;
    console.log(y);
}
function third() {
    var c = "Hi!";
    var z = c + name;
    console.log(z);
    // console.log(x + y + z);
}
first();
 */
///////////////////////////////////////

//* Execustion Contaxt object มี 3 property
// Variable Object
// Scope Chain
// This Variable

// * มี 2 การสร้าง 2 phase คือการสร้าง property กับ execute

///////////////////////////////////////

// *****************************************
/* Lecture: Hoisting คือการหา function declaration กับหา variable declaration
 *******************************************/

//? Hoistion work in function declaration ใช้งานไม่ได้กับ function expression
// สามารถเรียกใช้งาน function ที่ไหนก็ได้ (before / after)
/* 
//* Function declaration
calculateAge(1992);
function calculateAge(year) {
    return console.log(2019 - year);
}

///////////////////////////////////////
retirement(1992);
// function expression เป็นการประกาศ Variable ถ้าเรียกใช้ก่อนประกาศจะ undefined
var retirement = function(year) {
    console.log(60 - (2019 - year));
};

retirement(1992);
// ไปใช้เหนือ function expression ไม่ได้

//* Variable
// ใช้งานก่อน declae JavaScript set undefined

// console.log(age);
// ใช้ก่อนประกาศ ระบบจะ undefined เหมือนปกติทั่วไป ประกาศ แต่ยังไม่ใส่ค่าก็จะ undefined
// ถ้ายังไม่ประกาศจะขึ้้น error
var age = 27;
console.log(age);

////
function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
// variable object
console.log(age);
// จะเห็นว่าคำตอบไม่เหมือนกันเพราะ age บรรทัดที่ 28 เป็น global
 */

///////////////////////////////////////

// *****************************************
/* Lecture: Scoping
 *******************************************/
// ใน JS จะมี แค่ function scope (es5) และ global scope
// ถ้า local จะเข้าไปใช้ variable ของ Global ได้ เรียก scope chain
// ในทางกลับกัน global เข้าไปใช้งาน function scope ไม่ได้

//  ? Lexical scoping คือการเข้าไปใช้ function อื่น งานนอกเหนือจาก function ของตัวเองได้ แต่ต้องมีจุดเชื่อมที่เป็น global variable

// First scoping example
/* 
var a = "Hello!";
// Global scope
first();

function first() {
    // first() scope
    var b = "Hi!";
    second();

    function second() {
        var c = "Hey!";
        console.log(a + b + c);
        // lexical จะเรียกใช้ a กับ b ได้ เพราะว่า a กับ b ถือว่าเป็น global scope ของ function second()
        // การเรียกย้อนกลับไปแบบนี้ เรียก scope chain
        // ถ้าหา variable ไม่เจอ โปรแกรมก็จะ error
    }
}
 */
////////
// Example to show the differece between execution stack and scope chain
// * Scope Chain
/* 
var a = "Hello!";
first();

function first() {
    var b = "Hi!";
    second();

    function second() {
        var c = "Hey!";
        third();
        // ! เรียกใช้งานแล้่ว error เพราะว่า third อยู่ข้างนอก chain เรียกใช้ b, c ไม่ได้
        // รู้จักแค่ a ที่เป็น global และ d ซึ่งเป็นของตัวเอง
        console.log(a + b + c);
    }
}

// เป็น function scope ที่ไม่ได้อยู่ใน scope chain ของ first();
function third() {
    var d = "John";
    // console.log(a + b + c + d);
    // console.log(c);
    // ! c อย่างเดียวก็ไม่ได้ เพราะ c ไม่ใช่ global scope ของ third
    console.log(a + d);
    // ใช้ได้ เพราะเรียก global กับของตัวเองมาใช้ เรียก execution stack
}
// ? scope chain เขียนแล้วเชื่อมกันด้วย variable global scope
 */

/////////
// * Execution Stack
/* 
var x = 'Hello!';
function first() {
    var y = 'Hi';
    second();
}

function second() {
    var z = 'Hey'
    console.log(x+y+z); // error เพราะไปใช้ y ไม่ได้
}

first();
 */
///////////////////////////////////////

// *****************************************
/* Lecture: The this keyword
 *******************************************/

// * THIS VARIABLE
//? Regular function called : this นี้ เรียก global object เช่น window object ใน browser หรืออยู่ใน function ไม่ใช่ object
//? Method Call : this variable เรียกใช้ method ใน object และต้องอยู่ใน object
////////
// *  Regular function call : this ข้างนอกคือ window object
/* 
calculateAge(1992);
// จะแสดงผลลัพธ์ กับ this ที่เป็น regular call ซึ่งตัว this นี้มันเป็น global อยู่แล้ว
function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}
 */
/////////////////////

// * Methods Call
/* 
// Object
var john = {
    name: "John",
    yearOfBirth: 1992,
    calculateAge: function() {
        // method ใน object john
        console.log(this);
        // เรียกใช้งาน this ใน object ได้ จะหมายถึงข้อมูล object john
        console.log(this.yearOfBirth); // 1992 คือ object.property นั่นแหละ
        console.log(2019 - this.yearOfBirth);
        // ! this หมายถึงข้อมูลใน object เพราะเป็น function ใน object john

        function innerFunction() {
            console.log(this);
            // ! this นี้อยู่ใน method ไม่ใช่อยู่ใน object จึงเรียก Regular Function Called
        }
        innerFunction();
        // ! แต่ this ใน innerFunction ไม่ใช่ this ใน object เพราะว่า innerFunction นี้เป็น function ของ method อีกที ไม่ใช่จาก object ก็เลยเป็น this ของ window object
    }
};
// ? สรุป Regular คือ this อยู่ใน global scope และไม่ได้อยู่ใน object
// ? ส่วน this ที่อยู่ใน function ใน object หมายถึง property ของ object


john.calculateAge();
// john object เรียกใช้ method ใน function

var mike = {
    name: "Mike",
    yearOfBirth: 1999
};

// * จะคำนวณอายุของ mike ยืม method ของ john มาใช้งานได้ เรียกว่า borrow function
mike.calculateAge = john.calculateAge;
// ไม่ต้องใช้ () เพราะวงเล็บคือการเรียก function ซึ่งใน calculateAge เป็น variable
// เหมือน assign mike.calculateAge ให้เป็น function
// จะเจอ prototype และการ inherite ต่อไป

mike.calculateAge();
// this ใน method ของ object john ซึ่ง mike ยืมมาก็สามารถนำมาแสดงได้
 */
