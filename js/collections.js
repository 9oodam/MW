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

  div2.onclick = function (e) {
    // 클릭한 이미지의 tag 값을 가져옴
    tmp = e.target.innerHTML;
    // h4 태그를 누르면 innerHTML을 가져와 동작이 잘되지만 그라데이션을 누르면 div 부터 가져옴
    // gradation div를 눌렀을때 하위 h4의 innerHTML을 가져오기 위해
    // ta 변수에 target의 태그 정보를 저장
    let ta = e.target;

    // 그라데이션을 눌렀을 경우 실행
    if (e.target.className == "gradation") {
      // 그라데이션 자식 태그 h4의 innerHTML 값을 가져와
      let tb = ta.querySelector("h4");
      // tmp에 값을 저장해 h4 태그를 눌렀을때와 같은 동작을 하게 함
      tmp = tb.innerHTML;
    }

    // tm() 함수가 적용 중일 경우

    // themestag에 addborder 클래스가 있는 경우 실행
    if (themestag.classList.contains("addborder")) {
      // gotothemes 배열에 저장된 값을 가져옴
      gotothemes.forEach((value, index) => {
        // gotothemes 배열에 저장된 name 값과 tmp 값 비교
        if (gotothemes[index].name == tmp) {
          // console.log(gotothemes[index]);
          // gotothemes 내용 중 name과 tmp가 일치한 객체를 로컬 스토리지에 저장
          localStorage.setItem("||", JSON.stringify(gotothemes[index]));
        }
      });
    }

    // cp() 함수가 적용 중일 경우

    // colortag addborder 클래스가 있는 경우 실행
    if (colortag.classList.contains("addborder")) {
      gotocolor.forEach((value, index) => {
        if (gotocolor[index].name == tmp) {
          localStorage.setItem("||", JSON.stringify(gotocolor[index]));
        }
      });
    }
  };
  atag.href = "./collist.html";

  div3.className = "gradation";

  div3.append(h4);
  div2.append(img);
  div2.append(atag);
  atag.append(div3);
  div1.append(div2);
  colcardwrap.append(div1);
}

// 넘어갈 키워드 배열
const gotocolor = [
  {
    name: "BLACK",
    sub: "blacks",
    group: "COLORS",
    cnt: 0,
    desc: "Occasionally darkness is required to bring out the pops of color in contrast. Black. The opposite of White.",
  },
  {
    name: "BLUE",
    sub: "blues",
    group: "COLORS",
    cnt: 1,
    desc: "Blue has been an important color since ancient times. Often associated with peace and harmony, explore our collection for calm vibes.",
  },
  {
    name: "BROWN",
    sub: "browns",
    group: "COLORS",
    cnt: 2,
    desc: "Wood, brick, and a variety of construction materials often employ brown as a base color. This collection showcases some of the best browns around.",
  },
  {
    name: "GRAY",
    sub: "grays",
    group: "COLORS",
    cnt: 3,
    desc: "Gray doesn't have to equate to drab. This collection features a wide array of images and locations that are, upon closer inspection, anything but!",
  },
  {
    name: "GREEN",
    sub: "greens",
    group: "COLORS",
    cnt: 4,
    desc: "Lush natural scenery, fields of clover, sporting pitches, and brilliant emeralds - all green. Dive in to a collection filled with green goodness.",
  },
  {
    name: "ORANGE",
    sub: "oranges",
    group: "COLORS",
    cnt: 5,
    desc: "The color and name of a popular fruit. You won't find any citrus in this colorful collection, but it is a tasty one nonetheless.",
  },
  {
    name: "PINK",
    sub: "pinks",
    group: "COLORS",
    cnt: 6,
    desc: `"A "pop of pink" is a quintessential element of the AWA aesthetic. This popular collection provides a feast for the eyes that upon further inspection sets up some equally enchanting stories."`,
  },
  {
    name: "PURPLE",
    sub: "purples",
    group: "COLORS",
    cnt: 7,
    desc: "Royal and regal, Purple has long been associated with the finer things in life. This petite collection is so lush that you can almost feel the velvet through the screen.",
  },
  {
    name: "RED",
    sub: "reds",
    group: "COLORS",
    cnt: 8,
    desc: "Is it warm in here? Red, often associated with love, passion, and all things hot, you might need to cool off after exploring this collection.",
  },
  {
    name: "TURQUOISE",
    sub: "turquoises",
    group: "COLORS",
    cnt: 9,
    desc: "Ahhh... Take a dip in this refreshing collection dominated by aquatic tones of turquoise and teal.",
  },
  {
    name: "WHITE",
    sub: "whites",
    group: "COLORS",
    cnt: 10,
    desc: "Similar to the Black collection, White often serves as a contrast that allows other pops of color to take center stage. One thing is for certain, these snaps & stories aren't vanilla.",
  },
  {
    name: "YELLOW",
    sub: "yellows",
    group: "COLORS",
    cnt: 11,
    desc: "An underrated color in the AWA universe, yellow has a lot to offer. We find that there is a lot to love when yellow appears as a pop of color and hope that you'll be delighted, too.",
  },
];

const gotothemes = [
  {
    name: "CABLE CARS",
    sub: "cablecars",
    group: "THEMES",
    cnt: 0,
    desc: "Aerial lifts, tramways, cableways... Occasionally the best way to get from point A to B is on a wire. Cable Cars were first pioneered for human transportation at the end of the 19th century and have maintained their value and charm with unique variations on the mode of transport across the globe.",
  },
  {
    name: "CLASSIC FACADES",
    sub: "classics",
    group: "THEMES",
    cnt: 1,
    desc: `"The stunners contained within this theme scream AWA. Guess what, they are all real places, each with a story to tell. We invite you to explore some of the most "classic" spots around the globe."`,
  },
  {
    name: "DOORS",
    sub: "doors",
    group: "THEMES",
    cnt: 2,
    desc: `"Many times a door is just a door, but sometimes the door represents passage to a new, fantastical place. Other times, the doors themselves have a certain charm, an undeniable "it factor". This collection contains doors of all kinds. Step through and discover something new."`,
  },
  {
    name: "EDUCATIONAL INSTITUTIONS",
    sub: "edus",
    group: "THEMES",
    cnt: 3,
    desc: "Spanning all cultures and eras, Humanity's quest for knowledge is a constant from time immemorial. Each of the places and spaces within this theme have a connection to learning. Some formal, others less so.",
  },
  {
    name: "GOVERNMENT BUILDINGS",
    sub: "goves",
    group: "THEMES",
    cnt: 4,
    desc: "The thought of a government building might bring to mind drab, unimaginative hallways and unmarked doors. It does not need to be so! These places represent the opposite of that aesthetic.",
  },
  {
    name: "HIDDEN WONDESRS",
    sub: "hiddens",
    group: "THEMES",
    cnt: 5,
    desc: "A collection the most unusual places and things with deeper meanings and untold stories. Let's explore together!",
  },
  {
    name: "HOTEL / MOTEL",
    sub: "hms",
    group: "THEMES",
    cnt: 6,
    desc: "Weary travelers have found unique places to lay their head since the beginning of human travel. The locations contained within the collection represent some of the more... extravagant, beautiful, and history-laden options.",
  },
  {
    name: "INTERIORS",
    sub: "inters",
    group: "THEMES",
    cnt: 7,
    desc: "Who doesn't love an immaculately designed interior? It's where we spend most of our waking hours, at least for many of us. This collection represents the best of the best when you need a little inspiration for your own inside spaces.",
  },
  {
    name: "LIBRARY",
    sub: "libs",
    group: "THEMES",
    cnt: 8,
    desc: "To get lost in a book is one of life's simple pleasures. To get lost in one of these libraries, well, you can let us know what you think!",
  },
  {
    name: "LIGHTHOUSE",
    sub: "lights",
    group: "THEMES",
    cnt: 9,
    desc: "Beacons, most often situated on a coast, help watercraft avoid disaster while also guiding them to a friendly port. They come in all shapes and sizes, and each has a story to tell. Learn about these iconic sentinels of the sea (and lakes).",
  },
  {
    name: "MUSEUM",
    sub: "museums",
    group: "THEMES",
    cnt: 10,
    desc: "A night at the museum? We'd need YEARS of exploration to get through all of these lovely homes of art, antiquity and ingenuity.",
  },
  {
    name: "NATURE",
    sub: "natures",
    group: "THEMES",
    cnt: 11,
    desc: "The great outdoors. Sights, sounds, smells. Nature is a wonderful spot to get lost.",
  },
];
// 페이지가 열리면 바로 실행
(function () {
  tm();
})();

// onclick THEMES
function tm() {
  // 이미지 배열 초기화
  colcardwrap.innerHTML = "";

  // 상단 THEMES 클릭시 THEMES에 border가 생기고 COLOR에 border 삭제
  themestag.classList.add("addborder");
  colortag.classList.remove("addborder");

  // 로컬 스토리지에 저장된 THEMES 정보를 가져옴
  let themearr = JSON.parse(localStorage.getItem("THEMES"));

  // 가져온 THEMES 정보를 출력
  themearr.forEach((value) => {
    addtag(value);
  });
}

// onclick COLOR PALETTE
function cp() {
  // 이미지 배열 초기화
  colcardwrap.innerHTML = "";

  // 상단 COLOR에 클릭시  COLOR에 border가 생기고 THEMES에 border 삭제
  themestag.classList.remove("addborder");
  colortag.classList.add("addborder");

  // 로컬 스토리지에 저장된 COLORPALETTE 정보를 가져와 출력
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
