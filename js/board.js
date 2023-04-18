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
  
// 전역 변수
let _json = '{"key" : "value"}';
let _board = document.querySelector(".board_body");
let _title = document.querySelector("#title").value;
let _detailsPrev = document.querySelector("#details").value;
let _details = _detailsPrev.replace(/(?:\r\n|\r|\n)/g, '<br>');

// 게시글 제출하는 팝업창 열고 닫기 (write 버튼)
let popupBtn = document.querySelector(".popup_btn");
function popupOpen() {
    let msgPopup = document.querySelector(".msg_popup_wrap");
    if(msgPopup.classList.contains("is-active")) {
        msgPopup.classList.remove("is-active");
    }else {
        msgPopup.classList.add("is-active");
    }
}

// 게시글 제출하기 (input 창이 비어있는지 체크)
let submitBtn = document.querySelector(".submit_btn");
submitBtn.addEventListener("click", submitCheck);
function submitCheck() {
    let _title = document.querySelector("#title").value;
    let _detailsPrev = document.querySelector("#details").value;
    let titleInput = document.querySelector("#title");
    let detailsInput = document.querySelector("#details");

    if(!_title == "") {
        if(titleInput.classList.contains("is-empty")) {
            titleInput.classList.remove("is-empty");
        }
    }
    if(!_detailsPrev == "") {
        if(detailsInput.classList.contains("is-empty")) {
            detailsInput.classList.remove("is-empty");
        }
    }

    if(_title == "") {
        alert("Please fiil out the Title.");
        titleInput.classList.add("is-empty");
    }else if(_detailsPrev == "") {
        alert("Please fiil out the Details.");
        detailsInput.classList.add("is-empty");
    }else {
        addList();
        popupOpen();
        
        // 게시글 팝업 안에 input 초기화
        let titleText = document.getElementsByClassName('titleText');
        let detailsText = document.getElementsByClassName('details');
        for(let i=0; i<titleText.length; i++){
            titleText[i].value = '';
            detailsText[i].value = '';
        }
    }
}

// 게시글 리스트 추가
function addList() {
    console.log("리스트 추가 시작");
    let _title = document.querySelector("#title").value;
    let _detailsPrev = document.querySelector("#details").value;
    let _details = _detailsPrev.replace(/(?:\r\n|\r|\n)/g, '<br>');

    // month 앞에 0 붙이기
    function getFormattedMonth(date) {
        const month = date.getMonth() + 1; // 월을 1부터 시작하도록 조정
        return month.toString().padStart(2, '0'); // 월 앞에 0을 붙여 두 자리 숫자로 만듭니다.
    }
    let time = new Date();
    let month = getFormattedMonth(time);
    let year = time.getFullYear();
    let date = time.getDate();
    
    let _date = String(`${year}-${month}-${date}`);
    console.log(_date);
    
    let value = window.localStorage.getItem("bulletin-board");
    console.log(value); 

    if(!value) {
        console.log("리스트 첫 추가");
        window.localStorage.setItem("bulletin-board", `{"title" : "${_title}", "details" : "${_details}", "nickname" : "", "date" : "${_date}"}`);
    }else {
        console.log("리스트 추가 추가");
        window.localStorage.setItem("bulletin-board", value + "|" + `{"title" : "${_title}", "details" : "${_details}", "nickname" : "", "date" : "${_date}"}`);
    }
    console.log(window.localStorage.getItem("bulletin-board"));

    _board.innerHTML = "";

    // 만들어진 로컬스토리지를 배열로
    let _json = window.localStorage.getItem("bulletin-board");
    let _json2 = []; // 빈 배열 생성
    let _split = _json.split("|");
    _split.forEach(function(i, index) {
        _json2.push(JSON.parse(_split[index]));
    });
    console.log(_json2);

    render(_json2);
    location.reload();
}

// 렌더링
function render(_json2) {
    console.log(_json2);

    let _ul = document.createElement("ul");
    _ul.classList.add("board_list");
    let _li = document.createElement("li");

    let _div1 = document.createElement("div");
    let _div2 = document.createElement("div");
    let _div3 = document.createElement("div");
    let _div4 = document.createElement("div");

    _div1.innerHTML = "No";
    _div2.innerHTML = "Title";
    _div3.innerHTML = "Name";
    _div4.innerHTML = "Date";

    _div1.classList.add("list_top");
    _div2.classList.add("list_top");
    _div3.classList.add("list_top");
    _div4.classList.add("list_top");
    _div1.classList.add("list_no");
    _div2.classList.add("list_title");
    _div3.classList.add("list_name");
    _div4.classList.add("list_date");

    _li.append(_div1, _div2, _div3, _div4);
    _ul.append(_li);

    for (let i = 0; i < _json2.length; i++) {
        let _li = document.createElement("li");

        let _div1 = document.createElement("div");
        let _div2 = document.createElement("div");
        let _div3 = document.createElement("div");
        let _div4 = document.createElement("div");
    
        let indexNum = i; 
        _div1.innerHTML = indexNum+1; // 리스트에 보여지는 번호
        _div2.innerHTML = _json2[i].title;
        _div3.innerHTML = _json2[i].nickname;
        _div4.innerHTML = _json2[i].date;
    
        _div1.classList.add("list_no");
        _div2.classList.add("list_title");
        _div3.classList.add("list_name");
        _div4.classList.add("list_date");

        _li.append(_div1, _div2, _div3, _div4);
        _ul.append(_li);
        
        _div2.addEventListener("click", function() {
            popupOpen2(indexNum, _json2); // title 누르면 게시글 팝업창 열림 
        });
    }
    _board.append(_ul);
}

window.onload = function() {
    let _json = window.localStorage.getItem("bulletin-board");
    let _json2 = []; // 빈 배열 생성
    let _split = _json.split("|");
    _split.forEach(function(i, index) {
        _json2.push(JSON.parse(_split[index]));
    });
    console.log(_json2);

    render(_json2); 
    pagination(_json2);
}

// 작성된 게시글 보여주는 팝업창 열고 닫기
let popupBtn2 = document.querySelector(".popup_btn2");
let deleteBtn = document.querySelector(".delete_btn");
function popupOpen2(indexNum, _json2) {
    console.log("선택된 게시글의 인덱스: " + indexNum);

    let msgPopup = document.querySelector(".content_popup_wrap");
    if(msgPopup.classList.contains("is-active")) {
        msgPopup.classList.remove("is-active");
    }else {
        msgPopup.classList.add("is-active");
        renderTD(indexNum, _json2);
        adminAnswer(indexNum, _json2);

        deleteBtn.addEventListener("click", function() {
            console.log("삭제 버튼 눌림");
            deleteList(indexNum, _json2);
        });
    }
}

// 게시글 팝업에 로컬스토리지에 저장된 title, details 불러오기
function renderTD(indexNum, _json2) {
    console.log("선택된 게시글의 인덱스: " + indexNum);

    let inputIndex = document.querySelector(".input_index");
    let inputTitle = document.querySelector(".input_title");
    let inputDetails = document.querySelector(".input_details");

    /*
    let _json = window.localStorage.getItem("bulletin-board");
    let _json2 = []; // 빈 배열 생성
    let _split = _json.split("|");
    console.log(_split);
    _split.forEach(function(i, index) {
        _json2.push(JSON.parse(_split[index]));
    });
    console.log(_json2);
    */

    inputIndex.innerHTML = `No. ${indexNum+1}`;
    inputTitle.innerHTML = _json2[indexNum].title;
    inputDetails.innerHTML = _json2[indexNum].details;
}

// 게시판 리스트 삭제
function deleteList(indexNum, _json2) {
    console.log("리스트 삭제 시작");
    console.log(_json2[indexNum]);
    console.log("선택된 게시글의 인덱스: " + indexNum);

    let _json = window.localStorage.getItem("bulletin-board");
    let _jsonArr = [];
    let _jsonArr2 = [];
    let _split = _json.split("|");
    _split.forEach(function(i, index) {
        _jsonArr.push(JSON.parse(_split[index]));
    });
    console.log(_jsonArr);
   
    // 두 객체의 title을 비교하여 같으면 삭제
    for (let i = 0; i < _jsonArr.length; i++) {
        if(_jsonArr[i].title == _json2[indexNum].title) {
            console.log("삭제되는 리스트: " + JSON.stringify(_jsonArr[i]));
            _jsonArr2.splice(i, 1);
        }else {
            console.log(_jsonArr[i]);
            console.log(_json2[indexNum]);
            console.log("남아있는 리스트: " + JSON.stringify(_jsonArr[i]));
            _jsonArr2.push(JSON.stringify(_jsonArr[i]));
        }     
    }
    _jsonArr = _jsonArr2.join("|");
    console.log(_jsonArr);
    
    if(_jsonArr == "") {
        window.localStorage.removeItem("bulletin-board");
        window.localStorage.getItem("bulletin-board");
        let _board = document.querySelector(".board_body");
        _board.innerHTML = "";
    }else {
        window.localStorage.setItem("bulletin-board", _jsonArr);
        window.localStorage.getItem("bulletin-board");
        let _board = document.querySelector(".board_body");
        _board.innerHTML = "";
    }

    let _json3 = window.localStorage.getItem("bulletin-board");
    let _json4 = []; // 빈 배열 생성
    let _split2 = _json3.split("|");
    _split2.forEach(function(i, index) {
        _json4.push(JSON.parse(_split2[index]));
    });
    //console.log(_json4);

    let msgPopup = document.querySelector(".content_popup_wrap");
    msgPopup.classList.remove("is-active");

    render(_json4);
}

// Admin 답글
function adminAnswer(indexNum, _json2) {
    let adminView = document.querySelector(".admin_view");
    let userView = document.querySelector(".user_view");

    // 나중에 로그인, 회원가입과 합치면 삭제할 구문
    userView.classList.add("is-active");

    // 로컬스토리지 불러와서 배열로 만들기
    // let _json = window.localStorage.getItem("bulletin-board");
    // let _json2 = [];
    // let _split = _json.split("|");
    // _split.forEach(function(i, index) {
    //     _json2.push(JSON.parse(_split[index]));
    // });
    // console.log(_json2);

    let _nickname = _json2[indexNum].nickname;
    console.log(_nickname);

    // 유저가 로그인 한 상태 -> 게시글을 눌렀을 때 admin의 답글과 delete 버튼이 보임
    // Admin이 로그인 한 상태 -> 게시글을 눌렀을 때 답글을 달 수 있는 input창과 save 버튼이 보임
    /*
    if(_nickname == "admin") {
        if(adminView.classList.contains("is-active")) {
            adminView.classList.remove("is-active");
        }else {
            adminView.classList.add("is-active");
        }
    }else {
        if(userView.classList.contains("is-active")) {
            userView.classList.remove("is-active")
        }else {
            userView.classList.add("is-active");
        }
    }
    */
}


// 게시판 Search
let searchSubmit = document.querySelector(".search_submit");
searchSubmit.addEventListener("click", function() {
    let searchInput = document.querySelector(".search_field").value;
    console.log("찾고 싶은 제목 or 이름: " + searchInput);

    let _json = window.localStorage.getItem("bulletin-board");
    let _json2 = [];
    let _split = _json.split("|");
    _split.forEach(function(i, index) {
        _json2.push(JSON.parse(_split[index]));
    });
    console.log(_json2);

    let noSearched = document.querySelector(".no_searched");

    let _json3 = [];
    for (let i = 0; i < _json2.length; i++) {
        let findTitle = _json2[i].title;
        let findName = _json2[i].nickname;

        // 찾는 것이 있으면 _json3 배열에 저장
        if(findTitle.includes(searchInput) || findName.includes(searchInput)) {
            //console.log("찾았다", _json2[i]);
            _json3.push(_json2[i]);
        }else {
            //console.log("못찾았다", _json2[i]);
        }

        // 찾는 것이 없으면 NO SEARCHED 뜨게
        if(_json3 == "") {
            noSearched.classList.add("is-active");
        }else {
            noSearched.classList.remove("is-active");
        }
    }
    _board.innerHTML = ""; // 게시판 초기화
    paging.innerHTML = ""; // 페이징 번호 초기화
    render(_json3);
    pagination(_json3);
});


// Pagination
let pagingPrev = document.querySelector(".paging_prev");
let paging = document.querySelector(".paging"); // 페이징 번호 보여주는 곳
let pagingNext = document.querySelector(".paging_next");
function pagination(_json2) {
    console.log(_json2); // 리스트에 출력되는 배열 가져옴
    let _json = [];

    let totalList = _json2.length; // 총 게시글 수
    console.log("게시글 수: ", totalList);

    let totalPage = Math.ceil(totalList / 10); // 총 페이지 수
    console.log("총 페이지 수: ", totalPage);   // 한 페이지에 10개씩

    paging.style.top = "0px";

    // 이전 버튼
    let prevBtn = document.createElement("div");
    if(totalPage > 3) {
        prevBtn.innerHTML = "◀";
        prevBtn.classList.add("paging_btn");
        pagingPrev.append(prevBtn);
        prevBtn.addEventListener("click", function() {
            console.log("prevBtn 눌림");
            paging.style.top = `${0}px`;
        });
    }

    // 번호
    for (let i = 1; i <= totalPage; i++) {
        let pagingBtn = document.createElement("div");
        pagingBtn.innerHTML = i;
        pagingBtn.id = i;

        pagingBtn.classList.add("paging_btn");
        pagingBtn.classList.add("paging_btn_number")
        paging.append(pagingBtn);

        pagingBtn.addEventListener("click", function() {
            console.log("pagingBtn 눌림: ", i);
            _json = _json2.slice(10 * (i-1), 10 * i);

            _board.innerHTML = ""; // 게시판 초기화
            render(_json);
        });
    }

    // 다음 버튼
    let nextBtn = document.createElement("div");
    if(totalPage > 3) {
        nextBtn.innerHTML = "▶";
        nextBtn.classList.add("paging_btn");
        pagingNext.append(nextBtn);
        nextBtn.addEventListener("click", function() {
            console.log("nextBtn 눌림");
            // pagingTop = `${pagingTop - 40}px`;
            paging.style.top = `${-40}px`;
        });
    }
}