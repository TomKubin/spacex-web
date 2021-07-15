$('.btn').click(function() {
   $(this).css('display', 'none');
   $('.sidebar').css('right', '0');
});

$('.closeBtn').click(function (){
   $('.sidebar').css('right', '-250px');
   $('.btn').css('display', 'block');
});