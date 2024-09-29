// // part 1

const PI = 3.1415;
let radius=5;
const fixedCircle = PI * radius * radius;
const eachNeed= 0.8;

const fistWeekNum=20;
let aftWeeks=();
let totalweeks = aftWeeks+1;

const totNumAftWeek= fistWeekNum* Math.pow(2, aftWeeks);
const allPlantNeed= eachNeed*totNumAftWeek;

if (allPlantNeed < fixedCircle * 0.5) {
    console.log("By the " + totalweeks + " weeks, the circle has total " + totNumAftWeek + " plants, they need " + allPlantNeed + " square meter space, so you can plant more.")
} else if ( fixedCircle * 0.5 >= allPlantNeed >= fixedCircle * 0.8) {
    console.log("By the " + totalweeks + " weeks, the circle has total " + totNumAftWeek + " plants, they need " + allPlantNeed + " square meter space, so you need Monitor.") 
} else {
    console.log("By the " + totalweeks + " weeks, the circle has total " + totNumAftWeek + " plants, they need " + allPlantNeed + " square meter space, so you must Prun some.") 
}




// // part 2

const eachNeed= 0.8;
const fistWeekNum=100;
let aftWeeks=9;
let totalweeks = aftWeeks+1;

const totNumAftWeek= fistWeekNum* Math.pow(2, aftWeeks);
const allPlantNeed= eachNeed*totNumAftWeek;
const PI = 3.1415;
let radius= Math.sqrt(allPlantNeed/PI)

console.log(allPlantNeed, radius)
console.log( "By the " + totalweeks + " weeks, the circle has total " + totNumAftWeek + " plants, they need " + allPlantNeed + " square meter space, so radius is: " + radius +" meters.")



// PArt 3
const PI = 3.1415;
let radius=5;
const fixedCircle = PI * radius * radius;
const eachNeed= 0.8;

const fistWeekNum=100;
let aftWeeks=2;
let totalweeks = aftWeeks+1;
let scientistsNeed

const totNumAftWeek= fistWeekNum* Math.pow(2, aftWeeks);
const allPlantNeed= eachNeed*totNumAftWeek;

try {
    if (allPlantNeed < scientistsNeed * 0.5) {
        console.log("By the " + totalweeks + " weeks, the circle has total " + totNumAftWeek + " plants, they need " + allPlantNeed + " square meter space, so you can plant more.")
    } else if ( scientistsNeed * 0.5 <= allPlantNeed <= scientistsNeed * 0.8 ) {
        console.log("By the " + totalweeks + " weeks, the circle has total " + totNumAftWeek + " plants, they need " + allPlantNeed + " square meter space, so you need Monitor.") 
       }  else {
        throw "erro"
    }   
   } catch (error) {
    console.log("erro")
   } finally{
        console.log("Scientists insist the " + fixedCircle + " square meters space is enough to hold these " + totNumAftWeek + " plants.")
}
