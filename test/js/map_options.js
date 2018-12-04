 var state = 'pause';
 //

 $(function() {


     //var text = $.getJSON('data_oil.json')
     // var obj = JSON.parse(text);
     /// debugger;

     $('#play').click(function() {
         alert(state);
         if (state == 'pause') {
             state = 'play';
             $(this).find("i").attr('class', "fa fa-pause");
         } else if (state == 'play') {
             state = 'pause';
             $(this).find("i").attr('class', "fa fa-play");
         }
     });
     $('#button_first').click(function() {
         $(".slider").slider('value', 10);



     });

     $('#button_last').click(function() {
         $(".slider").slider('value', 464);

     });



 });

 function change() {
     alert('hi');
 }