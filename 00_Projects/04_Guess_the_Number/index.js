
let number = null

let generateNumber = () => {

    number = Math.random()*10;
    number = Math.floor(number)+1;

    alert("Number generated! Start guessing it 🔥")
}

let show = () => {

    if(number !== null)
        document.getElementsByClassName('ans')[0].innerHTML = `Number is ${number}`
    
    else    
        document.getElementsByClassName('ans')[0].innerHTML = "Generate the number first"
    
}

let check = () => {
    
    let guessedNumber = document.getElementById('input').value;
    generateNumber = Number(guessedNumber)

    if(number !== null)
    {
        if(guessedNumber > number)
            document.getElementsByClassName('ans')[0].innerHTML = "Guessed number is greater than the actual number"

        else if(guessedNumber < number)
            document.getElementsByClassName('ans')[0].innerHTML = "Guessed number is smaller than the actual number"
        
        else
            document.getElementsByClassName('ans')[0].innerHTML = `WIN 🏆 Number was ${number}`

            
    }
    
    else
        document.getElementsByClassName('ans')[0].innerHTML = "Generate the number first"
}