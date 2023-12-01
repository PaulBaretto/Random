    

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
let sm_nav_show_btn = document.querySelector('.nb-toggler');


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


sm_nav_show_btn.addEventListener('click', () => {
    smNav.classList.toggle('sm-show-nav-items')
    let navWrap = document.querySelector('.nav-wrap');
    // console.log(navWrap)
    if (smNav.classList.contains('sm-show-nav-items')){
        sm_nav_show_btn.textContent = 'Close';
        navWrap.style.cssText = 'border-radius:20px 20px 0px 0px';
    }else{
        sm_nav_show_btn.textContent = 'Menu';
        navWrap.style.cssText = 'border-radius:20px 20px 20px 20px';
    }
})