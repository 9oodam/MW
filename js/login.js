// // 버튼 요소 가져오기
// const loginButton = document.getElementById("loginButton");

// function test() {
//     let myurl = "https://www.google.com";
//     window.location.href = myurl;
// }
// // 버튼 클릭 이벤트 핸들러 등록

// // let myurl = "https://www.google.com";
// // window.location.href = myurl;
// // test();

// loginButton.addEventListener("click", test);
function login() {
    // 입력한 아이디와 비밀번호를 가져옵니다.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 생성한 아이디와 비밀번호를 저장합니다.
    const savedUsername = localStorage.getItem("userName");
    const savedPassword = localStorage.getItem("userPassword");
    

    console.log(savedPassword, savedUsername)

    
    
    // 아이디와 비밀번호를 검증합니다.
    if (username === savedUsername && password === savedPassword) {
        alert('Login successful');
        location.href="https://accidentallywesanderson.com/";
    } else {
        alert('Incorrect username or password');
    }
}


