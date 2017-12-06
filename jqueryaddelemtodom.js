$(document).ready(function() {

	// add an element
	var txt = document.createElement("h1");
	txt.innerHTML = "cis255 - jQuery Intro - Build HTML from scratch";
	$("body div#part1").append(txt);



	// add a class to an element
	$("body div#part1 h1").addClass("title");

	// add an ID to an element
	$("body div#part1 h1").attr("id", "title1");

	// add 10 paragraph elements in a "for" loop, giving each a unique ID
	for(var i=0; i<15; i++){
		var txt = document.createElement("p");
		txt.innerHTML = "This is paragraph " + i + ".";
		txt.id = "p" + (i+"").padStart(3,"0");
		$("body div#part1").append(txt);
	}

	// change paragraph text if clicked
	$("p").click(function() {$(this).text("Hey, the text changed!")});

	// use "each" loop to console-log ids of each paragraph element
	var elems = document.getElementsByTagName("p");
	console.log(elems);
	$.each(elems, function(index, value) {
		console.log(elems[index].id);
	});

	// use "$(selector).each" loop to console-log hover message
	$("p").each(function() {
		$(this).hover(function() {
			console.log("hovered over " + this.id);
		});
	});

	// toggle() method switches between show() and hide()
	$(".trigger").click(function() {
        $(".overlay").toggle();
    });



// accordion js
 $(".accordion").on("click", ".accordion-header", function() {
    $(this).toggleClass("active").next().slideToggle();
 });
// tab js
  $(".tab-list").on("click", ".tab", function(e) {
      e.preventDefault();

      $(".tab").removeClass("active");
      $(".tab-content").removeClass("show");
      $(this).addClass("active");
      $($(this).attr("href")).addClass("show");
  });
// dropdown js
  $("nav ul li a:not(:only-child)").click(function(e) {
      $(this).siblings(".dropdown").toggle();

      $(".dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
  });

}); // end $(document).ready


// popup js
$(".open").on("click", function(){
  $(".overlay, .container").addClass("active");
});

$(".close, .overlay").on("click", function(){
   $(".overlay, .container").removeClass("active");
});

$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    $(".overlay, .container").removeClass("active");
  }
});

$(window).on("scroll", function () {
	var position = $("#begin").offset();

	if ($(window).scrollTop() > position.top - 40) {
		$("nav#scroll").addClass("active");
	} else {
		$("nav#scroll").removeClass("active");
	};
});

$("a#slide[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

$(".slider > div:gt(0)").hide();

setInterval(function() {
	$('.slider > div:first-child')
		.fadeOut()
		.next()
		.fadeIn()
		.end()
		.appendTo('.slider');
}, 1000);
