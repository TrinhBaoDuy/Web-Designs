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

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const major = document.getElementById('major').value;
    const resume = document.getElementById('resume').value;
    const transcript = document.getElementById('transcript').value;

    if (name && email && phone && gender && address && major && resume && transcript) {
        
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');

       
        successMessage.textContent = `Cảm ơn ${name} đã đăng kí !`;
        const applySection = document.querySelector('.apply');
        applySection.appendChild(successMessage);
        successMessage.classList.add('animate');

        
        setTimeout(() => {
            successMessage.textContent = 'Hồ sơ của bạn đã được gửi đến trường !';
        }, 6000);

        
        successMessage.classList.add('active');

        form.reset();

        
        const successMessageclass = document.querySelector('.success-message');
        const elementPosition = successMessageclass.getBoundingClientRect().top;

       
        const header = document.querySelector('header');
        const offset = header.offsetHeight;

        
        window.scrollTo({ top: elementPosition + window.scrollY - offset - 100, behavior: 'smooth' });
    } else {
        alert('Bạn chưa nhập đủ thông tin!');
    }
});