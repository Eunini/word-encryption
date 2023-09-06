//updated the variable names
var border = document.getElementById("string-val");
var encode = document.getElementById("string");
var encryptBtn = document.querySelector("a");
var errorSpan = document.querySelector("span");

//updated this
const alphabets = [
  "* *", "** *", "*** *", "**** *", "***** *",
  "* **", "** **", "*** **", "**** **", "***** **",
  "* ***", "** ***", "*** ***", "**** ***", "***** ***",
  "* ****", "** ****", "*** ****", "**** ****", "***** ****",
  "* *****", "** ******", "*** ******", "**** *****", "***** *****",
  "-*"
];

//updated this
function encrypt() {
  var stringval = document.getElementById("string-val").value.toLowerCase();
  var encryptedText = "";

  for (let i = 0; i < stringval.length; i++) {
    if (stringval.includes(stringval[i])) {
      if (stringval[i] === "a") {
        encryptedText += alphabets[0];
      } else if (stringval[i] === "b") {
        encryptedText += alphabets[1];
      } else if (stringval[i] === "c") {
        encryptedText += alphabets[2];
      } else if (stringval[i] === "d") {
        encryptedText += alphabets[3];
      } else if (stringval[i] === "e") {
        encryptedText += alphabets[4];
      } else if (stringval[i] === "f") {
        encryptedText += alphabets[5];
      } else if (stringval[i] === "g") {
        encryptedText += alphabets[6];
      } else if (stringval[i] === "h") {
        encryptedText += alphabets[7];
      } else if (stringval[i] === "i") {
        encryptedText += alphabets[8];
      } else if (stringval[i] === "j") {
        encryptedText += alphabets[9];
      } else if (stringval[i] === "k") {
        encryptedText += alphabets[10];
      } else if (stringval[i] === "l") {
        encryptedText += alphabets[11];
      } else if (stringval[i] === "m") {
        encryptedText += alphabets[12];
      } else if (stringval[i] === "n") {
        encryptedText += alphabets[13];
      } else if (stringval[i] === "o") {
        encryptedText += alphabets[14];
      } else if (stringval[i] === "p") {
        encryptedText += alphabets[15];
      } else if (stringval[i] === "q") {
        encryptedText += alphabets[16];
      } else if (stringval[i] === "r") {
        encryptedText += alphabets[17];
      } else if (stringval[i] === "s") {
        encryptedText += alphabets[18];
      } else if (stringval[i] === "t") {
        encryptedText += alphabets[19];
      } else if (stringval[i] === "u") {
        encryptedText += alphabets[20];
      } else if (stringval[i] === "v") {
        encryptedText += alphabets[21];
      } else if (stringval[i] === "w") {
        encryptedText += alphabets[22];
      } else if (stringval[i] === "x") {
        encryptedText += alphabets[23];
      } else if (stringval[i] === "y") {
        encryptedText += alphabets[24];
      } else if (stringval[i] === "z") {
        encryptedText += alphabets[25];
      } else {
        encryptedText += stringval[i];
      }
    } else {
      encryptedText += stringval[i];
    }

    // Check if it's not the last letter
    if (i !== stringval.length - 1) {
      encryptedText += " ";
    }
  }

  encode.setAttribute("value", encryptedText);
}

//updated this
encryptBtn.addEventListener("click", (event) => {
  event.preventDefault();
  encrypt();
});



/* This is an updated version of the encrypt function(in case the one above seems to repetitive) */


// function encrypt() {
//   const inputText = document.getElementById("string-val").value.toLowerCase();
//   let encryptedText = '';

//   for (let i = 0; i < inputText.length; i++) {
//     const charCode = inputText.charCodeAt(i);
//     if (charCode >= 97 && charCode <= 122) { // Check if character is lowercase letter
//       const charIndex = charCode - 97;
//       encryptedText += alphabets[charIndex];
//     } else {
//       encryptedText += inputText[i]; // If not a letter, keep the character as it is
//     }
//    if (i !== stringval.length - 1) {
//      encryptedText += " ";
//    }
//   }

//   encode.setAttribute("value", encryptedText);
// }
