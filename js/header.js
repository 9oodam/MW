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
              collectionOpen();
              // loginCheck1();
              // loginCheck2();
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

// header nav bar 중 collection
function collectionOpen() {
  let navCollectionsBtn = document.querySelector('.nav-collections-btn');
  let collectionsDropdown = document.querySelector('.collections-dropdown');

  navCollectionsBtn.addEventListener('click', function() {
  collectionsDropdown.classList.add('is-active')
  })
}

// header nav bar 중 myPage
function loginCheck1() {
  let loginCheck = window.sessionStorage.getItem("LOGIN");
  if(!loginCheck) {
    alert("Please login first.");
  }else {
    location.href = "./myPage.html";
  }
}

// header nav bar 중 board
function loginCheck2() {
  let loginCheck = window.sessionStorage.getItem("LOGIN");
  if(!loginCheck) {
    alert("Please login first.");
  }else {
    location.href = "./board.html";
  }
  location.href = "./board.html";
}

// header nav bar 중 search & login btn
function searchlogin(){
  // 검색 팝업 관련 변수
  let searchPopupBtn = document.querySelector('#dropdown-search-form');
  let searchPopup = document.querySelector('#search-popup');
  let popupCloseBtn = document.querySelector('#popup-close-btn');

  let search = document.querySelector(".keyword-input"); // 검색 input 창
  let searchSubmit = document.querySelector(".search-icon-btn"); // 돋보기 버튼
  let autocompleteWrap = document.querySelector(".autocomplete_wrap");
  let noImgSearched = document.querySelector(".no_img_searched");

  // 자동완성 데이터 설정
  let categoryNames = [];
  let colorsName = [
      {
        name: "BLACK",
        group: "COLORS",
        cnt: 0,
      },
      {
        name: "BLUE",
        group: "COLORS",
        cnt: 1,
      },
      {
        name: "BROWN",
        group: "COLORS",
        cnt: 2,
      },
      {
        name: "GRAY",
        group: "COLORS",
        cnt: 3,
      },
      {
        name: "GREEN",
        group: "COLORS",
        cnt: 4,
      },
      {
        name: "ORANGE",
        group: "COLORS",
        cnt: 5,
      },
      {
        name: "PINK",
        group: "COLORS",
        cnt: 6,
      },
      {
        name: "PURPLE",
        group: "COLORS",
        cnt: 7,
      },
      {
        name: "RED",
        group: "COLORS",
        cnt: 8,
      },
      {
        name: "TURQUOISE",
        group: "COLORS",
        cnt: 9,
      },
      {
        name: "WHITE",
        group: "COLORS",
        cnt: 10,
      },
      {
        name: "YELLOW",
        group: "COLORS",
        cnt: 11,
      },
  ];
  let themesName = [
      {
        name: "CABLE CARS",
        group: "THEMES",
        cnt: 0,
      },
      {
        name: "CLASSIC FACADES",
        group: "THEMES",
        cnt: 1,
      },
      {
        name: "DOORS",
        group: "THEMES",
        cnt: 2,
      },
      {
        name: "EDUCATIONAL INSTITUTIONS",
        group: "THEMES",
        cnt: 3,
      },
      {
        name: "GOVERNMENT BUILDINGS",
        group: "THEMES",
        cnt: 4,
      },
      {
        name: "HIDDEN WONDESRS",
        group: "THEMES",
        cnt: 5,
      },
      {
        name: "HOTEL / MOTEL",
        group: "THEMES",
        cnt: 6,
      },
      {
        name: "INTERIORS",
        group: "THEMES",
        cnt: 7,
      },
      {
        name: "LIBRARY",
        group: "THEMES",
        cnt: 8,
      },
      {
        name: "LIGHTHOUSE",
        group: "THEMES",
        cnt: 9,
      },
      {
        name: "MUSEUM",
        group: "THEMES",
        cnt: 10,
      },
      {
        name: "NATURE",
        group: "THEMES",
        cnt: 11,
      },
  ];

  for (let i = 0; i < colorsName.length; i++) {
      let temp = colorsName[i].name;
      categoryNames.push(temp);
  }
  for (let i = 0; i < themesName.length; i++) {
      let temp = themesName[i].name;
      categoryNames.push(temp);
  }  

  // 검색창 popup
  searchPopupBtn.addEventListener('click', function() {
      searchPopup.classList.add('is-active');
  });
  popupCloseBtn.addEventListener('click', function() {
      searchPopup.classList.remove('is-active');
  });

  // 검색 함수
  search.addEventListener('keyup', function() {
    // Enter 누르면 submit 됨
    if(window.event.keyCode === 13) {
        window.event.preventDefault();
        searchSubmit.click();
    }

    // autocomplete 비우기
    autocompleteWrap.innerHTML = "";
    let searchInput = search.value.toUpperCase();

    // input 창에 입력한 문자로 시작하는 것만 배열로 담음
    let autocomplete = categoryNames.filter(function(e) {
        return e.startsWith(searchInput);
    });
    console.log(autocomplete);

    autocomplete.forEach(function(suggested) {
        let div = document.createElement("div");
        div.innerHTML = suggested;
        autocompleteWrap.appendChild(div);

        div.onclick = () => {
            searchInput = div.innerHTML;
            autocompleteWrap.innerHTML = "";
            console.log(searchInput);
            moveToCollist(searchInput);
        }
    });
    if(searchInput == "") {
        autocompleteWrap.innerHTML = "";
    }
  });

  // 돋보기 버튼 눌렀을 때
  searchSubmit.addEventListener("click", function() {
    let searchInput = search.value.toUpperCase();
    console.log("검색: ", searchInput);    

    // 찾는 게 있을 경우 & 없을 경우
    let findCategory = [];
    if(!searchInput) {
      noImgSearched.classList.add('is-active')
    }else {      
      for (let i = 0; i < categoryNames.length; i++) {
          if(categoryNames[i].startsWith(searchInput)) {
              console.log("검색 성공");
              findCategory.push(categoryNames[i]);
          }
  
          if(findCategory == "") {
              console.log("검색 실패");
              noImgSearched.classList.add('is-active');
          }else {
              noImgSearched.classList.remove('is-active');
          }
      }
      moveToCollist(findCategory[0]);
    }
  });

  // 검색 값 받아서 collist로 이동
  function moveToCollist(input) {
    console.log(input);

    // input값 받아와서 로컬스토리지 생성
    for (let i = 0; i < colorsName.length; i++) {
        let temp = colorsName[i].name;
        if(input == temp) {
            localStorage.setItem("||", JSON.stringify(colorsName[i]));
        }
    }
    for (let i = 0; i < themesName.length; i++) {
        let temp = themesName[i].name;
        if(input == temp) {
            localStorage.setItem("||", JSON.stringify(themesName[i]));
        }
    }

    // collist로 이동
    location.href = "./collist.html";
  }


  // 로그인 & 회원가입 팝업 관련 변수
  let topBanner = document.querySelector(".top_banner"); // 최상단 빨간 배너

  let loginPopupContent = document.querySelector('.login-popup-content');
  let idLoginBtn = document.querySelector('#id-login-btn');
  let logincloseBtn = document.querySelector('#login-close-btn');
  let signupcloseBtn = document.querySelector('#signup-close-btn');

  let loginPopup = document.querySelector(".login_popup"); // 로그인 창
  let signupPopup = document.querySelector(".signup_popup"); // 회원가입 창
  let moveToSignup = document.querySelector(".move_to_signup"); // 회원가입으로 이동
  let moveToLogin = document.querySelector(".move_to_login");

  // 로그인 & 회원가입 popup
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