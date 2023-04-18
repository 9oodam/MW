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

// search btn
function searchlogin(){
let ta = document.querySelector(".he");
// 검색 팝업 관련 (숨어있다 나오는)
let searchPopupBtn = ta.querySelector('#dropdown-search-form');
let searchPopup = ta.querySelector('#search-popup');
let popupCloseBtn = ta.querySelector('#popup-close-btn');
// 로그인 팝업 관련 (숨어있다 나오는)
let loginPopupContent = ta.querySelector('.login-popup-content')
let idLoginBtn = ta.querySelector('#id-login-btn')

let logincloseBtn = ta.querySelector('#login-close-btn')

// 🔷 로그인 popup
idLoginBtn.addEventListener('click', function() {
    loginPopupContent.classList.add('is-active')
});
logincloseBtn.addEventListener('click', function(){
    loginPopupContent.classList.remove('is-active')
});

// 🔷 검색창 popup
searchPopupBtn.addEventListener('click', function() {
  searchPopup.classList.add('is-active')
});

popupCloseBtn.addEventListener('click', function() {
  searchPopup.classList.remove('is-active')
});
}  


////////////////////////////////////////////////////

let contenttab = document.querySelector(".contenttab");
let tabs = contenttab.querySelectorAll("span");

// 이미지 그려주는 함수
function imgcard5(a) {
  // console.log(a);
  // console.log(a.mainimg);
  let imgcards = document.querySelector(".imgcards");
  let imgcard = document.createElement("div");
  let imgcardin = document.createElement("div");
  let img = document.createElement("img");
  let img2 = document.createElement("img");
  let imgbtm = document.createElement("div");
  let imgbtmtxt = document.createElement("div");
  let ctspan = document.createElement("span");
  let cardtxtbox = document.createElement("div");
  let cardtxt = document.createElement("div");
  let cta = document.createElement("a");
  let ctp = document.createElement("p");
  let ctp2 = document.createElement("p");
  let cardimg = document.createElement("div");

  imgcard.className = "imgcard";
  imgcardin.className = "imgcardin";
  img.src = a.mainimg;
  imgbtm.className = "imgbtm";
  imgbtmtxt.className = "imgbtmtxt";
  ctspan.innerHTML = "PRESENTED WITH";
  img2.src = a.logoimg;
  cardtxtbox.className = "cardtxtbox";
  cardtxt.className = "cardtxt";
  cta.innerHTML = a.title;
  ctp.innerHTML = a.text;
  ctp2.innerHTML = a.tab;

  cardimg.className = "cardimg";
  cardtxt.append(cta);
  cardtxt.append(ctp);
  cardtxt.append(ctp2);
  cardtxtbox.append(cardtxt);

  imgbtmtxt.append(ctspan);
  imgbtmtxt.append(img2);
  imgbtm.append(imgbtmtxt);

  cardimg.append(img);
  cardimg.append(imgbtm);
  imgcardin.append(cardimg);
  imgcardin.append(cardtxtbox);
  imgcard.append(imgcardin);
  imgcards.append(imgcard);
}

function imgcard4(a) {
  let imgcards = document.querySelector(".imgcards");
  let imgcard = document.createElement("div");
  let imgcardin = document.createElement("div");
  let img = document.createElement("img");
  let cardtxtbox = document.createElement("div");
  let cardtxt = document.createElement("div");
  let cta = document.createElement("a");
  let ctp = document.createElement("p");
  let ctp2 = document.createElement("p");
  let cardimg = document.createElement("div");

  imgcard.className = "imgcard";
  imgcardin.className = "imgcardin";
  img.src = a.mainimg;
  cardtxtbox.className = "cardtxtbox";
  cardtxt.className = "cardtxt";
  cta.innerHTML = a.title;
  ctp.innerHTML = a.text;
  ctp2.innerHTML = a.tab;

  cardimg.className = "cardimg";
  cardtxt.append(cta);
  cardtxt.append(ctp);
  cardtxt.append(ctp2);
  cardtxtbox.append(cardtxt);

  cardimg.append(img);
  imgcardin.append(cardimg);
  imgcardin.append(cardtxtbox);
  imgcard.append(imgcardin);
  imgcards.append(imgcard);
}

// stories 페이지 로딩시 ALL 표출
window.onload = function () {
  allcard();
};

// 전체 이미지 출력 함수
function allcard() {
  let spl;
  let splarr = [];
  // console.log(tabs[0]);
  let tabarr = [];
  let tmparr = [];
  tabs.forEach((a, index) => {
    spl = a.innerHTML.split(" ");
    splarr.push(spl[0]);
    tmparr = JSON.parse(localStorage.getItem(spl[0]));
    tabarr.push(tmparr);
  });
  tabarr.shift();
  splarr.shift();

  tabarr.forEach((value, index) => {
    // console.log(Object.keys(tabarr[index][index]).length);
    // console.log(tabarr[index]);
    if (Object.keys(tabarr[index][0]).length == 5) {
      tabarr[index].forEach((value) => {
        imgcard5(value);
      });
    }
    if (Object.keys(tabarr[index][0]).length == 4) {
      tabarr[index].forEach((value) => {
        imgcard4(value);
      });
    }
  });
}
// tab 누르면 누른 탭의 내용 실행
// tabs[0].addEventListener("click", function () {
//   alla();
// });
tabs.forEach(function (a, b) {
  tabs[b].addEventListener("click", function () {
    // console.log(tabs[b].innerHTML);
    // console.log(typeof a.innerHTML);
    let spl = a.innerHTML.split(" ");
    // console.log(spl[0]);
    let aabb = JSON.parse(localStorage.getItem(spl[0]));
    // console.log(Object.keys(aabb[0]).length);
    let imgcards = document.querySelector(".imgcards");

    imgcards.innerHTML = "";

    if (tabs[b].innerHTML == "ALL") {
      allcard();
      return;
    }

    if (Object.keys(aabb[0]).length == 5) {
      aabb.forEach((a) => {
        imgcard5(a);
      });
    }
    if (Object.keys(aabb[0]).length == 4) {
      aabb.forEach((a) => {
        imgcard4(a);
      });
    }
  });
});

// let te = ["a", "b", "c", "d", "e"];
// let tee = ["a", "b", "c", "d"];

// console.log(Object.keys(itd01).length);
// console.log(Object.keys(qual01).length);

/////////////////////////////////////////////

// // stories card info localstorage save
// // let cardinfo = document.querySelector(".cardtxt");
// let cardtitle = "Modular Accommodations";
// // let cardpall = cardinfo.querySelectorAll("p");
// let cardtext =
//   "Rising above Denver’s flourishing RiNo neighborhood, the Catbird Hotel is playful and eccentric.";
// let cardtab = "IN THE DETAILS";
// let img1 =
//   "https://accidentallywesanderson.com/wp-content/uploads/2023/04/catbirrd-800x800.jpg";
// let ITDimg =
//   "https://accidentallywesanderson.com/wp-content/uploads/2021/12/dlr-group_bug1.png";

// // console.log(cardtitle);
// // console.log(cardtext);
// // console.log(cardtab);
// function createITD(title, text, tab, img1, ITDimg) {
//   this.title = title;
//   this.text = text;
//   this.tab = tab;
//   this.img1 = img1;
//   this.ITDimg = ITDimg;
// }

// let testlocal = new createITD(cardtitle, cardtext, cardtab, img1, ITDimg);
// let testlocal2 = new createITD(cardtitle, cardtext, cardtab, img1, ITDimg);

// localStorage.setItem("INTHEDETAILS", JSON.stringify([testlocal]));
// let abc = JSON.parse(localStorage.getItem("INTHEDETAILS"));

// let abb = testlocal2;
// (function () {
//   console.log("test");
//   abc.push(abb);
//   console.log(abc);
//   localStorage.setItem("INTHEDETAILS", JSON.stringify(abc));
// })();

// // 로컬 스토리지에 정보가 있으면 가져와서 카드를 만듬
// if (localStorage.getItem("INTHEDETAILS").length != 0) {
//   let tlocal = JSON.parse(localStorage.getItem("INTHEDETAILS"));
//   tlocal.forEach((a, b) => {
//     console.log(tlocal);
//     console.log(tlocal[b].title);
//     let imgcards = document.querySelector(".imgcards");
//     let imgcard = document.createElement("div");
//     let imgcardin = document.createElement("div");
//     let img = document.createElement("img");
//     let img2 = document.createElement("img");
//     let imgbtm = document.createElement("div");
//     let imgbtmtxt = document.createElement("div");
//     let ctspan = document.createElement("span");
//     let cardtxtbox = document.createElement("div");
//     let cardtxt = document.createElement("div");
//     let cta = document.createElement("a");
//     let ctp = document.createElement("p");
//     let ctp2 = document.createElement("p");
//     let cardimg = document.createElement("div");

//     imgcard.className = "imgcard";
//     imgcardin.className = "imgcardin";
//     img.src = tlocal[b].img1;
//     imgbtm.className = "imgbtm";
//     imgbtmtxt.className = "imgbtmtxt";
//     ctspan.innerHTML = "PRESENTED WITH";
//     img2.src = tlocal[b].ITDimg;
//     cardtxtbox.className = "cardtxtbox";
//     cardtxt.className = "cardtxt";
//     cta.innerHTML = tlocal[b].title;
//     ctp.innerHTML = tlocal[b].text;
//     ctp2.innerHTML = tlocal[b].tab;

//     cardimg.className = "cardimg";
//     cardtxt.append(cta);
//     cardtxt.append(ctp);
//     cardtxt.append(ctp2);
//     cardtxtbox.append(cardtxt);

//     imgbtmtxt.append(ctspan);
//     imgbtmtxt.append(img2);
//     imgbtm.append(imgbtmtxt);

//     cardimg.append(img);
//     cardimg.append(imgbtm);
//     imgcardin.append(cardimg);
//     imgcardin.append(cardtxtbox);
//     imgcard.append(imgcardin);
//     imgcards.append(imgcard);
//   });
// }
