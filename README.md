# Just How We Roll

#### Introduction

Today we'll be dealing with dice, and we'll make you DIE laughing at the PUNishing jokes you'll be on the receiving end of.

### What Does This App Do?

Every time we click on a die, we get back a random result according to the possibilities of that die or set of dice. In other words, if we click on the six-sided die, we get a number 1-6. If we click on the pair of six-sided dice, we get a number from 2-12 (because you can't get 1 with two dice!).

While the user is seeing how they felt--craps pun!--about that result, we calculate the mean average and median average of the rolls so far, and give that data to the user.

Try not to DIE from how hard this is!

Oh, I already used that pun?

Dangit, there just isn't that much to work with here.


### Some Guidelines

* Unlike some other apps, we're changing the DOM based only on simple input, not the state of anything on the DOM (no text inputs here!). So we do NOT need to worry about stale queries, and we can query everything globally.


### Getting To Know You

Let's get acquainted with what we start with:

* Our html and css are already set up, for sure, but check out the html elements. You'll be hooking into them with some queries.
* We've got four global arrays declared for us that will hold all our rolls.
* We've got our `getRandomNumber` function that takes in a number and gives you a random number back from 1 to that given number. Give it a 6 and you'll get a random number 1-6. Give it a 20 and you'll get a 1-20. We'll need that to generate our rolls.
* We've got a sortByNumber function that, given an array, returns an array sorted by number (without mutating the original). This is useful for the median calculation!


### Getting Rolling

You could try to go without instructions here for a real challenge. Be the star, not a ROLL PLAYER.

Okay, that pun was a reeeeeaaaaaal stretch. I'm done now.

Besides, you probably _should_ follow these getting-started instructions.

1. Add a global variable holding the result of querying the d6 image. We'll refer to it in several different functions, so storing it globally like this will help! For ease of coding, we'll do the d6 the whole way through; then we can generalize from there to the related problem of the other dice.
2. Add a function that will be our click handler for rolling that d6. We'll wire it up momentarily, but here's what it needs to do:
  * use `getRandomNumber` to get a roll from 1-6.
  * add that value to our `sixes` array.
  * Set the source for the image we queried in step 1. Remember that you can build the string, and that the only thing that changes between the path to one six-sided image and another is the number for the filename--`1.png~ vs. `2.png`, and so on. We've got that number already!
  NOW. Try calling that function just from the dev tools console. You should see the image change!
3. Wire it up! Add an event listener for the d6 button, launching our click handler from step 2. Test it by clicking on the image!


### The Rest

In no particular order, you'll need to:

* Do those three above steps for each other die (or set of dice). Watch out for those double dice, they're a bit tricky!
* Add functions to get the mean and median of any passed in array, then, in each click handler, call them to get the return values nad put them in the mean and median sections of the DOM.
* Add a reset function tied to the reset button that removes all the values from each array, resets the die images to their start images, and removes the text from the mean and median sections.


#### Stretch Goals


1. Write helper functions to get the image sources for your die rolls. It could take in a roll and give you back the appropriate image source. I highly highly _highly_ encourage you check out template strings, also known as backtick strings. WIth the careful naming of image files you've already got, template strings can make getting the right file path a one-line function!
2. Tired of having all those `document.querySelector` lines? Me too! We're basically doing only three things with html nodes this time around: setting `innerText` on a node, setting the `src` on an image, or adding an `eventListener` to the node. Focusing on those first two first, you could write a function that takes in a selector and a string and sets the `innerText` of the node it finds to that string, and a function that takes in a selector and an image path and sets the `src` of the appropriate node to that image path.
3. If you want to go further, you can do the same with `addEventListener` and fix our init function. You can actually take in a function as a parameter as well!
4. If you want to go _even further_, you can make one function that takes in a selector and some way of telling the function which of our three things to do with it. Not sure it's better, but... it's a different challenge!
5. Also find the mode of the rolls. This is a little cleaner with objects, but there's absolutely a way to do it with arrays instead. Feel free to take a shortcut with objects, though it requires... knowing objects. Either way, place it on the page, just like with our medians and means. You'll likely have to put some more html down to have somewhere to place it.
