let speech = new SpeechSynthesisUtterance();

let voices = [];
let selectedVoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=> {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (selectedVoice.options[i] = new Option(voice.name, i)));
};

selectedVoice.addEventListener("change", ()=> {
    speech.voice = voices[selectedVoice.value];
});

document.querySelector("button").addEventListener("click", ()=> {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

