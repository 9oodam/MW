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

/* 실행 */
window.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});

// COLLECTIONS THEMES create localstorage

function createcollections(img, title) {
  this.img = img;
  this.title = title;
}

let themes01 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/50549683_115085609593916_1961797280330727974_n-800x721.jpg?lossy=1&strip=1&webp=1",
  "CABLE CARS"
);

let themes02 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/23595073_1689113034433739_1346042720501628928_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "CLASSIC FACADES"
);

let themes03 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/75332701_230779857889483_5510500287028109061_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "DOORS"
);

let themes04 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/24838759_1472570436193554_2246699917978370048_n.jpg?lossy=1&strip=1&webp=1",
  "EDUCATIONAL INSTITUTIONS"
);

let themes05 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/Woolwich-Town-Hall-800x800.jpg?lossy=1&strip=1&webp=1",
  "GOVERNMENT BUILDINGS"
);

let themes06 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/52971076_362331887706134_7874578816021381623_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "HIDDEN WONDERS"
);
let themes07 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/GeorgianHotelInsta-e1639517535615-800x800.jpg?lossy=1&strip=1&webp=1",
  "HOTEL MOTEL"
);
let themes08 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/05/81568047_2525170487764187_4233101169430985574_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "INTERIORS"
);
let themes09 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/30078104_1018261411661558_7719167807102910464_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "LIBRARY"
);
let themes10 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/50244801_101488410904785_7804855446322858810_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "LIGHTHOUSE"
);
let themes11 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/05/83189714_217009689337787_2795983043365829945_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "MUSEUM"
);
let themes12 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/29094918_469293313486226_3318233948399599616_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "NATURE"
);

let themes = [
  themes01,
  themes02,
  themes03,
  themes04,
  themes05,
  themes06,
  themes07,
  themes08,
  themes09,
  themes10,
  themes11,
  themes12,
];

let color01 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/22429704_133661504049431_4455231951950839808_n-800x699.jpg?lossy=1&strip=1&webp=1",
  "BLACK"
);

let color02 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/8d06ca59-720x800.jpeg?lossy=1&strip=1&webp=1",
  "BLUE"
);

let color03 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/53160753_2586675204695201_169043630707039832_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "BROWN"
);

let color04 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/73424608_163722738053249_2535030130848005948_n-800x633.jpg?lossy=1&strip=1&webp=1",
  "GRAY"
);
let color05 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/05/90086492_938096936642763_5437379437826734322_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "GREEN"
);
let color06 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/64961088_951069728396673_7248425327418930885_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "ORANGE"
);
let color07 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/26070394_131546737646213_8637264551781335040_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "PINK"
);
let color08 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/73028543_453227532066373_1231545041706789610_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "PURPLE"
);
let color09 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/25012177_139998783366969_1630418964800602112_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "RED"
);
let color10 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/78918357_454329888812771_7390690440755563381_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "TURQUOISE"
);
let color11 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/05/89472049_642389713161510_3722994410821832422_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "WHITE"
);
let color12 = new createcollections(
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/38897517_895384273978891_3221638390155837440_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "YELLOW"
);

let colorpalette = [
  color01,
  color02,
  color03,
  color04,
  color05,
  color06,
  color07,
  color08,
  color09,
  color10,
  color11,
  color12,
];

localStorage.setItem("THEMES", JSON.stringify(themes));
localStorage.setItem("COLORPALETTE", JSON.stringify(colorpalette));

// 이미지 그려주는 함수
let colcardwrap = document.querySelector(".colcardwrap");
let colcard = document.querySelector(".colcard");
let colcardin = document.querySelector(".colcardin");
let themestag = document.querySelector(".themes");
let colortag = document.querySelector(".colorpalette");
function addtag(value) {
  let img = document.createElement("img");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let h4 = document.createElement("h4");

  h4.innerHTML = value.title;
  img.src = value.img;
  div1.className = "colcard";
  div2.className = "colcardin";
  div3.className = "gradation";

  div3.append(h4);
  div2.append(img);
  div2.append(div3);
  div1.append(div2);
  colcardwrap.append(div1);
}

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
