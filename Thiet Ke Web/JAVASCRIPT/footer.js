const footer = document.createElement('footer');
footer.innerHTML = `
<div class="container-footer">
				<div class="top-footer">
					<div class="top-footer-contact col-30per">
						<a href="#">
							<img src="../images/logo-white-footer.png" alt="logo">
						</a>
					</div>
					<div class="top-footer-contact col-23per">
						<h4>Email</h4>
						<p>
							<span>
								<i class="fa-solid fa-envelope fa-beat-fade"></i>
							</span>
							<a href="mailto:mail@mail.com">mail@mail.com</a>
						</p>
					</div>
					<div class="top-footer-contact col-23per">
						<h4>Hỗ trợ sinh viên</h4>
						<p>
							<span>
								<i class="fa-solid fa-phone fa-beat"></i>
							</span>
							<span>0904.567.890</span>
						</p>
					</div>
	
					<div class="top-footer-contact col-23per">
						<h4>Tuyển sinh</h4>
						<p>
							<span>
								<i class="fa-solid fa-phone-volume fa-beat-fade"></i>
							</span>
							<span>0904.567.890</span>
						</p>
					</div>
					
				</div>
				<div class="mid-footer flex">
					<div class="top-footer-contact col-30per">
						<h4>Về chúng tôi</h4>
						<p>
							<p><a href="#">Tin tức</a></p>
							<p><a href="#">Sự kiện</a></p>
							<p><a href="#">Tuyển dụng</a></p>
							<p><a href="#">Đảm bảo chất lượng</a></p>
						</p>
					</div>
					<div class="top-footer-contact col-23per">
						<h4>Truy cập nhanh</h4>
						<p>
							<p><a href="#">Hệ thống E-Learning</a></p>
							<p><a href="#">Thư viện</a></p>
							<p><a href="#">Đào đạo từ xa</a></p>
						</p>
					</div>
					<div class="top-footer-contact col-23per">
						<h4>Follow us</h4>
						<p>
							<p>
								<i class="fa-brands fa-facebook-f"></i>
								<span><a href="https://vi-vn.facebook.com/" target="_blank">Facebook</a></span>
							</p>
							<p>
								<i class="fa-brands fa-youtube"></i>
								<span>
									<a href="https://www.youtube.com/" target="_blank">Youtube</a>
								</span>
							</p>
							<p>
								<i class="fa-brands fa-instagram"></i>
								<span>
									<a href="https://www.instagram.com/" target="_blank">Instagram</a>
								</span>
							</p>
							<p>
								<i class="fa-brands fa-tiktok"></i>
								<span>
									<a href="https://www.tiktok.com/" target="_blank">Tiktok</a>
								</span>
							</p>
						</p>
					</div>
	
					<div class="top-footer-contact col-23per">
						<h4>Các ngành và khối đào tạo</h4>
						<p>
							<p><a href="#">Công nghệ thông tin</a></p>
							<p><a href="#">Du lịch</a></p>
							<p><a href="#">Quản trị kinh doanh</a></p>
							<p><a href="#">Kiến trúc</a></p>
							<p><a href="#">Luật - Xã hội Nhân văn - Truyền thông</a></p>
							<p><a href="#">Thiết kế - Nghệ Thuật</a></p>
						</p>
					</div>
				</div>
				<div class="bottom-footer">
					<h3>&copy; 2023 Trịnh Bảo Duy & Đàng Sỹ Tuân. All rights reserved.</h3>
					<p>Điều khoản</p>
					<p>Chính sách</p>
					<p>Copyright</p>
				</div>
			</div>
		</footer>

`;
const style = `
:root {
	--mainColor: #000f46;
	--coursesColor: #edf2f5;
	--fontSize-Heading: 2.4rem;
    --fontSize-Content: 1.1rem;
}

.col-half {
	width: 50% !important;
}

.col-23per {
	width: 23% !important;
}

.col-30per {
	width: 30% !important;
}

.col-third {
	width: 33.333% !important;
}

.col-forth {
	width: 25% !important;
}

.col-fifth {
	width: 20% !important;
}

.col-19 {
	width: 19% !important;
}

.m-left-right-128px {
	margin: 0 128px !important;
}

footer {
	background-color: var(--mainColor) !important;
    /* background:  url("../images/Picture1.jpg"), bottom center / cover, no-repeat; */
}

.container-footer {
	width: 95%;
	margin: 0 auto;
}

.container-footer span {
	margin-left: 0.5rem;
}

.top-footer {
	display: flex;
    align-items: center;
	/* padding: 6rem 0 3rem 0; */
    border-bottom: 1px solid #757474;
}

.top-footer > div:first-child img {
	width: 100%;
}

.top-footer-contact, .top-footer-contact a, .top-footer-contact i, .top-footer-contact span {
	color: #fff;
}

.top-footer-contact a:hover {
	color: #797a97;
}

.top-footer-contact p {
	margin: 0.5rem 0;
}

.flex {
	display: flex;
}

.mid-footer {
	padding: 4rem 0 2rem 0;
	border-bottom: 1px solid #757474;
}

.mid-footer div:first-child {
	padding-left: 18px;
}

.bottom-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
    padding: 2rem 0;
}

.bottom-footer h3, .bottom-footer p {
	color: #fff;
	font-weight: normal;
}

@media only screen and (max-width: 740px) {
	.top-footer {
		flex-direction: column;
		
		text-align: center;
	 }
  
	 .top-footer-contact {
		width: 50% !important;
		margin-bottom: 1rem;
		font-size: 1.2rem;
	 }
  
	 .top-footer-contact span > i {
		display: none;
	 }
  
	 .mid-footer {
		flex-wrap: wrap;
	 }
  
	 .mid-footer div:first-child {
		padding-left: 0;
	 }
  
	 .bottom-footer {
		flex-direction: column;
		align-items: unset;
	 }
  
	 .bottom-footer > h3, .bottom-footer > p, .bottom-footer > p {
		margin-bottom: 0.6rem;
	 }
}
  `
document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`);
footer.classList.add('your-footer-class');
document.body.append(footer);