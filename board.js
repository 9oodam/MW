// 게시판 리스트 추가
let _json = '{"key" : "value"}';
let _board = document.querySelector(".board_body");
let _title = document.querySelector("#title").value;
let _details = document.querySelector("#details").value;

function addList() {
    console.log("리스트 추가 시작");
    let _title = document.querySelector("#title").value;
    let _details = document.querySelector("#details").value;
    
    let value = window.localStorage.getItem("bulletin-board");
    console.log(value);

    if(window.localStorage.length == 0) {
        console.log("리스트 첫 추가");
        window.localStorage.setItem("bulletin-board", `{"title" : "${_title}", "details" : "${_details}", "nickname" : ""}`);
    }else {
        console.log("리스트 추가 추가");
        window.localStorage.setItem("bulletin-board", value + "|" + `{"title" : "${_title}", "details" : "${_details}", "nickname" : ""}`);
    }
    console.log(window.localStorage.getItem("bulletin-board"));

    _board.innerHTML = "";
    render();
}

// 렌더링
function render() {
    let _json = window.localStorage.getItem("bulletin-board");
    _json = _json.split("|");
    console.log(_json);

    let _ul = document.createElement("ul");
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

    _json.forEach(function(i, index) {
        // month 앞에 0 붙이기
        function getFormattedMonth(date) {
            const month = date.getMonth() + 1; // 월을 1부터 시작하도록 조정
            return month.toString().padStart(2, '0'); // 월 앞에 0을 붙여 두 자리 숫자로 만듭니다.
        }
        let time = new Date();
        let month = getFormattedMonth(time);
        console.log(month);

        let year = time.getFullYear();
        let date = time.getDate();
        
        let _li = document.createElement("li");

        let _div1 = document.createElement("div");
        let _div2 = document.createElement("div");
        let _div3 = document.createElement("div");
        let _div4 = document.createElement("div");
    
        _div1.innerHTML = index+1;
        _div2.innerHTML = JSON.parse(i).title;
        _div3.innerHTML = "nickname";
        _div4.innerHTML = `${year}-${month}-${date}`;
    
        _div1.classList.add("list_no");
        _div2.classList.add("list_title");
        _div3.classList.add("list_name");
        _div4.classList.add("list_date");

        _li.append(_div1, _div2, _div3, _div4);
        _ul.append(_li);

        _div2.addEventListener("click", popupOpen2); // title 누르면 게시글 팝업창 열림
    })
    _board.append(_ul);
}
window.onload = function() {
    render();
}


// 문의 팝업창 열고 닫는 버튼
let popupBtn = document.querySelector(".popup_btn");
// 문의 제출하는 버튼
let submitBtn = document.querySelector(".submit_btn");
submitBtn.addEventListener("click", addList);
submitBtn.addEventListener("click", popupOpen);

// 팝업창 열고 닫기
function popupOpen() {
    let msgPopup = document.querySelector(".msg_popup_wrap");
    if(msgPopup.classList.contains("is-active")) {
        msgPopup.classList.remove("is-active");
    }else {
        msgPopup.classList.add("is-active");
    }
}


// 게시글 팝업창 열고 닫는 버튼
let popupBtn2 = document.querySelector(".popup_btn2");

// 팝업창 열고 닫기
function popupOpen2() {
    let msgPopup = document.querySelector(".content_popup_wrap");
    if(msgPopup.classList.contains("is-active")) {
        msgPopup.classList.remove("is-active");
    }else {
        msgPopup.classList.add("is-active");
    }
    renderTD();
}

// 게시글 팝업에 title, details 불러오기
function renderTD() {
    let inputIndex = document.querySelector(".input_index");
    let inputTitle = document.querySelector(".input_title");
    let inputDetails = document.querySelector(".input_details");

    let _json = window.localStorage.getItem("bulletin-board");

    let _json2 = [];

    let _split = _json.split("|");
    console.log(_split);

    _split.forEach(function(i, index) {
        _json2.push(JSON.parse(_split[index]));
    });

    console.log(typeof _json2);
    console.log(_json2);

    // _json.forEach(function(i, index) {
    //     inputIndex.innerHTML = "No ", index;
    //     inputTitle.innerHTML = JSON.parse(i).title;
    //     inputDetails.innerHTML = JSON.parse(i).details;
    // })
}





// 페이지네이션
let paging = document.querySelector(".paging");

let totalData = 100; // 총 게시글 개수
let dataPerPage = 10; // 한 페이지 당 나타낼 게시글 개수
let totalPage = Math.ceil(totalData / dataPerPage); // 총 페이지 개수

let currentPage = 1; // 현재 페이지
let pageCount = 5; // 화면에 나타날 페이지 개수
let pageGroup = Math.ceil(currentPage / pageCount); // 화면에 보여질 페이지 그룹

let lastNum = pageGroup * pageCount;
let firstNum = lastNum - (pageCount - 1) <= 0 ? 1 : lastNum - (pageCount - 1);