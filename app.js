const textDisplay = document.getElementById('text')
const phrases = ['Hello, nice too meet you!', 'My name is Ixxy.', 'I love to learn new things.']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {

        if (!isDeleting && j < phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }
        if (isDeleting && j == 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == phrases.length){
                i = 0
            }
        }
    }
    const spedUp = Math.random() * (60 -40) + 40
    const normalSpeed = Math.random() * (100 -90) + 90
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()