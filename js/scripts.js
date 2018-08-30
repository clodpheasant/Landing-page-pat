/* Scroll for menu items */
;$(document).ready(function() {
	$('a.about').click(function() {
		$(window).scrollTo('#about', {duration:1000}, {axis:'y'});
	});
	$('a.services').click(function() {
		$(window).scrollTo('#services', {duration:1000}, {axis:'y'});
	});
	$('a.works').click(function() {
		$(window).scrollTo('#works', {duration:1000}, {axis:'y'});
	});
	$('a.contact').click(function() {
		$(window).scrollTo('#contact', {duration:1000}, {axis:'y'});
	});
});

/* Buttons for Slick slider */
;$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
		prevArrow: '.button-left',
		nextArrow: '.button-right',
		autoplay: 'false'
  });
});

/* Black Color Google maps */
;var map;
function initialize() {
var myLatLng = {lat: 45.05, lng: 7.023155};
var image = 'images/marker.png';
map = new google.maps.Map(document.getElementById('map'), {
zoom: 15,
center: new google.maps.LatLng(45.05,7.023155),
mapTypeId: 'roadmap',
styles:
[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#dedede"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"weight":"10.00"},{"invert_lightness":true},{"gamma":"7.24"},{"lightness":"60"},{"saturation":"66"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"invert_lightness":true}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d2cece"},{"invert_lightness":true},{"weight":"10.00"}]},{"featureType":"poi.sports_complex","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi.sports_complex","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.sports_complex","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#ff0000"}]},{"featureType":"poi.sports_complex","elementType":"labels.text.stroke","stylers":[{"gamma":"10.00"},{"invert_lightness":true},{"weight":"10.00"},{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"labels.icon","stylers":[{"visibility":"on"},{"weight":"5.10"},{"gamma":"0.00"},{"hue":"#ff0000"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
});
var marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: 'Hello World!',
icon: image
});
}

/* Up button in the bottom of the page */
;$(document).ready(function() {
	$('button.up-button').click(function() {
		$(window).scrollTo('#header', {duration:1000}, {axis:'y'});
	});
});
