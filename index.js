
let guess_count = 0;
const random_number = Math.floor(Math.random() * 100 + 1);
console.log(random_number);
document.querySelector("#check_it").addEventListener("click", checkNumber);

function checkNumber() {
    guess_count++;
    // Input elementine tekrar tekrar daha rahat erişim sağlamak için
    let userInputElement = document.querySelector("#nr_game");
    document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
    if (userInputElement.value == random_number) {
        alert("You are the winner!");
    } else if (userInputElement.value > random_number) {
        document.querySelector("#answer").innerText = "Try a smaller number!"
    } else if (userInputElement.value < random_number) {
        document.querySelector("#answer").innerText = "Try a higher number!"
    } else if (isNaN(userInputElement.value)) {
        document.querySelector("#answer").innerText = "It's not a number!"
    }
}