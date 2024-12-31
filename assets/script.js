const selection = document.querySelectorAll('.selections');
const currentPlayer = 'user';
selection.forEach((selected)=>{
    selected.addEventListener('click',()=>{
        console.log(selected.dataset.selectedvalue);
    })
})
console.log('hi')