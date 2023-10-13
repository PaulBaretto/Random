

const body = document.querySelector('body');
const haeder = document.querySelector('#header-ex-1')
let searchWrapper = document.querySelector('.nb-search');
let searchBtn = document.querySelector('#nb-search-open');
let navMenu = document.querySelector('.nb-collapse-content');
let navToggle = document.querySelector('.nb-toggler')
const ball = document.querySelector(".ball");
let box = document.querySelector(".nb-collapse-content");
let nav_ul = document.querySelector('.nb-main');
let dash = document.querySelector('.dash')




// adding class on scroll *class 1*
window.addEventListener('scroll', onscroll_function);
function onscroll_function(){
    if (window.scrollY > 90){
        body.classList.add('page-scrolled');
    } else {
        body.classList.remove('page-scrolled')
    }
}
// * class 2 *
window.addEventListener('scroll', onscroll_function02);
function onscroll_function02(){
    if (window.scrollY > 90){
        haeder.classList.add('haeder-fixed');
    } else {
        haeder.classList.remove('haeder-fixed')
    }
}

// toggleing a class onclick of search icon to searchWrapper
searchBtn.addEventListener('click', (e) => {
    searchWrapper.classList.toggle('search_is_clicked')
})

// toggleing a class onlick of hamber BTN 
navToggle.addEventListener('click', (e) => {
    body.classList.toggle('overflow-y-0')
    navMenu.classList.toggle('show-nav');
})


let all_li = document.querySelectorAll('.nb-main-item');
console.log(all_li)
all_li.forEach((li ,index) => {
    let w = li.clientWidth;
        console.log(w)
    li.addEventListener('click', (e) => {
        // console.log(e.target.clientWidth);
        // console.log(e.target)
        dash.style.width = `${e.target.clientWidth}px`;
        // dash.style.left =  `${}`
        // console.log(dash)
    })
})    



    // let li_s = nav_ul.querySelectorAll('li');
    // console.log(li_s);
    // li_s.forEach(li => {
    //     // li.classList.remove('test');

    //     li.addEventListener('click', () => {
    //         li.classList.add('test')
    //         li_s.forEach(unActiveLi => {
    //             // li.classList.add('test')
    //             if(unActiveLi.classList.contains = "test"){
    //                 li.classList.remove('test')
    //             } else(
    //                 li.classList.add('test')
    //             )
    //         })
    //     })
    // })

// // add class to active nav item 
// let all_li = Array.from(nav_ul.getElementsByTagName('li'));
// // let all_li2 = Array.from(nav_ul.getElementsByTagName('li')).classList.remove('test');
// console.log(all_li)

// all_li.forEach(li => {
//     li.style.cssText = 'padding:40px;background-color:red; cursor:pointer; ';
    
    
//     li.addEventListener('click', (e) => {
//         li.classList.remove('test');
//     console.log(e.target);
//     console.log(e);
//         li.classList.add('test');

        
//     //    li.forEach(unActiveLi => {
//     //         if(unActiveLi !== li){
//     //             li.classList.remove('test')
//     //         }
//     //     })


//     })
// })





// ball move on mouse for nav
// let mouseX = 0;
// let mouseY = 0;

// let ballX = 0;
// let ballY = 0;

// let speed = 0.09;


// function animate(){
  
//   let distX = mouseX - ballX;
//   let distY = mouseY - ballY;
  
  
//   ballX = ballX + (distX * speed);
//   ballY = ballY + (distY * speed);
  
//   ball.style.left = ballX + "px";

  
//   requestAnimationFrame(animate);
// }
// animate();

// // box.addEventListener("mousemove", function(event){
// //     if (ball) {
// //           mouseX = event.pageX;
// //   mouseY = event.pageY;
// //     }else{
// //         ball.style.display='none';
// //     }
// // })


// box.addEventListener("mouseover", () => {
//   mouseX = event.pageX;
//   mouseY = event.pageY;
// })
// box.addEventListener('mouseout', (event) => {
//   // ball.style.display = 'none';
//       mouseX = -10;
// })
