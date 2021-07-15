let button = document.getElementById("countButton")
let resetButton = document.getElementById("resetButton")
const wordiv = document.getElementById("wordsDiv")
const letters = document.getElementById("lettersDiv")
let verifyContent = document.getElementById("textInput")

let currentLetter
let currentWord
let word

   verifyContent.addEventListener("input", function(){
   button.disabled = this.value.length >= 1 ? false : true
})

button.addEventListener("click", function(){
   let content = document.getElementById("textInput").value
    content = content.toLowerCase()
    content = content.replace(/[^a-z'\s]+/g, "")
    const letterCounts = {}
    const wordCounts = {}
    word = content.split(/\s/)


    for (let i = 0; i < content.length; i++) {
        let currentLetter = content[i]
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1
         } else { 
            letterCounts[currentLetter]++
         }
    }

     for (let letter in letterCounts) { 
        const span = document.createElement("span")
        const textContent = `"${letter}": ${letterCounts[letter]}, `
        const endLetter = `"${letter}": ${letterCounts[letter]}.`
        if (letter === Object.keys(letterCounts)[Object.keys(letterCounts).length-1]) {
           span.innerText = endLetter
           letters.appendChild(span)
        } else {
         span.innerText = textContent
         letters.appendChild(span)
        }
     }

     for (let i = 0; i < word.length; i++) {
        let currentWord = word[i]
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1
         } else { 
            wordCounts[currentWord]++
         }
         console.log(wordCounts)
    }

    for (let words in wordCounts) {
        const span = document.createElement("span")
        const textContent = `"${words}": ${wordCounts[words]}, `
        const endWord = `"${words}": ${wordCounts[words]}.`
        if (words === Object.keys(wordCounts)[Object.keys(wordCounts).length-1]) {
           span.innerText = endWord
           wordiv.appendChild(span)
        } else {
         span.innerText = textContent
         wordiv.appendChild(span)
        }
        
    }
})

resetButton.addEventListener("click", function(){
   wordiv.innerText = ""
   letters.innerText = ""
})