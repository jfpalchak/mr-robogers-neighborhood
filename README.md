# _Mr. Roboger's Neighborhood_

#### By _**Joey Palchak**_

#### A web application that transforms user input for display, utilizing Test-Driven Development and HTML, CSS, and JavaScript.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## Description

This is a web application that asks the user for a single number of any size, and once submitted, returns a list of values starting from 0 up to the user's inputted number, by increments of 1. However, the application make's the following substitutions within the returned list:

* For numbers that contain a 1, all digits are replaced with "Beep!"
* For numbers that contain a 2, all digits are replaced with "Boop!"
    * This substitution takes precedence over the presence of a number containing a 1.
* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
    * This substitution takes precedence over the presence of a number containing a 1, or a 2.

The list is then presented for the user below the form. The user may continue submitting new numbers, presenting the user with new results with each submission. 

After the initial submission, a "Reverse it!" button will display beside the original "Submit" button. If the user clicks this new button, the original results will be reversed, starting from the highest value to the lowest. The user may use a new input value to "Submit" in ascending order, or again "Reverse it!" and display the new results in descending order.

Optionally, the user may also choose to enter their name into the provided input on the form. If a name is submitted along with a number, their name will show with each iteration of "Won't you be my neighbor, <userName>?". Otherwise, if no name is given, the substitution of the digit '3' will remain as originally defined above.

If the user submits a number large enough to print results that are longer than the user's view window allows - and a scroll bar appears - a link will be created at the bottom of the page; should the user scroll to the bottom, this link will bring the user back to the top of the webpage to use the submission form again.

However, should the user submit without having entered a number - regardless of whether a name has been submitted - the results will be removed and the page will reset to it's default state, including the removal of the "Reverse it!" button.

## Setup/Installation Requirements

1. Copy the **[URL](https://github.com/jfpalchak/mr-robogers-neighborhood.git)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you want the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:
```bash
git clone https://github.com/jfpalchak/mr-robogers-neighborhood.git
```
5. Navigate to the top level of the newly cloned directory.
6. Open index.html in your browser to view and navigate the webpage.

##### _Alternatively:_

1. Go to the website directly via **[GitHub Pages](https://jfpalchak.github.io/mr-robogers-neighborhood/)**.

## Known Bugs

* When viewport width is below 560px, the 'Reverse it!' button floats awkwardly below the number input box.

## Tests

#### **Description:** beepBoop()
```javascript

Test 1: "It should return an array of numbers from 0 to the user's inputted number."
Code: const input = 0;
      beepBoop(input);
Expected Output: [0]

Test 2: "It should replace the number '1' with 'Beep!' when it appears in the array."
Code: const input = 1;
      beepBoop(input);
Expected Output: [0, "Beep!"]

Test 3: "It should replace the number '2' with 'Boop!' when it appears in the array."
Code: const input = 2;
      beepBoop(input);
Expected Output: [0, "Beep!", "Boop!"]

Test 4: "It should replace the number '3' with a 'Won't you be my neighbor?' when it appears in the array."
Code: const input = 3;
      beepBoop(input);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

Test 5: "If the number includes the digit '1', the entire number is replaced with 'Beep!'."
Code: const input = 11;
      beepBoop(input);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]

Test 6: "If the number includes the digit '2', the entire number is replaced with 'Boop!' - even if the number also includes the digit '1'."
Code: const input = 12;
      beepBoop(input);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]

Test 7: "If the number includes the digit '3', the entire number is replaced with 'Won't you be my neighbor?' - even if the number also includes the digit '1', or digit '2'."
Code: const input = 13;
      beepBoop(input);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

Test 8: "It should return an empty array if the user submits without inputting any number."
Code: const input = "";
      beepBoop(input);
Expected Output: []

Test 9: "If the user submits their name, but doesn't submit a number, it should return an empty array."
Code: const input = "";
      const name = "Joe";
      beepBoop(input, name);
Expected Output: []

Test 10: "If the user submits their name, it should be added to the front of the array."
Code: const input = 1;
      const name = "Joe";
      beepBoop(input, name);
Expected Output: ["Joe", 0, "Beep!"]

Test 11: "If the user submits their name, it should be added to the string 'Won't you be my neighbor?' when the digit '3' appears."
Code: const input = 3;
      const name = "Joe";
      beepBoop(input, name);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor, Joe?"]

Test 12: "If the user doesn't submit their name, but does submit a number, any occurrence of the digit '3' is still replaced with 'Wont't you be my neighbor?'."
Code: const input = 3;
      const name = "";
      beepBoop(input, name);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

```

#### **Description:** itIncludes()
```javascript

Test 1: "It should return true if the number is the same as the digit."
Code: const number = 1;
      const digit = 1;
      itIncludes(number, digit);
Expected Output: true

Test 2: "It should return false if the number is not the same as the digit."
Code: const number = 0;
      const digit = 1;
      itIncludes(number, digit);
Expected Output: false

Test 3: "It should return true if the number includes the digit."
Code: const number = 11;
      const digit = 1;
      itIncludes(number, digit);
Expected Output: true

Test 4: "It should return false if the number does not include the digit."
Code: const number = 55;
      const digit = 1;
      itIncludes(number, digit);
Expected Output: false

```

## License

MIT License

Copyright (c) 8/18/2023 Joey Palchak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.