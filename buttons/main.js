
// textSpan 
let btn = document.querySelector('.btn-s')
let textSpan = document.createElement('span');
textSpan.textContent = btn.textContent;
btn.textContent = '';
textSpan.className = 'btn-01-text';
btn.appendChild(textSpan);

// iconSpan
let iconSpan = document.createElement('span');
// btn.




// btn01 
let btn01 = document.querySelectorAll('.btn--01');
    btn01.forEach(btn_01 => {
    btn_01.addEventListener('click', () => {
    btn_01.classList.toggle('btn-01');
}) 
})
