let inputText = document.querySelector(".wordsContent");
let wordCount = document.querySelector(".wCount");
let characterCount = document.querySelector(".cCount");
let sentenceCount = document.querySelector(".sCount");
let paragraphCount = document.querySelector(".pCount");

inputText.addEventListener("input",()=>{
    characterCount.textContent = inputText.value.length;

    let textTrim = inputText.value.trim();

    wordCount.textContent = textTrim.split(/\s+/).filter((item) => item).length;

    sentenceCount.textContent = textTrim.split(".").filter((item) => item).length;

    paragraphCount.textContent = textTrim.split("\n\n").filter((item) => item).length;

});


document.getElementById('clearBtn').addEventListener('click', function() {
    let inputText = document.querySelector(".wordsContent");
    let wordCount = document.querySelector(".wCount");
    let characterCount = document.querySelector(".cCount");
    let sentenceCount = document.querySelector(".sCount");
    let paragraphCount = document.querySelector(".pCount");

    inputText.value = '';

    wordCount.textContent = 0;
    characterCount.textContent = 0;
    sentenceCount.textContent = 0;
    paragraphCount.textContent = 0;
});

