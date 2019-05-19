/**********************************************
 *!       Old Way Asynchronous JS
 ***********************************************/
/* 
// Simulate Recipe ID รับส่งข้อมูล
function getRecipe() {
  setTimeout(() => {
    // จำลอง id จาก server
    const recipeID = [12, 10, 155, 174, 99, 8];
    console.log(recipeID);

    // รับค่า id จาก server
    setTimeout(
      id => {
        // id รับค่าจาก arg ที่ 3 ของ method setTimeout
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Bas'
        };
        console.log(`${id} : ${recipe.title}`);
        // จำลองว่า  server ส่งค่ากลับไป (วินาทีที่ 4)

        // จำลองให้ SERVER ส่งชื่อ publisher
        setTimeout(
          publisher => {
            const recipe2 = {
              title: 'Pizza',
              publisher: 'Bas'
            };
            console.log(recipe);
          },
          1000,
          recipe.publisher
        );
      },
      4000,
      recipeID[3]
    ); // arg ที่ 3 คือค่าที่ใส่ id
  }, 1000);
}

// RUN FUNCTION
getRecipe();
 */
/////////////////////////////////////////////////////////////////////

/**********************************************
 *!       From callback hell to promises
 ***********************************************/
/* 
Promise คือ object track event และหลังจากนั้นจะทำอะไรต่อ (SETTLED/RESOLVED) มีสอง state FULLFILED(resolve คือ successful) กับ REJECTD(reject คือ not success)
 */
/* 
//  Promises มาคู่กับ .then .cacth จากนั้นทำอะไร
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([12, 10, 155, 174, 99, 8]);
  }, 1500);
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      ID => {
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Bas'
        };
        // Success แสดง
        resolve(`${ID} : ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelate = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        const recipe = {
          title: 'Pizza',
          publisher: 'Bas'
        };
        resolve(`${pub} : ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

getIDs
  .then(IDs => {
    // than inherite มาจาก resolve กรณี FULLFILED
    // ! ต่อจากนั้นให้แสดง log และเข้า function getRecipe(IDs[2])
    console.log(IDs);
    return getRecipe(IDs[2]); // resolve (line 51)
  })
  .then(recipe => {
    // then เป็น resolve ของ getRecipe ให้แสดงค่า (line 63)
    console.log(recipe);
    return getRelate('Bas');
  })
  .then(recipe => {
    console.log(recipe);
    // อ่านค่าไม่ได้ เพราะ resolve เป็น string แต่เราเรียกแบบ object
  })
  .catch(err => {
    // catch จะทำงานเมื่อ reject
    console.log(err);
  });

// สรุป .then ทำเป็น Chain
 */
/////////////////////////////////////////////////////////

/**********************************************
 *!     From Promise to ASYNC/AWAIT (ES2017)
 ************************************************/
// AWAIT (เฝ้าคอย) คือค่าของ Promise ที่ถูก resolve
// ! AWAIT จะใช้ได้ใน async function (run background)
/* 
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([12, 10, 155, 174, 99, 8]);
  }, 1500);
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      ID => {
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Bas'
        };
        // Success แสดง
        resolve(`${ID} : ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelate = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        const recipe = {
          title: 'Pizza',
          publisher: 'Bas'
        };
        resolve(`${pub} : ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

// * NEW ASYNC, AWAIT
// ASYNC หน้า function
async function getRecipeAW() {
  const IDs = await getIDs;
  // IDs รับค่าจาก Promise จนกว่า resolve
  // จากนั้น run function getIDs
  console.log(IDs);
  // // SAME ABOVE
  //   getIDs.then(IDs => {
  //   console.log(IDs);})
  

  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);

  const related = await getRelate('Bas');
  console.log(related);

  // test result ของ recipe
  return recipe;
  // async ค่า return คือค่า resolve ของ Promise
}

// const recipe = getRecipeAW();
// console.log(recipe);
// ขึ้น object Promise แทนที่จะขึ้นค่า recipe จาก function เพราะยัง run background อยู่

// ทดสอบว่า async return ค่า resolve จริงมั้ย
getRecipeAW().then(result => console.log(`${result} is the best ever!`));
 */
/////////////////////////////////////////////////////////

/**********************************************
 *!            AJAX And APIS
 ************************************************/
// AJAX = Asynchroous JS And XML การสื่อสารระหว่าง Client กับ Server ส่วนมากจะ run backgroung หน้าเพจไม่ reload
// API = Application Programming Interface เป็นส่วนหนึ่งของ software (program) ใน server เอาไว้ติดต่อสื่อสาร

/////////////////////////////////////////////////////////

/**********************************************
 *!   Make AJAX Calls wit Fetch And Promise
 ************************************************/
/* 
function getWeather(woeid) {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
  )
    // ได้ Response Object
    .then(result => result.json())
    // converse json
    .then(data => {
      // console.log(data);
      const today = data.consolidated_weather[0];
      // ดูที่ object เอา ว่าจะเอา key อะไรมา
      console.log(
        `Temperatures in ${data.title} Today stay between ${
          today.min_temp
        } and ${today.max_temp}`
      );
    })
    .catch(err => console.log(err));
  // เข้า api ตรงๆ ไม่ได้ เพราะต้องมี api key ด้วย
  // วิธีการแก้ไข อ้อมผ่าน https://cors-anywhere.herokuapp.com/
  // fetch จะ return promise แล้วใช้ .then ได้
}

getWeather(2487956);
getWeather(44418);
 */
/////////////////////////////////////////////////////////

/**********************************************
 *!   Make AJAX Calls wit Async/Await
 ************************************************/
// ต่างจากอันเดิม ตรงที่มี Error Handle ด้วย โดยใช้ try / catch

async function getWeatherAW(woeid) {
  try {
    // Error Handle
    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
    );
    // เมื่อ fetch เสร็จ แล้ว result = response object

    const data = await result.json();

    const tomorrow = data.consolidated_weather[1];

    console.log(
      `Temperatures in ${data.title} Tomorrow stay between ${
        tomorrow.min_temp
      } and ${tomorrow.max_temp}`
    );

    return data;
    // return ค่า Promise object
  } catch (error) {
    console.log(error);
  }
}

// Result
// บางทีข้อมูลอาจจะไม่ได้ตรงตาม order
getWeatherAW(2487956);

// const dataLondon = getWeatherAW(44418);
// console.log(dataLondon); // ได้ Promise Object เพราะว่ายัง fetch ไม่เสร็จ (peding)

// ใช้ Promise รอค่าก็ได้ แก้ปัญหา fetch ยังไม่เสร็จ

let dataLondon;
getWeatherAW(44418).then(data => {
  dataLondon = data;
  console.log(dataLondon); //ได้ jason (line 220)
});

/////////////////////////////////////////////////////////
