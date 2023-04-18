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