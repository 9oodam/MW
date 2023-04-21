

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


// 검색 팝업 관련 (숨어있다 나오는)
let searchPopupBtn = document.querySelector('.dropdown-search-form')
let searchPopup = document.querySelector('#search-popup')
let popupCloseBtn = document.querySelector('#popup-close-btn')
let inputSearchKeyword = document.querySelector('.input-search-keyword')
// 임시
let xIconTempButton = document.querySelector('.x-icon-temp-button')


// 로그인 팝업 관련 (숨어있다 나오는)
let loginPopupContent = document.querySelector('.login-popup-content')
let idLoginBtn = document.querySelector('#id-login-btn')

let logincloseBtn = document.querySelector('#login-close-btn')


// collection 팝업 관련
let navCollectionsBtn = document.querySelector('.nav-collections-btn')
let collectionsDropdown = document.querySelector('.collections-dropdown')


let siteHeader = document.querySelector('.site_header')
let siteHeaderprimary = document.querySelector('.site_header__primary-nav')
let responsiveTopLogo = document.querySelector('.responsive-top-logo')
let dropdownSearchForm = document.querySelector('.dropdown-search-form')
let reponsiveLoginBtn = document.querySelector('#id-login-btn')
let navInstagramBtn = document.querySelector('.nav-instagram-btn')
let primaryNavSocial = document.querySelector('.site_header__primary-nav--social')
let primaryNavSeachlogin = document.querySelector('.site_header__primary-nav--seachlogin')
let responsiveHamburgMenu = document.querySelector('.responsive-hamburg-menu')
let responsiveHamburgMenuWidthYscroll = document.querySelector('.responsive-hamburg-menu-width-yscroll')
let responsSearchX1200Yscroll200 = document.querySelector('.respon-search-form-x1200under-yscroll200over')
let responsHamburgXwidth1200Yscroll200 = document.querySelector('.responsive-hamburg-menu-xwidth1200-yscroll200')
// let responsClickedNavHamburgMenus = document.querySelector('.site_header__primary-nav--menus')
// let primaryNavMenus = document.querySelector('.site_header__primary-nav--menus')
// 버튼 위에 있는 태그 까지 해줘야 클릭반응이 옴 ⭐⭐ (햄버거 감싸고 있는 태그)
let hamburgMenuBtn = document.querySelector('.responsive-hamburg-menu-xWidth-under1200')
// 누르면 나오게되는, 햄버거 메뉴리스트
let NavResponsiveHham = document.querySelector('.site_header__primary-nav--responsive-ham')
let ResponsiveHamburguerDropdownIsActive = document.querySelector('.site_header__primary-nav--responsive-ham.is-active')

// 드롭다운 메뉴 테스트 
let ResponsiveHamburgerDropdownOver200 = document.querySelector('.site_header__primary-nav--responsive-ham-over200')
// 햄버거 버튼 누르면 -> 그 자리에 나오는 'X 버튼' 
let closeStateButton = document.querySelector('.close-state-button')
// 햄버거 버튼 자체 
let hamburgMenuButton = document.querySelector('#hamburg-menu-btn-under1200')

// under1200 일 때, '검색 버튼'
let dropdownSearchXWidthUnder1200 = document.querySelector('.dropdown-search-form-xWidth-under1200')


// 검색 버튼 : x 1200 under, y 스크롤 200 이상일 때, 
let SearchformX1200underY200over = document.querySelector('#dropdown-search-form-x1200under-y200over')


let searchPopupBtnCalcBoxTop = document.querySelector('#search-popup-btn')



// 뷰포트가 스크롤될 때마다 호출되는 함수
function handleYScroll() {
    // 스크롤 위치 가져오기
    const scrollYPosition = window.scrollY;

    // 1. width 1201 이상인 경우
    if (window.matchMedia("(min-width: 1201px)").matches) {
        
        // 1.1 width 1201 이상 & Y Scorll 200 이상 (밑으로 내림)
        if (scrollYPosition > 200) {
            console.log(" width 1201 이상 & Y Scorll 200 이상 (밑으로 내림) ")
            
            // '상단 메뉴바' 떨어지게 하기
            siteHeaderprimary.classList.add('is-scrolled');
            // '상단 로고' '넣기'
            responsiveTopLogo.classList.add('is-scrolled');
            // '검색' 중 '아이콘만' 보이게 하기
            dropdownSearchForm.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-search-red.svg" alt="">`
            // '로그인' 중 '아이콘만' 보이게 하기
            reponsiveLoginBtn.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt="">`
            // '소셜 아이콘' '오른쪽으로 이동'


            // 인스타그램 아이콘을 살짝 옆으로 
            navInstagramBtn.style.marginRight = '10px'
            dropdownSearchForm.style.marginRight = '40px'

            // '검색' 중 '아이콘만' 보이는거 제거
            responsSearchX1200Yscroll200.classList.remove('is-scrolled')
            // '햄버거 메뉴' '보이게' 하는거 제거
            responsHamburgXwidth1200Yscroll200.classList.remove('is-scrolled')





            

        } 
        // 1.2 width 1201 이상 & Y Scroll 200 이하 (위로 올림)
        else {
            // '상단 메뉴바' '제거'
            siteHeaderprimary.classList.remove('is-scrolled');
            // '상단 로고' '제거'
            responsiveTopLogo.classList.remove('is-scrolled');
            // '검색 아이콘 + 텍스트' 다 보이게 하기
            dropdownSearchForm.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-search-red.svg" alt=""> Search`
            // '로그인 아이콘 + 텍스트' 다 보이게 하기
            reponsiveLoginBtn.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> Login`

            console.log(" width 1201 이상 & Y Scroll 200 이하 (위로 올림) ")

            // '검색' 중 '아이콘만' 보이게 하기 - 제거
            responsSearchX1200Yscroll200.classList.remove('is-scrolled')
            // '햄버거 메뉴' '보이게' 하기 - 제거
            responsHamburgXwidth1200Yscroll200.classList.remove('is-scrolled')

            
        }
    } 

    // 2. width 1201 이하인 경우
    else {

        // 2.1 width 1201 이하 & Y Scorll 200 이상 (밑으로 내림)
        if (scrollYPosition > 200) {
            console.log(" width 1201 이하 & Y Scorll 200 이상 (밑으로 내림) ")
            console.log("띠링 목차 변형")

             // '상단 메뉴바' 떨어지게 하기
            siteHeaderprimary.classList.add('is-scrolled');
            // '상단 로고' '넣기'
            responsiveTopLogo.classList.add('is-scrolled');
            // '검색' 중 '아이콘만' 보이게 하기
            responsSearchX1200Yscroll200.classList.add('is-scrolled')
            // '햄버거 메뉴' '보이게' 하기 
            responsHamburgXwidth1200Yscroll200.classList.add('is-scrolled')
            
            // ✅ 테스트 : 드롭다운 메뉴 떨어지게 하기 
            // ResponsiveHamburguerDropdownIsActive.style.top = '75px'


        }
        // 2.2 width 1201 이하 & Y Scorll 200 이하 (위로 올림)
        else {
            console.log(" width 1201 이하 & Y Scorll 200 이하 (위로 내림) ")

            // '상단 메뉴바' '제거'
            siteHeaderprimary.classList.remove('is-scrolled');
            // '상단 로고' '제거'
            responsiveTopLogo.classList.remove('is-scrolled');
            // '검색' 중 '아이콘만' 보이는거 제거
            responsSearchX1200Yscroll200.classList.remove('is-scrolled')
            // '햄버거 메뉴' '보이게' 하는거 제거
            responsHamburgXwidth1200Yscroll200.classList.remove('is-scrolled')
        }
    }
}


// 스크롤 발생하면 -> handleYScroll 함수 실행
window.addEventListener("scroll", handleYScroll);


// x 버튼 클릭시 -> 스크롤 생성 함수 
function xBtnClickCreateScroll() {
    closeStateButton.addEventListener('click', function() {
        // (드롭다운 메뉴가 나와서 스크롤이 없었는데) 스크롤이 다시 생기게 한다.
        document.body.style.overflow = 'auto';
    })
}


// '스크롤 맨 위 AND width 1200 이하' 에서, 햄버거 버튼 클릭되면 -> 메뉴 나오게 
hamburgMenuBtn.addEventListener('click', function() {
    console.log("햄버거")
    // 햄버거 클릭시 > '드롭다운 메뉴' 나오게 하기 
    NavResponsiveHham.classList.add('is-active')
    // 햄버거 클릭시 > 스크롤 사라지게 하기 
    document.body.style.overflow = 'hidden';

    // 햄버거 버튼 누르면 -> 그 자리에 X 버튼 : 안 돼 📛 
    closeStateButton.style.display = 'block'

    // 햄버거 클릭시 > 햄버거 버튼 사라지게 하기
    hamburgMenuButton.style.display = 'none'
    console.log(hamburgMenuButton)

    // x 버튼 클릭시 -> 스크롤 생성 
    xBtnClickCreateScroll();
})

// x 버튼 누르면, 드롭다운 리스트 사라지게 하기
closeStateButton.addEventListener('click', function() {
    console.log('x 버튼 클릭')
    // 드롭다운 메뉴 지우기
    NavResponsiveHham.classList.remove('is-active')
    // x 취소 버튼 없애기
    closeStateButton.style.display = 'none'
    // 햄버거 버튼 다시 나타나게 하기
    hamburgMenuButton.style.display = 'block'

})


// 취소 버튼이 클릭되면 -> 햄버거 버튼 생기는 함수
function cancelBtnClickCreateHamburgBtn() {

    popupCloseBtn.addEventListener('click', function() {
        hamburgMenuButton.style.display = 'block'
    }) 
}

// under x 1200, over y scroll 200 일 때, 검색 버튼 누르면, 검색창 나오게 하기 
dropdownSearchXWidthUnder1200.addEventListener('click', function() {
    searchPopup.classList.add('is-active')

    // 햄버거 버튼 없애기
    hamburgMenuButton.style.display = 'none'
    // 취소버튼 클릭되면 > 햄버거 버튼 생성
    cancelBtnClickCreateHamburgBtn()

})

// 스크롤 발생하면 -> handleYScroll 함수 실행
    window.addEventListener("scroll", handleYScroll);



// ------------- 안 되는 부분 : 검색버튼 누르면, x 가 까지 나오게 하는거 📛📛📛📛📛📛📛📛 ----------------- 

    // 그냥, 버튼 클릭되면 > 검색 없애기 
    function deleteDropdown() {
        스크롤바따라다니는버튼.addEventListener('click' , function() {
            searchPopup.classList.remove('is-active')

        })
    }


// 반응형 화면(x1200under, y200 over) 에서, X 버튼 클릭하면 > 검색 창이 나오게
    SearchformX1200underY200over.addEventListener('click', function() {

        // 검색창 바로 떨어지게 하기 
        searchPopup.classList.add('is-active')
            // 이걸 다른 검색창을 만들어서 거기에는 x 자를 붙여서 나오기

        // 반응형 화면 nav bar '제거'  
        siteHeaderprimary.classList.remove('is-scrolled');

        
        // 드롭다운 없애기 ⭐⭐⭐⭐⭐⭐ 
            // x 자 만들기 함수 
            // createXIconBtn()

            // 파란박스가 스크롤 위치에 따라 상대적으로 움직이게 하기 
            // searchPopupBtnCalcBoxTop.offsetHeight + "px"

            // 스크롤바 따라다니는 버튼 
            // deleteDropdown() 

            // search-popup-btn 의 x 값을 가져온다. ⭐⭐ 
            // searchPopupBtnCalcBoxTop.offsetHeight + "px"/
            // x 버튼의 top 에 이 값을 넣어본다. 

        // 검색 창에 취소 버튼 붙이기 
        // popupCloseBtn

        
        // 취소 버튼 누르면 -> 다시 나타나게 하기 


        // x 버튼이 있어서, 그걸 누르면, 사라지게 하기 

    })



// 반응형에서, 햄버거 누르면, 드롭메뉴 나오게 하기 📛📛📛📛📛📛 | 이것도 비슷한 문제 

responsHamburgXwidth1200Yscroll200.addEventListener('click', function() {

        // 햄버거 클릭시 > '드롭다운 메뉴' 나오게 하기 
        NavResponsiveHham.classList.add('is-active')
        // 햄버거 클릭시 > 스크롤 사라지게 하기 
        document.body.style.overflow = 'hidden';
    
        // 햄버거 버튼 누르면 -> 그 자리에 X 버튼 : 안 돼 📛 
        closeStateButton.style.display = 'block'
    
        // 햄버거 클릭시 > 햄버거 버튼 사라지게 하기
        hamburgMenuButton.style.display = 'none'
        console.log(hamburgMenuButton)
    
        // x 버튼 클릭시 -> 스크롤 생성 
        xBtnClickCreateScroll();
})












// // 🔷 nav-bar 반응형1 : 1) Y 스크롤 200 이하 기준 변경
// window.addEventListener('scroll',  function() {
//     let scrollY = window.pageYOffset

//     if (scrollY > 200) {
//         siteHeaderprimary.classList.add('is-scrolled');
//         responsiveTopLogo.classList.add('is-scrolled');
//         dropdownSearchForm.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-search-red.svg" alt="">`
//         reponsiveLoginBtn.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt="">`
//         navInstagramBtn.style.marginRight = '10px'
//         dropdownSearchForm.style.marginRight = '40px'
        

//     } else {
//         siteHeaderprimary.classList.remove('is-scrolled')
//         responsiveTopLogo.classList.remove('is-scrolled');
//         navInstagramBtn.style.marginRight = '0px'
//         // dropdownSearchForm.style.marginRight = '100px'
        


//     }
// });




// // // 🔷 nav-bar 반응형2 : 2) width 1200px 이하 에만 반응 - 2차 시도
// window.addEventListener('resize', function() {
//     if (window.innerWidth < 1200) {

//         // ◼ 지울 것들 : 1) 소셜 아이콘 2) 메뉴 글씨 3) 로그인 아이콘 + 글 4) 검색은 '글씨만' 
//         // primaryNavMenus.style.display = 'none'  // 메뉴
//         // primaryNavSocial.style.display = 'none' // 소셜 아이콘
//         idLoginBtn.style.display = 'none'   // 로그인 아이콘 - 이건 미디어 쿼리로 구현
        
//         dropdownSearchForm.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-search-red.svg" alt="">`
//             // 돋보기 모양
//         responsiveHamburgMenu.classList.add('is-active')    // 햄버거 메뉴
//         siteHeader.style.flexDirection = 'row-reverse'      // 좌우 정렬
//         siteHeader.style.justifyContent = 'space-between'

//         // width + scroll 동시에 적용받는, 오른쪽 햄버거 버튼 
//         responsiveHamburgMenuWidthYscroll.style.display = 'block'
//         // width + scroll 동시에 적용받는, 검색 버튼 
//         primaryNavSeachlogin.style.display = 'block'

        
//         // ◼ 햄버거 메뉴 
//         // 만약 버튼 클릭되면 -> class add 
//         // NavResponsiveHham.classList.add('is-active')
        
        
//     } else if (window.innerWidth > 1200) {
//         responsiveHamburgMenu.classList.remove('is-active')     // 햄버거 메뉴 삭제
//         // responsiveHamburgMenu.style.display = 'none'

//         primaryNavMenus.style.display = 'block'     // 가운데 메뉴 다시 보이게
//         primaryNavSocial.style.display = 'block'    // 인스타, 페북 보이게

//         // 여기서 살짝 버그. 라이브 서버 켜면 문제 없음.
//         idLoginBtn.style.display = 'block'
        
//         siteHeader.style.flexDirection = 'column'   // flex 정렬 기능 

//         // width + scroll 동시에 적용받는, 오른쪽 햄버거 버튼 삭제
//         responsiveHamburgMenuWidthYscroll.style.display = 'none'

//         // width + scroll 동시에 적용받는, login, social 버튼 ✅✅✅ 
//         // primaryNavSeachlogin.style.display = 'none'
//     }
// })




// // 🔷 nav-bar 반응형3 : Y 스크롤 200 이하 'AND' width 1200px 이하 에만 반응 - 2차
// window.addEventListener('scroll', 'resize', function() {

//     console.log("발생")
//     // let scrollY = window.pageYOffset
//     // let widthX = window.innerWidth

//     // // ◼ 스크롤 밑으로 내려오고 | width 1200 이상 인 경우 
//     // if( scrollY > 200) {
//     //     console.log("테스트")
//     // } else if (scrollY > 200 && widthX < 1200) {
//     //     console.log("테스트")
//     // }



// })





// // 🔷 nav-bar 반응형3 : Y 스크롤 200 이하 'AND' width 1200px 이하 에만 반응 


// window.addEventListener('resize', function() {
//     // 가로 width 가 1200 이하 일 때
//     if (window.innerWidth < 1200) {

//         // Y 스크롤이 내려왔을 때 
//         window.addEventListener('scroll', function() {
//             let scrollY = window.pageYOffset
            
//             // ◼ [1] W 1200 이하 'AND' Y 스크롤 내려왔을 때 
//             if (scrollY > 200) {
//                 // 돋보기 오른쪽으로 가게 
//                 primaryNavSeachlogin.style.right = '25px'
//             }
//             // ◼ [2] W 1200 이하 'AND' Y 스크롤 올라왔을 때
//             else {
//                 // right 을 지워서 > 돋보기가 왼쪽으로 가게 하기 
//                 primaryNavSeachlogin.style.removeProperty("right")
//                 primaryNavMenus.style.display = 'none'  // 메뉴
// //         primaryNavSocial.style.display = 'none' // 소셜 아이콘
// //         idLoginBtn.style.display = 'none'   // 로그인 아이콘


//             }
//         }
//     )
//         // 가로 width 가 1200 이상일 때
//     } else {
//         window.addEventListener('scroll', function() {
//             let scrollY = window.pageYOffset
            
//             // ◼ [3] W 1200 이상 'AND' Y 스크롤 내려왔을 때
//             if (scrollY > 200) {
//                 // 돋보기 오른쪽으로 가게 
//                 // primaryNavSeachlogin.style.right = '25px'
//             }

//             // ◼ [4] W 1200 이상 'AND' Y 스크롤 올라갔을 때
//             else {
//                 // 스크롤 올라가면, 왼쪽 위치로
//                 primaryNavSeachlogin.style.right = '0px'
//             }
//         }
//     )


//         // primaryNavSeachlogin.style.right = '0px'

//     }

// }

// )



// 🔷 콜렉션 popupCloseBtn
navCollectionsBtn.addEventListener('click', function() {
    collectionsDropdown.classList.add('is-active')
})



// 🔷 검색창 popup
searchPopupBtn.addEventListener('click', function() {
    searchPopup.classList.add('is-active')
})

popupCloseBtn.addEventListener('click', function() {
    searchPopup.classList.remove('is-active')

})


// 🔷 로그인 popup
idLoginBtn.addEventListener('click', function() {
    loginPopupContent.classList.add('is-active')
})
logincloseBtn.addEventListener('click', function(){
    loginPopupContent.classList.remove('is-active')

})



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

