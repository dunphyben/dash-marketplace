// $('p:first').click ->
//   $(this).fadeTo 'slow', 0.33
//   return
// $(document).ready ->
//   $('faded-glory').fadeTo(fast, 0.2).delay 300
//   return

$(document).ready(function() {
	$("#faded-glory").delay(3000).fadeTo(2000, 0.33);
});

// $(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });

//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });

//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });