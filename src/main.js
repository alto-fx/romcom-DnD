// ACTION PLAN
// 1. Create querySelector for the elements we want to manipulate (elements of the cover)
// 2. Create an eventListener for those elements to either appear or disappear on page load
// 3. Create a function to generate a random cover by invoking getRandomIndex()
// 4. Invoke it three times passing thru the args

// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var coverTagline = document.querySelectorAll("h3")

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇
window.addEventListener("load", generateRandomCover)

function generateRandomCover() {
  var getRandImgIndex = getRandomIndex(covers)
  var getRandTitleIndex = getRandomIndex(titles)
  var getRandTagIndex = getRandomIndex(descriptors)
  var randImg = covers[getRandImgIndex]
  var randTitle = titles[getRandTitleIndex]
  var randTag = descriptors[getRandTagIndex]

coverImg.src = randImg 
coverTitle.innerText = randTitle
coverTagline.innerText = randTag

// research method to "splice" the innertext section between <span
  createCover(imgSrc, title, descriptor1, descriptor2)
}

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