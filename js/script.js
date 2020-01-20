$(function () {


  $('.hamburger').click(function() {
    $(this).toggleClass('is-active')
    $('.mobile-menu').slideToggle()
  })

  $(".nested a").click(function (event) {
    
    event.preventDefault()
    
  })

  $(".nested").mouseover(function(e) {
    e.stopPropagation()

    var leftOutside = $(this).find('a').siblings('.submenu').offset().left
    console.log("TCL: leftOutside", leftOutside)
    console.log("TCL: $(this).find('.submenu')", $(this).find('.submenu'))
    if(leftOutside > 0) 
    $(this).find('a').siblings('.submenu').css({
      left: -leftOutside
    })
  });


  $(".header-callback").click(function(e) {
    e.preventDefault()
    $('.modal').show()
    $('.modal-back').show()
  })

  $(".modal-back").click(function() {
    $('.modal').hide()
    $('.modal-back').hide()
  })

  $('.location').click(function () {
    $('.location').removeClass('location-active')
    $(this).addClass('location-active')
  })

})