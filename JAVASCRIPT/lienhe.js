function napcauhoi() {
  fetch(`JSON/cauhoi.json`)
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
function lablenoidung() {
  const messageInput = document.getElementById('message');
  const label = document.getElementById('label-noidung');
  if ( messageInput.value) {
    label.style.display = "none";
  } 
    
}
function guithu() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMessage = document.querySelector('.success-message');
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  if (nameInput.value && emailInput.value && messageInput.value) {
    inputContainers.forEach(function (container) {
      container.style.display = 'none';
    });
    successMessage.style.display = 'block';
  } else
    alert("Vui lòng nhập đầy đủ thông tin!");
}
function guilaithu() {
  const text = document.querySelector('.mess p');
  const successMessage = document.querySelector('.success-message');
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  inputContainers.forEach(function (container) {
    container.style.display = 'block';

  });
  text.innerHTML = `<h1>Kiểm tra lại thông tin & đặt lại câu hỏi ở dưới</h1>`
  successMessage.style.display = 'none';
}
