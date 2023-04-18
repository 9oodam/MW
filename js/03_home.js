

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
let searchPopupBtn = document.querySelector('#dropdown-search-form')
let searchPopup = document.querySelector('#search-popup')
let popupCloseBtn = document.querySelector('#popup-close-btn')

// 로그인 팝업 관련 (숨어있다 나오는)
let loginPopupContent = document.querySelector('.login-popup-content')
let idLoginBtn = document.querySelector('#id-login-btn')

let logincloseBtn = document.querySelector('#login-close-btn')


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

