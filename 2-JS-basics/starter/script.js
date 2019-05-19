/**************************
 *!  Variable and Data Type
 */

/* 
var a = 20;

a = "Hello";

console.log(a);

let b = 20;

console.log(b);

b = "hello";
console.log(b);
 */

/* 
// String
var firstName = "Teeruch";
// ตัวแรกตัวเล็ก คำที่สองตัวใหญ่ เรียก camel case
var lastName = "Kaewsritas";
console.log(firstName);

// Number
var age = 26;

// Boolean
var fullAge = true; 
console.log(fullAge);

// undefined คือยังไม่ได้ใส่ค่าอะไร
var job;
console.log(job);

job = "Engineer";
console.log(job);

// Variable naming rules
// ไม่ให้ใช้ตัวเลข หรือ boolean นำหน้า
// var 3aaa = 123;

// ใช้ชื่อ function เช่น var if, var delete
 */

/**************************
 *!  Variable mutation and type coercion (บังคับ กดดัน)
 */
/* 
var firstName = "Teeruch";
var age = 26;

//? Type coercion (บังคับ กดดัน)
// เปลี่ยน data type ให้อัตโนมัติ string + Number
console.log(firstName + " " + age);

// ประกาศ Vaiable ไว้ก่อนแล้วใส่ค่าที่หลัง
var job, isMarried;
job = "Engineer";
isMarried = false;
console.log(job);

// หลังสุดเป็น false เพราะ js converse Data tyle เป็น string
console.log(
    firstName +
        " is a " +
        age +
        " year old " +
        job +
        ". Is he married? " +
        isMarried
);

// Variable mutation เปลี่ยนสถานะ เหมือน python
// เคยประกาศ age ไปแล้ว ถ้าประกาศอีกรอบ จะ overwrite
age = "twenty six";
job = "Photographer";

alert(
    firstName +
        " is a " +
        age +
        " year old " +
        job +
        ". Is he married? " +
        isMarried
);

//? promt คือรับค่าจาก client
var lastName = prompt("What is his lastname ?");
console.log(firstName + " " + lastName);
 */

/**************************
 *!  Basic operators
 */

// var year = 2019;
// var yearBas = year - 26;
// var yearAiib = year - 27;
/* 
//* Shorthand
var year, yearBas, yearAiib;

now = 2019;
ageBas = 26;
ageAiib = 27;

// Math operators
yearBas = now - ageBas;
yearAiib = now - ageAiib;

console.log(yearBas);

console.log(now + 2);
console.log(now + 2);
console.log(now / 10);

// Logical operator | สองสิ่ง เทียบกัน
var older = ageBas > ageAiib;
console.log(older);

//? typeof operator เช็ค type ของ variable | ใช้สิ่งเดียวเทียบ
console.log(typeof older);
console.log(typeof ageBas);
console.log(typeof "Hello World");

var x;
console.log(typeof x); // undefined
 */

/**************************
 *! Operator precedence | ลำดับชั้น
 */
/* 
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);
// ? Order ของเครื่องหมายลบ (-) สูงกว่า แปลว่ามันคิดก่อน แล้วมาเทียบกับ (>=) ทีหลัง
// ? = อยู่ลำดับล่างสุด คำตอบสุดท้ายของ isFullAge คือ true

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
// ? ถ้าไม่ใส่วงเล็บ โปรแกรมจะหารก่อน precedence สูงกว่า แล้วค่อยบวก ซึ่งผิดประเด็นที่จะหา average
// ?ใส่วงเล็บ () จะคิดในวงเล็บก่อน อยู่สูงสุดของ recedence
console.log(average);

// Multiple operators 
var x, y; // undefine
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
// 26 ใส่ y และ y ใส่ x
// ลำดับ precedence คือ () , * , / , + / -
// ? เนื่องจากเครื่องหมายเท่ากับ ถูกสั่งจาก right to left ต่างจาก +,-, >,< จะซ้ายเทียบขวา
console.log(x, y);

// More operators
x *= 2; // x = x * 2;
// right to left เช่นกัน

x += 10; // x = x + 10;
console.log(x);

x--; // x += 1;
console.log(x);
 */

/*****************************
 * TODO CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/* 
var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn, compare;

massMark = 95; // kg
heightMark = 1.7; // m

massJohn = 62; // kg
heightJohn = 1.58; // meter

bmiMark = massMark / (heightMark * heightMark);
// console.log(bmiMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(bmiJohn);

compare = bmiMark > bmiJohn;
// true or false
console.log("Is Mark's BMI higher than John's " + compare);

// use if/else statement.
if (bmiMark > bmiJohn) {
    console.log("Is Mark's BMI higher than John's.");
} else {
    console.log("Is Mark's BMI less than John's.");
}
 */

/**************************
 *! If / else statements
 */
/* 
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
    //* ใน if เป็น boolean เงื่อนไข true
    // * ต่องใส () ให้กับ boolean ด้วย
    // มีแบบ == และ ===
    // ในปีกกาคือ block state
    console.log(firstName + " is married.");
} else {
    //? สำหรับเงื่อนไข false
    console.log(firstName + " will hopefully marry soon.");
}

var isMarried = true;
if (isMarried) {
    //? isMarried เป็น boolean อยู่แล้ว จึงไม่ต้องเทียบกับอะไร (===)
    console.log(firstName + " is married.");
} else {
    console.log(firstName + " will hopefully marry soon.");
}
 */

/**************************
 *! Boolean logic
 * && and , || or , ! not
 */
/* 
var firstName = "John";
var age = 20;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
    // >=,< มี precedence สูงกว่า &&
    console.log(firstName + " is a teenager.");
} else if (age => 20 && age < 30) {
    console.log(firstName + " is a young man.");
} else {
    console.log(firstName + " is a man.");
}
 */

/**************************
 *! The Ternary Operator and Switch Statements
 */

// Ternary 3 เงื่อนไขใน 1 line
/* 
var firstName = "John";
var age = 20;
//* condition ? if block : else block
age >= 18
    ? console.log(firstName + " drinks beer.")
    : console.log(firstName + " drink juice.");
 */

/*
ex.2
var drink = age >= 18 ? "beer" : "juice";
console.log("Drink " + drink + ".");
 */

/* same above
if (age >= 18) {
    var drink = "beer";
} else {
    var drink = "juice";
}
console.log("Drink " + drink + ".");
*/

//? Switch Statement.
/* 
switch (expression) {
    case value1:
      //Statements executed when the
      //result of expression matches value1
      [break;]
      [default:
        //Statements executed when none of
        //the values match the value of the expression
        [break;]]
}
 */

/*
var job = "teacher";
switch (job) {
    case "teacher":
    case "instructor":
        //? anathor case ได้เหมือนกัน
        console.log(firstName + " teaches kids how to code.");
        break; //? ใส่ break กรณี true แล้ว ก็ไม่ต้องไปทำ case อื่น
    case "driver":
        console.log(firstName + " drives an uber.");
        break;
    case "designer":
        console.log(firstName + " designs beautiful websites.");
        break;
    // กรณีไม่ตรงกับเงื่อนไขไหนเลย และไม่ต้องใส่ break เพราะเป็น case สุดท้าย
    default:
        console.log(firstName + " does somthing.");
}

// Same above if / eles but clean
var firstName = "John";
var age = 16;
switch (true) {
    // ! ตอนแรกใส่ variable switch(age) แสดงค่าผิด
    // ? ถ้า case แรกเป็นจริง แล้วจะถูก break ไม่เช็ค case อื่น
    case age < 13: // true or false
        console.log(firstName + " is a boy.");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + " is a teenager.");
        break;
    case age >= 20 && age < 30:
        console.log(firstName + " is a young man.");
        break;
    default:
        console.log(firstName + " is a man.");
}
*/

/**************************
 *! Truthy and Falsy values and equlity operators
 */
/* 
//? falsy values : undefined, null, 0, '' (empty), NaN (Not a Number)
//? truthy values : NOT falsy values

var height;
height = 0;
if (height || height === 0) {
    // กำหนด height undefined , ก็เลยเป็น false
    // กรณีเป็น 0 ก็จะเป็น falsy เหมือนกัน จะต้องใช้ or ในการเช็ค
    console.log("Variable is defined.");
} else {
    console.log("Variable has NOT been defined.");
}

// Equlity operators

height = 23;
if (height == "23") {
    console.log("The == Operator does type coercion.");
    //? = คือ assign variable | right to left
    //? == จะใช้กับการเปลี่ยน data type บังคับให้เท่ากัน (converse number to string : left to right)
    //? === strick equality จะใช้กับการ compare true false | left to right
} else {
    console;
}
 */

/*****************************
 * TODO CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/* 
var johnScore = (89+120+103) / 3;
console.log('John '+johnScore);
var mikeScore = (116+94+123) / 3;
console.log('Mike '+mikeScore);
var marryScore = (97+134+105) / 3;
console.log('Marry '+marryScore);


if (johnScore > mikeScore) {
    console.log('John team is win. Score : '+johnScore + ' Points.');
    console.log('Mike team '+ mikeScore+' points.')
} else if (johnScore < mikeScore) {
    console.log('Mike team is win. Score : '+mikeScore + ' Points');
    console.log('John team '+ johnScore+' points.')
} else {
    console.log('Score is draw.');
    console.log(johnScore + ' = ' +mikeScore);
}


//! มีผู้ชนะชัดเจน ไม่ต้องคิดมาก
if (johnScore > mikeScore && johnScore > marryScore) {
    console.log('John team is win. Scored : ' + johnScore);
} else if (mikeScore > johnScore && mikeScore > marryScore) {
    console.log('Mike team is win. Scored : ' + mikeScore);
} else if (marryScore > johnScore && marryScore > mikeScore) {
    console.log('Marry team is win. Scored : ' + marryScore);
} else {
    console.log('Scored is draw.');
    if (johnScore === mikeScore) {
        console.log('John is draw Mike with '+ johnScore +' points');
    } else if (mikeScore === marryScore) {
        console.log('Mike is draw Marry with '+ mikeScore +' points');
    } else {
        console.log('John is draw Marry with '+ marryScore +' points');
    }
}
 */

/**************************
 *! Functions
 */
/* 
function calculateAge(birthYear) {
    // birthYear คือ Argument สามารถเพิ่มหลายๆ argument ได้ผ่าน comma
    return 2019 - birthYear;
}
// call function pass value
var ageJohn = calculateAge(1992);
// ageJohn เก็บ function ที่เรียกมา
var ageMike = calculateAge(1999);
var ageJane = calculateAge(2000);
console.log(ageJohn, ageMike, ageJane);

// ใน function block สามารถเรียก function ข้างนอกมาใช้ได้
function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 60 - age;
    if (retirement > 0) {
        console.log(firstName + " retires in " + retirement + " years.");
    } else {
        console.log(firstName + " is already retired.");
    }
    //* return function can save result to variable
    // ไม่ได้เอาไปใช้ต่อ / function นี้เราแสดง console.log ไปเลย
}

yearUntilRetirement(1992, "Bas");
yearUntilRetirement(1976, "Mike");
yearUntilRetirement(1920, "Jane");

// Basic Function
var ourFirstFunction = function() {
    console.log("Hello World");
};
ourFirstFunction();

var fuc = function(agr1, agr2) {
    console.log(agr1);
    console.log(agr2);
};
fuc(1, 2);

// ? ตัวอย่าง return
// return เมื่อต้องการเอาเอาไปใช้งานได้เลย ไม่ต้องประกาศ variable เพื่อมาเก็บค่า fucntion

function increseNumber(x, y) {
    total = x + y;
    console.log("inside function " + total);
    return total;
    // return x
    // จะแสดงค่า x อย่างเดียว
}
console.log("Outside function " + increseNumber(10, 20));
// ? จะแสดงค่า total ได้ เพราะใน function เราใส่ return ไว้

function increseNumber(x, y) {
    total = x + y;
    console.log("inside function " + total);
}
var total = increseNumber(2, 3);
console.log(total);
// ? total undifined เพราะว่าเราไม่สั่งให้ return
// ? สรุปคือ return เมื่อเราจะเอา function ไปใช้งานต่อ มันจะ memory ค่านั้นไว้
 */
/**************************
 *! Function statements and Expressions
 */
/* 
//? Normal Function declaration
// function whatDoYouDo(job, firstName) {}

//? Function expression
//? Expression จะส่ง result ทันที ต่างจาก Fuction Declaration ที่เรียกว่า statement อธิบายไว้ด้านล่างๆ
var whatDoYouDo = function(job,firstName) {
    switch (job) {
        case 'teacher': 
            return firstName + ' teaches kids how to code.';
            //* ถ้ามี return แล้ว script จะจบ function ทันที ไม่ต้องใส่ break
        case 'driver':
            return firstName + ' driver uber.';
            // TODO อย่าลืม return
        case 'designer':
            return firstName + ' design website.';
        default :
            return firstName + ' does somthing else.';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('driver','Mike'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('Engineer','Bas'));

//? Function expression vs Function statement
/* 
* Expression produce a value ให้คำตอบ ให้ค่าต่างๆ
เช่น 2+1
javascript จะส่งค่ามาเป็น 3

เช่น ใส่ whatDoYouDo('teacher','John') ก็จะ return value ออกมา

* Statements perform actions ไม่ได้ให้ค่า ณ ตอนนั้นเหมือน expression เช่น if/else , while loop
* เรียกว่า declaration
เช่น if (true) { console.log(69); }
javascript จะส่ง undefined เพราะ if statement ไม่ได้ส่งค่าอะไร
  */

/**************************
 *! Arrays = Lists in python
 */
/* 
// สร้าง array ปกติ
var names = ["John", "Mark", "Jane"];
// key 0,1,2

// สร้าง array ผ่าน function
var years = new Array(1900, 1998, 1992);
// Array function สร้าง array ผ่าน new keyword แต่ไม่ค่อยได้ใช้

// แสดงทั้งหมด
console.log(names);
// แสดงจำนวนสมาชิก
console.log(names.length);
// แสดงสมาชิกลำดับที่ 0
console.log(names[0]);

// Mutate array data
names[0] = "Ben";
console.log(names);
names[3] = "Aiib";
// Expand array ด้านหลังสุด
names[names.length] = "Bas";
console.log(names);

// Differnet data types
var john = ["John", "Smith", 1990, "teacher", false];
// * Function for array
// Add value to the end of array
john.push("blue");
// Add value to begin
john.unshift("Mr.");
// Remove element on the end
john.pop();
// Remove element begin
john.shift();
console.log(john);

// Position of value
console.log(john.indexOf(1990));
// ถ้าไม่มี value ใน array จะส่งค่า -1
console.log(john.indexOf("Bas"));
// Example การนำไปใช้งาน
var isEngineer =
    john.indexOf("Engineer") === -1
        ? "John is NOT a engineer"
        : "John is engineer";
console.log(isEngineer);
 */
/*****************************
 * TODO CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/* 
var calculateTips = function(billPay) {
    if (billPay < 50) {
        percentage = 0.2;
        // retrun percentage ไม่จำเป็น
    } else if (billPay >= 50 && billPay < 200) {
        percentage = 0.15;
    } else if (billPay >= 200) {
        percentage = 0.1;
    } else {
        console.log("Vaild value");
    }
    return (tips = billPay * percentage);
    // ? ตอนแรก design ให้ return ทุกบล็อก แต่จริงๆ มา return อันสุดท้ายก็ได้ เก็บ blo
};

var billPay = [124, 48, 268];
console.log("Bill pay :" + billPay);
var tipsPay = [
    calculateTips(billPay[0]),
    calculateTips(billPay[1]),
    calculateTips(billPay[2])
];
console.log("Tips each restuarant :" + tipsPay);

var paidAmout = [
    billPay[0] + tipsPay[0],
    billPay[1] + tipsPay[1],
    billPay[2] + tipsPay[2]
];
console.log("Total : " + paidAmout);
 */

/**************************
 *! Objects and properties = Dictionary in python
 */
/* 
// Object literal
// key (property) and value
// สามารถ nested ใน Objects ได้
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1992,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    favoriteFoods : { 
        mallFood : 'KFC',
        streetFood : 'Som Tum'
    }
};

console.log(john);
// read value by key
console.log(john.job);

//* การเรียกดู array ใน object
console.log(john.favoriteFoods["streetFood"]);

//? กรณีใช้ [] จะต้องใส่ Key string และไม่ต้องมีจุด
console.log(john["isMarried"]);
var x = "birthYear";
console.log(john[x]);

// Mutate data
john.job = "designer";
john["isMarried"] = true;
console.log(john);

// Create new Object syntex
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1992;
jane["lastName"] = "Smith";
console.log(jane);
 */

/**************************
 *! Objects and methods
 */
/* 
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1992,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    // ต้องการสร้าง function บอกอายุขึ้นมา ทำให้เป็น math เพราะเปลี่ยนทุกปี
    calcAge: function() {
        // function(birthYear) เป็น function expression ชื่อ calcAge
        // return = 2019 - this.birthYear;
        // this = current object เหมือน john.birthYear เรียก key ใน object ตัวเอง
        // this เหมือน self ใน python
        this.age = 2019 - this.birthYear;
    }
};

// console.log(john.calcAge(john.birthYear));
// เรียก Key calcAge, และใส่ตัวเลข john.birthYear = 1992
// * Array and Object ใช้ method ต่างๆ ได้เหมือนกัน เช่น pop, unshift

// method in object
// กรณีเปลี่ยนเป็น this.birthYear ใน function
// console.log(john.calcAge());

// เพิ่ม key age ใน object
// john.age = john.calcAge();

// อีกวิธีนึงคือเปลี่ยน return ใน calcAge ให้เป็น this.age = 2019 - this.birthYear พอเรียกใช้งาน function ก็จะสร้าง age ให้อัติโนมัติ
john.calcAge();
console.log(john);
 */

/*****************************
 * TODO CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
// Solution ทำทีละชื่อ
/* 
var john = {
    fullName: "John Smith",
    mass: 95,
    height: 1.7,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        // this คือ current object
        return this.bmi;
        // ? จำค่าเอาไว้ไปใช้งานต่อ
    }
};

var mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

// ข้อเสียคือต้องเรียกใช้ function ก่อน bmi ถึงจะมา
// เอาไป add ใน if statement ก็ทำได้ เพราะใน method (หรือ function) ใส่ return ไว้แล้ว
// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()) {
    console.log(
        john.fullName +
            " has a higher BMI of " +
            mark.fullName +
            ". BMI :" +
            john.bmi
    );
} else if (john.bmi < mark.bmi) {
    console.log(
        john.fullName +
            " has a less than BMI of " +
            mark.fullName +
            ". Mark BMI :" +
            john.bmi
    );
} else {
    console.log("EQUAL");
}

// ตอนพยายามทำ ก็ทำคล้ายๆ กัน แต่เราทำแบบ class คือ แทนค่าชื่อตัวแปล แล้วให้คำนวณออกมา ซึ่งตอนนี้ยังทำไม่ได้
// ? อธิบาย ใช้ method ใน object ไปเลยเพราะค่าจะได้ไม่เปลี่ยน
// ? จะทำแบบ OOP ก็ได้ คือใส่ชื่อ ใส่ค่า ก็คำนวณ BMI ออกมา แต่ความรู้ยังไม่ถึง
 */

/**************************
 *! Loops and iteration
 */
/* 
// * for loops
// initial condition execuse loop ; second condition execuse ; update couter
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// i = 0, 0 < 10 true, log i to console, i++
// ?.. i = 9 , 9 < 10 true i to log , i++ มันเก็บใน log ก่อนจะแสดง เลยแสดงแค่ 9
// i = 10 , 10 < 10 false , exit loop!

var john = ["John", "Smith", 1990, "designer", false, "blue"];
for (i = 0; i < john.length; i++) {
    // เริ่มจาก 0 เพราะ array เริ่มจากลำดับ 0 และ run loop น้อยกว่า length array
    console.log(john[i]);
}

// * while loops
// มีแค่ condition แล้วจะ execuse ไปเรื่อยๆ ไม่จบ
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}


// * Continue And Break statement.
var john = ["John", "Smith", 1990, "designer", false, "blue"];
// ให้หยุดตอนที่ไม่ใช่ string
/* 
//? Continue คือออกจาก loop
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== "string") continue;
    // ? ถ้าเจอไม่ใช่ string จะ skip บรรทัดสุดท้าย
    console.log(john[i]);
}

//? Break คือหยุด loop
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== "string") break;
    console.log(john[i]);
}

//? challenge อยาก loop ใน array ย้อนกลับจะทำไง .. ใช้ i เริ่มสุดท้าย และ ก็ใช้ i--
// for (var i = 5; i < john.length; i--) {
for (var i = john.length - 1; i >= 0; i--) {
    // อย่าลืม -1 ด้วย
    if (typeof john[i] !== "string");
    console.log(john[i]);
}
 */

/*****************************
 * TODO CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.


?สิ่งที่ให้ทำ
สร้าง object bill values
สร้าง function calsTips โดยมี loop อยู่ในนั้น คิดเงินทั้งหมด และ tipCalculate


?Output
2 array / tips และ paid amounts

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
? HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/* 
// TODO วิธีที่ 1 ลองทำแบบง่ายๆ เป็นไกด์
// John object bill
var johnBill = [124, 48, 268, 180, 42];
var johnTips = [];
var johnPaidAmouts = [];

// คิด tips แต่ละ item
for (var i = 0; i < johnBill.length; i++) {
    if (johnBill[i] < 50) {
        percentage = 0.2;
    } else if (johnBill[i] >= 50 && johnBill[i] < 200) {
        percentage = 0.15;
    } else if (johnBill[i] >= 200) {
        percentage = 0.1;
    }
    // console.log(tips);
    johnTips[i] = johnBill[i] * percentage;
    johnPaidAmouts[i] = johnTips[i] + johnBill[i];
}
console.log(johnTips);
console.log(johnPaidAmouts);


// TODO วิธีที่ 2 ลองทำตามโจทย์
// var johnBill = [124, 48, 268, 180, 42];
// ไม่ต้องประกาศข้างนอก แต่ไปใส่ใน object

var john = {
    bill: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        // ? สร้าง empty array ไว้ก่อน
        for (var i = 0; i < this.bill.length; i++) {
            // ? Member acces left to right เข้าจากซ้ายไปขวา
            if (this.bill[i] < 50) {
                percentage = 0.2;
            } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
                percentage = 0.15;
            } else if (this.bill[i] >= 200) {
                percentage = 0.1;
            }
            this.tips[i] = this.bill[i] * percentage;
            // ! JUM ไม่ใช่ function ไม่ต้อง return ว้อย
        }
    },

    calcPaidAmounts: function() {
        for (var i = 0; i < this.bill.length; i++) {
            this.paidAmouts = this.bill + this.tips;
        }
    }
};

john.calcTips();
john.calcPaidAmounts();
console.log(john);
console.log("John Tips :" + john.tips);
console.log("John Paid amounts : " + john.paidAmouts);

// TODO Mark
var markBill = [77, 375, 110, 45];
var mark = {
    bill: markBill,
    calcTips: function() {
        this.tips = [];
        // ? สร้าง empty array ไว้ก่อน
        for (var i = 0; i < this.bill.length; i++) {
            if (this.bill[i] < 100) {
                percentage = 0.2;
            } else if (this.bill[i] >= 100 && this.bill[i] < 300) {
                percentage = 0.1;
            } else if (this.bill[i] >= 300) {
                percentage = 0.25;
            }
            this.tips[i] = this.bill[i] * percentage;
            // ! JUM ไม่ใช่ function ไม่ต้อง return ว้อย
        }
    },

    calcPaidAmounts: function() {
        for (var i = 0; i < this.bill.length; i++) {
            this.paidAmouts = this.bill + this.tips;
        }
    }
};

mark.calcTips();
mark.calcPaidAmounts();
console.log(mark);
console.log("Mark Tips :" + mark.tips);
console.log("Mark Paid amounts : " + mark.paidAmouts);

// TODO Average tips
var calcAverage = function(tips) {
    var sum = 0;
    for (i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
};

johnAverage = calcAverage(john.tips);
console.log("Average tips john:" + calcAverage(john.tips));
markAverage = calcAverage(mark.tips);
console.log("Average tips mark:" + calcAverage(mark.tips));

// TODO Paid height
if (johnAverage > markAverage) {
    console.log("John paid tips higher than Mark, " + johnAverage);
} else if (johnAverage < markAverage) {
    console.log("Mark paid tips higher than John, " + markAverage);
} else {
    console.log("Is equally.");
}
 */
