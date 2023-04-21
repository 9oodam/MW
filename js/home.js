// admin 계정 만들기



// 🔷 중요 전역 변수 

// 🔷 스와이프 관련
let itemMarginRight = 40;
let itemWidth = 400;
// item 바로위 = container
let _gallerySlideContainer = document.querySelector('.gallery-slide-container')
// item 전체 가져온 것
let arrAllItem = document.querySelectorAll('.gallery-slide-item')
let itemCount = arrAllItem.length
let currentIndex = 0; 
let rightArrowBtn = document.querySelector('.nav-right-arrow')
let leftArrowBtn = document.querySelector('.nav-left-arrow')


// header에 들어가는 함수 부분 //
// 검색 팝업 관련 (숨어있다 나오는)
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


// 로그인 팝업 관련 (숨어있다 나오는)
let topBanner = document.querySelector(".top_banner"); // 최상단 빨간 배너

let loginPopupContent = document.querySelector('.login-popup-content');
let idLoginBtn = document.querySelector('#id-login-btn');
let logincloseBtn = document.querySelector('#login-close-btn');
let signupcloseBtn = document.querySelector('#signup-close-btn');

let loginPopup = document.querySelector(".login_popup"); // 로그인 창
let signupPopup = document.querySelector(".signup_popup"); // 회원가입 창
let moveToSignup = document.querySelector(".move_to_signup"); // 회원가입으로 이동
let moveToLogin = document.querySelector(".move_to_login");

// 🔷 검색창 popup
searchPopupBtn.addEventListener('click', function() {
    searchPopup.classList.add('is-active');
    if(noImgSearched.classList.contains('is-active')) {
        noImgSearched.classList.remove('is-active');
    }
});
popupCloseBtn.addEventListener('click', function() {
    searchPopup.classList.remove('is-active');
});


// 🔷 검색 함수
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


// 🔷 로그인 popup
idLoginBtn.addEventListener('click', function() {
    console.log("Login 시작");
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
// header에 들어가는 함수 부분 끝 //


// 🔷 clone + container 의 width 업데이트 

function updateContainerWidth() {
    // container 의 너비 = (358 + 55) * 4

    let xValueContainer = (itemMarginRight + itemWidth) * itemCount -itemMarginRight + 'px'
    
    // 
    _gallerySlideContainer.style.width = xValueContainer;

    // let updateWidthAfterClone = (item_size + item_right_margin) * newSlideCount - item_right_margin + 'px';

}


function makeClone() {
    for (i = 0; i <arrAllItem.length; i++) {
        let cloneItem = arrAllItem[i].cloneNode(true);
        cloneItem.classList.add('clone')
        // cloneItem.innerHTML = `클론 사진 : ${i}`
        _gallerySlideContainer.append(cloneItem)     
    }

    for (i = arrAllItem.length-1; i >= 0; i--) {
        let cloneItem = arrAllItem[i].cloneNode(true);
        cloneItem.classList.add('clone')
        // cloneItem.innerHTML = `클론 사진 : ${i}
        _gallerySlideContainer.prepend(cloneItem)
    }

    updateContainerWidth()
}

makeClone();
// 클론하고싶은거wrapper.cloneNode(true)




// 🔷 버튼 누르면 반응 


leftArrowBtn.addEventListener('click', function() {
    
    _gallerySlideContainer.classList.add('animated')
    moveContainer( currentIndex - 1 )
})

rightArrowBtn.addEventListener('click', function() {
    _gallerySlideContainer.classList.add('animated')
    moveContainer(currentIndex + 1)
})





function moveContainer(num) {
    
    let xMoveAmount = (itemWidth + itemMarginRight) * -num;
    // console.log(`전체 움직여야 하는 양 : ${xMoveAmount}`)
    _gallerySlideContainer.style.left = `${xMoveAmount}px`;

    currentIndex = num

    if (currentIndex == arrAllItem.length || -currentIndex == arrAllItem.length) {
        
        setTimeout(function() {
            _gallerySlideContainer.classList.remove('animated');
            
            // 전체가 처음으로 이동한다.
            _gallerySlideContainer.style.left = '0px' ;
            
            currentIndex = 0;

        }, 500)


        setTimeout (function() {
            _gallerySlideContainer.classList.add('animated');
        }, 600)
    }
}

