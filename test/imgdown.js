// 로컬 스토리지에 이미지 저장하기
// 이미지 파일 경로
// const imagePath = 'image.png';
// const imagePath = "../img/ammor.jpg";

// // 이미지를 Base64로 인코딩
// const getBase64Image = (img) => {
//   const canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;

//   const ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);

//   const dataURL = canvas.toDataURL("image/png");
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// };

// // 이미지 엘리먼트 생성
// const img = new Image();
// img.crossOrigin = "anonymous";
// img.src = imagePath;

// // 이미지 로드 완료 후 localStorage에 저장
// img.onload = () => {
//   const base64Image = getBase64Image(img);
//   localStorage.setItem("imageData", base64Image);
// };

// window.localStorage.clear();

let imginput = document.getElementById("imginput");
let pv = document.getElementById("pv");
let reader = new FileReader();
let res;
let filename;
let myimg = window.localStorage.getItem("my-image");

// input을 클릭 했을때 실행
imginput.addEventListener("click", function () {
  // input의 변화가 일어났을때. 이미지를 올렸을때 실행
  imginput.onchange = function (e) {
    console.log(e.target.files[0]);
    filename = e.target.files[0].name;
    profile(e.target.files[0]);
    imginput.style.display = "none";
  };
});

// input에 이미지를 올리면 이미지 미리보기
function profile(a) {
  reader.onload = function () {
    // Base64로 변환된 값 res에 저장
    res = reader.result;
    document.getElementById("pv").setAttribute("src", res);
    // let subinp = document.querySelector(".subinput");
    // subinp.innerHTML = `<a href="${res}" download="${filename}" onclick="window.location.href='file:///Users/jh/Desktop/kyungil/project/javascript/img/${filename}';">a</a>`;
    // 이미지 input에 등록하면 바로 다운 받아짐
    // var link = document.createElement("a");
    // link.href = res;
    // link.download = filename;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    localStorage.setItem(
      "my-image",
      `{ "img" : ${res}, "filename" : ${filename}"}`
    );
  };
  reader.readAsDataURL(a);
}

window.addEventListener("storage", function (e) {
  console.log("사이즈 변화");
});

(function () {
  const test = window.localStorage.key(0);
  const ff = "filename";
  const test2 = window.localStorage.getItem(test);
  let arr = test2.split(" ");
  console.log(arr[3]);
  document.getElementById("pv2").setAttribute("src", arr[3]);
})();

// window.localStorage.clear();
// Assuming you have an <img> element with the id "my-image"
// const img = document.getElementById("my-image");

// Convert the image to a data URI
// const canvas = document.createElement("canvas");
// canvas.width = pv.width;
// canvas.height = pv.height;
// const ctx = canvas.getContext("2d");
// ctx.drawImage(pv, 0, 0);
// const dataURL = canvas.toDataURL();

// Save the data URI in local storage
// localStorage.setItem(
//   "my-image",
//   `{ "img" : ${dataURL}}, "filename : ${filename}"`
// );

// const dataURL = localStorage.getItem("my-image");
// const img = document.createElement("img");
// img.src = dataURL;
// document.body.appendChild(img);

// (function () {
//   // window.localStorage.clear();
//   // console.log("test");
//   // console.log(myimg.length);
//   if (myimg.length != 0) {
//     console.log("size test");
//     reader.onload = function () {
//       document.getElementById("pv2").setAttribute("src", res);
//     };
//     // reader.readAsDataURL(a);
//   }
// })();
