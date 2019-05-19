/*************************************************
 *!           Function Constructors
 ***********************************************  */
/* 
var Person = function(name, yearOfBirth, job) {
    // Function Constructros ใช้ตัวใหญ่นำหน้า
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function() {
    //   console.log(2019 - this.yearOfBirth);
    // }
};

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

// Create new object ผ่าน constructor เรียกว่า "INSTANTIATION" เพราะ instance ของ Person object
var john = new Person("John", 1990, "teacher");
 */
/* กระบวนการสร้าง
    - new Person คือสร้าง object ที่เป็น Person
    - fuction call โดย this หมายถึงตัว oject ที่พึ่งสร้างไป 
    - เนื่องจากสร้าง new Person this จึงเป็น this ของ object ไม่ใช่ window object
    - หลังจากนั้นก็สร้าง object ผ่าน argument ของ function ทำให้ property ถูก defined 
*/
/* 
var jane = new Person("Jane", 1992, "designer");
var mark = new Person("Mark", 1929, "retired");

// เรียก prototype  มาดู
// จากที่จำได้ prototype chain มันจะดู Constructor ก่อน ถ้าหา property ไม่เจอมันจะไปหาที่ Prototype property ของ Constructor จึงเป็นที่มาว่า ทำไมเราถึงเรียกใช้ method calculateAge() ได้
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName); // ได้เหมือนกันหมดเพราะทุก instance ถูก inherite property มาจาก prototype
 */
/////////////////////////////////////////////////////

/*************************************************
 *!      Create Objects โดยใช้ object.create
 ***********************************************  */
/**
 * สร้าง Object ของ prototype ก่อน
 * หลังจากนั้น สร้าง Object ใหม่โดยอ้างจะ prototype
 * เพิ่ม proterty เข้าไป
 */
/* 
// สร้าง object ที่เอาไว้เรียกไปเป็น prototype
var protoPerson = {
    // ไม่ใช่ function constructor แต่จะสร้าง object ไว้่ก่อน
    calculateAge: function() {
        console.log(2019 - this.yearOfBirty);
    }
};
// สร้าง Constructor
var john = Object.create(protoPerson);

// เพิ่ม Property
john.name = "John";
john.yearOfBirty = 1992;
john.job = "teacher";

// * อีกวิธีที่สร้างได้
var jane = Object.create(protoPerson, {
    name: { value: "Jane" },
    yearOfBirty: { value: 1999 },
    job: { value: "designer" }
});
 */
// ข้อแตกต่าง
// object.create สร้าง prototype โดยตรงผ่าน argument เปลี่ยนแปลง prototype ได้โดยตรง และง่ายกว่า ?
// new Person คือสร้าง object เปล่าที่ inherit มาจาก Person.prototype
/////////////////////////////////////////////////////

/*************************************************
 *           * Primitive VS Objects
 ***********************************************  */
/* 
// Primitive จะ hold value ของตัวเองไว้ แต่ไม่ได้ไป reference กับใคร
var a = 23;
var b = a;
a = 55;
console.log(a); // 55
console.log(b); // คง 23

// Objects : จะอ้างอิงตามค่าใน memory จะเปลี่ยนค่าไป ค่าเดิมก็จะถูกเปลี่ยนด้วย
var obj1 = {
    name: "John",
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30
// เหมือนกันเพราะ objects ใช้ reference ใน memory point เดียวกัน
// function ก็เหมือนกันกับ objects

// Functions
var age = 27;
var obj = {
    name: "Bas",
    city: "Lopburi"
};

function change(a, b) {
    a = 26; // ไม่มีผลต่อ outside of function เพราะเป็น Primitive จะบรรจุข้อมูลไว้ที่ variable ตัวเอง
    b.city = "Phitsanulok";
}

change(age, obj);
console.log(age); // 27 เพราะว่า age นอก function มีเป็น primitive คนละ memory กับใน function
console.log(obj.city); // Phitsanulok เพราะเป็น object ถูกเปลี่ยนที่ point ของ memory
 */
/////////////////////////////////////////////////////
/*************************************************
 *       * Passing functions as arguments
 ***********************************************  */
/* 
var years = [1990, 1992, 1999, 2005, 2019];

function arrayCalc(array, fn) {
  // fn เรียกว่า callback function จะทำอะไรหลังจากทำ array เสร็จ
  var arrResult = [];
  for (var i = 0; i < array.length; i++) {
    arrResult.push(fn(array[i])); // * function call รับค่าไปคำนวณต่อ
  }
  // เอาค่าไปใช้ต่อใน fn
  return arrResult;
}

function calculateAge(el) {
  // รับค่าจาก  array และส่งค่าต่อไปใช้ข้างนอก
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18; // true or false
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.69 * el); // el คืออายุ
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
// ไม่ใช้ calculateAge() เพราะเราจะไม่เรียกใช้งาน function ทันที จะให้ arrayCalc เป็นคนเรียกใช้งานทีหลัง ที่เรียก callback function
console.log(ages);

// เช็คอายุ
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

// Heart rate
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
 */
/////////////////////////////////////////////////////

/*************************************************
 *   ! Functions Returns Functions (คล้าย Promises)
 ***********************************************  */

// สร้าง functions ไว้เพื่อรอการใช้งานผ่าน argument
// return function ไปใช้ข้างนอก

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      // anonymous function คือ function ไม่มีชื่อ
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach " + name + " ?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

// ? คล้ายๆ Async, Await และคล้ายๆ function call อันนี้เรียกใช้เมื่อเราต้องการจะเรียก

// สร้างชุดคำถาม
var teacherQuestions = interviewQuestion("teacher");
var designerQuestions = interviewQuestion("designer");
var gamerQuestions = interviewQuestion("gamer");
// return function รอเรียกใช้งาน (Promises และ AWAIT) แล้วใช้ .then นั่นแหละ

// เรียกใช้งาน (.then)
teacherQuestions("John");
teacherQuestions("Mike"); // same
designerQuestions("Bas");
gamerQuestions("Mark");

// * ใช้ได้เหมือนกันเพราะเข้าถึงจากซ้ายไปขวา
interviewQuestion("teacher")("Jane");

/////////////////////////////////////////////////////

/*************************************************
 *! Immediately Invoked Function Expression (IFE)
 ***********************************************  */
// คือสร้างปุ้บ ใช้ได้เลย มี (); อยู่หลัง function
// function ต้องอยู่ใน  ()  JS จะมองว่าเป็นการ expression ไม่ใช่ statement หรือการประกาศ
// anynomous function ใน ()
// กำหนด data privacy ข้อดีคือ object ข้างนอกไม่สามารถมายุ่งอะไรใน IFE ได้
/* 
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// ผ่าน Argument
(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(1);
 */
/////////////////////////////////////////////////////

/*************************************************
 *!                   Closures
 ***********************************************  */
//? Closures หมายถึง function สามารถเข้าถึง variables, parameters ภายนอก function ได้ เมื่อ function ข้างนอกถูกเรียก (returned)
// execution stack ไปแล้วแต่ scope chain ยังอยู่ (variable object ยังอยู่)
/* 
function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
    // ใช้งาน var a ได้เพราะเป้น scope chain
  };
}

// เรียกใช้ปกติ
var retirementTH = retirement(60);
// หลังจาก retirement จบไป จะถูก pop ออกจาก Execution Stack
// ? คำถาม ทำไม var a ยังเรียกใช้งานได้
retirementTH(1990);
// เพราะว่า retirement ถูกเรียกอีกครั้ง ตอน return function และเพราะว่าเป็น return a เป็น Scope Chain (a เป็น global) a เลยมาแสดงได้
// retirement(60)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

/////

// ? USE CLOSURES
// หลังจาก returned ก็ยังเรียกใข้ job ได้ เพราะว่าเป็น scope chain

function interviewQuestion(job) {
return function(name) {
  if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
  } else if(job === 'teacher') {
      console.log('What subject do you teach ' + name + ' ?');
  } else {
      console.log('Hello '+ name + ', what do you do?');
  }
}
}

var teacherQuestions = interviewQuestion('teacher');  // return function ไม่มีชื่อ if state ทั้งก้อน รอการเรียกใช้
var designerQuestions = interviewQuestion('designer');
var otherQuestions = interviewQuestion('other');

// เรียก return ที่ถูกเรียกว่า closure เพราะว่า Variable Object ตอน return ใกล้ชิดกับ function ข้างนอก return สามารถไปใช้ variable ข้างนอกได้
teacherQuestions('Bas');
designerQuestions('Bas');
otherQuestions('Bas');

// สามารถใช้ .then ได้โดยพิมพ์ code ไม่ยาว
 */
/////////////////////////////////////////////////////

/*************************************************
 *!          Bind, Call, apply method
 ***********************************************  */

// Call เรียกใช้ method ของอีก object นึง เหมือน inheritance จาก objects หรือเรียก method borrowing
/* 
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeOfDay +
          ", Ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          ' years old.'
      );
    } else if (style === 'friendly') {
      console.log(
        "Hey! What's up I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          ' year old. Have a nice ' +
          timeOfDay +
          '.'
      );
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

// john.presentation('friendly','morning');

// * Call ดึง method ของ John มาใช้ ใช้กับ emily arg แรกต้องใส่ object
john.presentation.call(emily, 'friendly', 'afternoon'); // arg แรก ใส่ object ที่ไปแทน this ของ john

// * Apply คล้ายๆ call แต่ต้องใส่ค่า argument ด้วย array
// john.presentation.apply(emily, ['formal' , 'afternoon']);

// * Bind คล้ายๆ call แต่ที่ต่างก็คือการ copy function 
// ! ต้องเก็บไว้ซักที่นึง ถึงจะเรียกใช้งานได้ (variable)
// bind = preset argument

// เรียกใช้ function จะใส่หรือไม่ใส่ timeOfDay ก้ได้ คือเอาไว้เรียกภายหลัง คล้ายๆ callback function ได้
// * 1. set Preset
var johnFriendly = john.presentation.bind(john, 'friendly');
// * 2 ลองเรียกใช้
johnFriendly('night');
johnFriendly('afternoon'); // ใช้ตามเวลา

// copy ของ john มาแต่ใส่ของ emily objects
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('night');

var emilyFriendlyMorning = john.presentation.bind(emily, 'friendly', 'morning');

//////////////////

var years = [1990, 1992, 2014, 2005];

function arrayCalc(array, fn) {
  var arrResult = [];
  for (var i = 0; i < array.length; i++) {
    arrResult.push(fn(array[i]));
  }
  return arrResult;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
  // โจทย์คือต้องการกำหนดค่า full age ให้เป็นไปตามแต่ละประเทศ มีค่าต่างกัน แต่ใช้ function  เดียวกัน
}

// เรียกใช้ function คำนวณอายุ
var ages = arrayCalc(years, calculateAge);
console.log(ages);

// สร้าง preset full age สำหรับหลายประเทศ
var isFullTH = arrayCalc(ages, isFullAge.bind(this, 18));
// isFullAge.bind(this, 18) คือ copy function isFullAge ไว้
// this คืออ้างอิง object ปัจจุบัน , 18 คือ limit ต้องใส่อันแรก

var isFullGerman = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(isFullTH);
console.log(isFullGerman);
 */
/////////////////////////////////////////////////////

/*************************************************
 *!          CODING CHALLENGE
 ***********************************************  */
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/* 
// 7. เป็น private
(function() {
  // 1
  function QuizGame(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  QuizGame.prototype.displayQuestion = function() {
    // Show question
    console.log(this.question);

    // Show answers
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ':' + this.answers[i]);
    }
  };

  QuizGame.prototype.checkAnswer = function(answer) {
    if (answer === this.correct) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again :)');
    }
  };

  // 2 Create a couple of questions using the constructor
  var question1 = new QuizGame(
    'Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0
  );

  var question2 = new QuizGame(
    "What is the name of this course's teacher?",
    ['John', 'Micheal', 'Jonas'],
    2
  );

  var question3 = new QuizGame(
    'What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2
  );

  // 3. Store them all inside an array
  var questions = [question1, question2, question3];

  
    // Math.random() // 0 - 0.99999
    // Math.round() ปัดเป็นจำนวณเต็ม
    // array.length คือจำนวณสมาชิก แต่ index ต้องลบ 1
    // Math.floor() // ปัดเศษลง
  

  // Random
  // var n = Math.round(Math.random() * (questions.length - 1));
  var m = Math.floor(Math.random() * questions.length); // ไม่เกิน 2

  // 4.
  questions[m].displayQuestion();

  // 5.
  var answer = parseInt(prompt('Are you OK?'));
  // ต้อง parseInt เพราะต้องเอาค่าจำนวนเต็มมา

  // เช็คคำตอบ ส่ง parameter ให้ function
  questions[m].checkAnswer(answer);
})();
 */
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
/* 
(function() {
  function QuizGame(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  QuizGame.prototype.displayQuestion = function() {
    // Show question
    console.log(this.question);

    // Show answers
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ':' + this.answers[i]);
    }
  };

  QuizGame.prototype.checkAnswer = function(answer, fn) {
    // เก็บค่า score ที่ function return กลับมา
    var sc; 
    if (answer === this.correct) {
      console.log('Correct answer!');
      sc = fn(true);
      console.log('Current score : ' + sc);
    } else {
      console.log('Wrong answer. Try again :)');
      sc = fn(false);
    }
    this.displayScore(sc);
    showScoreUI(sc);
  };

  QuizGame.prototype.displayScore = function(score) {
    console.log('Your current score is : ' + score);
    console.log('-----------')
  };

  var question1 = new QuizGame(
    'Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0
  );

  var question2 = new QuizGame(
    "What is the name of this course's teacher?",
    ['John', 'Micheal', 'Jonas'],
    2
  );

  var question3 = new QuizGame(
    'What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2
  );

  var questions = [question1, question2, question3];

  // เก็บ score ใช้ closure
  function score() {
    // Init score
    var sc = 0;

    // ถ้าถูกให้เพิ่มคะแนน 
    return function(correct) {
      if(correct) {
        sc ++;
      };
      // ส่งคะแนนออกไปข้างนอก
      return sc;
    }
  }

  // ? Initiate function score เพื่อเก็บค่า หลังจากนั้นนำไปดูว่า true/false
  // ! หลังจากนั้น callback function ใส่ true/false เพื่อให้ if statement ทำงาน
  var keepScore = score(); 

  function showScoreUI(score) {
    document.getElementById('score').innerText = score
  }

  // หลังจากจบให้เริ่ม random ใหม่
  function nextQuestion() {
    var m = Math.floor(Math.random() * questions.length); // ไม่เกิน 2

    questions[m].displayQuestion();
    
    // เอา parseInt ออก และถามครั้งเดียว
    var answer = prompt('Are you OK?');
    
    if(answer !== 'exit') {
      // ถ้าไม่ใช่ exit ให้เชคคำตอบ

      //? keepScore คือไป callback function เพื่ือเก็บคะแนนออกมา
      questions[m].checkAnswer(parseInt(answer), keepScore);

      // และถามต่อ
      nextQuestion();
    }
  }
  // call function
  nextQuestion();
})();
 */