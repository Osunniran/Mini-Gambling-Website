// const input1 = parseFloat(document.getElementById('input1').value)
// const input2 = parseFloat(document.getElementById('input2').value)
// // console.log(typeof(input1));
// let cn1 = Math.floor(Math.random)*100
// let cn2 = Math.floor(Math.random)*100

// function gnrBtn() {
//     computerNumber1.innerHTML = (Math.floor(Math.random() * 100))
//     computerNumber2.innerHTML = (Math.floor(Math.random() * 100))
// }

// function resultBtn() {
//     if (input1 === computerNumber1 && input2 === computerNumber2) {
//         document.getElementById('final').innerHTML = 'You have won'
//     } else {
//         document.getElementById('final').innerHTML = 'You lose'
//     }
// }




// play.addEventListener('click', () => {
//     const num1 = parseInt(num1Input.value);
//     const num2 = parseInt(num2Input.value);

//     // if(isNaN(num1) || isNaN(num2)) {
//     //     result.innerHTML = 'Please enter valid numbers';
//     //     return;
//     // }

//     const randomNum1 = Math.floor(Math.random()*100);
//     const randomNum2 = Math.floor(Math.random()*100);

//     if (num1 === randomNum1 && num2 === randomNum2) {
//         result.innerHTML = 'Congratulations! You won!';
//         result.style.color = 'green'
//     } else {
//         result.innerHTML = 'Sorry, you lose. Try again!';
//         result.style.color = 'red'
//     }

//     // console.log(Random numbers: $ {randomNum1}, ${randomNum2});
// });

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const result = document.getElementById('result');


function playBtn() {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    let result = document.querySelector('.result');

    if(isNaN(num1) || isNaN(num2)) {
        result.innerHTML = 'Please enter valid numbers';
        return;
    }


    const randomNum1 = Math.floor(Math.random()*100);
    const randomNum2 = Math.floor(Math.random()*100);

    let randomNumber1 = document.getElementById('randomNumber1');
    let randomNumber2 = document.getElementById('randomNumber2');

    randomNumber1.innerHTML = randomNum1
    randomNumber2.innerHTML = randomNum2

    if (num1 === randomNum1 && num2 === randomNum2) {
        result.innerHTML = 'Congratulations! You won!';
        result.style.color = 'green'
    } else {
        result.innerHTML = 'Sorry, you lose. Try again!';
        result.style.color = 'red'
    }
}

