let myItem = document.querySelectorAll('myitem');
let nav = document.querySelector('.navbar').children;
let active = document.querySelector('.active')
let totalnav = nav.length ;
let index = 0;



window.addEventListener('scroll', function (){
   


    for (const item of nav) {

    for(let i=0; i < nav.length - 1; i++){
    nav[i].classList.remove('active');
    nav[index].classList.add('active');


       let elem = this.scrollY;
       if (elem > 100 && elem <= 600) {
           nav[index].classList.add('active')
       }else if (elem > 600 && elem <= 1300){
           nav[index + 1].classList.add('active') 
           nav[index].classList.remove('active')
       }else if (elem > 1300 && elem < 1800){
        nav[index + 2].classList.add('active') 
        nav[index + 1].classList.remove('active')
        nav[index].classList.remove('active')
    }else if (elem > 1800 && elem < 2400){
        nav[index + 3].classList.add('active') 
        nav[index + 2].classList.remove('active')
        nav[index].classList.remove('active')
        nav[index + 4 ].classList.remove('active')
    }else if (elem >= 2400){
        nav[index + 4].classList.add('active') 
        nav[index + 3].classList.remove('active')
        nav[index].classList.remove('active')
    } else{
        nav.classList.remove('active')
    }
  
    }
    }
} )

// for (let i=0; i< nav.length; i++){
//     window.addEventListener('scroll', function(){
//     for( let item of nav){
//         let elem = item.getBoundingClientRect();
//         if (elem <= 700){
//             item.classList.add('active')
//         }
//     }
//     })
// }