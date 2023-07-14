//consider toggleButtons for switching pages
// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var coverTagline1 = document.querySelector(".tagline-1")
var coverTagline2 = document.querySelector(".tagline-2")
var randCoverBtn = document.querySelector(".random-cover-button")
var makeOwnCover = document.querySelector(".make-new-button")
var viewForm = document.querySelector(".form-view")
var homeView = document.querySelector(".home-view")
var hideSavedBtn = document.querySelector(".save-cover-button")
var homeBtn = document.querySelector(".home-button")
var viewSavedBtn = document.querySelector(".view-saved-button")

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

function showCoverForm() {
// eventlistener clicking on button to make !hidden(class) with a conditional
// add and remove class - syntax classList.remove("hidden")
// take the queryselector viewForm
// use the prop classList, remove the class .hidden
homeView.classList.add("hidden")
viewForm.classList.remove("hidden")
// hide show new random cover button and save cover button
randCoverBtn.classList.add("hidden")
hideSavedBtn.classList.add("hidden")
homeBtn.classList.remove("hidden")
//show saved covers 

}

function showSavedCovers() {
// array needed to save the covers for parameter 
homeView.classList.add("hidden")
console.log("yoyyoyoyoyoyo")
// hide show new random cover and saved cover buttons
randCoverBtn.classList.add("hidden")
hideSavedBtn.classList.add("hidden")
// make home button visible when in savedcovers
homeBtn.classList.remove("hidden")
//
}

function showHomePage() {
  homeView.classList.remove("hidden")

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




