// console.log('merhaba')



const menuBtn=document.querySelector('.navbar-menu-btn')


const mnuLinks=document.querySelector('.navbar-links')

menuBtn.addEventListener('click',()=>{
    mnuLinks.classList.toggle('mobile-menu')
})