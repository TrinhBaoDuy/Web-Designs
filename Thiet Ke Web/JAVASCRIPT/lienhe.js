function napcauhoi() {
  fetch(`../JSON/cauhoi.json`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let d of data) {
        let a = document.getElementById("napcauhoi");
        a.innerHTML += `
          <div class="ques-item">
                        <div class="ques">${d.question}<span class="arrow-circle">
                        <i class="fa-solid fa-plus"></i>
                    </span></div>
                        <div class="ans">${d.answer}</div>
                    </div>
          `
        hieuungcauhoi();
      }
    });
}

function hieuungcauhoi() {
  const quesElements = document.querySelectorAll('.section-ques .ques-item .ques');

  quesElements.forEach((ques) => {
    ques.addEventListener('click', () => {
      const ans = ques.nextElementSibling;
      // phần tử kế tiếp của phần tử ques
      const arrowIcon = ques.querySelector('.arrow-circle i');
      arrowIcon.classList.remove('rotate');

      if (!ans.classList.contains('show')) {
        const allAns = document.querySelectorAll('.section-ques .ques-item .ans');
        allAns.forEach((ans) => {
          arrowIcon.classList.remove('rotate');
          ans.classList.remove('show');
        });

        ans.classList.add('show');
        arrowIcon.classList.add('rotate');
      } else {
        ans.classList.remove('show');
        arrowIcon.classList.remove('rotate');
      }
    });
  });
}
function guithu() {
  const submitButton = document.getElementById('submit-btn');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMessage = document.querySelector('.success-message');
  const writeAgainButton = document.querySelector('#write-again');

  submitButton.addEventListener('click', function (event) {
    // Ngăn chặn hành vi mặc định của trình duyệt khi nhấn nút Gửi
    event.preventDefault();

    // Kiểm tra các trường biểu mẫu có được điền đầy đủ thông tin hay không
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Vui lòng điền đầy đủ thông tin trước khi gửi thư!');
      return;
    }

    // Ẩn tất cả các phần tử nằm trên phần tử mới và hiển thị phần tử mới
    const allElementsAbove = successMessage.previousElementSibling;
    while (allElementsAbove) {
      allElementsAbove.style.display = 'none';
      allElementsAbove = allElementsAbove.previousElementSibling;
    }
    successMessage.style.display = 'block';
  });

  writeAgainButton.addEventListener('click', function () {
    // Ẩn phần tử mới và quay lại biểu mẫu ban đầu
    successMessage.style.display = 'none';

    // Hiển thị lại tất cả các phần tử bị ẩn
    const allElements = document.querySelectorAll('*');
    allElements.forEach(function (element) {
      element.style.display = 'block';
    });

    // Xóa nội dung của các trường biểu mẫu để có thể viết thư mới
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });
}
