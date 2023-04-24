function signup() {
  let savedUsername_test = "";
  let savedPassword_test = "";

  let savedNickname = document.getElementById("nickname").value;
  let savedName = document.getElementById("name").value;
  let savedPassword = document.getElementById("password").value;

  console.log(savedNickname);
  console.log(savedName);
  console.log(savedPassword);

  let userList = JSON.parse(localStorage.getItem("USER"));
  let nicknames = userList.map(user => user.nickname);
  let names = userList.map(user => user.name);

  if (nicknames.includes(savedNickname) && names.includes(savedName)) {
    alert("이미 존재하는 닉네임과 이름입니다.");
    return;
  }

  let newUser = {
    nickname: savedNickname,
    name: savedName,
    pw: savedPassword,
    lv: 0,
  };

  if (!userList) {
    localStorage.setItem("USER", JSON.stringify([newUser]));
  } else {
    userList.push(newUser);
    localStorage.setItem("USER", JSON.stringify(userList));
  }

  if (!savedName) { 
    alert("아이디를 입력해주세요.");
    return;
  } else if (!savedPassword) { 
    alert("비밀번호를 입력해주세요.");
    return;
  }

  // 회원가입 완료 후 로그인 페이지로 이동
  window.location.href = "login.html";
}