let btn = document.querySelector("#btn")
btn.onclick = function(){
    alert('Нажатие')
}

let btn2 = document.querySelector("#btn2")
btn2.onclick = function(){
    btn2.textContent = 'Нажал'
}
function Yep(){
    btn2.style.backgroundColor = 'red'
}
btn2.addEventListener('mouseover', Yep)




let counter = 0
let timer = document.querySelector('#timer')
timer.onclick = function btnClick(){
    counter++    
    timer.textContent = counter
}

  
    