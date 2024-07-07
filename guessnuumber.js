let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessfeild')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const loworhi = document.querySelector('.loworhi')
const startover = document.querySelector('.resultparas')

const p = document.createElement('p')

let preGuess = []
let numguesses = 1

let playgame = true

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess = parseInt(userinput.value)
       console.log(guess);
       validateGuess(guess)
    })
}
function validateGuess(guess) {
    //validation of guesses
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess < 1){
        alert('please enter a number more than 1')
    }
    else if(guess > 100){
        alert('please enter a number less than 100')
    }
    else
    {
        preGuess.push(guess)
        if (numguesses === 11) {
            displayGuess(guess)
            displaymessage(`game over Random Number was ${randomNumber}`)
            endgame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displaymessage('you guested right');
        endgame()
    }
    else if(guess < randomNumber){
        displaymessage('your number is Too low');
    }
    else if(guess > randomNumber){
        displaymessage('your number is Too high');
    }
}

function displayGuess(guess){
    userinput.value = ''
    guessslot.innerHTML += `${guess},`;
    numguesses++
    remaining.innerHTML = `${11-numguesses}`;
}

function displaymessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
    userinput.value = ''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newgame">Sart new Game</h2>'
    startover.appendChild(p)
    playgame = false;
    newgame()
}

function newgame(){
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        preGuess= []
        numguesses = 1
        guessslot.innerHTML = ''
        remaining.innerHTML = `${11-numguesses}`;
        userinput.removeAttribute('disabled')
        startover.removeChild(p)
        displaymessage(" ");
        playgame = true 
    })
}

