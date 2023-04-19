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
            searchlogin();
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

/* 실행 */
window.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});

// search btn
function searchlogin() {
  let ta = document.querySelector(".he");
  // 검색 팝업 관련 (숨어있다 나오는)
  let searchPopupBtn = ta.querySelector("#dropdown-search-form");
  let searchPopup = ta.querySelector("#search-popup");
  let popupCloseBtn = ta.querySelector("#popup-close-btn");
  // 로그인 팝업 관련 (숨어있다 나오는)
  let loginPopupContent = ta.querySelector(".login-popup-content");
  let idLoginBtn = ta.querySelector("#id-login-btn");

  let logincloseBtn = ta.querySelector("#login-close-btn");

  // 🔷 로그인 popup
  idLoginBtn.addEventListener("click", function () {
    loginPopupContent.classList.add("is-active");
  });
  logincloseBtn.addEventListener("click", function () {
    loginPopupContent.classList.remove("is-active");
  });

  // 🔷 검색창 popup
  searchPopupBtn.addEventListener("click", function () {
    searchPopup.classList.add("is-active");
  });

  popupCloseBtn.addEventListener("click", function () {
    searchPopup.classList.remove("is-active");
  });
}

// 파일 업로드
const fileupload = document.querySelector("#upload");
const preview = document.querySelector(".imgupload");
let pvimg = document.querySelector("#pv");
// 이미지를 Base64로 변환
let reader = new FileReader();
let res;
let filename;

// input을 클릭 했을때 실행
fileupload.addEventListener("click", function () {
  // input의 변화가 일어났을때. 이미지를 올렸을때 실행
  fileupload.onchange = function (e) {
    // console.log(e.target.files[0]);
    filename = e.target.files[0].name;
    profile(e.target.files[0]);
    fileupload.style.display = "none";
  };
});

// input에 이미지를 올리면 이미지 미리보기
function profile(a) {
  reader.onload = function () {
    // Base64로 변환된 값 res에 저장
    res = reader.result;
    // localStorage.setItem("test", res);
    // let ff = `/Users/jh/Desktop/kyungil/project/javascript/img`;
    // console.log(ff);
    // console.log(res);
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
  };
  reader.readAsDataURL(a);
}

// 미리보기로 올라간 이미지 클릭시 이미지 삭제 (추후 x버튼 만들어서 기능 옮길 예정)
pvimg.addEventListener("click", function () {
  document.getElementById("pv").removeAttribute("src");
  fileupload.style.display = "inline-block";
  res = "";
});

function createimgupload(nickname, country, city, title, description, img) {
  this.nickname = nickname;
  this.country = country;
  this.city = city;
  this.title = title;
  this.description = description;
  this.img = img;
}

let selectchk = document.querySelector("select");
let selectres;
// console.log(ta);
selectchk.addEventListener("change", function () {
  selectres = selectchk.options[selectchk.selectedIndex].value;
});

// localstorage 등록 시 title을 sub와 연결 시키기 위한 객체 생성
const themesinfo = [
  {
    name: "CABLE CARS",
    sub: "cablecars",
    group: "THEMES",
    cnt: 0,
  },
  {
    name: "CLASSIC FACADES",
    sub: "classics",
    group: "THEMES",
    cnt: 1,
  },
  {
    name: "DOORS",
    sub: "doors",
    group: "THEMES",
    cnt: 2,
  },
  {
    name: "EDUCATIONAL INSTITUTIONS",
    sub: "edus",
    group: "THEMES",
    cnt: 3,
  },
  {
    name: "GOVERNMENT BUILDINGS",
    sub: "goves",
    group: "THEMES",
    cnt: 4,
  },
  {
    name: "HIDDEN WONDESRS",
    sub: "hiddens",
    group: "THEMES",
    cnt: 5,
  },
  {
    name: "HOTEL / MOTEL",
    sub: "hms",
    group: "THEMES",
    cnt: 6,
  },
  {
    name: "INTERIORS",
    sub: "inters",
    group: "THEMES",
    cnt: 7,
  },
  {
    name: "LIBRARY",
    sub: "libs",
    group: "THEMES",
    cnt: 8,
  },
  {
    name: "LIGHTHOUSE",
    sub: "lights",
    group: "THEMES",
    cnt: 9,
  },
  {
    name: "MUSEUM",
    sub: "museums",
    group: "THEMES",
    cnt: 10,
  },
  {
    name: "NATURE",
    sub: "natures",
    group: "THEMES",
    cnt: 11,
  },
];

const colorinfo = [
  {
    name: "BLACK",
    sub: "blacks",
    group: "COLORS",
    cnt: 0,
  },
  {
    name: "BLUE",
    sub: "blues",
    group: "COLORS",
    cnt: 1,
  },
  {
    name: "BROWN",
    sub: "browns",
    group: "COLORS",
    cnt: 2,
  },
  {
    name: "GRAY",
    sub: "grays",
    group: "COLORS",
    cnt: 3,
  },
  {
    name: "GREEN",
    sub: "greens",
    group: "COLORS",
    cnt: 4,
  },
  {
    name: "ORANGE",
    sub: "oranges",
    group: "COLORS",
    cnt: 5,
  },
  {
    name: "PINK",
    sub: "pinks",
    group: "COLORS",
    cnt: 6,
  },
  {
    name: "PURPLE",
    sub: "purples",
    group: "COLORS",
    cnt: 7,
  },
  {
    name: "RED",
    sub: "reds",
    group: "COLORS",
    cnt: 8,
  },
  {
    name: "TURQUOISE",
    sub: "turquoises",
    group: "COLORS",
    cnt: 9,
  },
  {
    name: "WHITE",
    sub: "whites",
    group: "COLORS",
    cnt: 10,
  },
  {
    name: "YELLOW",
    sub: "yellows",
    group: "COLORS",
    cnt: 11,
  },
];
// let readthemes = JSON.parse(localStorage.getItem("THEMESIMG"));

// let taa = "CABLE CARS";

// themesinfo.forEach((value, index) => {
//   // console.log(value.name);
//   // if (value.name == taa) {
//   //   // console.log(value);
//   // }
//   // console.log(value.name == taa);
//   if (value.name == taa) {
//     // console.log(value);
//     console.log(readthemes[value.cnt][value.sub]);
//   }
// });

function subimg() {
  let subcon = document.querySelector(".subcon");
  let inputval = subcon.querySelectorAll("input");
  let localchk = localStorage.getItem("MYIMG");

  let readthemes = JSON.parse(localStorage.getItem("THEMESIMG"));
  let readcolor = JSON.parse(localStorage.getItem("COLORIMG"));

  let upimgchk = inputval[0].value;
  let upnickname = inputval[1].value;
  let upcountry = inputval[2].value;
  let upcity = inputval[3].value;
  let uptitle = inputval[4].value;
  let updesc = inputval[5].value;

  if (upimgchk == "") {
    alert("사진을 등록해주세요.");
  } else if (!selectres) {
    alert("카테고리를 입력해주세요.");
  } else if (upcountry == "") {
    alert("국가를 입력해주세요.");
  } else if (upcity == "") {
    alert("도시를 입력해주세요.");
  } else if (selectres == "") {
    alert("제목을 입력해주세요.");
  } else if (updesc == "") {
    alert("설명을 입력해주세요.");
  } else if (
    upimgchk != "" &&
    upcountry != "" &&
    upcity != "" &&
    selectres != "" &&
    uptitle != "" &&
    updesc != ""
  ) {
    // 생성자를 통해 업로드할 이미지 객체생성
    let imgupload = new createimgupload(
      upnickname,
      upcountry,
      upcity,
      selectres,
      updesc,
      res
    );
    if (!localchk) {
      // 등록한 이미지 정보를 imgupload라는 이름의 localstorage 생성
      localStorage.setItem("MYIMG", `${JSON.stringify([imgupload])}`);
    } else {
      let acceptimg = JSON.parse(localStorage.getItem("MYIMG"));
      acceptimg.push(imgupload);
      localStorage.setItem("MYIMG", JSON.stringify(acceptimg));
    }

    let craeteobject = {
      catagory: selectres,
      country: upcountry + ", " + upcity,
      description: updesc,
      img: res,
      location: uptitle,
      nickname: upnickname,
    };

    themesinfo.forEach((value) => {
      if (value.name == selectres) {
        localStorage.setItem("MYIMG", `${JSON.stringify([imgupload])}`);

        console.log(readthemes[value.cnt][value.name]);

        readthemes[value.cnt][value.name].push(craeteobject);
      }
      localStorage.setItem("THEMESIMG", `${JSON.stringify(readthemes)}`);
    });

    colorinfo.forEach((value) => {
      if (value.name == selectres) {
        localStorage.setItem("MYIMG", `${JSON.stringify([imgupload])}`);

        console.log(readcolor[value.cnt][value.name]);

        readcolor[value.cnt][value.name].push(craeteobject);
      }
      localStorage.setItem("COLORIMG", `${JSON.stringify(readcolor)}`);
    });
  }

  // 이미지 등록시 카테고리에 이미지 정보 추가

  // location.reload();
}

// 유저가 이미지 등록하면 THEMESIMG, COLORIMG에 이미지 등록

// // THEMESIMG 불러오기
// let readthemes = JSON.parse(localStorage.getItem("THEMESIMG"));

// let ta = {
//   title: "",
//   img: "",
//   country: "cc",
//   location: "dd",
//   description: "ee",
// };
// test1.push(ta);

// // console.log(tb);
// localStorage.setItem("THEMESIMG", `${JSON.stringify(readthemes)}`);

// // COLORIMG 불러오기
// let readcolor = JSON.parse(localStorage.getItem("COLORIMG"));

// 찾아온 로컬스토리지 key로 value를 저장
// let tmplocal = JSON.parse(localStorage.getItem(`${listfilter}`));

// console.log(tmplocal);

// // 만들어진 로컬 스토리지의 group이 THEMES 일 경우
// if (tmplocal.group == "THEMES") {
//   let themesname = readthemes[tmplocal.cnt][tmplocal.sub];

//   selectthemes(themesname);
// }

// // 만들어진 로컬 스토리지의 group이 COLORS 일 경우
// if (tmplocal.group == "COLORS") {
//   let colorname = readcolor[tmplocal.cnt][tmplocal.sub];

//   selectthemes(colorname);
// }

// let tat = JSON.parse(localStorage.getItem("imgupload"));

// console.log(tat[0].nickname);
// console.log(tat[2].description);
// console.log(tat[3].title);

//////////////////////////////////////////////////

// // a 태그를 사용한 이미지 다운로드(이미지가 다운로드 파일로 받아짐)
// function dataURLtoBlob(dataurl) {
//   var arr = dataurl.split(","),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new Blob([u8arr], {
//     type: mime,
//   });
// }

// function downloadImg(imgSrc) {
//   console.log(res);
//   console.log(filename);
//   var image = new Image();
//   image.crossOrigin = "anonymous";
//   image.src = imgSrc;
//   var fileName = image.src.split("/").pop();
//   image.onload = function () {
//     var canvas = document.createElement("canvas");
//     canvas.width = this.width;
//     canvas.height = this.height;
//     canvas.getContext("2d").drawImage(this, 0, 0);

//     if (typeof window.navigator.msSaveBlob !== "undefined") {
//       window.navigator.msSaveBlob(dataURLtoBlob(canvas.toDataURL()), fileName);
//     } else {
//       var link = document.createElement("a");
//       // link.href = canvas.toDataURL();
//       link.href = res;
//       // link.download = fileName;
//       link.download = filename;
//       link.click();
//       // let subinp = document.querySelector(".subinput");
//       // subinp.innerHTML = `<a href="${res}" download="${filename}"></a>`;
//     }
//   };
// }

// // 로컬 스토리지에 이미지 저장하기
// // 이미지 파일 경로
// // const imagePath = 'image.png';
// const imagePath = "image.png";

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
