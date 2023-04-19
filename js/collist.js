// 다른 html 파일 불러오기
// 헤더파일 하나로 다른 html 문서에 불러 들여 쓸 수 있게 해주는 스크립트
function includeHTML() {
  let z, elmnt, file, xhttp;

  z = document.getElementsByTagName("*");

  for (let i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("data-include");

    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
            searchlogin();
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("data-include");
          includeHTML();
        } //if
      }; //onreadystatechange

      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    } //if - file
  } //for
} //includeHTML

/* 실행 */
window.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});

// img가 submit 됫을 경우 localstorage에 등록 되고 이미지도 출력 하게 하는 함수

// search btn
function searchlogin() {
  let ta = document.querySelector(".he");
  // 검색 팝업 관련 (숨어있다 나오는)
  let searchPopupBtn = ta.querySelector("#dropdown-search-form");
  let searchPopup = ta.querySelector("#search-popup");
  let popupCloseBtn = ta.querySelector("#popup-close-btn");
  // 로그인 팝업 관련 (숨어있다 나오는)
  let loginPopupContent = ta.querySelector(".login-popup-content");
  let idLoginBtn = ta.querySelector("#id-login-btn");

  let logincloseBtn = ta.querySelector("#login-close-btn");

  // 🔷 로그인 popup
  idLoginBtn.addEventListener("click", function () {
    loginPopupContent.classList.add("is-active");
  });
  logincloseBtn.addEventListener("click", function () {
    loginPopupContent.classList.remove("is-active");
  });

  // 🔷 검색창 popup
  searchPopupBtn.addEventListener("click", function () {
    searchPopup.classList.add("is-active");
  });

  popupCloseBtn.addEventListener("click", function () {
    searchPopup.classList.remove("is-active");
  });
}

// 그려주는 함수
let contentwrap = document.querySelector(".content_wrap");
let card = document.querySelector(".card");
let cardin = document.querySelector(".cardin");
// let cardcover = document.querySelector(".cardcover");
let titletop = document.querySelector(".title_top");
let titleh1 = titletop.querySelector("h1");

let titletoptxt = document.querySelector(".title_top_txt");
let titletoptxtp = titletoptxt.querySelector("p");

let titlebottomtxt = document.querySelector(".title_bottom_txt");
let titlebottomtxta = titlebottomtxt.querySelectorAll("a");
let titlebottomtxtspan = titlebottomtxt.querySelectorAll("span");

// THEMESIMG 불러오기
let readthemes = JSON.parse(localStorage.getItem("THEMESIMG"));

// COLORIMG 불러오기
let readcolor = JSON.parse(localStorage.getItem("COLORIMG"));

// 페이지 로딩시 데이터 불러오기 위한 준비
let locallist = window.localStorage;

let localnames = [];

// 로컬 스토리지의 모든 데이터의 key를 불러옴
for (let i = 0; i < window.localStorage.length; i++) {
  let temp = window.localStorage.key(i);

  localnames.push(temp);
}

// | 으로 시작하는 로컬스토리지 key를 찾음
let listfilter = localnames.filter((ff) => ff[0] == "|");

if (listfilter.length == 0) {
  alert("잘못된 경로 입니다.");
  location.href = "./collections.html";
}

// console.log(listfilter.length);
// 찾아온 로컬스토리지 key로 value를 저장
let tmplocal = JSON.parse(localStorage.getItem(`${listfilter}`));
// console.log(tmplocal);
// 만들어진 로컬 스토리지의 group이 THEMES 일 경우
if (tmplocal.group == "THEMES") {
  let themesname = readthemes[tmplocal.cnt][tmplocal.name];

  selectthemes(themesname);
}

// 만들어진 로컬 스토리지의 group이 COLORS 일 경우
if (tmplocal.group == "COLORS") {
  let colorname = readcolor[tmplocal.cnt][tmplocal.name];

  selectthemes(colorname);
}

// title 이미지 출력

// h1 출력 / 변하는 부분 1
titleh1.innerHTML = `${tmplocal.name}`;

// p태그 출력 / 변하는 부분 2
titletoptxtp.innerHTML = `${tmplocal.desc}`;

// span 출력 / 변하는 부분 3
titlebottomtxta[1].innerHTML = `${tmplocal.group}`;
titlebottomtxtspan[4].innerHTML = `${tmplocal.name}`;

// 선택된 이미지만 출력

function selectthemes(list) {
  list.forEach((value) => {
    let readvalue = Object.values(value)[0];
    // console.log(value);

    let carddiv = document.createElement("div");
    let cardindiv = document.createElement("div");
    let cardtxtdiv = document.createElement("div");
    let cardcoverdiv = document.createElement("div");
    let img = document.createElement("img");

    let h4 = document.createElement("h4");
    let h2 = document.createElement("h2");
    let ptag = document.createElement("p");

    carddiv.className = "card";
    cardindiv.className = "cardin";
    cardcoverdiv.className = "cardcover";
    img.src = value.img;
    cardtxtdiv.className = "cardtxt";
    h4.innerHTML = value.country;
    h2.innerHTML = value.location;
    ptag.innerHTML = value.description;

    cardtxtdiv.append(h4);
    cardtxtdiv.append(h2);
    cardtxtdiv.append(ptag);
    cardindiv.append(cardcoverdiv);
    cardindiv.append(img);
    cardindiv.append(cardtxtdiv);

    carddiv.append(cardindiv);
    contentwrap.append(carddiv);
    readvalue = "";
  });
}

// selectthemes(themesname);

// 윈도우를 켜면 로딩이 끝난 후 함수 실행
// 추후 다른곳에서 이미지를 클릭했을대 값을 가져와 데이터 출력해야함
// window.onload = function () {
//   contentwrap.innerHTML = "";
//   selectthemes(themesname);
// };

// window.addEventListener("click", function (e) {
//   console.log(e.target.className);
// });

// THEMES 모든 이미지 출력됨

// function allthemes() {
//   readthemes.forEach((value) => {
//     let readvalue = Object.values(value)[0];
//     // console.log(value);

//     for (let i = 0; i < readvalue.length; i++) {
//       let carddiv = document.createElement("div");
//       let cardindiv = document.createElement("div");
//       let cardtxtdiv = document.createElement("div");
//       let img = document.createElement("img");

//       let h4 = document.createElement("h4");
//       let h2 = document.createElement("h2");
//       let ptag = document.createElement("p");

//       carddiv.className = "card";
//       cardindiv.className = "cardin";
//       img.src = readvalue[i].img;
//       cardtxtdiv.className = "cardtxt";
//       h4.innerHTML = readvalue[i].country;
//       h2.innerHTML = readvalue[i].location;
//       ptag.innerHTML = readvalue[i].description;

//       cardtxtdiv.append(h4);
//       cardtxtdiv.append(h2);
//       cardtxtdiv.append(ptag);
//       cardindiv.append(img);
//       cardindiv.append(cardtxtdiv);

//       carddiv.append(cardindiv);
//       contentwrap.append(carddiv);
//     }
//     readvalue = "";
//     // });
//   });
// }
// allthemes();
