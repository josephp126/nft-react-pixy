

$(document).ready(function () {
  $('.select2').select2({
    minimumResultsForSearch: -1
  });
});

$('.p-option').on('click', function () {
  $('.p-option').removeClass('active')
  $(this).addClass('active')
})


$('.purchase-accordion .head').on('click', function () {
  $('.purchase-accordion').removeClass('opened')
  $('.purchase-accordion .body').slideUp()
  $(this).parent().addClass('opened')
  $(this).parent().find('.body').slideDown()
})




function checkGift() {
  if ($('.gift-input').css("display") === "none") {
    $('.gift-input').show()
  } else {
    $('.gift-input').hide()
  }
}

$('.credit-item').on('click', function () {
  $('.credit-item').removeClass('active')
  $(this).addClass('active')
})


$('#close-cookie').on('click', function () {
  $('.cookie-box').hide("fast")
})



$('.burger').on('click', function () {
  $('.mobile-menu-bg').addClass('show')
  $('.mobile-menu').addClass('show')
})

$('.mobile-menu-bg').on('click', function () {
  $('.mobile-menu-bg').removeClass('show')
  $('.mobile-menu').removeClass('show')
  $('.burger').removeClass('active')
})

$('.close-menu').on('click', function () {
  $('.mobile-menu-bg').removeClass('show')
  $('.mobile-menu').removeClass('show')
  $('.burger').removeClass('active')
})


$('#mail-dogrula').on('click', function () {
  $('.dogrulama-alert').show("fast")
})