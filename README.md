# _{Application Name}_

#### By _**Joey Palchak**_

#### _{Brief description of application}_

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

1. Copy the **[URL](#link)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you want the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:
```bash
git clone REPO URL
```
5. Navigate to the top level of the newly cloned directory.
6. Open index.html in your browser to view and navigate the webpage.

##### _Alternatively:_

1. Go to the website directly via **[GitHub Pages](#link)**.

## Known Bugs

* _Any known issues_
* _should go here_

## Tests

#### **Description:** beepBoop()
```javascript

Test 1: "It should return an array of numbers from 0 to the user's inputted number."
Code: const input = 0;
      beepBoop(input);
Expected Ouput: [0]

Test 2: "It should replace the number '1' with 'Beep!'."
Code: const input = 1;
      beepBoop(input);
Expected Output: [0, 'Beep!']

Test 3: "It should replace the number '2' with 'Boop!'."
Code: const input = 2;
      beepBoop(input);
Expected Output: [0, 'Beep!', 'Boop!']

Test 4: "It should replace the number '3' with a 'Won't you be my neighbor?'."
Code: const input = 3;
      beepBoop(input);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

Test 5: "If the number is greater than 9 and includes the digit 1, the entire number is replaced with 'Beep!'."
Code: const input = 11;
      beepBoop(input);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]

Test 6: "If the number is greater than 9 and includes the digit 2, the entire number is replaced with 'Boop!'."
Code: const input = 12;
      beepBoop(input);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]


```

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) 8/18/2023 Joey Palchak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.