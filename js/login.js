// ADMIN 계정 로컬스토리지 생성
const adminAccount = {
  name: "maple",
  pw: "worrior",
  nickname: "admin",
  lv: 2,
};
localStorage.setItem("ADMIN", JSON.stringify(adminAccount));

// USER 계정 로컬스토리지 받아와서 로그인
let su = JSON.parse(localStorage.getItem("USER"));
let admin = JSON.parse(localStorage.getItem("ADMIN"));

function login() {
  // 회원가입 된 유저가 없을시

  // 입력한 아이디와 비밀번호를 가져옵니다.
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // admin 로그인
  if (username == admin.name) {
    // console.log(admin.name);
    // console.log(admin.pw);
    if (admin.name == username && admin.pw != password) {
      alert("Wrong password. Please try again.");
      return;
    } else if (admin.name == username && admin.pw == password) {
      alert("Login successful");
      sessionStorage.setItem("ADMINLOGIN", JSON.stringify(admin));
      location.reload(); // login 성공시 새로고침
      return;
    }
  }

  if (!username) {
    alert("Name is empty. Please fill in the blank.");
    return;
  } else if (!password) {
    alert("Password is empty. Please fill in the blank.");
    return;
  } else if (!su) {
    alert("No account exists");
    return;
  }

  // user 로그인
  //   console.log(su);
  let suName = [];
  su.forEach(function (value, index) {
    suName.push(su[index].name);
  });
  //   console.log(suName);
  //   console.log(username);

  // 생성한 아이디와 비밀번호를 저장합니다.
  su.forEach(function (value) {
    // console.log(value.name);
    // console.log(value.pw);
    // 아이디와 비밀번호를 검증합니다.
    if (username == value.name && password == value.pw && value.lv == 1) {
      alert("Login successful");
      let localuser = JSON.parse(localStorage.getItem("USER"));
      localuser.forEach(function (value) {
        if (value.name == username) {
          // console.log(value);
          let logininfo = {
            name: value.name,
            nickname: value.nickname,
          };
          sessionStorage.setItem("LOGIN", JSON.stringify(logininfo));
          location.reload(); // login 성공시 새로고침
        }
      });
    } else if (
      username == value.name &&
      password == value.pw &&
      value.lv == 0
    ) {
      alert("Waiting account acception...");
      return;
    } else if (username != value.name && password == value.pw) {
      alert("Wrong name. Please try again.");
      return;
    } else if (username == value.name && password != value.pw) {
      alert("Wrong password. Please try again.");
      return;
    }
  });
}
