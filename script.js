const input = document.getElementById("translate");
const output = document.getElementById("translation");

const morseCodeMap = {
  " ": "/",
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
};
const reverseMorseCodeMap = {};
for (const key in morseCodeMap) {
  reverseMorseCodeMap[morseCodeMap[key]] = key;
}

const translateToMorse = (text) =>
  text
    .toUpperCase()
    .split("")
    .map((e) => ` ${morseCodeMap[e]} ` || "")
    .join("");
const translateToEnglish = (morse) =>
  morse
    .trim()
    .split(" ")
    .map((e) => `${reverseMorseCodeMap[e]}` || "")
    .join("")
    .toLowerCase();

input.addEventListener("input", (event) => {
  const input = event.target.value;
  if (input.includes(".") || input.includes("-")) {
    output.textContent = translateToEnglish(input);
  } else {
    output.textContent = translateToMorse(input);
  }
});