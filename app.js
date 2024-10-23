const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#reset');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const winnerScoreSelect = document.querySelector('#playTo')

let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;


p1btn.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1score += 1;

        if (p1score === winningScore) {
            isGameOver = true;
            p1.classList.add('has-text-success');
            p2.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1.textContent = p1score;
    }
})


p2btn.addEventListener('click', function (e) {
    if (!isGameOver) {
        p2score += 1;

        if (p2score === winningScore) {
            isGameOver = true;
            p2.classList.add('has-text-success');
            p1.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2.textContent = p2score;
    }
})

resetbtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('has-text-success', 'has-text-danger');
    p2.classList.remove('has-text-success', 'has-text-danger');
    p1btn.disabled = false;
    p2btn.disabled = false;

}


winnerScoreSelect.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    reset();
})