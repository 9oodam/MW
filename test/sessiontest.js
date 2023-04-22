let userinfo = {
  id: "testid",
  pw: "testpw",
};

// 세션 스토리지를 만듬
sessionStorage.setItem("USER", JSON.stringify(userinfo));

// 세션 스토리지에 있는 user의 id와 pw를 가져옴
if (sessionStorage.getItem("USER")) {
  let ta = JSON.parse(sessionStorage.getItem("USER"));
  console.log(ta.id);
  console.log(ta.pw);
}
