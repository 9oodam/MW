// card 생성자
function createcard(title, img, country, location, description) {
  this.title = title;
  this.img = img;
  this.country = country;
  this.location = location;
  this.description = description;
}

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
            navCollections();
            getStartName();
            seeAllbtn();
            CollectionImg();
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

// search btn
// header 우상단 search & login btn
function searchlogin() {
  // 검색 팝업 관련 변수
  let searchPopupBtn = document.querySelector("#dropdown-search-form");
  let searchPopup = document.querySelector("#search-popup");
  let popupCloseBtn = document.querySelector("#popup-close-btn");

  let search = document.querySelector(".keyword-input"); // 검색 input 창
  let searchSubmit = document.querySelector(".search-icon-btn"); // 돋보기 버튼
  let autocompleteWrap = document.querySelector(".autocomplete_wrap");

  // 검색창 popup
  searchPopupBtn.addEventListener("click", function () {
    searchPopup.classList.add("is-active");
  });
  popupCloseBtn.addEventListener("click", function () {
    searchPopup.classList.remove("is-active");
  });

  // 🔷 검색 함수
  search.addEventListener("keyup", function () {
    // Enter 누르면 submit 됨
    if (window.event.keyCode === 13) {
      window.event.preventDefault();
      searchSubmit.click();
    }

    // autocomplete 비우기
    autocompleteWrap.innerHTML = "";
    let searchInput = search.value.toUpperCase();

    // input 창에 입력한 문자로 시작하는 것만 배열로 담음
    let autocomplete = categoryNames.filter(function (e) {
      return e.startsWith(searchInput);
    });
    //   console.log(autocomplete);

    autocomplete.forEach(function (suggested) {
      let div = document.createElement("div");
      div.innerHTML = suggested;
      autocompleteWrap.appendChild(div);

      div.onclick = () => {
        searchInput = div.innerHTML;
        autocompleteWrap.innerHTML = "";
        //   console.log(searchInput);
        moveToCollist(searchInput);
      };
    });
    if (searchInput == "") {
      autocompleteWrap.innerHTML = "";
    }
  });

  // 로그인 팝업 관련 변수
  let topBanner = document.querySelector(".top_banner"); // 최상단 빨간 배너

  let loginPopupContent = document.querySelector(".login-popup-content");
  let idLoginBtn = document.querySelector("#id-login-btn");
  let logincloseBtn = document.querySelector("#login-close-btn");
  let signupcloseBtn = document.querySelector("#signup-close-btn");

  let loginPopup = document.querySelector(".login_popup"); // 로그인 창
  let signupPopup = document.querySelector(".signup_popup"); // 회원가입 창
  let moveToSignup = document.querySelector(".move_to_signup"); // 회원가입으로 이동
  let moveToLogin = document.querySelector(".move_to_login");

  // 로그인 popup
  idLoginBtn.addEventListener("click", function () {
    // 로그아웃 기능 추가
    if (
      sessionStorage.getItem("LOGIN") ||
      sessionStorage.getItem("ADMINLOGIN")
    ) {
      if (confirm("로그아웃 하시겠습니까?")) {
        sessionStorage.clear();
        location.reload();
      } else {
        return;
      }
    }
    loginPopupContent.classList.add("is-active");
    loginPopup.classList.add("is-active");
  });
  logincloseBtn.addEventListener("click", function () {
    loginPopupContent.classList.remove("is-active");
    loginPopup.classList.remove("is-active");
    signupPopup.classList.remove("is-active");
  });
  signupcloseBtn.addEventListener("click", function () {
    loginPopupContent.classList.remove("is-active");
    loginPopup.classList.remove("is-active");
    signupPopup.classList.remove("is-active");
  });

  moveToSignup.addEventListener("click", function () {
    if (!signupPopup.classList.contains("is-active")) {
      signupPopup.classList.add("is-active");
    }
    if (loginPopup.classList.contains("is-active")) {
      loginPopup.classList.remove("is-active");
    }
  });
  moveToLogin.addEventListener("click", function () {
    if (!loginPopup.classList.contains("is-active")) {
      loginPopup.classList.add("is-active");
    }
    if (signupPopup.classList.contains("is-active")) {
      signupPopup.classList.remove("is-active");
    }
  });
  topBanner.addEventListener("click", function () {
    loginPopupContent.classList.add("is-active");
    signupPopup.classList.add("is-active");
  });
}
///////////////////////////////////////////////////////

// 그려주는 함수
// 그려주는 함수 전역 변수 정리
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

// 찾아온 로컬스토리지 key로 value를 저장
let tmplocal = JSON.parse(localStorage.getItem(`${listfilter}`));

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
let seartchtxt = "SEARCHED : ";
// let searchtest = seartchtxt;
// console.log(seartchtxt != "");

if (!tmplocal.desc) {
  titleh1.innerHTML = seartchtxt + `${tmplocal.name}`;
} else {
  titleh1.innerHTML = `${tmplocal.name}`;
}

// p태그 출력 / 변하는 부분 2
if (tmplocal.desc) {
  titletoptxtp.innerHTML = `${tmplocal.desc}`;
} else {
  tmplocal.desc = "";
}

// span 출력 / 변하는 부분 3
titlebottomtxta[1].innerHTML = `${tmplocal.group}`;

titlebottomtxtspan[4].innerHTML = `${tmplocal.name}`;

///////////////////////////////////////////////////////

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

// header collections 누르면 나오는 창
function navCollections() {
  let navCollectionsBtn = document.querySelector(".nav-collections-btn");
  let collectionsDropdown = document.querySelector(".collections-dropdown");
  navCollectionsBtn.addEventListener("click", function () {
    if (!collectionsDropdown.classList.contains("is-active")) {
      collectionsDropdown.classList.add("is-active");
    } else {
      collectionsDropdown.classList.remove("is-active");
    }
  });
}

function getStartName() {
  if (sessionStorage.getItem("LOGIN")) {
    let loginchk = JSON.parse(sessionStorage.getItem("LOGIN"));

    // 가져온거 변수에 저장
    let UserNickname = loginchk.nickname;

    // login 부분에 넣어주기
    let loginTag = document.querySelector("#id-login-btn");
    loginTag.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${UserNickname}`;
  } else if (sessionStorage.getItem("ADMINLOGIN")) {
    let adminSession = JSON.parse(sessionStorage.getItem("ADMINLOGIN"));

    let adminName = adminSession.name;

    let adminTag = document.querySelector("#id-login-btn");

    adminTag.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${adminName}`;
  }
}

// header Collections 누르면 나오는 Themes, Color Palettes 이미지 눌렀을때
function CollectionImg() {
  let collectionsContainer = document.querySelector(".collections-container");
  let collectionsGallery = document.querySelector(".collections-gallery");
  let collectionsGalleryItem = document.querySelectorAll(
    ".collections-gallery-item"
  );
  let collectionsItemTitle = collectionsContainer.querySelectorAll("a");

  collectionsItemTitle.forEach((v, i) => {
    collectionsItemTitle[i].addEventListener("click", function () {
      let getName = collectionsItemTitle[i].querySelector(
        ".collections-item-title"
      ).innerHTML;

      console.log(getName);

      let getGotothemes = JSON.parse(localStorage.getItem("gotothemes"));
      let getGotocolor = JSON.parse(localStorage.getItem("gotocolor"));

      getGotothemes.forEach((value) => {
        if (value.name == getName) {
          localStorage.setItem("||", JSON.stringify(value));
        }
      });

      getGotocolor.forEach((value) => {
        if (value.name == getName) {
          localStorage.setItem("||", JSON.stringify(value));
        }
      });
    });
  });
}
// Collections Themes, Color Palettes SEE ALL 눌렀을 경우
function seeAllbtn() {
  let seeAllBtn = document.querySelectorAll(".see-all-btn");

  // Themes SEE ALL
  seeAllBtn[0].addEventListener("click", function () {
    localStorage.setItem("seeAll", "themes");
  });

  // Color Palettes SEE ALL
  seeAllBtn[1].addEventListener("click", function () {
    localStorage.setItem("seeAll", "color");
  });
}

// selectthemes(themesname);

// 윈도우를 켜면 로딩이 끝난 후 함수 실행
// 추후 다른곳에서 이미지를 클릭했을대 값을 가져와 데이터 출력해야함
// window.onload = function () {
//   contentwrap.innerHTML = "";
//   selectthemes(themesname);
// };

// window.addEventListener("click", function (e) {s
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
