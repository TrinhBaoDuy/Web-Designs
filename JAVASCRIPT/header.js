const header = document.createElement("header");
header.innerHTML = `
<div class="logo">
				<a href="#">
					<img src="images/LogoMenu.png" alt="logo">
				</a>
			</div>

			<nav>
				<ul class="menu">
					<li>
						<span><i class="fa-solid fa-house home-icon icon-style"></i></span>
						<a href="index.html">Trang Chủ</a>
					</li>
					<li>
						<span><i class="fa-solid fa-users icon-style"></i></span>
						<a href="GioiThieu.html">Giới Thiệu</a>
					</li>
					<li>
						<span><i class="fa-solid fa-user-graduate icon-style"></i></span>
						<a href="programs.html">Chương Trình Đào Tạo</a>
					</li>
					<li>
						<span><i class="fa-solid fa-phone-volume icon-style"></i></span>
						<a href="lienhe.html">Liên Hệ</a>
					</li>
				</ul>
			</nav>
	
			<!-- SUB NAV MENU -->
			<div class="sub-nav">
				<div class="sub-nav-content">
					<span class="close-nav" onclick="hideSubNav()">
						<i class="fa-solid fa-xmark fa-xl"></i>
						<span>Close</span>
					</span>
					<!-- LOGO FOR MOBILE -->
					
					<!-- END: LOGO FOR MOBILE -->
					<ul class="sub-menu">
						<li>
							<a href="index.html">
								<span><i class="fa-solid fa-house home-icon icon-style"></i></span>
								 Trang Chủ
							</a>
						</li>
						<li>
							<a href="GioiThieu.html">
								<span><i class="fa-solid fa-users icon-style"></i></span>    
								 Giới Thiệu
							</a>
						</li>
						<li>
							<a href="programs.html">
								<span><i class="fa-solid fa-user-graduate icon-style"></i></span>    
								 Chương Trình Đào Tạo
							</a>
						</li>
						<li>
							<a href="lienhe.html">
								<span><i class="fa-solid fa-phone-volume icon-style"></i></span>
								 Liên Hệ
							</a>
						</li>
					</ul>
				</div>

				<!-- Follow us -->
				<div class="follow-container">
					<div class="follow">
						<h3>Follow Us &#128147;</h3>
						<ul class="socials flex">
							<li class="social-item">
								<i class="fa-brands fa-facebook"></i>
							</li>
							<li class="social-item">
								<i class="fa-brands fa-youtube"></i>
							</li>
							<li class="social-item">
								<i class="fa-brands fa-twitter"></i>
							</li>
							<li class="social-item">
								<i class="fa-brands fa-linkedin-in"></i>
							</li>
						</ul>
					</div>
				</div>
				<!-- END: Follow us -->
			</div>
			<div class="search-icon">
				<a href=""> <i class="fas fa-search icon-style"></i></a>
			</div>
	
			<!-- Mobile open nav icon -->
			<span class="nav-mobile-btn" onclick="showSubNav()">
				<i class="fa-solid fa-bars fa-xl"></i>
			</span>
`;
const styleheader = `
/* Follow us */ 
.close-nav:hover {
	color: #46c8f0;
 }
 
 .follow-container{
	margin-top: 3.4rem;
 }
 
 .follow {
	width: 70%;
	margin: 0 auto;
	text-align: center;
 }
 
 .follow h3 {
	font-size: 1.125rem;
	color: #fff;
 }
 
 ul.socials {
	justify-content: space-evenly;
	color: #fff;
	margin-top: 2rem;
 }
 
 ul.socials li i {
	font-size: 2.4rem;
 }

@media only screen and (min-width: 1024px) {
	div.search-icon {
		padding: 0.4rem 1.1rem !important;
	}
}


header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: var(--mainColor);
	height: 76px;
	display: flex;
    justify-content: space-between;
	box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.4);
	z-index: 99;
}

div.logo {
	height: 100%;
}

div.logo  img {
	height: 100%;
}

nav {
	display: flex;
    align-items: center;
}

ul.menu {
	display: flex;
}

ul.menu li {
	display: block;
	margin-right: 1.6rem;
	font-size: 1.4rem;
}

/* TEST OPEN NAV */
.open-nav {
	display: block;
 }



/* Bi thay doi height cua ul khi hover cac li => problem ? */
/* ul.menu li:hover {
	border-bottom: 2px solid #fff;
} */

i.icon-style {
	color: #fff;
}

ul.menu > li > a {
	text-decoration: none;
	color: #fff;
}

div.search-icon {
	padding: 1rem 0.8rem;
} 

.search-icon > a > i {
	font-size: 1.5rem;
    color: #fff;
	margin-top: 1.5rem;
}
@media only screen and (min-width: 740px) and (max-width: 1023px) {
	/* ============ MAJORS RESPONSIVE ========== */
	/* HEADER SET */
	.logo.mobile {
	   display: none;
	}
	
	body {
	   position: relative;
	}
 
	ul.menu {
	   display: none;
	}
 
	/* SUB NAV MENU */
	.sub-nav {
	   display: none;
	   position: absolute;
	   background-color: var(--mainColor);
	   box-shadow: 0 0 5px rgba(0, 0, 0, 4);
	   right: 0;
	   left: 50%;
	   top: 0;
	   height: 100vh;
	}
 
	.open-nav {
	   display: block;
	}
 
	.sub-nav-content {
	   display: block;
	}
 
	.sub-nav-content ul {
	   flex-direction: column;
	   margin-top: 20%;
	}
 
	.sub-nav-content ul a {
	   display: block;
	   font-size: 1.2rem;
	   font-weight: bold;
	   padding: 1.5rem;
	   border-bottom: 1px solid #fff;
	   color: #fff;
	}
 
	.close-nav {
	   display: block;
	   padding: 1rem;
	   font-size: 2.5rem;
	   color: #fff;
	   background: #232e53;
	}
 
	.close-nav i {
	   font-size: 1.8rem;
	}
 
	.close-nav:hover {
	   cursor: pointer;
	   opacity: 0.9;
	}
 
	.search-icon {
	   display: none;
	}
 
	.nav-mobile-btn {
	   color: #fff;
	   font-size: 1.3rem;
	   padding: 1.1rem;
	}
	/* END SUB NAV MENU */
	
 
	.it-major-header.info-system {
	   top: 2%;
	   left: 4%;
	}
}
@media only screen and (max-width: 740px) {
	/* ============ MAJORS RESPONSIVE ========== */
	/* HEADER SET */
	header div.logo img {
	   display: none;
	}
 
	.logo.mobile {
	   display: block;
	   width: 240px;
	   height: 224px;
	   padding-left: 0.4rem;
	   margin: 0 auto;
	}
 
	.logo.mobile img {
	   display: block;
	   width: 100%;
	   height: 100%;
	}
	
	body {
	   position: relative;
	}
 
	ul.menu {
	   display: none;
	}
 
	/* SUB NAV MENU */
	.sub-nav {
	   display: none;
	   position: absolute;
	   background-color: var(--mainColor);
	   box-shadow: 0 0 5px rgba(0, 0, 0, 4);
	   right: 0;
	   left: 0;
	   top: 0;
	   height: 100vh;
	   cursor: pointer;
	}
 
	.open-nav {
	   display: block;
	}
 
	.sub-nav-content {
	   display: block;
	   
	}
 
	.sub-nav-content ul {
	   flex-direction: column;
	}
 
	.sub-nav-content ul a {
	   display: block;
	   font-size: 1rem;
	   font-weight: bold;
	   padding: 1.5rem;
	   border-bottom: 1px solid #fff;
	   color: #fff;
	}
 
	.close-nav {
	   display: block;
	   padding: 1rem;
	   font-size: 2.5rem;
	   color: #fff;
	   background: #232e53;
	}
 
	.close-nav i {
	   font-size: 1.8rem;
	}
 
	.close-nav:hover {
	   cursor: pointer;
	   opacity: 0.9;
	}
 
	.search-icon {
	   display: none;
	}
 
	.nav-mobile-btn {
	   color: #fff;
	   font-size: 1.3rem;
	   padding: 1.3rem;
	}
 
	/* END SUB NAV MENU */
}
  `;

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
window.addEventListener('resize', function() {
	location.reload();
});


document.head.insertAdjacentHTML("beforeend", `<style>${styleheader}</style>`);
header.classList.add("your-header-class");
document.body.append(header);
