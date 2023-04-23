let sessionChk = JSON.parse(sessionStorage.getItem("test"));
let users = JSON.parse(localStorage.getItem("USER"));
let myImgJson = JSON.parse(localStorage.getItem("MYIMG"));

let testid = {
  nickname: "test",
  name: "test",
};

// test userlist
let userlist1 = {
  nickname: "test",
  name: "test",
  pw: "test",
  lv: 1,
};
let userlist2 = {
  nickname: "test1",
  name: "test1",
  pw: "test1",
  lv: 1,
};
let userlist3 = {
  nickname: "test3",
  name: "test3",
  pw: "test3",
  lv: 0,
};

let userlist = [userlist1, userlist2, userlist3];

// localStorage.setItem("USER", JSON.stringify(userlist));
// sessionStorage.setItem("test", JSON.stringify(testid));

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

            sessionLoginChk(sessionChk);
            myPageUserInfo(sessionChk);
            myPageEditProfile(sessionChk);
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
function searchlogin() {
  // 검색 팝업 관련 변수
  let searchPopupBtn = document.querySelector("#dropdown-search-form");
  let searchPopup = document.querySelector("#search-popup");
  let popupCloseBtn = document.querySelector("#popup-close-btn");

  // 검색창 popup
  searchPopupBtn.addEventListener("click", function () {
    searchPopup.classList.add("is-active");
  });
  popupCloseBtn.addEventListener("click", function () {
    searchPopup.classList.remove("is-active");
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

// ❗❗❗❗❗❗❗❗❗❗ myPage 관련 js 시작 ❗❗❗❗❗❗❗❗❗❗ //

// 프로필 수정 팝업창 열고 닫는 버튼
let popupBtn = document.querySelector(".popup_btn");
// 수정 저장하는 버튼
let saveBtn = document.querySelector(".save_btn");
// saveBtn.addEventListener("click", addList);
// saveBtn.addEventListener("click", popupOpen);

// 회원 정보 수정
saveBtn.addEventListener("click", myPageUserUpdate);

// 팝업창 열고 닫기
function popupOpen() {
  let editPopup = document.querySelector(".edit_popup_wrap");
  if (editPopup.classList.contains("is-active")) {
    editPopup.classList.remove("is-active");
  } else {
    editPopup.classList.add("is-active");
  }
}

// Settings 팝업창 열고 닫는 버튼
let deleteBtn = document.querySelector(".delete_btn");
// saveBtn.addEventListener("click", addList);
// deleteBtn.addEventListener("click", popupOpen2);

// 회원 탈퇴 기능
deleteBtn.addEventListener("click", userDelete);

// 팝업창 열고 닫기
function popupOpen2() {
  let settingsPopup = document.querySelector(".settings_popup_wrap");
  if (settingsPopup.classList.contains("is-active")) {
    settingsPopup.classList.remove("is-active");
  } else {
    settingsPopup.classList.add("is-active");
  }
}

// Collections
// submit에서 사진 추가할 때마다 div 추가?

// 추가되는 곳
let _collections = document.querySelector(".profile_content_list");

function addCollections() {
  _collections.innerHTML = "";
  if (!localStorage.getItem("MYIMG")) {
    return;
  }
  //   console.log("사진 추가");

  // let myImgJson = localStorage.getItem("MYIMG"); // 올린 이미지 읽어오기
  // let myImg = JSON.parse(myImgJson);
  //   console.log(myImg);

  myImgJson.forEach(function (i, index) {
    if (sessionChk.name == i.name) {
      let div = document.createElement("div"); // 사진 들어갈 div
      let deleteImgBtn = document.createElement("div"); // 삭제 버튼

      div.classList.add("collection_img");
      deleteImgBtn.classList.add("delete_img_btn");
      deleteImgBtn.setAttribute("onclick", "imgdelete()");

      div.innerHTML = "<img src='" + myImgJson[index].img + "' alt='myImgJson" + [index] + "'>";
      deleteImgBtn.innerHTML = "X";
      div.append(deleteImgBtn);
      _collections.appendChild(div);

      // let deleteArr = [];
      // deleteImgBtn.addEventListener("click", function () {
      //   myImgJson.splice(index, 1);
      //   //   console.log(myImgJson);
      // });
    }
  });
}
addCollections();

// myPage 이미지 X 버튼 클릭시 사진 삭제
function imgdelete() {
  if (confirm("사진을 삭제 하시겠습니까?")) {
    // alert("삭제");
    myImgJson.forEach((value, index) => {
      if (sessionChk.name == value.name) {
        // console.log(value.nickname, value.title);

        let themesimg = JSON.parse(localStorage.getItem("THEMESIMG"));
        themesimg.forEach((tvalue) => {
          // if (tvalue[value.title] == value.title) {
          //   console.log(tvalue);
          // }
          if (tvalue[value.title]) {
            tvalue[value.title].forEach((innerValue, innerIndex) => {
              if (innerValue.name == sessionChk.name) {
                // console.log(innerValue);
                // console.log(tvalue[value.title][innerIndex]);
                tvalue[value.title].splice(innerIndex, 1);
                myImgJson.splice(index, 1);
                // console.log(themesimg);
                // console.log(myImgJson);

                localStorage.setItem("THEMESIMG", JSON.stringify(themesimg));
                localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
                addCollections();
              }
            });
          }
          // console.log(tvalue[value.title]);
        });

        let colorimg = JSON.parse(localStorage.getItem("COLORIMG"));
        colorimg.forEach((tvalue) => {
          // if (tvalue[value.title] == value.title) {
          //   console.log(tvalue);
          // }
          if (tvalue[value.title]) {
            tvalue[value.title].forEach((innerValue, innerIndex) => {
              if (innerValue.nickname == sessionChk.nickname) {
                // console.log(innerValue);
                // console.log(tvalue[value.title][innerIndex]);
                tvalue[value.title].splice(innerIndex, 1);
                myImgJson.splice(index, 1);
                // console.log(colorimg);
                // console.log(myImgJson);

                localStorage.setItem("COLORIMG", JSON.stringify(colorimg));
                localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
                addCollections();
              }
            });
          }
          // console.log(tvalue[value.title]);
        });
        // console.log(themeseimg.length);
      }
    });
  } else {
    return;
  }
}

let deleteImgBtn = document.querySelectorAll(".delete_img_btn"); // 삭제 버튼

// if (deleteImgBtn) {
//   deleteImgBtn.addEventListener("click", function () {
//     // console.log(myImgJson);
//     // console.log("push");

//     if (confirm("사진을 삭제 하시겠습니까?")) {
//       // alert("삭제");
//       myImgJson.forEach((value, index) => {
//         if (sessionChk.nickname == value.nickname) {
//           console.log(value.nickname, value.title);
//           let themesimg = JSON.parse(localStorage.getItem("THEMESIMG"));
//           themesimg.forEach((tvalue) => {
//             // if (tvalue[value.title] == value.title) {
//             //   console.log(tvalue);
//             // }
//             if (tvalue[value.title]) {
//               tvalue[value.title].forEach((innerValue, innerIndex) => {
//                 if (innerValue.nickname == sessionChk.nickname) {
//                   // console.log(innerValue);
//                   // console.log(tvalue[value.title][innerIndex]);
//                   tvalue[value.title].splice(innerIndex, 1);
//                   myImgJson.splice(index, 1);
//                   // console.log(themesimg);
//                   // console.log(myImgJson);

//                   localStorage.setItem("THEMESIMG", JSON.stringify(themesimg));
//                   localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
//                   addCollections();
//                 }
//               });
//             }
//             // console.log(tvalue[value.title]);
//           });
//           let colorimg = JSON.parse(localStorage.getItem("COLORIMG"));

//           // console.log(themeseimg.length);
//         }
//       });
//     } else {
//       return;
//     }
//   });
// }

// 세션스토리지에 유저가 있으면 정보를 가져와 로그인 창을 그려줌
function sessionLoginChk(sessionChk) {
  let loginTag = document.querySelector("#id-login-btn");
  if (sessionChk) {
    loginTag.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${sessionChk.name}`;
  }
  return sessionChk;
}

// myPage nickname, name 출력
function myPageUserInfo(sessionChk) {
  let profilePanelHeader = document.querySelector(".profile_panel_header");
  let profilePanelHeaderH2 = profilePanelHeader.querySelector("h2");
  let profilePanelHeaderH4 = profilePanelHeader.querySelector("h4");

  profilePanelHeaderH2.innerHTML = sessionChk.nickname;
  profilePanelHeaderH4.innerHTML = sessionChk.name;
}

// myPage Edit Profile nickname, name 불러오기
function myPageEditProfile(sessionChk) {
  let editPopupBody = document.querySelector(".edit_popup_body");
  let editNickname = editPopupBody.querySelector("#edit_nickname");
  let editName = editPopupBody.querySelector("#edit_name");

  // editNickname 요소의 placeholder 속성을 sessionChk.nickname 값으로 설정
  editNickname.setAttribute("placeholder", sessionChk.nickname);
  // editName 요소의 placeholder 속성을 sessionChk.name 값으로 설정
  editName.setAttribute("placeholder", sessionChk.name);

  // console.log(editNickname.placeholder);
  return sessionChk;
}

// myPage Edit Profile ninkname, name 수정
function myPageUserUpdate() {
  let editPopupBody = document.querySelector(".edit_popup_body");
  let editNickname = editPopupBody.querySelector("#edit_nickname");
  let editName = editPopupBody.querySelector("#edit_name");

  // console.log(editNickname.placeholder);
  // console.log(editNickname.value);

  // Edit profile 에 아무것도 입력안했을때 기존의 회원 정보 유지
  if (!editNickname.value) {
    editNickname.value = editNickname.placeholder;
  }
  if (!editName.value) {
    editName.value = editName.placeholder;
  }
  if (editNickname.value && editName.value) {
    console.log(editNickname.value);

    users.forEach((value) => {
      // console.log(value.name);
      if (value.nickname == sessionChk.nickname && value.name == sessionChk.name) {
        // console.log(editNickname.value);
        value.nickname = editNickname.value;
        value.name = editName.value;

        // console.log(value);
      }
    });

    // 객체의 속성을 수정
    sessionChk.nickname = editNickname.value;
    // sessionChk.name = editName.value;

    // sessionChk.nickname = editNickname.placeholder || sessionChk.nickname;
    // sessionChk.name = editName.placeholder || sessionChk.name;

    localStorage.setItem("USER", JSON.stringify(users));

    sessionStorage.setItem("test", JSON.stringify(sessionChk));

    alert("회원 정보 수정완료");
    setTimeout(() => {
      sessionLoginChk(sessionChk);
      myPageUserInfo(sessionChk);
      // location.reload();
    }, 100);
  }

  // if (editNickname.placeholder == editNickname.value) {
  //   alert("전의 닉네임과 동일합니다.");
  // } else if (editName.placeholder == editName.value) {
  //   alert("전의 이름과 동일합니다.");
  // }
}

// Delete your MW Account
function userDelete() {
  let check1 = document.querySelector("#check1");
  let check2 = document.querySelector("#check2");
  // console.log(check1.checked);
  // console.log(check2.checked);

  if (!check1.checked || !check2.checked) {
    alert("약관에 동의해주세요.");
  } else {
    users.forEach((value, index) => {
      if (value.name == sessionChk.name) {
        // console.log(value);
        // console.log(index);
        users.splice(index, 1);

        localStorage.setItem("USER", JSON.stringify(users));
        alert("이용해주셔서 감사합니다.");
        setTimeout(() => {
          sessionStorage.clear();
          location.href = "./submit.html";
        }, 100);
      }
    });
  }
}
