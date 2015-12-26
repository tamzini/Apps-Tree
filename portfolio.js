
// ======== nav menu   =========

$("document").ready(function(){
	$(".menu").click(function(){
		$(".nav li").fadeToggle(1000);
			

	}) ;
// == End of nav menu	


// ======== scroll animation ========	

$(window).load(function(){
	$(".image1").animate({left: "25%"},3500);
	$(".mySkills").show().animate({right: "0%"},3500);
	$(".image2").show().animate({right: "-25%"},3500);
	$(".para2").delay(3500).show(2000).animate({top: "-30px"},3500).animate({opacity:"1.0"},3000).css("font-size","95%");
    $(".image1").animate({opacity:"1.0"},3000);
   $(".mySkills").animate({opacity:"1.0"},3000);
    $(".image2").animate({opacity:"1.0"},3000);
});
// ==== End of scroll effect ====

// ============ slide show =======
$(function(){

	setInterval(function(){
   $(".slide ul").animate({marginLeft:"-120%"},5000,function(){
 			$(".slide li:last").after($(".slide li:first"));
 			$(this).css("marginLeft","0px");
 		});
	},3000);
});

// === End of slide show ====

}) ;
