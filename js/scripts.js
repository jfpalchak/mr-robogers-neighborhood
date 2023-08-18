// *******************
// *  UTILITY LOGIC  *
// *******************

// itIncludes() takes a number and a digit as its parameters, respectively
// if the number includes the digit, return true, otherwise return false
function itIncludes(number, digit) {
  return number.toString().includes(digit);
}

// *******************
// * BUSINESS LOGIC  *
// *******************


// beepBoop() takes a single number as its parameter
// It creates an array, from 0 to the given number by increments of 1,
// and replaces any number containing 1 with 'Beep!',
// any number containing 2 with 'Boop!',
// and any number containing 3 with 'Won't you be my neighbor?'
// The rule for replacing 3 is more important than replacing 2, 
// and replacing 2 is more important than replacing 1.
// It then returns this newly created array.
function beepBoop(input) {
  const array = [];

  // if the user submits an empty input box, return the empty array
  if (input === ""){
    return array;
  }

  // otherwise, create the elements of our array
  for (let i=0; i <= input; i++){
    array.push(i);
  }

  // transform the newly created array according to our logic
  let beepArray = array.map(function(number) {
    if (itIncludes(number, 3)) {
      return number = "Won't you be my neighbor?";
    } else if (itIncludes(number, 2)) {
      return number = "Boop!";
    } else if (itIncludes(number, 1)) {
      return number = "Beep!";
    } else {
      return number;
    }
  });
  
  return beepArray;
}

// *******************
// *    UI LOGIC     *
// *******************

// removePreviousResults() check's if the DOM already contains the div element that shows the results,
// and if it does, it removes it from the DOM
function removePreviousResults() {
  const divResults = document.getElementById('beepBoop-results');
  if (divResults) {
    divResults.remove();
  }
}

// linkBackToTopIfBig() add's a link to the bottom of the results element,
// which brings the user back to the top of the page;
// however, it's only created if the results element is longer than the viewport height
function linkBackToTopIfBig() {
  const div = document.getElementById('beepBoop-results');
  if (div.offsetHeight > window.innerHeight) {
    const toTop = document.createElement('a');
    const subDiv = document.createElement('div');
    subDiv.setAttribute('id', 'to-top');
    div.append(subDiv);
    toTop.setAttribute('href', '#top');
    toTop.append('(Back to Top)');
    subDiv.append(toTop);
  }
}

// showResults() takes the new array as its parameter,
// then updates the DOM by making the resulting elements of the array visible to the user
function showResults(array) {
  removePreviousResults();

  // if the user doesn't enter a number, stop here and return null
  if (!array.length) {
    return null;
  }

  const div = document.createElement('div');
  div.setAttribute('id','beepBoop-results');
  div.setAttribute('class', 'container');
  document.body.append(div);

  const p = document.createElement('p');
  div.append(p);

  array.forEach(function(element, index) {
    if (index < array.length - 1) {
      p.append(element + ", ")
    } else {
      p.append(element)
    }
  })

  linkBackToTopIfBig();

}

// handleSubmit() creates an event handler for the form submission
function handleSubmit(e) {
  e.preventDefault();

  const userInput = document.getElementById('user-number').value;
  const boopArray = beepBoop(userInput);

  showResults(boopArray);
}

// handleForm() creates the form object variable, and calls on the event handler
// for when the form submit button is pressed
function handleEverything() {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
}

// load page resources before running all JS functions
window.addEventListener("load", handleEverything);