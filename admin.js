




const savedId = 'yoon'
const savedPassword = 'park'




function login() {
    // 입력한 아이디와 비밀번호를 가져옵니다.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 아이디와 비밀번호를 검증합니다.
    if (username == savedId && password == savedPassword) {
        alert('Login successful');
      window.location.href ="https://accidentallywesanderson.com/"
    } else {
        alert('Incorrect username or password');
        
    }
}
