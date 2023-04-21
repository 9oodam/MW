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
  
// header 우상단 search & login btn
function searchlogin(){
    // 검색 팝업 관련 변수
    let searchPopupBtn = document.querySelector('#dropdown-search-form')
    let searchPopup = document.querySelector('#search-popup')
    let popupCloseBtn = document.querySelector('#popup-close-btn')

    // 검색창 popup
    searchPopupBtn.addEventListener('click', function() {
        searchPopup.classList.add('is-active');
    });
    popupCloseBtn.addEventListener('click', function() {
        searchPopup.classList.remove('is-active');
    });

    // 로그인 팝업 관련 변수
    let topBanner = document.querySelector(".top_banner"); // 최상단 빨간 배너

    let loginPopupContent = document.querySelector('.login-popup-content');
    let idLoginBtn = document.querySelector('#id-login-btn');
    let logincloseBtn = document.querySelector('#login-close-btn');
    let signupcloseBtn = document.querySelector('#signup-close-btn');

    let loginPopup = document.querySelector(".login_popup"); // 로그인 창
    let signupPopup = document.querySelector(".signup_popup"); // 회원가입 창
    let moveToSignup = document.querySelector(".move_to_signup"); // 회원가입으로 이동
    let moveToLogin = document.querySelector(".move_to_login");

    // 로그인 popup
    idLoginBtn.addEventListener('click', function() {
        loginPopupContent.classList.add('is-active');
        loginPopup.classList.add('is-active');
    });
    logincloseBtn.addEventListener('click', function(){
        loginPopupContent.classList.remove('is-active');
        loginPopup.classList.remove('is-active');
        signupPopup.classList.remove('is-active');
    });
    signupcloseBtn.addEventListener('click', function(){
        loginPopupContent.classList.remove('is-active');
        loginPopup.classList.remove('is-active');
        signupPopup.classList.remove('is-active');
    });

    moveToSignup.addEventListener("click", function() {
        if(!signupPopup.classList.contains('is-active')) {
            signupPopup.classList.add('is-active');
        }
        if(loginPopup.classList.contains('is-active')) {
            loginPopup.classList.remove('is-active');
        }
    });
    moveToLogin.addEventListener("click", function() {
        if(!loginPopup.classList.contains('is-active')) {
            loginPopup.classList.add('is-active');
        }
        if(signupPopup.classList.contains('is-active')) {
            signupPopup.classList.remove('is-active');
        }
    });
    topBanner.addEventListener('click', function() {
        loginPopupContent.classList.add('is-active');
        signupPopup.classList.add('is-active');
    });
}


// ❗❗❗❗❗❗❗❗❗❗ myPage 관련 js 시작 ❗❗❗❗❗❗❗❗❗❗ //

// 프로필 수정 팝업창 열고 닫는 버튼
let popupBtn = document.querySelector(".popup_btn");
// 수정 저장하는 버튼
let saveBtn = document.querySelector(".save_btn");
// saveBtn.addEventListener("click", addList);
saveBtn.addEventListener("click", popupOpen);

// 팝업창 열고 닫기
function popupOpen() {
    let editPopup = document.querySelector(".edit_popup_wrap");
    if(editPopup.classList.contains("is-active")) {
        editPopup.classList.remove("is-active");
    }else {
        editPopup.classList.add("is-active");
    }
}


// Settings 팝업창 열고 닫는 버튼
let deleteBtn = document.querySelector(".delete_btn");
// saveBtn.addEventListener("click", addList);
deleteBtn.addEventListener("click", popupOpen2);

// 팝업창 열고 닫기
function popupOpen2() {
    let settingsPopup = document.querySelector(".settings_popup_wrap");
    if(settingsPopup.classList.contains("is-active")) {
        settingsPopup.classList.remove("is-active");
    }else {
        settingsPopup.classList.add("is-active");
    }
}


// Collections
// submit에서 사진 추가할 때마다 div 추가?

// 추가되는 곳
let _collections = document.querySelector(".profile_content_list");

function addCollections() {
    console.log("사진 추가");

    let myImgJson = localStorage.getItem("MYIMG"); // 올린 이미지 읽어오기
    let myImg = JSON.parse(myImgJson);
    console.log(myImg);

    myImg.forEach(function(i, index) {
        let div = document.createElement("div"); // 사진 들어갈 div
        let deleteImgBtn = document.createElement("div"); // 삭제 버튼

        div.classList.add("collection_img");
        deleteImgBtn.classList.add("delete_img_btn");

        div.innerHTML = "<img src='" + myImg[index].img + "' alt='myImg" + [index] + "'>";
        deleteImgBtn.innerHTML = "X";
        div.append(deleteImgBtn);
        _collections.appendChild(div);

        let deleteArr = [];
        deleteImgBtn.addEventListener("click", function() {
            myImg.splice(index, 1);
            console.log(myImg);
        });
    });

}
addCollections();