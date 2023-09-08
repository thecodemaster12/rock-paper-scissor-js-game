const buttons = document.querySelectorAll('.userBtn')
const computer = document.getElementById('computerChoise');
const user = document.getElementById('userChoise');
const result = document.getElementById('result');

function computerChose() {
    const computerOptions = ['Rock', 'Paper', 'Scissor']
    const randomNum = Math.floor(Math.random() * 3);
    return computerOptions[randomNum]
}

buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        let userDesition = e.target.innerHTML
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
            result.innerHTML = 'Its a Draw..!🙂'
        }
        else if (computerDesition === 'Rock' && userDesition === 'Paper'){
            el2.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-shake', 'red')
            el.classList.add('green')
            computer.appendChild(el2)
            result.innerHTML = 'You Win..!🥳'
        }
        else if (computerDesition === 'Rock' && userDesition === 'Scissor'){
            el2.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-shake', 'green')
            el.classList.add('red')
            computer.appendChild(el2)
            result.innerHTML = 'You lose..!🥺'
        }
        else if (computerDesition === 'Paper' && userDesition === 'Paper'){
            el2.classList.add('fa-regular', 'fa-hand', 'fa-shake', 'yellow')
            el.classList.add('yellow')
            computer.appendChild(el2)
            result.innerHTML = 'Its a Draw..!🙂'
        }
        else if (computerDesition === 'Paper' && userDesition === 'Rock'){
            el2.classList.add('fa-regular', 'fa-hand', 'fa-shake', 'green')
            el.classList.add('red')
            computer.appendChild(el2)
            result.innerHTML = 'You lose..!🥺'
        }
        else if (computerDesition === 'Paper' && userDesition === 'Scissor'){
            el2.classList.add('fa-regular', 'fa-hand', 'fa-shake', 'red')
            el.classList.add('green')
            computer.appendChild(el2)
            result.innerHTML = 'You Win..!🥳'
        }
        else if (computerDesition === 'Scissor' && userDesition === 'Scissor'){
            el2.classList.add('fa-regular', 'fa-hand-scissors', 'fa-shake', 'yellow')
            el.classList.add('yellow')
            computer.appendChild(el2)
            result.innerHTML = 'Its a Draw..!🙂'
        }
        else if (computerDesition === 'Scissor' && userDesition === 'Rock'){
            el2.classList.add('fa-regular', 'fa-hand-scissors', 'fa-shake', 'red')
            el.classList.add('green')
            computer.appendChild(el2)
            result.innerHTML = 'You Win..!🥳'
        }
        else if (computerDesition === 'Scissor' && userDesition === 'Paper'){
            el2.classList.add('fa-regular', 'fa-hand-scissors', 'fa-shake', 'green')
            el.classList.add('red')
            computer.appendChild(el2)
            result.innerHTML = 'You lose..!🥺'
        }

        // let el = document.createElement('i')
        // let el2 = document.createElement('i')
        // el.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-shake')
        // el2.classList.add('fa-regular', 'fa-hand', 'fa-shake')
        // user.appendChild(el2)
        // computer.appendChild(el)
    })
})