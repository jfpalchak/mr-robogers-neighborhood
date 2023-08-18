

// for test 2
function beepBoop(input) {
  
  let array = [];

  for (let i=0; i <= input; i++){
    array.push(i);
  }

  let beepArray = array.map(function(number) {
    if (number.toString().includes(1)) {
      return number = "Beep!";
    } else if (number === 2) {
      return number = "Boop!";
    } else if (number === 3) {
      return number = "Won't you be my neighbor?"
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