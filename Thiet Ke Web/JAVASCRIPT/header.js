const header = document.createElement('header');
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
						<a href="../HTML/lienhe.html">Liên Hệ</a>
					</li>
				</ul>
			</nav>
			<div class="search-icon">
				<a href=""> <i class="fas fa-search icon-style"></i></a>
			</div>
`;
const styleheader = `
header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: var(--fontColer);
	min-height: 96px;
	display: flex;
    justify-content: space-between;
	box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.4);
	z-index: 99;
}

div.logo > img {
	
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
  `
document.head.insertAdjacentHTML('beforeend', `<style>${styleheader}</style>`);
header.classList.add('your-header-class');
document.body.append(header);