// tooltip initalize 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// tooltip initalize 

//toggle scroll
window.addEventListener('scroll', (e) => {
  const navDark = $('.navigation_bar_dropdown')
  const napba = $('.nav-dropdown--container')
  const navLight = $('.navigation_bar')
  if (window.pageYOffset >= 75) {
    napba.css('top', 0)
    
  } else {
    napba.css('top', '-75px')
  }
})
//toggle scroll
