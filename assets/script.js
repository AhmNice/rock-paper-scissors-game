const selections = document.querySelectorAll('.selections');
const currentPlayer = 'user';
const selectionPicks = ['paper','scissors','rock'];
selections.forEach((selected)=>{
    selected.addEventListener('click',()=>{
        const pick = selected.dataset.selectedvalue;
        if(selectionPicks.includes(pick)){
            console.log(selected.dataset.selectedvalue);
        }
        document.querySelector('.gameContainer').classList.add('hide');
        document.querySelector('.playing').classList.remove('hide');
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
function houseMover(){
   return Math.floor(Math.random() * 3);

}