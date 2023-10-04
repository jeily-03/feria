const menu= document.querySelector("#menu");
const hamburguer= document.querySelector("#hamburguer");

hamburguer.addEventListener('click',()=>{
    if(menu.style.display=='none') {
        menu.style.display= 'flex';
    }else{
        menu.style.display='none'
    }
})
