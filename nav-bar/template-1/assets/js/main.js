    

let body = document.querySelector('body')
let navHeader = document.getElementById('nav8-header');
let navToggler = navHeader.querySelector('.nb-toggler');
let smNav = navHeader.querySelector('.nav-mobile-canvas');
let open_sub = document.querySelector('.nb-subnav-mob')
let mob_sub = document.getElementById("sm-sub")
let open_mega = document.querySelector('.nb-meganav-mob')
let mob_mega = document.getElementById("sm-mega")
let open_lists = document.querySelectorAll('.nbmeg-list-mob')
let mob_list = document.getElementById("sm-list")


mob_sub.addEventListener('click', () => {
    open_sub.classList.toggle ('nav-opened')
})

mob_mega.addEventListener('click', () => {
    open_mega.classList.toggle ('nav-opened')
})


open_lists.forEach(open_list => {
    open_list.addEventListener('click', () =>{
        open_list.classList.toggle ('list-opened')
    })
});


