$(document).ready(function() {
	$("div#top").hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 500)
			$("#top").show();
		else {
			$("#top").hide();
		}
	});
});


// Open/Close Sub Nav Menu
function showSubNav() {
	var spanElement = document.querySelector(".sub-nav");
	spanElement.classList.add("open-nav");
}

function hideSubNav() {
	var spanElement = document.querySelector(".sub-nav");
	spanElement.classList.remove("open-nav");
}

// Load lại khi thay đổi k.thước @media
// window.addEventListener('resize', function() {
// 	location.reload();
// });

// Xử lý ngăn chuyển trang của thẻ <a> footer
const links = document.querySelectorAll(".top-footer-contact a");

links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
  });
});