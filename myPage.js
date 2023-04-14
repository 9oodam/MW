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