$(document).ready(function() {
	$("#top").hide()
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 550)
			$("#top").show("slow")
		else {
			$("#top").hide("slow")
		}
	})

	$("#top").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000)
	})

	// Open/Close Sub Nav Menu
	$(".nav-mobile-btn").click(function() {
		$(".sub-nav").addClass(".open-nav");
		// $(".sub-nav.open-nav").show();
	})

	// function showSubNav() {
	// 	let modal = document.querySelector(".sub-nav");
	// 	modal.classList.add("open-nav");
	// }

	// btnMenu = document.querySelector(".nav-mobile-btn");
	// btnMenu.addEventListener("click", showSubNav);
})
