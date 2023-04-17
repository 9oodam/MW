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
