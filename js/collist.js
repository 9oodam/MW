// card 생성자
function createcard(title, img, country, location, description) {
  this.title = title;
  this.img = img;
  this.country = country;
  this.location = location;
  this.description = description;
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
titletoptxtp.innerHTML = `${tmplocal.desc}`;

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

console.log(Object.keys(readthemes[0]));

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
