
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


/******************
 * CLICK HANDLERS *
 ******************/


/*******************
 * EVENT LISTENERS *
 *******************/


/****************
 * MATH SECTION *
 ****************/



/********************
* MATH-AREA QUERIES *
********************/


