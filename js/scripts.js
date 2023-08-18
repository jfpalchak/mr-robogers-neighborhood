// UTILITY LOGIC
function itIncludes(number, digit) {

}

// BUSINESS LOGIC

// beepBoop() takes a single number as its parameter
// It creates an array, from 0 to the given number by increments of 1,
// and replaces any number containing 1 with 'Beep!',
// any number containing 2 with 'Boop!',
// and any number containing 3 with 'Won't you be my neighbor?'
// The rule for replacing 3 is more important than replacing 2, 
// and replacing 2 is more important than replacing 1.
// It then returns this newly created array.
function beepBoop(input) {
  
  let array = [];

  for (let i=0; i <= input; i++){
    array.push(i);
  }

  let beepArray = array.map(function(number) {
    if (number.toString().includes(3)) {
      return number = "Won't you be my neighbor?";
    } else if (number.toString().includes(2)) {
      return number = "Boop!";
    } else if (number.toString().includes(1)) {
      return number = "Beep!";
    } else {
      return number;
    }
  });
  
  return beepArray;
}



// UI LOGIC

// removePreviousResults() check's if the DOM already contains the div element that shows the results,
// and if it does, it removes it from the DOM
function removePreviousResults() {
  const divResults = document.getElementById('beepBoop-results');
  if (divResults) {
    divResults.remove();
  }
}

// showResults() takes the new array as its parameter,
// then updates the DOM by making the resulting elements of the array visible to the user
function showResults(array) {
  removePreviousResults(); // first, check for and remove previous results

  const div = document.createElement('div');
  div.setAttribute('id','beepBoop-results');
  div.setAttribute('class', 'container');
  document.body.append(div);

  const ul = document.createElement('ul');
  div.append(ul);

  array.forEach(function(element, index) {
    let li = document.createElement('li');
    li.append(element);
    ul.append(li);
  })

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