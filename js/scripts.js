

// for test 2
function beepBoop(input) {
  
  let array = [];

  for (let i=0; i <= input; i++){
    array.push(i);
  }

  let beepArray = array.map(function(number) {
    if (number === 1) {
      return number = 'Beep!';
    } else {
      return number;
    }
  });
  
  return beepArray;
}




// we'll get the basics down here and out of our mind for now
function handleEverything() {

}

window.addEventListener("load", handleEverything);