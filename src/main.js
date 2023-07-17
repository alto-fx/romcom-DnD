// Create variables targeting the relevant DOM elements here 👇
// cover, title, descriptor
var coverImg = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var coverTagline1 = document.querySelector(".tagline-1")
var coverTagline2 = document.querySelector(".tagline-2")
// views
var formView = document.querySelector(".form-view")
var homeView = document.querySelector(".home-view")
var savedView = document.querySelector(".saved-view")
var savedSection = document.querySelector(".saved-covers-section")
// buttons
var randCoverBtn = document.querySelector(".random-cover-button")
var makeOwnCoverBtn = document.querySelector(".make-new-button")
var saveCoverBtn = document.querySelector(".save-cover-button")
var homeBtn = document.querySelector(".home-button")
var viewSavedBtn = document.querySelector(".view-saved-button")
// user created
var userCreatedCover = document.querySelector(".user-cover")
var userCreatedTitle = document.querySelector(".user-title")
var userCreatedDescriptor1 = document.querySelector(".user-desc1")
var userCreatedDescriptor2 = document.querySelector(".user-desc2")
var makeMyBookBtn = document.querySelector(".create-new-book-button")

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", displayRandomCover)
randCoverBtn.addEventListener("click", displayRandomCover)
makeOwnCoverBtn.addEventListener("click", displayCoverForm)
homeBtn.addEventListener("click", displayHome)
viewSavedBtn.addEventListener("click",function(event) {
  event.preventDefault()
  displaySavedCovers()
  displaySavedSection()
})

makeMyBookBtn.addEventListener("click", function (event) {
 event.preventDefault()
  createCover()
  updateBookArrays()
})
saveCoverBtn.addEventListener("click", saveCurrentCover)

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

function showElement(elementToDisplay) {
  elementToDisplay.classList.remove("hidden")
}

function hideElement(elementToHide) {
  elementToHide.classList.add("hidden")
}

function displayCoverForm() {
  hideElement(homeView)
  showElement(formView)
  hideElement(randCoverBtn)
  hideElement(saveCoverBtn)
  showElement(homeBtn)
  hideElement(savedView)
}

function displaySavedCovers() {
  showElement(savedView)
  hideElement(homeView)
  hideElement(randCoverBtn)
  hideElement(saveCoverBtn)
  hideElement(formView)
  showElement(homeBtn)
}

function displayHome() {
  showElement(homeView)
  hideElement(formView)
  showElement(randCoverBtn)
  showElement(saveCoverBtn)
  showElement(homeBtn)
  showElement(makeMyBookBtn)
}

function updateBookArrays(event) {
  var inputCover = userCreatedCover.value
  covers.push(inputCover)
  var inputTitle = userCreatedTitle.value
  titles.push(inputTitle)
  var inputDescriptor1 = userCreatedDescriptor1.value
  var inputDescriptor2 = userCreatedDescriptor2.value
  descriptors.push(inputDescriptor1, inputDescriptor2)

  createCover(inputCover, inputTitle, inputDescriptor1, inputDescriptor2)
  displayCover(cover) 
  displayHome()
}

function displayCover() {
  coverImg.src = currentCover.coverImg
  coverTitle.innerHTML = currentCover.title
  coverTagline1.innerHTML = currentCover.tagline1
  coverTagline2.innerHTML = currentCover.tagline2
}

//When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array

function saveCurrentCover() {
var duplicate = false
  for (var i = 0; i < savedCovers.length; i++){
    if (savedCovers[i].id === currentCover.id) { 
        duplicate = true  
    }
  }
  if (duplicate === false) {
    savedCovers.push(currentCover)
  }
}

function displaySavedSection() {
  savedSection.innerHTML = ""
for (var i = 0; i < savedCovers.length; i++) {
  savedSection.innerHTML += 
  `<section class="mini-cover">
  <img class="cover-image" id= ${savedCovers[i].id} src="${savedCovers[i].coverImg}">
  <h2 class="cover-title">${savedCovers[i].title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
</section>`
}
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




