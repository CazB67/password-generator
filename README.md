# Password-generator
An application that uses Javascript to generate a random password based on user-selected criteria

## Description
This is an assignment to show learning of javascript and its functions. The task was to create an application that randomly generates a strong password that meets certain criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. It  features a clean and polished user interface and is media responsive.
The password criteria is:
* The user selects a password length of between 8 and 128 characters
* The user selects what character types to include out of upper case letters, lower case letters, numbers and special characters.
* The user must select at least one character type
* The password needs to be written to the page
* The password needs to be randomly generated

## Installation
The pages `index.html`, `script.js` and `style.css` were developed and added to in VSCode. First the generatePassword function was created to create a password that features a random number from assigned charcode values. This guide was used to obtain values -  https://www.w3schools.com/charsets/ref_html_ascii.asp. A while loop was used followed by a random number call to create a string from the random ASCII values. Finally the writePassword function was used and conditions for the password paramaters developed. I have tried clearing the password string and "incorrect input" strings on button click for better usability but haven't worked out how to do it yet.


## Usage
This has been deployed to the URLs 

* The URL of the deployed application is https://cazb67.github.io/password-generator/

* The URL of the GitHub repository is https://github.com/CazB67/password-generator


## Credits
* Team at UWA Coding Bootcamp

## License
MIT License

Copyright (c) [2020] [Caroline Bates]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
