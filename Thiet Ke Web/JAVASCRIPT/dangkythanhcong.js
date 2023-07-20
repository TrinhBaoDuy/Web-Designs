const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', () => {
    const value = phoneInput.value;
    const isNumber = /^\d+$/.test(value);

    if (!isNumber) {
        // phoneInput.value = '';
        alert('Vui lòng chỉ nhập số vào trường này!');
    }
});

nameInput.addEventListener('input', () => {
    const value = nameInput.value;
    const isNumber = /^\d+$/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    const hasSpace = /\s/.test(value);


    if (isNumber) {
        // nameInput.value = nameInput.value.slice(0, -1);
        alert('Vui lòng không nhập số vào trường này!');
    }
    //   else
    //   if (hasSpecialChar || hasSpace) {
    //     // nameInput.value = nameInput.value.slice(0, -1);
    //     alert('Vui lòng không nhập ký tự đặc biệt hoặc dấu cách vào trường này!');
    //   }
});


submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn chặn trang web chuyển tiếp khi người dùng nhấn nút đăng ký

    // Kiểm tra xác thực dữ liệu tại đây...
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const major = document.getElementById('major').value;
    const resume = document.getElementById('resume').value;
    const transcript = document.getElementById('transcript').value;

    if (name && email && phone && gender && address && major && resume && transcript) {
        // Tạo thông báo thành công
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');

        // Thêm thông tin tên người gửi vào thông báo và hiển thị
        successMessage.textContent = `Cảm ơn ${name} đã đăng kí !`;
        const applySection = document.querySelector('.apply');
        applySection.appendChild(successMessage);
        successMessage.classList.add('animate');

        // Xóa câu cảm ơn tên người gửi và hiển thị thông báo "Hồ sơ của bạn đã được gửi đến trường !"
        setTimeout(() => {
            successMessage.textContent = 'Hồ sơ của bạn đã được gửi đến trường !';
        }, 6000);

        // Thêm phần tử mới vào DOM và kích hoạt animation
        successMessage.classList.add('active');

        form.reset();

        // Cuộn trang web để đảm bảo phần tử được chọn được hiển thị trên màn hình
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        alert('Bạn chưa nhập đủ thông tin!');
    }
});