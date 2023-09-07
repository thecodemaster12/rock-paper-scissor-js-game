const buttons = document.querySelectorAll('.userBtn')
const computer = document.getElementById('computerChoise');
const user = document.getElementById('userChoise');
const comScore = document.getElementById('comScore');
const urScore = document.getElementById('urScore');
let computerScore = 0;
let userScore =0;



// btn.forEach(bt => {
//     bt.addEventListener('click', (e)=>{
//         const vael = e.target.innerHTML
//         console.log(vael);
//     })
// })

function computerChose() {
    const computerOptions = ['Rock', 'Paper', 'Scissor']
    const randomNum = Math.floor(Math.random() * 3);
    return computerOptions[randomNum]
}

buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        let userDesition = e.target.innerHTML
        // console.log(userClick);
        computer.innerHTML = ''
        user.innerHTML = ''
        let el = document.createElement('i')
        let el2 = document.createElement('i')
        if (userDesition === "Rock") {
            el.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-shake')
            user.appendChild(el)
        }
        else if(userDesition === "Paper"){
            el.classList.add('fa-regular', 'fa-hand', 'fa-shake')
            user.appendChild(el)
        }else if(userDesition === "Scissor") {
            el.classList.add('fa-regular', 'fa-hand-scissors', 'fa-shake')
            user.appendChild(el)
        }

        let computerDesition = computerChose()
        console.log(computerDesition);

        if (computerDesition === 'Rock' && userDesition === 'Rock') {
            el2.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-shake','yellow')
            el.classList.add('yellow')
            computer.appendChild(el2)
        }
        else if (computerDesition === 'Rock' && userDesition === 'Paper'){
            el2.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-shake', 'red')
            el.classList.add('green')
            computer.appendChild(el2)
            computerScore--
            userScore++
        }
        else if (computerDesition === 'Rock' && userDesition === 'Scissor'){
            el2.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-shake', 'green')
            el.classList.add('red')
            computer.appendChild(el2)
            computerScore++
            userScore--
        }
        else if (computerDesition === 'Paper' && userDesition === 'Paper'){
            el2.classList.add('fa-regular', 'fa-hand', 'fa-shake', 'yellow')
            el.classList.add('yellow')
            computer.appendChild(el2)
        }
        else if (computerDesition === 'Paper' && userDesition === 'Rock'){
            el2.classList.add('fa-regular', 'fa-hand', 'fa-shake', 'green')
            el.classList.add('red')
            computer.appendChild(el2)
            computerScore++
            userScore--
        }
        else if (computerDesition === 'Paper' && userDesition === 'Scissor'){
            el2.classList.add('fa-regular', 'fa-hand', 'fa-shake', 'red')
            el.classList.add('green')
            computer.appendChild(el2)
            computerScore--
            userScore++
        }
        else if (computerDesition === 'Scissor' && userDesition === 'Scissor'){
            el2.classList.add('fa-regular', 'fa-hand-scissors', 'fa-shake', 'yellow')
            el.classList.add('yellow')
            computer.appendChild(el2)
        }
        else if (computerDesition === 'Scissor' && userDesition === 'Rock'){
            el2.classList.add('fa-regular', 'fa-hand-scissors', 'fa-shake', 'red')
            el.classList.add('green')
            computer.appendChild(el2)
            computerScore--
            userScore++
        }
        else if (computerDesition === 'Scissor' && userDesition === 'Paper'){
            el2.classList.add('fa-regular', 'fa-hand-scissors', 'fa-shake', 'green')
            el.classList.add('red')
            computer.appendChild(el2)
            computerScore++
            userScore--
        }

        comScore.innerHTML = `Computer Score: ${computerScore}`
        urScore.innerHTML = `User Score: ${userScore}`

        // let el = document.createElement('i')
        // let el2 = document.createElement('i')
        // el.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-shake')
        // el2.classList.add('fa-regular', 'fa-hand', 'fa-shake')
        // user.appendChild(el2)
        // computer.appendChild(el)
    })
})