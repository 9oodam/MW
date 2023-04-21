const adminAccount = {
    name : "maple",
    pw : "worrior",
    lv : 2
}
localStorage.setItem("ADMIN", JSON.stringify(adminAccount));


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
let su = JSON.parse(localStorage.getItem("USER"));
console.log();
function login() {
    // 입력한 아이디와 비밀번호를 가져옵니다.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    let admin = JSON.parse(localStorage.getItem("ADMIN"));

    if(username == admin.name) {
        console.log(admin.name);
        console.log(admin.pw);
        if(admin.name == username && admin.pw != password) {
            alert("Wrong password.");
            return;
        }else if(admin.name == username && admin.pw == password) {
            alert('Login successful');
            sessionStorage.setItem("ADMINLOGIN", JSON.stringify(admin));
            return;
        }
    }
    
    console.log(su);
    let suName = [];
    su.forEach(function(value, index) {
        suName.push(su[index].name);
    })
    console.log(suName);
    if(!suName.includes(username)){
        alert("Account is not found.");
    }
    console.log(username);

    // 생성한 아이디와 비밀번호를 저장합니다.
    su.forEach(function(value){
        // 아이디와 비밀번호를 검증합니다.
        if (username == value.name && password == value.pw && value.lv == 1) {
            alert('Login successful');
            let localuser = JSON.parse(localStorage.getItem("USER"));
            localuser.forEach(function(value){
                if(value.name == username){
                    // console.log(value);
                    let logininfo = {
                        name: value.name,
                        nickname: value.nickname
                    }
                    sessionStorage.setItem("LOGIN", JSON.stringify(logininfo));
                }
            })
            // sessionStorage.setItem("LOGIN", username);
            // location.href="https://accidentallywesanderson.com/";

        } else if(username == value.name && password == value.pw && value.lv == 0){
            alert("Waiting acception...");
        } else if(username == value.name && password != value.pw) {
            alert("Wrong password.");
        }
    });
}
