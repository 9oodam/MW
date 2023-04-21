const loginButton = document.getElementById("signup");

function test() {
  let myurl = "login.html";
  window.location.href = myurl;
}

loginButton.addEventListener("click", test);

function signup() {
  let savedUsername_test = "";
  let savedPassword_test = "";

  let savedNickname = document.getElementById("nickname").value; //vaule 가져온다.
  let savedName = document.getElementById("name").value;
  let savedPassword = document.getElementById("password").value;

  console.log(savedNickname);
  console.log(savedName);
  console.log(savedPassword);

  // create user list
  let userlist = {
    nickname: savedNickname,
    name: savedName,
    pw: savedPassword,
    lv: 0,
  };

  // localstroge에 USER가 없으면 if문 실행, 있으면 else문 실행
  if (!localStorage.getItem("USER")) {
    localStorage.setItem("USER", JSON.stringify([userlist]));
  } else {
    let userpush = JSON.parse(localStorage.getItem("USER"));
    userpush.push(userlist);
    localStorage.setItem("USER", JSON.stringify(userpush));
  }

  //   localStorage.setItem("userNickname", savedNickname);
  //   localStorage.setItem("userName", savedName);
  //   localStorage.setItem("userPassword", savedPassword);

  // savedUsername_test = localStorage.getItem("userName");
  // // savedPassword_test = localStroage.getItem("userPassword");

  // savedPassword_test = localStorage.getItem("userPassword"); //login html에 오타는 없었나 ..

  // console.log("👍👍👍👍👍👍👍👍" + savedPassword_test)
  // console.log("👍👍👍👍👍👍👍👍" + savedUsername_test)
}
// signup();
console.log(localStorage.getItem("USER"));