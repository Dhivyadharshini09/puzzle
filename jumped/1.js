let originalWord;
let c;

function wordz(i) {


  originalWord = Oword[i];
  c = cword[i];


  let currentWord = c.split('');

  window.dropallow = function (ev) {
    ev.preventDefault();
  };

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  window.drop = function (ev) {
    ev.preventDefault();
    const sourceId = ev.dataTransfer.getData("text");
    const sourceChar = document.getElementById(sourceId).textContent;
    const targetChar = ev.target.textContent;
    const sourceIndex = currentWord.indexOf(sourceChar);
    const targetIndex = currentWord.indexOf(targetChar);

    currentWord[sourceIndex] = targetChar;
    currentWord[targetIndex] = sourceChar;

    displayWord();
  };
  function displayWord() {
    const wordContainer = document.getElementById("wordContainer");
    wordContainer.innerHTML = "";

    currentWord.forEach((char, index) => {
      const charElement = document.createElement("span");
      charElement.textContent = char;
      charElement.id = `char_${index}`;
      charElement.draggable = true;
      charElement.addEventListener("dragstart", drag);
      wordContainer.appendChild(charElement);
    });

    if (currentWord.join("") === originalWord) {
      document.getElementById("result").textContent = "CORRECT";
    } else {
      document.getElementById("result").textContent = "WRONG";
    }
  }

  window.onload = displayWord();
  document.getElementById("result").innerHTML;

}