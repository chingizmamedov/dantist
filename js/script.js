$(function () {


  $('.hamburger').click(function() {
    $(this).toggleClass('is-active')
    $('.mobile-menu').slideToggle()
  })

  $(".nested a").click(function (event) {
    
    event.preventDefault()
    
  })


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