const savedId = 'maple'
const savedPassword = 'worrior'

function adminLogin() {
    // 입력한 아이디와 비밀번호를 가져옵니다.
    const username = document.getElementById('adminID').value;
    const password = document.getElementById('adminPW').value;
    
    console.log(username, password);

    // 아이디와 비밀번호를 검증합니다.
    if (username == savedId && password == savedPassword) {
        alert('Login successful');
        location.href = "./accept.html";
    } else {
        alert('Incorrect username or password');
    }
}