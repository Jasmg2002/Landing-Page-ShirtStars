/* Navbar */
document.querySelector( '#navbar__btnOpen' ).addEventListener( 'click' , () => {
    let Nav = document.querySelector('.navbar__nav')
    let btnOpen = document.querySelector('#navbar__btnOpen')
    let btnClose = document.querySelector('#navbar__btnClose')
    Nav.style.display = 'block'
    btnOpen.style.display = 'none'
    btnClose.style.display = 'block'
   
})
document.querySelector( '#navbar__btnClose' ).addEventListener( 'click' , () => {
    let Nav = document.querySelector('.navbar__nav')
    let btnOpen = document.querySelector('#navbar__btnOpen')
    let btnClose = document.querySelector('#navbar__btnClose')
    Nav.style.display = 'none'
    btnOpen.style.display = 'block'
    btnClose.style.display = 'none'
})