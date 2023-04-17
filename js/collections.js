// 이미지 그려주는 함수
let colcardwrap = document.querySelector(".colcardwrap");
let colcard = document.querySelector(".colcard");
let colcardin = document.querySelector(".colcardin");
let themestag = document.querySelector(".themes");
let colortag = document.querySelector(".colorpalette");
let tmp;

// let gradations = document.querySelectorAll(".gradation");
// let colcards = document.querySelectorAll(".colcard");

function addtag(value) {
  let img = document.createElement("img");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let h4 = document.createElement("h4");
  let atag = document.createElement("a");

  h4.innerHTML = value.title;
  h4.className = "title";
  img.src = value.img;
  div1.className = "colcard";
  div2.className = "colcardin";
  atag.onclick = function (e) {
    tmp = e.target.className;

    // console.log(tmp);

    if (tmp == "title") {
      let tb = e.target.innerHTML;
      console.log(tb);
      tmp = tb;
    }

    // tm() 함수가 적용중일 경우
    if (themestag.classList.contains("addborder")) {
      gotothemes.forEach((value, index) => {
        if (gotothemes[index].name == tmp) {
          console.log(gotothemes[index]);
          localStorage.setItem("||", JSON.stringify(gotothemes[index]));
        }
      });
    }
  };

  if (colortag.classList.contains("addborder")) {
    gotocolor.forEach((value, index) => {
      if (gotocolor[index].name == tmp) {
        console.log(gotocolor[index]);
        localStorage.setItem("||", JSON.stringify(gotocolor[index]));
      }
    });
  }
  // atag.href = "./collist.html";

  div3.className = "gradation";

  div3.append(h4);
  div2.append(img);
  div2.append(atag);
  atag.append(div3);
  div1.append(div2);
  colcardwrap.append(div1);
}

// 넘어갈 키워드 배열
let gotocolor = [
  {
    name: "BLACK",
    sub: "blacks",
  },
  {
    name: "BLUE",
    sub: "blues",
  },
  {
    name: "BROWN",
    sub: "browns",
  },
  {
    name: "GRAY",
    sub: "grays",
  },
  {
    name: "GREEN",
    sub: "greens",
  },
  {
    name: "ORANGE",
    sub: "oranges",
  },
  {
    name: "PINK",
    sub: "pinks",
  },
  {
    name: "PURPLE",
    sub: "purples",
  },
  {
    name: "RED",
    sub: "reds",
  },
  {
    name: "TURQUOISE",
    sub: "turquoises",
  },
  {
    name: "WHITE",
    sub: "whites",
  },
  {
    name: "YELLOW",
    sub: "yellows",
  },
];

let gotothemes = [
  {
    name: "CABLE CARS",
    sub: "cablecars",
  },
  {
    name: "CLASSIC FACADES",
    sub: "classics",
  },
  {
    name: "DOORS",
    sub: "doors",
  },
  {
    name: "EDUCATIONAL INSTITUTIONS",
    sub: "edus",
  },
  {
    name: "GOVERNMENT BUILDINGS",
    sub: "goves",
  },
  {
    name: "HIDDEN WONDESRS",
    sub: "hiddens",
  },
  {
    name: "HIDDEN WONDERS",
    sub: "hiddens",
  },
  {
    name: "HOTEL / MOTEL",
    sub: "hms",
  },
  {
    name: "INTERIORS",
    sub: "inters",
  },
  {
    name: "LIBRARY",
    sub: "libs",
  },
  {
    name: "LIGHTHOUSE",
    sub: "lights",
  },
  {
    name: "MUSEUM",
    sub: "museums",
  },
  {
    name: "NATURE",
    sub: "natures",
  },
];
// 페이지가 열리면 바로 실행
(function () {
  tm();
})();

// onclick THEMES
function tm() {
  colcardwrap.innerHTML = "";

  themestag.classList.add("addborder");
  colortag.classList.remove("addborder");

  let themearr = JSON.parse(localStorage.getItem("THEMES"));

  themearr.forEach((value) => {
    addtag(value);
  });
}

// onclick COLOR PALETTE
function cp() {
  colcardwrap.innerHTML = "";

  themestag.classList.remove("addborder");
  colortag.classList.add("addborder");

  let colorarr = JSON.parse(localStorage.getItem("COLORPALETTE"));
  colorarr.forEach((value) => {
    addtag(value);
  });
}

// 이미지 클릭하면 로컬스토리지 정보 불러오기
// let gradations = document.querySelectorAll(".gradation");
// let colcards = document.querySelectorAll(".colcard");

// colcards.forEach((a, b) => {
//   gradations[b].addEventListener("click", function (e) {
//     let gh4 = gradations[b].querySelector("h4");
//     console.log(gh4.innerHTML);

//     console.log(gotocolor);
//     // h4 초기화
//     gh4 = "";
//   });
// });
