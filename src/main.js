 // Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var coverTagline1 = document.querySelector(".tagline-1")
var coverTagline2 = document.querySelector(".tagline-2")
var randCoverBtn = document.querySelector(".random-cover-button")
var makeOwnCover = document.querySelector(".make-new-button")
var formView = document.querySelector(".form-view")
var homeView = document.querySelector(".home-view")
var hideSavedBtn = document.querySelector(".save-cover-button")
var homeBtn = document.querySelector(".home-button")
var viewSavedBtn = document.querySelector(".view-saved-button")
var uniqueCoverInput = document.querySelector(".user-cover")
var uniqueTitleInput = document.querySelector(".user-title")
var uniqueDescInput1 = document.querySelector(".user-desc1")
var uniqueDescInput2 = document.querySelector(".user-desc2")
var makeMyBookBtn = document.querySelector(".create-new-book-button")

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", displayRandomCover)
randCoverBtn.addEventListener("click", displayRandomCover)
makeOwnCover.addEventListener("click", showCoverForm)
viewSavedBtn.addEventListener("click", showSavedCovers)
homeBtn.addEventListener("click", showHomePage)
makeMyBookBtn.addEventListener("click", function(event){
  createCover()
  updateBookArrays()
// change hidden class inside of new function navToHome. 
})



// Create your event handlers and other functions here 👇

function displayRandomCover() {
  var randomCover = getRandomCover()
  coverImg.src = randomCover.coverImg;
  coverTitle.innerHTML = randomCover.title;
  coverTagline1.innerHTML = randomCover.tagline1;
  coverTagline2.innerHTML = randomCover.tagline2;
}

function getRandomCover() {
  var getRandImgIndex = getRandomIndex(covers)
  var getRandTitleIndex = getRandomIndex(titles)
  var getRandTagIndex1 = getRandomIndex(descriptors)
  var getRandTagIndex2 = getRandomIndex(descriptors)
  var randImg = covers[getRandImgIndex]
  var randTitle = titles[getRandTitleIndex]
  var randTag1 = descriptors[getRandTagIndex1]
  var randTag2 = descriptors[getRandTagIndex2]

  return createCover(randImg, randTitle, randTag1, randTag2)
}

// every button need a direction to go. function that using conditional logic that passes in a string. based on this it will hide elements. if statement with a bunch of else ifs.



function showCoverForm() {
  homeView.classList.add("hidden")
  formView.classList.remove("hidden")
  randCoverBtn.classList.add("hidden")
  hideSavedBtn.classList.add("hidden")
  homeBtn.classList.remove("hidden")
}

function showSavedCovers() {
  homeView.classList.add("hidden")
  randCoverBtn.classList.add("hidden")
  hideSavedBtn.classList.add("hidden")
  homeBtn.classList.remove("hidden")
  formView.classList.add("hidden")
}

function showHomePage() {
  homeView.classList.remove("hidden")
}

// Use the values from the inputs to create a new, unique cover object (part of your data model)

function updateBookArrays() {
  event.preventDefault()
  var uniqueCover = uniqueCoverInput.value
  covers.push(uniqueCover)

  // currentCover.coverImg = uniqueCover
  // var uniqueTitle = uniqueTitleInput.value
  // currentCover.title = uniqueTitle
  // var uniqueDesc1 = uniqueDescInput1.value
  // currentCover.tagline1 = uniqueDesc1
  // var uniqueDesc2 = uniqueDescInput2.value
  // currentCover.tagline2 = uniqueDesc2


  console.log('cover:', uniqueCover)
  console.log('title:', uniqueTitle)
  console.log('description1:', uniqueDesc1)
  console.log('description2:', uniqueDesc2)

  

  // currentCover.coverImg = input.value
  displayRandomCover()
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
  currentCover = cover
  return cover
}




