// function openFile() {
//   let input = document.createElement("input");
//   input.type = "file";
//   input.accept = "image/*";
//   input.id = "upload";

//   input.click();
//   input.onchange = function (e) {
//     profile(e.target.files[0]);
//   };
// }

const inp = document.querySelector("#upload");

// input을 클릭 했을때 실행
inp.addEventListener("click", function () {
  // input의 변화가 일어났을때. 이미지를 올렸을때 실행
  inp.onchange = function (e) {
    // console.log(e.target.files[0]);
    profile(e.target.files[0]);
  };
});

function profile(a) {
  // 이미지를 Base64로 변환
  let reader = new FileReader();

  reader.onload = function () {
    // Base64로 변환된 값 res에 저장
    let res = reader.result;
    // console.log("res : ", res);
    output.innerText = res;
    document.getElementById("getimg").setAttribute("src", res);
  };
  reader.readAsDataURL(a);
}

// 이미지 URL
const imageUrl = "https://example.com/image.jpg";

// 이미지를 다운로드할 때 사용할 파일 이름
const fileName = "image.jpg";

// 새로운 <a> 요소를 만들고 href와 download 속성을 설정합니다.
const link = document.createElement("a");
link.href = imageUrl;
link.download = fileName;

// <a> 요소를 클릭하여 다운로드를 시작합니다.
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
