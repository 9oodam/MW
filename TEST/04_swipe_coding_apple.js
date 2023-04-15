



// ◼ 전역변수 

   // 🔷 버튼 누른 횟수
    let prev_num = 0;
    let next_num = 0;

    let positionOfNow = 0;

    let _wrapper = document.querySelector(".wrapper");
    let _button_prev = document.querySelector(".button-prev");
    let _button_next = document.querySelector(".button-next");



    // 🔷 맨끝으로 이동하게 하는 함수
        // 📛 하드코딩 주의 
    function moveLast() {                
        positionOfNow = (4-1) * 100;    // 맨 뒤로 보내기
        _wrapper.style.transform = `translate(-${positionOfNow}vw)`;
        // console.log(`처음에서, 이전 버튼 눌렀을 때 ${positionOfNow}`)
    }

    // 🔷 맨 앞으로 이동하게 하는 함수 
        // 📛 하드코딩 주의 
    function moveFirst() {
        positionOfNow = 0 * 100;    // 맨 앞으로 보내기
        _wrapper.style.transform = `translate(-${positionOfNow}vw)`;
            // console.log(`끝에서, 다음 버튼 눌렀을 때 ${positionOfNow}`)
    }

    // 🔷 정상 이동 
    function moveNormal (num) {
        positionOfNow = positionOfNow + num;
        _wrapper.style.transform = `translate(-${positionOfNow}vw)`;
            // console.log(`이전 버튼 눌렀을 때 ${positionOfNow}`)
    }

    // 🔷 왼쪽으로 쉬리릭 넘어가는 것 구현 
        // 양수값을 음수값으로 바꾸면? 


    // 🔷 전체 swipe 이동
        function swipeBtn() {
            // ◼ '이전(prev)' 버튼 클릭
            document.querySelector('.botton-prev').addEventListener('click', function() {                
                if (positionOfNow == 0) {
                    moveLast();
                } else { 
                    moveNormal (-100)
                }
            })

            // ◼ '다음(next)' 버튼 클릭
            document.querySelector('.botton-next').addEventListener('click', function() {                
                if (positionOfNow == 300) {
                    moveFirst();
                } else { 
                    moveNormal (100)
                }
            })
        }            
        
        swipeBtn()



// ◼ 테스트
    // 버튼 1, 버튼 2 테스트
    // // [수도코드] 버튼 2 누르면 -> translate(-100vw) 해줘 
    // document.querySelector('.button-2').addEventListener('click', function() {
    //     document.querySelector('.wrapper').style.transform = 'translate(-100vw)'
    // })
    
    // // [수도코드] 버튼 3 누르면 -> translate(-200vw) 해줘 
    // document.querySelector('.button-3').addEventListener('click', function() {
    //     document.querySelector('.wrapper').style.transform = 'translate(-200vw)'
    // })


// 연습 
    // //  이전 버튼(prev) 눌렀을 때 > 이동하기  
    // document.querySelector('.botton-prev').addEventListener('click', function() {
    //     // let _amountOfMoveX = 0;
    //     // prev_num++
    //     // _amountOfMoveX = prev_num * 100
        
    //     positionOfNow = positionOfNow - 100;

    //     _wrapper.style.transform = `translate(${positionOfNow}vw)`;
    // })


    //  이전 버튼(prev) 눌렀을 때 > 이동하기  (keep)
    // document.querySelector('.botton-prev').addEventListener('click', function() {
    //     let _amountOfMoveX = 0;
    //     prev_num++
    //     _amountOfMoveX = prev_num * 100
        
    //     positionOfNow = positionOfNow + _amountOfMoveX;

    //     _wrapper.style.transform = `translate(${_amountOfMoveX}vw)`;
    // })
    

    // // 다음 버튼 (next) 눌렀을 때 > 이동
    // document.querySelector('.botton-next').addEventListener('click', function() {
    //     // let _amountOfMoveX = 0;
    //     // next_num++
    //     // _amountOfMoveX = next_num * 100
    //     positionOfNow = positionOfNow + 100

    //     _wrapper.style.transform = `translate(-${positionOfNow}vw)`;
    // })
    
    
    
    // function prev() {
    //     prev_num++;
    //     _wrapper.style.transform = `translate(+${prev_num}*100vw)`;
    //     console.log(`이전 버튼 누른 개수 : ${prev_num}`);
    // }

    // window.onload = function() {
    //     _button_prev.addEventListener('click', prev);
    // }

    
    // 다음 버튼     
    // function next() {
    //     next_num++;
    //     _wrapper.style.transform = `translate(-${next_num}*100vw)`;
    //     console.log(`이전 버튼 누른 개수 : ${next_num}`);
    // }

    // _button_next.addEventListener('click', next);


