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

/* ✨ 실행 */
window.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});

// 파일 업로드
const fileupload = document.querySelector("#upload");
const preview = document.querySelector("#imgupload");
const previewimg = document.querySelector(".previewimg");

function getImage(e) {
  const chkimg = e.currentTarget.files;
  console.log(chkimg);
  console.log(chkimg[0].name);

  const reader = new FileReader();

  reader.onload = function (e) {
    // const pre = createElement(e, file);
    console.log("reader 까지 옴");
  };
}

function createpreview(e, file) {
  previewimg.setAttribute("src", e.target.result);
  previewimg.setAttribute("date-file", file.name);
  preview.append(previewimg);
}

fileupload.addEventListener("change", getImage);
