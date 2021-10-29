// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', init);

function init() {
  const errorBanner = document.getElementById('modal');
  errorBanner.classList.add('hidden');
}

const allGlyphSpans = document.getElementsByClassName('like-glyph');
for (const glyph of allGlyphSpans) {
    glyph.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  console.log("I see your click - now I'm going to try to query the server.");
  mimicServerCall()
  .then(() => successHandler(e))
  .catch((error) => errorHandler(error));
}

function errorHandler(error) {
  console.log("inside error handler");
  const errorBanner = document.getElementById('modal');
  errorBanner.innerText = error;
  errorBanner.classList.remove('hidden');
}

function successHandler(e) {
  const errorBanner = document.getElementById('modal');
  errorBanner.classList.add('hidden');
  if (e.target.innerText !== FULL_HEART) {
    e.target.innerText = FULL_HEART;
    e.target.classList.add('activated-heart');
  } else {
    e.target.innerText = EMPTY_HEART;
    e.target.classList.remove('activated-heart');
  }

}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
