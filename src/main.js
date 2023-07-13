// ACTION PLAN
// 1. Create querySelector for the elements we want to manipulate (elements of the cover)
// 2. Create an eventListener for those elements to either appear or disappear on page load
// 3. Create a function to generate a random cover by invoking getRandomIndex()
// 4. Invoke it three times passing thru the args

// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var coverTagline1 = document.querySelector(".tagline-1")
var coverTagline2 = document.querySelector(".tagline-2")
var randCoverBtn = document.querySelector(".random-cover-button")

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇
window.addEventListener("load", generateRandomCover)

randCoverBtn.addEventListener("click", function(event) {
  console.log(event.target)

}) 


function generateRandomCover() {
  var getRandImgIndex = getRandomIndex(covers)
  var getRandTitleIndex = getRandomIndex(titles)
  var getRandTagIndex1 = getRandomIndex(descriptors)
  var getRandTagIndex2 = getRandomIndex(descriptors)
  var randImg = covers[getRandImgIndex]
  var randTitle = titles[getRandTitleIndex]
  var randTag1 = descriptors[getRandTagIndex1]
  var randTag2 = descriptors[getRandTagIndex2]

coverImg.src = randImg 
coverTitle.innerHTML = randTitle
coverTagline1.innerHTML = randTag1
coverTagline2.innerHTML = randTag2
  createCover(imgSrc, title, descriptor1, descriptor2)
}

// function showRandomCover() {

// }

/*
make a querySelector for random-cover-button 


 */

// research method to "splice" the innertext section between <span
// edge case: descriptor words repeating themselves in the tagline

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}
// possibly write if statement to not repeat descriptors in the random generation