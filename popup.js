$(function(){
  $('#name').keyup(function(){
    console.log('enter here')
    $('#greet').text('hello ' + $('#name').val())
  })
})
