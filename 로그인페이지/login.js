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
function login() {
    // 입력한 아이디와 비밀번호를 가져옵니다.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    console.log(su);
    let suName = [];
    su.forEach(function(value, index) {
        suName.push(su[index].name);
    })
    console.log(suName);
   
    console.log(username);


    if(!username) { 
        alert("아이디를 입력해주세요.");
        return;

    }else if(!password) { 
        alert("비밀번호를 입력해주세요.");
        return;
    }
    // 생성한 아이디와 비밀번호를 저장합니다.
    su.forEach(function(value){

        // console.log(value.name);
        // console.log(value.pw);
            // 아이디와 비밀번호를 검증합니다.
        if (username == value.name && password == value.pw && value.lv == 1) {
            alert('Login successful');
            let myurl = "https://www.google.com"
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
            alert("회원가입 대기중입니다"); 
        } else if(username != value.name && password == value.pw) {
            alert("아이디가 틀립니다.");
        } else if(username == value.name && password != value.pw) {
            alert("비밀번호가 틀립니다.");
        }
        })

}

