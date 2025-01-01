const selections = document.querySelectorAll('.selections');
const winnerStatus = document.getElementById('winnerStatus');
const selectionPicks = ['paper','scissors','rock'];
let score =0;
selections.forEach((selected)=>{
    selected.addEventListener('click',()=>{
        const pick = selected.dataset.selectedvalue;
        if(selectionPicks.includes(pick)){
            let userPick = document.getElementById('userPick');
            userPick.innerHTML='';
            const extra = document.createElement('div');
            extra.className='extra';
            userPick.appendChild(extra)
            let housePickDiv = document.getElementById('housePick');
            userPick.appendChild(
                createElement(
                    'div',
                    {
                        className: `selections ${pick}`,
                        style:{
                            position:'relative',
                            top:'0',
                            left:'0'
                        }
                    },
                    [createElement(
                        'img',
                        {src:`assets/images/icon-${pick}.svg`},
                        []
                    )
                ]
               )
            )
           let housePick = houseMove();
            let winner = checkWinner(pick, housePick.move)
            console.log(winner)
            if(winner){
                if(winner === 'user'){
                    userPick.classList.add('winner');
                    score +=2;
                    document.querySelector('.scoreCount').textContent = score;
                    winnerStatus.textContent='You win';
                    housePickDiv.classList.remove('winner');
                }else if(winner === 'house'){
                    winnerStatus.textContent='House win';
                    housePickDiv.classList.add('winner');
                    userPick.classList.remove('winner')
                }else if(winner === 'tie'){
                    winnerStatus.textContent='it a tie';
                    housePickDiv.classList.remove('winner');
                    userPick.classList.remove('winner')
                }else{
                    housePickDiv.classList.remove('winner');
                    userPick.classList.remove('winner')
                }
            }
            console.log(selected.dataset.selectedvalue);
            document.querySelector('.gameContainer').classList.add('hide');
            document.querySelector('.playing').classList.remove('hide');
        }
        
    })
})
console.log('hi')
document.querySelector('.ruleClose').addEventListener('click',()=>{
    document.querySelector('.overlay').classList.add('hide')
})
function renderPlay(){

}
function checkWinner(userPick, housePick) {
    if (userPick === housePick) return 'tie';

    if (
        (userPick === 'paper' && housePick === 'rock') ||
        (userPick === 'rock' && housePick === 'scissors') ||
        (userPick === 'scissors' && housePick === 'paper')
    ) {
        return 'user';
    }

    return 'house';
}
function houseMove(){
    let index =Math.floor(Math.random()*3);
    let move = selectionPicks[index];
    let houseDiv = document.getElementById('housePick');
    houseDiv.innerHTML='';
    const extra = document.createElement('div');
    extra.className='extra';
    houseDiv.appendChild(extra)
    let values ={
        div:  houseDiv.appendChild(
            createElement(
                'div',
                {
                    className: `selections ${move}`,
                    style:{
                        position:'relative',
                        top:'0',
                        left:'0'
                    }
                },
                [createElement(
                    'img',
                    {src:`assets/images/icon-${move}.svg`},
                    []
                )
            ]
           )
        ),
        move:move
    }
    return values
   
}
function createElement(tag, options={},children=[]){
    const element = document.createElement(tag)
    Object.keys(options).forEach(key => {
        if(key === 'style'){
            Object.assign(element.style, options[key])
        }else{
            element[key]=options[key];
        }
    });
    children.forEach((child) =>element.appendChild(child));
    return element;
}
document.querySelector('.playAgain').addEventListener('click',()=>{
    document.querySelector('.gameContainer').classList.remove('hide');
    document.querySelector('.playing').classList.add('hide');
    document.querySelectorAll('.selections').forEach((element)=>{
        element.classList.remove('winner')
    });

})
document.getElementById('rule').addEventListener('click',()=>{
    document.querySelector('.overlay').classList.remove('hide')
})
