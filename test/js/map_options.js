 var state = 'pause';
 var min = 1;
 var max = 464;
 //

 $(function() {


     //var text = $.getJSON('data_oil.json')
     // var obj = JSON.parse(text);
     /// debugger;

     $('#button_play').click(function() {
         if (state == 'pause') {
             state = 'play';
             $(this).find("i").attr('class', "fa fa-pause");
         } else if (state == 'play') {
             state = 'pause';
             $(this).find("i").attr('class', "fa fa-play");
         }
     });
     $('#button_first').click(function() {
         $(".slider").slider('value', 1);
         $('#button_play').find("i").attr('class', "fa fa-play");



     });

     $('#button_last').click(function() {
         $(".slider").slider('value', 464);
         $('#button_play').find("i").attr('class', "fa fa-play");
     });



 });

 function changeEvent(yearIndex) {
     alert(yearIndex);
 }



 function changeOilData(yearIndex) {
     // alert(yearIndex);
 }

 function changeEvent(yearIndex) {
     // alert(yearIndex);
 }

 /*setInterval(function() {
     alert(state);
     alert($('#no_sec').val());
 }, $('#no_sec').val()); */

 setInterval(function() {
     var val = $('.slider').slider("option", "value");
     if (val >= 464) {
         state = pause;
         $(".slider").slider('value', 1);
         $('#button_play').find("i").attr('class', "fa fa-play");

     }
     if (state == 'play') {
         val = val + 1;
         $(".slider").slider('value', val);

     }

 }, 1000);







 function play() {

 }

 function pause() {

 }

 function first() {

 }

 function last() {

 }