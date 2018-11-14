$(document).ready(function(){

//EFECTO MENU
$('.menu a').each(function(index, elemento){
 $(this).css({
 	'top': '-200px'
   });

$(this).animate({
	top: '0'
}, 2000 + (index * 500));

 });

//EFECTO HEADER

if( $(window).width() > 800 ){
 $('header .textos').css({
 	opacity: 0,
 	marginTop: 0
 });

 $('header .textos').animate({
 	opacity: 1,
 	marginTop: '-52px'
 }, 1500);

}

//SCROLL ELEMENTOS MENU

var überUns = $('#über-uns').offset().top,
menü = $('#teller').offset().top,
galerie = $('#galerie').offset().top,
standort = $('#standort').offset().top;


$('#btn-über').on('click', function(e){
	e.preventDefault();
 $('html, body').animate({
   scrollTop: überUns -100
    }, 500);

});

$('#btn-menü').on('click', function(e){
	e.preventDefault();
 $('html, body').animate({
   scrollTop: menü
    }, 500);

});

$('#btn-galerie').on('click', function(e){
	e.preventDefault();
 $('html, body').animate({
   scrollTop: galerie
    }, 500);

});

$('#btn-standort').on('click', function(e){
	e.preventDefault();
 $('html, body').animate({
   scrollTop: standort
    }, 500);

  });

});