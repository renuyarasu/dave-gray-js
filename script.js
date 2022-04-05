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

// Submit Form
document.getElementById('phoneForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('phoneNum');
    const reqex = /[()-. ]/g;
    const savedPhoneNum = input.value.replaceAll(reqex, '');
    console.log(savedPhoneNum);
});

// Clean Text
document.getElementById('textForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('textEntry');
    const reqex = / {2,}/g;
    const nextText = input.value.replaceAll(reqex, '').trim();
    console.log(nextText);
    const encodedInputText = encodeURI(input.value);
    const encodedCleanText = encodeURI(nextText);
    console.log(encodedInputText);
    console.log(encodedCleanText);
});
