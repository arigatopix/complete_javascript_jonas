/***************************************************
 *!              CODING CHALLENGE ทำเองอีกรอบ
 ***************************************************  */
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
