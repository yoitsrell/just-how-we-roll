
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 ******************************************************************/


const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}



/******************
 * BUTTON QUERIES *
 ******************/
const dSix = document.querySelector("#d6-roll");
const dSix1 = document.querySelector("#double-d6-roll-1")
const dSix2 = document.querySelector("#double-d6-roll-2")
const d12 = document.querySelector("#die-12")
const dTwenty = document.querySelector('#d20-roll')
const reset = document.querySelector('#reset-button')
/******************
 * CLICK HANDLERS *
 ******************/
function sixGrab(){
let number =  getRandomNumber(6) //ask why sixes.push(getRandomNumber(6)) didn't work
sixes.push(number)


switch (number){
  case 1:
    dSix.src = `images/d6/1.png`
      break;
  case 2:
    dSix.src = `images/d6/2.png`
      break;
  case 3:
    dSix.src = `images/d6/3.png`
        break;
    case 4:
    dSix.src = `images/d6/4.png`
    break;
  case 5:
    dSix.src = `images/d6/5.png` 
      break
    case 6:
    dSix.src = `images/d6/6.png`
      break;
      default:
        dSix.src = `images/start/d6/.png`
      }
sixRollsMean.innerText = mean(sixes)
sixRollsMedian.innerText = median(sixes)
    }

function doubleSixGrab(){
  let num1 = getRandomNumber(6)
  let num2 = getRandomNumber(6)
  doubleSixes.push(num1 + num2)

switch (num1){
    case 1:
      dSix1.src = `images/d6/1.png`
        break;
    case 2:
      dSix1.src = `images/d6/2.png`
        break;
    case 3:
      dSix1.src = `images/d6/3.png`
          break;
      case 4:
      dSix1.src = `images/d6/4.png`
      break;
    case 5:
      dSix1.src = `images/d6/5.png` 
        break
      case 6:
      dSix1.src = `images/d6/6.png`
        break;
    default:
      dSix1.src = `images/start/d6/.png`
}

switch (num2){
            case 1:
              dSix2.src = `images/d6/1.png`
                break;
            case 2:
              dSix2.src = `images/d6/2.png`
                break;
            case 3:
              dSix2.src = `images/d6/3.png`
                  break;
              case 4:
              dSix2.src = `images/d6/4.png`
              break;
            case 5:
              dSix2.src = `images/d6/5.png` 
                break
              case 6:
              dSix2.src = `images/d6/6.png`
                break;
            default:
              dSix2.src = `images/start/d6/.png`
}
sixOneMean.innerText = mean(doubleSixes)
sixOneMedian.innerText = median(doubleSixes)
}

function twelveGrab(){
  let num1 = getRandomNumber(12)
  twelves.push(num1)

  switch (num1){
    case 1:
      d12.src = `images/numbers/1.png`
        break;
    case 2:
      d12.src = `images/numbers/2.png`
        break;
    case 3:
      d12.src = `images/numbers/3.png`
        break;
    case 4:
      d12.src = `images/numbers/4.png`
        break;
    case 5:
      d12.src = `images/numbers/5.png` 
        break
    case 6:
      d12.src = `images/numbers/6.png`
        break;
    case 7:
      d12.src = `images/numbers/7.png`
        break;
    case 8:
      d12.src = `images/numbers/8.png`
        break;
    case 9:
      d12.src = `images/numbers/9.png`
        break;
    case 10:
      d12.src = `images/numbers/10.png`
        break;
    case 11:
      d12.src = `images/numbers/11.png`
        break;
    case 12:
      d12.src = `images/numbers/12.png`
    //default:
      //d12.src = `images/start/d12/.png`
}
twelveMean.innerText = mean(twelves)
//twelveMedian.innerText = median(twelves)
}

function twentyGrab(){
let num1 = getRandomNumber(20)
twenties.push(num1)

switch (num1){
  case 1:
    dTwenty.src = `images/numbers/1.png`
      break;
  case 2:
    dTwenty.src = `images/numbers/2.png`
      break;
  case 3:
    dTwenty.src = `images/numbers/3.png`
      break;
  case 4:
    dTwenty.src = `images/numbers/4.png`
      break;
  case 5:
    dTwenty.src = `images/numbers/5.png` 
      break
  case 6:
    dTwenty.src = `images/numbers/6.png`
      break;
  case 7:
    dTwenty.src = `images/numbers/7.png`
      break;
  case 8:
    dTwenty.src = `images/numbers/8.png`
      break;
  case 9:
    dTwenty.src = `images/numbers/9.png`
      break;
  case 10:
    dTwenty.src = `images/numbers/10.png`
      break;
  case 11:
    dTwenty.src = `images/numbers/11.png`
      break;
  case 12:
    dTwenty.src = `images/numbers/12.png`
      break;
  case 13:
    dTwenty.src = `images/numbers/13.png`
      break;
  case 14:
    dTwenty.src = `images/numbers/14.png`
      break;
  case 15:
    dTwenty.src = `images/numbers/15.png`
      break;
  case 16:
    dTwenty.src = `images/numbers/16.png`
      break;
  case 17:
    dTwenty.src = `images/numbers/17.png`
      break;
  case 18:
    dTwenty.src = `images/numbers/18/png`
      break;
  case 19:
    dTwenty.src = `images/numbers/19.png`
      break;
  case 20:
    dTwenty.src =  `images/numbers/20.png`
      break;
  //default:
    //dTwenty.src = `images/start/d20.jpg`
}
twentyMean.innerText = mean(twenties)
twelveMedian.innerText = median(twenties)
}

function resetAll(){
location.reload()
}
/*******************
 * EVENT LISTENERS *
 *******************/
dSix.addEventListener("click", sixGrab )
dSix1.addEventListener('click', doubleSixGrab)
dSix2.addEventListener('click', doubleSixGrab)
d12.addEventListener('click', twelveGrab)
dTwenty.addEventListener('click', twentyGrab)
reset.addEventListener('click', resetAll)
/****************
 * MATH SECTION *
 ****************/
function mean(array){
let avg = 0
for (let i = 0; i < array.length; i++)
avg += array[i];
return sum / (array.length)
}

// function median(array){
// let median = array
// let low = math.floor((median.length - 1)/2)
// let high = math.ceil((median.length-1)/2)
// let median = (values[low] + values[high])/2
// return median.sort(function(a,b){return b-a})
// }

/********************
* MATH-AREA QUERIES *
********************/
sixRollsMean = document.querySelector('#d6-rolls-mean')
sixRollsMedian = document.querySelector('#d6-rolls-median')

sixOneMean = document.querySelector('#double-d6-rolls-mean')
sixOneMedian = document.querySelector('#double-d6-rolls-median')

twelveMean = document.querySelector('#d12-rolls-mean')
twelveMedian = document.querySelector('#d12-rolls-median')

twentyMean = document.querySelector('#d20-rolls-mean')
twentyMedian = document.querySelector('#d20-rolls-median')