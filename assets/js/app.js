$(() => {
  $('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
  });

  $('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, () => {
      $(this).remove();
    });
    event.stopPropagation();
  });

  $('input[type="text"]').keypress(function(event){
    if(event.which === 13){
      const toDoText = $(this).val();
      $(this).val('');
      $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${toDoText} </li>`);
    }
  });

  $('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle();
  });
});
