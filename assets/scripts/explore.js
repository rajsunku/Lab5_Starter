// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO 
  console.log("hi");
  const voices = speechSynthesis.getVoices();
  console.log(voices);
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    console.log("hi");
    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice").appendChild(option);
  }
}