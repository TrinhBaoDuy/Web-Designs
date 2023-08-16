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
})

// Open/Close Sub Nav Menu
function showSubNav() {
	var spanElement = document.querySelector(".sub-nav");
	spanElement.classList.add("open-nav");
}

function hideSubNav() {
	var spanElement = document.querySelector(".sub-nav");
	spanElement.classList.remove("open-nav");
}
