const header = document.createElement("header");
header.innerHTML = `
<div class="logo">
<a href="#">
	<img src="../images/LogoMenu.png" alt="logo">
</a>
</div>

<nav>
<ul class="menu">
	<li>
		<span><i class="fa-solid fa-house home-icon icon-style"></i></span>
		<a href="../HTML/index.html">Trang Chủ</a>
	</li>
	<li>
		<span><i class="fa-solid fa-users icon-style"></i></span>
		<a href="../HTML/GioiThieu.html">Giới Thiệu</a>
	</li>
	<li>
		<span><i class="fa-solid fa-user-graduate icon-style"></i></span>
		<a href="../HTML/programs.html">Chương Trình Đào Tạo</a>
	</li>
	<li>
		<span><i class="fa-solid fa-phone-volume icon-style"></i></span>
		<a href="#">Liên Hệ</a>
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
	<div class="logo mobile">
		<a href="#">
			<img src="../images/logo-white-footer.png" alt="logo">
		</a>
	</div>
	<!-- END: LOGO FOR MOBILE -->
	<ul class="sub-menu">
		<li>
			<a href="../HTML/index.html">
				<span><i class="fa-solid fa-house home-icon icon-style"></i></span>
				 Trang Chủ
			</a>
		</li>
		<li>
			<a href="../HTML/GioiThieu.html">
				<span><i class="fa-solid fa-users icon-style"></i></span>    
				 Giới Thiệu
			</a>
		</li>
		<li>
			<a href="../HTML/programs.html">
				<span><i class="fa-solid fa-user-graduate icon-style"></i></span>    
				 Chương Trình Đào Tạo
			</a>
		</li>
		<li>
			<a href="#">
				<span><i class="fa-solid fa-phone-volume icon-style"></i></span>
				 Liên Hệ
			</a>
		</li>
	</ul>
</div>
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
  `;
document.head.insertAdjacentHTML("beforeend", `<style>${styleheader}</style>`);
header.classList.add("your-header-class");
document.body.append(header);
