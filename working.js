let user_score = 0;
let comp_score = 0;
const user_score_span = document.getElementById('user-score');
const comp_score_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result = document.querySelector('.result > p');
const rock_div = document.getElementById("r");
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function textChange(on){
    document.querySelector('.'+on).style.cssText = 'opacity: 1;';
}

function textDefault(on){
    document.querySelector('.'+on).style.cssText = 'opacity: 0;';
}

function comp_ch() {
    const choice = ['r','p','s'];
    random_num = Math.floor(Math.random()*3);
    return choice[random_num];
}

function convert(cont) {
    if(cont == 'r') return 'Rock';
    if(cont == 'p') return 'Paper';
    else return 'Scissor';    
}

function wins(user , comp) {
    user_score++;
    user_score_span.innerText = user_score;
    result.innerHTML = `${convert(user)} beats ${convert(comp)}. You win! `;
    const id_ref = document.getElementById(user);
    id_ref.classList.add('green-glow');
    setTimeout(function() { id_ref.classList.remove('green-glow') } , 1000);
}

function lose(user , comp) {
    comp_score++;
    comp_score_span.innerText = comp_score;
    result.innerHTML = `${convert(comp)} beats ${convert(user)}. You lose `;
    const id_ref = document.getElementById(user);
    id_ref.classList.add('red-glow');
    setTimeout(function() { id_ref.classList.remove('red-glow') } , 1000);
}

function draw(user , comp) {
    result.innerHTML = `${convert(user)} to ${convert(comp)}. It's a draw `;
    const id_ref = document.getElementById(user);
    id_ref.classList.add('gray-glow');
    setTimeout(function() { id_ref.classList.remove('gray-glow') } , 1000);
}

function game(ch) {
    const compCh = comp_ch();
    switch (ch+compCh) {
        case "rs":
        case "pr":
        case "sp":
            wins(ch , compCh);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(ch , compCh);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(ch , compCh);
            break;
    }
}

function main(){
rock_div.addEventListener('click', function() {
    game('r');
})

paper_div.addEventListener('click', function() {
    game('p');    
})

scissor_div.addEventListener('click', function() {
    game('s');  
})
}

main();