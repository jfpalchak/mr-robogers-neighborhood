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
  let array = [];

  // if the user submits an empty input box, 
  // return the empty array
  if (input === ""){
    return array;
  }

  // otherwise, create the elements of our array
  for (let i=0; i <= input; i++){
    array.push(i);
  }

  // transform the newly created array
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

// showResults() takes the new array as its parameter,
// then updates the DOM by making the resulting elements of the array visible to the user
function showResults(array) {
  // first, check for and remove previous results
  removePreviousResults();

  // if the user doesn't enter a number, and the array has no length, 
  // stop here and return null, otherwise continue on
  if (!array.length) {
    return null;
  }

  const div = document.createElement('div');
  div.setAttribute('id','beepBoop-results');
  div.setAttribute('class', 'container');
  const body = document.body.append(div);

  //const ul = document.createElement('ul'); // LIST
  //div.append(ul);
  const p = document.createElement('p'); // PARAGRAPH
  div.append(p);

  array.forEach(function(element, index) {
    //let li = document.createElement('li');
    //li.append(element);
    //ul.append(li);
    if (index < array.length - 1) {
      p.append(element + ", ")
    } else {
      p.append(element)
    }
  })

  // if the printed results are longer than the viewport height
  if (div.offsetHeight > window.innerHeight) {
    const button = document.createElement('button');
    const div2 = document.createElement('div');
    div2.setAttribute('id', 'scroll-button');
    div.append(div2);
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-primary');
    button.append('Back to Top');
    div2.append(button);
    scrollTo(0, document.body.scrollHeight);
  }
}

// handleSubmit() creates an event handler for the form submission
function handleSubmit(e) {
  e.preventDefault();

  const userInput = document.getElementById('user-number').value;
  const boopArray = beepBoop(userInput);

  // ********************************
  // * DEBUGGING: WHAT'S THE ARRAY? *
  // ********************************
  console.log(boopArray);

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