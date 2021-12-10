// variables
const qus = document.querySelectorAll('.qus')
const ans = document.querySelector('.a')
const arrows = document.querySelectorAll('.arrow')

for (const arrow of arrows) {
    arrow.addEventListener('click',function(){
        arrow.previousElementSibling.classList.toggle('hidden')
    })
}