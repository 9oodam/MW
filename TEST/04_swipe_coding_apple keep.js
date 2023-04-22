



// 전역변수 

   // 버튼 누른 횟수
    let prev_num = 0;
    let next_num = 0;

    let _wrapper = document.querySelector(".wrapper");
    let _button_prev = document.querySelector(".button-prev");
    let _button_next = document.querySelector(".button-next");


    // // [수도코드] 버튼 2 누르면 -> translate(-100vw) 해줘 
    // document.querySelector('.button-2').addEventListener('click', function() {
    //     document.querySelector('.wrapper').style.transform = 'translate(-100vw)'
    // })
    
    // // [수도코드] 버튼 3 누르면 -> translate(-200vw) 해줘 
    // document.querySelector('.button-3').addEventListener('click', function() {
    //     document.querySelector('.wrapper').style.transform = 'translate(-200vw)'
    // })
    

    // 다시 써보기
    // document.querySelector('.botton-prev').addEventListener('click', function() {
    //     console.log("이전 ")
    //     document.querySelector('.wrapper').style.transform = 'translate(+100vw)'
    // })
    



    //  이전 버튼 함수 선언 
    function prev() {
        prev_num++;
        _wrapper.style.transform = `translate(+${prev_num}*100vw)`;
        console.log(`이전 버튼 누른 개수 : ${prev_num}`);
    }

    window.onload = function() {
        _button_prev.addEventListener('click', prev);
    }

    // document.querySelector('.botton-prev').addEventListener('click', function() {
    //     console.log("이전 ")
    //     prev_num++
    //     document.querySelector('.wrapper').style.transform = `translate(+${prev_num}*100vw)`
    //     console.log(prev_num)
    // })
    
    
    // 다음 버튼 

    // document.querySelector('.botton-next').addEventListener('click', function() {
    //     console.log("다음 ")
    //     next_num++
    //     document.querySelector('.wrapper').style.transform = `translate(-${next_num}*100vw)`
    //     console.log(next_num)
    // })
    
    
    function next() {
        next_num++;
        _wrapper.style.transform = `translate(-${next_num}*100vw)`;
        console.log(`이전 버튼 누른 개수 : ${next_num}`);
    }

    _button_next.addEventListener('click', next);



    
    
    
    // document.querySelector('.botton-next').addEventListener('click', function() {
    //     console.log(" 다음 ")
    //     document.querySelector('.wrapper').style.transform = 'translate(-100vw)'
    // })




    // // [수도코드] '이전' 누르면 -> translate(-100vw) 해줘 
    // document.querySelector('.button-prev').addEventListener('click', function() {
    //     console.log("다음버튼!")
    //     // document.querySelector('.wrapper').style.transform = 'translate(-200vw)'
    // })
    
    // // [수도코드] '다음' 누르면 -> translate(+100vw) 해줘 
    // document.querySelector('.button-next').addEventListener('click', function() {
    //     document.querySelector('.wrapper').style.transform = 'translate(+100vw)'
    // })



