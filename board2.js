// 전역 변수
let _json = '{"key" : "value"}';
let _board = document.querySelector(".board_body");
let _title = document.querySelector("#title").value;
let _detailsPrev = document.querySelector("#details").value;
let _details = _detailsPrev.replace(/(?:\r\n|\r|\n)/g, '<br>');

// 게시글 제출하는 팝업창 열고 닫기
let popupBtn = document.querySelector(".popup_btn");
function popupOpen() {
    let msgPopup = document.querySelector(".msg_popup_wrap");
    if(msgPopup.classList.contains("is-active")) {
        msgPopup.classList.remove("is-active");
    }else {
        msgPopup.classList.add("is-active");
    }
}

// 게시글 제출하기 (비어있는지 체크)
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

    // 페이지 새로고침 되어도 인덱스 번호 초기화 되지 않게 기존에 저장되어 있는 배열의 길이를 읽어옴
    let _index = 0;
    if(value == null) {
        _index = 1;
    }else {
        let valueLength = value.split("|").length;
        _index = valueLength + 1;
    }    

    if(window.localStorage.length == 0) {
        console.log("리스트 첫 추가");
        window.localStorage.setItem("bulletin-board", `{"index" : "${_index}", "title" : "${_title}", "details" : "${_details}", "nickname" : "", "date" : "${_date}"}`);
    }else {
        console.log("리스트 추가 추가");
        window.localStorage.setItem("bulletin-board", value + "|" + `{"index" : "${_index}", "title" : "${_title}", "details" : "${_details}", "nickname" : "", "date" : "${_date}"}`);
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

        let _li = document.createElement("li");

        let _div1 = document.createElement("div");
        let _div2 = document.createElement("div");
        let _div3 = document.createElement("div");
        let _div4 = document.createElement("div");
    
        let indexNum = index+1; // 리스트에 보여지는 인덱스 번호
        _div1.innerHTML = indexNum;
        _div2.innerHTML = JSON.parse(i).title;
        _div3.innerHTML = "nickname";
        _div4.innerHTML = JSON.parse(i).date;
    
        _div1.classList.add("list_no");
        _div2.classList.add("list_title");
        _div3.classList.add("list_name");
        _div4.classList.add("list_date");

        _li.append(_div1, _div2, _div3, _div4);
        _ul.append(_li);
        
        let _index = JSON.parse(i).index;
        _div2.addEventListener("click", function() {
            popupOpen2(_index, indexNum); // title 누르면 게시글 팝업창 열림 
        });
    })
    _board.append(_ul);
}
window.onload = function() {
    render();
}

// 작성된 게시글 보여주는 팝업창 열고 닫기
let popupBtn2 = document.querySelector(".popup_btn2");
function popupOpen2(_index, indexNum) {
    console.log("선택된 게시글의 ID: " + _index);
    console.log("선택된 게시글의 No: " + indexNum);

    let msgPopup = document.querySelector(".content_popup_wrap");
    if(msgPopup.classList.contains("is-active")) {
        msgPopup.classList.remove("is-active");
    }else {
        msgPopup.classList.add("is-active");
        renderTD(_index, indexNum);
    }
}

// 게시글 팝업에 로컬스토리지에 저장된 title, details 불러오기
function renderTD(_index, indexNum) {
    console.log("선택된 게시글의 ID: " + _index);
    console.log("선택된 게시글의 No: " + indexNum);

    let deleteBtn = document.querySelector(".delete_btn");
    deleteBtn.addEventListener("click", function() {
        console.log("삭제 버튼 눌림");
        console.log("선택된 게시글의 ID: " + _index);
        console.log("선택된 게시글의 No: " + indexNum);
        deleteList(_index, indexNum);
    });

    let inputIndex = document.querySelector(".input_index");
    let inputTitle = document.querySelector(".input_title");
    let inputDetails = document.querySelector(".input_details");

    let _json = window.localStorage.getItem("bulletin-board");

    let _json2 = []; // 빈 배열 생성

    let _split = _json.split("|");
    console.log(_split);

    _split.forEach(function(i, index) {
        _json2.push(JSON.parse(_split[index]));
    });

    console.log(typeof _json2); // object
    console.log(_json2);

    for(let i = 0; i < _json2.length; i++) {
        if(_index == _json2[i].index) {
            inputIndex.innerHTML = `No. ${indexNum}`;
            inputTitle.innerHTML = _json2[i].title;
            inputDetails.innerHTML = _json2[i].details;
        }
    }
  

}

// 게시판 리스트 삭제
function deleteList(_index, indexNum) {
    console.log("리스트 삭제 시작");
    console.log("선택된 게시글의 ID: " + _index);
    console.log("선택된 게시글의 No: " + indexNum);

    let _json = window.localStorage.getItem("bulletin-board");
    let _json2 = []; // 빈 배열 생성

    _json = _json.split("|");
    console.log(_json);

    for (let i = 0; i < _json.length; i++) {
        if((i+1) == indexNum) {
            console.log("삭제되는 리스트: " + _json2[i]);
            _json2.splice(i, 1);
        }else {
            console.log("남아있는 리스트: " + _json[i]);
            _json2.push(_json[i]);
        }     
    }
    console.log(_json2);
    _json2 = _json2.join("|");
    console.log(_json2);
    
    if(_json2 == "") {
        window.localStorage.removeItem("bulletin-board");
        window.localStorage.getItem("bulletin-board");
        let _board = document.querySelector(".board_body");
        _board.innerHTML = "";
    }else {
        window.localStorage.setItem("bulletin-board", _json2);
        window.localStorage.getItem("bulletin-board");
        let _board = document.querySelector(".board_body");
        _board.innerHTML = "";
    }
    let msgPopup = document.querySelector(".content_popup_wrap");
    msgPopup.classList.remove("is-active");
    //render();
    location.reload(true);
}