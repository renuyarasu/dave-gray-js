// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
//Regular Expressions (https://regexr.com/)

document.getElementById('phoneNum').addEventListener('input', (event) => {
    const reqex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    const input = document.getElementById('phoneNum');
    const format = document.querySelector('.phoneFormat');
    const phone = input.value;
    const found = reqex.test(phone);
    if (!found && phone.length) {
        input.classList.add('invalid');
        format.classList.add('block');
    } else {
        input.classList.remove('invalid');
        format.classList.remove('block');
    }
});

document.getElementById('phoneForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('phoneNum');
    const reqex = /[()-. ]/g;
    const savedPhoneNum = input.value.replaceAll(reqex, '');
    console.log(savedPhoneNum);
});


