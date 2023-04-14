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

// stories content creaete localstorage
function createcard(mainimg, logoimg, title, text, tab) {
  this.mainimg = mainimg;
  this.logoimg = logoimg;
  this.title = title;
  this.text = text;
  this.tab = tab;
}
function createcard2(mainimg, title, text, tab) {
  this.mainimg = mainimg;
  this.title = title;
  this.text = text;
  this.tab = tab;
}

// create ADVENTURE CURIOUSLY
let adventurelogo =
  "https://accidentallywesanderson.com/wp-content/uploads/2022/07/hendricks-bug-new.png";
let adventuretab = "ADVENTURE CURIOUSLY";

let adventure01 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/11/DSC_5029-small-800x800.jpg",
  adventurelogo,
  "The Scottish “White House”",
  "While many a castle have cost a pretty penny, very few get to be featured on a pound sterling.",
  adventuretab
);
let adventure02 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/09/DSC_8149-e1663092265914-800x800.jpg",
  adventurelogo,
  "Sinister Science Snatchers",
  'A new meaning behind a body being "snatched."',
  adventuretab,
  "https://accidentallywesanderson.com/wp-content/uploads/2022/10/Anatomical-Museum-In-Editted-800x800.jpg",
  adventurelogo
);

let adventure03 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/09/DSC_8149-e1663092265914-800x800.jpg",
  adventurelogo,
  "Sturdy Scottish Spuds",
  "Home to the Edinburgh Potato.",
  adventuretab
);

let adventure04 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/08/cruise-room-full-res-1-e1660744567820-800x800.jpg",
  adventurelogo,
  "Initiate Cruise Control",
  "For a taste of luxurious libation inspired by one of history’s most celebrated ships, you’ll need to travel far, far away from the ocean…",
  adventuretab
);

let adventure05 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/07/DSC_7600-edited-e1658335316229-800x800.jpg",
  adventurelogo,
  "Bows Versus Bogeys",
  "The Old Course is enshrined in golf lore not only for being the oldest golf course in the world, but a site that also had a major impact on the modern game.",
  adventuretab
);

let adventure06 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/11/DSC_6102_Final_3-800x800.jpg",
  adventurelogo,
  "One Man, Many Mountains",
  "Following in the footsteps of your heroes is never easy.",
  adventuretab
);

let adventure07 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/11/DSC_8543-1-e1636563095613-800x800.jpeg",
  adventurelogo,
  "Tartans, Tailors, & Orphan Phone Boxes",
  "The oldest tailor in Scotland is a marvelous shop of mystery and master-crafted bespoke suits.",
  adventuretab
);

let adventure08 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/10/DSC_6382-e1635282693698-800x731.jpg",
  adventurelogo,
  "Please Barter Responsibly",
  "Before you know it, you’ve lost your clan’s castle in a drunken bet.",
  adventuretab
);

let adventure = [
  adventure01,
  adventure02,
  adventure03,
  adventure04,
  adventure05,
  adventure06,
  adventure07,
  adventure08,
];

// create IN THE DETAILS
let itdlogo =
  "https://accidentallywesanderson.com/wp-content/uploads/2021/12/dlr-group_bug1.png";
let itdtab = "IN THE DETAILS";

let itd01 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2023/04/catbirrd-800x800.jpg",
  itdlogo,
  "Modular Accommodations",
  "Rising above Denver’s flourishing RiNo neighborhood, the Catbird Hotel is playful and eccentric.",
  itdtab
);

let itd02 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2023/03/surety-Hotel-4-800x800.jpg",
  itdlogo,
  "Hip in Heritage",
  "Once the tallest building in the state, the Surety Hotel was constructed during an economic boom for the city of Des Moines, but it would cycle through a rolodex of names before finding the most befitting title.",
  itdtab
);

let itd03 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/11/25_12038_00_st-800x800.jpg",
  itdlogo,
  "Contentious Liturgical Tunes",
  "There once was a time when musical instruments were an unwelcome sound in this conservatory of music.",
  itdtab
);

let itd04 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2023/01/DLR-Photo-e1674002172157-800x800.jpg",
  itdlogo,
  "Humble Beginnings",
  "It began in a basement, hatched from a plan made on Thanksgiving weekend, there's been a lot to feel thankful for. ",
  itdtab
);

let itd05 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/09/75_22700_00_N8_st-800x800.jpg",
  itdlogo,
  "Academy Award-Winning Apartments",
  "Golden Age of Hollywood apartments that once housed a speakeasy.",
  itdtab
);

let itd06 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/10/30_12116_03_N4_weblg-2140x1427-1-800x800.jpeg",
  itdlogo,
  "Eternal Encores",
  "A theater restoration even it's ghosts can appreciate.",
  itdtab
);

let itd07 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/07/masstimber2-800x800.jpg",
  itdlogo,
  "Timber’s Triumphant Return",
  "AWA explores how timber is once again making a comeback as an essential construction element in the modern world.",
  itdtab
);

let itd08 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/05/DSC_7201-e1652207438495-800x800.jpg",
  itdlogo,
  "Playhouse Preservation",
  '"Pave paradise and put up a parking lot"',
  itdtab
);

let itd09 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/04/IS-featureimage-800x499.jpg",
  itdlogo,
  "Glimpse of Gold Fever",
  "Discover the mountain treasures of the birthplace of the Colorado Gold Rush and home of the first hot springs in America.",
  itdtab
);

let itd10 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/04/Avalon-chairs-800x800.jpg",
  itdlogo,
  "Pitstops to Playbills",
  "The small, rugged town of Grand Junction was once no more than a pit stop along the train route between Denver and Salt Lake City. Then came the Avalon.",
  itdtab
);

let itd11 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/03/DSC_4279-1-2-800x800.jpg",
  itdlogo,
  "A History Set in Stone",
  "A new hotel named after the Mother of Fort Collins...or is it Auntie?",
  itdtab
);

let itd12 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/02/cottonwood-2-800x800.jpeg",
  itdlogo,
  "We’ll Take A Room & A Reuben, Please!",
  "Gracing the old Lincoln Highway, this old hotel was famous for celebrities, Jazz Age luxury, and a deliciously iconic sandwich.",
  itdtab
);

let itd13 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2020/04/55_13090_00_N38_st-e1639493114590-800x800.jpg",
  itdlogo,
  "Past Pursuits of Female Artists",
  "A truly surprising sight awaited visitors of the Pennsylvania Academy of the Fine Arts in the mid-1800s: female students.",
  itdtab
);

let itd14 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/11/DSC_6403-e1637701573363-800x800.jpg",
  itdlogo,
  "No Need For Sneaky Snacks",
  "Though bringing your own food into a movie theater is typically frowned upon, owner Jerry Steel encouraged it.",
  itdtab
);

let itd15 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/09/30_09081_00_N3_st-1-e1639496896952-800x800.jpg",
  itdlogo,
  "Restoring More Than Comic Relief",
  "Bob Hope once pledged “if I have to lay an egg for my country, I’ll do it.”",
  itdtab
);

let itd16 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/09/55_10074_00_N29_st-e1631734716972-800x800.jpg",
  itdlogo,
  "Mysterious Case of a Missing Masterpiece",
  "A painting removed for a routine cleaning disappeared for decades.",
  itdtab
);

let itd17 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/08/DSC_8250-e1628175635716-800x800.jpg",
  itdlogo,
  "The Orchestra’s Big Secret",
  "At center stage, Severance Hall's organ has more of a story than you think.",
  itdtab
);

let itd18 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/03/capitolhillbooks_web-thumb-640xauto-1022159-e1614819707789.jpg",
  itdlogo,
  "The Caring Curmudgeon Of Capitol Hill",
  "Capitol Hill Books isn't here for your crap.",
  itdtab
);

let itd = [
  itd01,
  itd02,
  itd03,
  itd04,
  itd05,
  itd06,
  itd07,
  itd08,
  itd09,
  itd10,
  itd11,
  itd12,
  itd13,
  itd14,
  itd15,
  itd16,
  itd17,
  itd18,
];

// create WHALEBONE
let whalelogo =
  "https://accidentallywesanderson.com/wp-content/uploads/2020/06/wb-long-logo.png";
let whaletab = "WHALEBONE";

let whale01 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2023/02/photo-Headliner-800x600.png",
  whalelogo,
  "The Annual Photo Contest",
  "Whalebone Magazine's 2023 Photo Contest is about to begin!",
  whaletab
);

let whale02 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/01/awa-france-hero-1050x558-1-800x558.jpg",
  whalelogo,
  "On Location: The French Dispatch",
  "Wes creates fictional stories that take place in real places. Here, we visit the real places of The French Dispatch.",
  whaletab
);

let whale03 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/11/DSC_1635-1050x700-1-800x700.jpg",
  whalelogo,
  "A Long Strange Trip",
  "AWA packed into a van and drove to Vermont. Things got weird.",
  whaletab
);

let whale04 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/11/flower-wall-window-800x667.jpg",
  whalelogo,
  "A Sip in Time",
  "An AWA Adventure in Florence, Italy",
  whaletab
);

let whale05 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/11/wes-revised-1050x600-1-800x600.jpg",
  whalelogo,
  "AWA Interviews Wes",
  "Pinch us: AWA sits down with our inspiration, Wes Anderson, for a lovely chat.",
  whaletab
);

let whale06 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/07/photo-wb-header-800x547.jpg",
  whalelogo,
  "East of Eastman",
  "An AWA Adventure in Rochester, NY, Home of Kodak",
  whaletab
);

let whale07 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2020/09/weatherboat-e1636748960323-800x800.png",
  whalelogo,
  "Air, Land and Sea Adventures in Observation",
  "An attempt to understand and predict the forces of nature",
  whaletab
);

let whale08 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2020/06/hot-sauce-header-800x460.jpg",
  whalelogo,
  "In Search of Surprising Scovilles",
  "We discover a cold concoction that is so hot no one younger than 18 is even allowed to try it.",
  whaletab
);

let whale09 = new createcard(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/07/Screen-Shot-2021-07-15-at-4.15.18-PM-800x761.png",
  whalelogo,
  "The story of Accidentally Wes Anderson",
  "Our first adventure (in print) with Whalebone. An origin story?",
  whaletab
);

let whale = [
  whale01,
  whale02,
  whale03,
  whale04,
  whale05,
  whale06,
  whale07,
  whale08,
  whale09,
];

// create ARCHITECTURAL WONDERS
let archtab = "ARCHITECTURAL WONDERS";

let arch01 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2023/02/ASTURIAS-2-2-small-800x800.jpg",
  "What’s a Palace with no Throne",
  `"The first building in Spain with electrical light was a "plug" that "sparked" Gaudi's career."`,
  archtab
);

let arch02 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2023/01/4F8D0B2D-A777-4796-A19B-5DD8FCF98259-e1672778377914-800x628.jpeg",
  "Modern Mining Marvels",
  "A fanciful doorway hides a masterpiece of engineering.",
  archtab
);

let arch03 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/08/35B0B8B5-8E29-4234-A3CA-4E5D999B27CE-800x800.jpeg",
  "Candy Colored Community",
  "Vibrant district home to Peranakan shophouses -- a taste of history & culture on the edge of Singapore's futuristic city-center.",
  archtab
);

let arch04 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/07/featured-image-seoul-gate-1-800x400.jpg",
  "A Case of the Nosy Neighbor",
  "This beloved gateway to the South Korean palace, has endured several rounds of damage and restorations over its first 600 years of existence.",
  archtab
);

let arch05 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/05/Pisa-800x800.jpg",
  "New Perspectives For A Piazza",
  "The imperfect history of how the Leaning Tower of Pisa--and the attempts (failures) to fix its tilt.",
  archtab
);

let arch06 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/04/2020-05-07-20.53.19-800x655.jpg",
  "Antwerp’s Alternative Walkway",
  "Upon entry to the subterranean tunnel, commuters travel through a 572 meter tiled passage under the river Scheldt and emerge via the world's first wooden escalator.",
  archtab
);

let arch07 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/09/IMG_2072-1-800x800.jpg",
  `Not Your Average Leggings","This 5km canal tunnel once required 4 hours-worth of "leg-power."`,
  archtab
);

let arch08 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/08/Duval-Benjamin_Antwerpen-Centraal_awa-1-e1630369581248-800x800.jpg",
  "The ‘Slow Style’ Station of Antwerp",
  "One of the most eclectic train stations in the world.",
  archtab
);

let arch09 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/08/D0AB9E7D-5CBD-4114-B462-8A10E254D0E8-e1628096364769-800x800.jpeg",
  "A Mansion That Measures Time",
  "One of the few ‘calendar houses’ in the world with 365 windows, 52 chimneys, 12 doors, and 4 towers representing the days, weeks, months, and seasons in a year.",
  archtab
);

let arch10 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/04/DSC02424-800x800.jpg",
  "The Petite Parish",
  `The self-proclaimed Guinness World Record holder for "Smallest Chapel in the World" is contested only by the Guinness World Record Organization itself.`,
  archtab
);

let arch11 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/03/DSC_9951-2-e1616708973325-800x800.jpg",
  "Take It To The Bridge",
  `“In bridge designing, the aesthetics are quite as important as engineering details. It is a crime to build an ugly bridge.”`,
  archtab
);

let arch12 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/02/Teatro-Amazonas-_-Alfredo-Nugent-Setubal-_-@alfredoset-800x800.jpeg",
  "The Rainforest Theater’s Second Act",
  "This grandiose opera arena has been declared one of the most beautiful opera houses in the world.",
  archtab
);

let arch13 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2020/09/inbound6146002644208888679-e1598977981202-700x800.jpg",
  "The Art Deco Capital of the World",
  "The inner city of Napier is now recognized as having one of the largest and most beautiful concentrations of Art Deco buildings in the world.",
  archtab
);

let arch14 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2020/05/DSC_0116a-800x800.jpg",
  "The Abandoned Mansions of Sidhpur",
  "In the now-empty homes, delicate detail can still be found in the doorways, staircases, floors, and ceilings.",
  archtab
);

let arch = [
  arch01,
  arch02,
  arch03,
  arch04,
  arch05,
  arch06,
  arch07.arch08,
  arch09,
  arch10,
  arch11,
  arch12,
  arch13,
  arch14,
];

// create SKILLED ARTISANS
let skilledtab = "SKILLED ARTISANS";

let skill01 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/08/161278243_905815743550373_2448195589618884147_n-e1629318995167-800x669.jpg",
  "Community Creators",
  "The number of amazing artists that exist in this Community continues to astonish us!",
  skilledtab
);

let skill02 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/02/948C06E2-C1B4-41FA-B455-CE7C55F3D73B-800x800.jpeg",
  "Masterpieces Mimicking Moments",
  "A museum tributed to a legendary Balinese painter.",
  skilledtab
);

let skill03 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/12/DSC_2143-2-800x800.jpg",
  "Finding Art Amongst The Feathers",
  "It’s not everyday you come across a library with no books.",
  skilledtab
);

let skill04 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/10/DSC_4109-e1639496791752-800x800.jpg",
  "From Rags To Rich Stationery",
  "The age of papermaking may be widely waning, but master paper-maker Jacques Bréjoux continues to keep the art alive.",
  skilledtab
);

let skill05 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/04/3806EB2B-8BB9-463A-AB89-930981E99296-750x800.jpg",
  "Creative Cartelismo Of Queens",
  "Brothers & artists who have been hand-painting signs for businesses in New York City for more than 40 years",
  skilledtab
);

let skill06 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/01/Matthijs-Van-Mierlo_-@matthijsvmierlo-1-800x800.jpeg",
  "Antwerp Was Made For Glovers",
  "Antwerp’s last remaining store dedicated to handmade leather gloves, this family operated store boasts 120 years of exclusively selling craft gloves.",
  skilledtab
);

let skilled = [skill01, skill02, skill03, skill04, skill05, skill06];

// creaete QUALITY QUIRKS
let qualitytab = "QUALITY QUIRKS";

let qual01 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/11/DSC_1009-scaled-e1667558463609-800x800.jpg",
  "Clashing Coffee Houses",
  "A rivalry as bitter as a coffee bean.",
  qualitytab
);

let qual02 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/09/TAROT-featured-img-800x500.jpg",
  "Message in a Barrel",
  "Since 2004, Ivor Fireman has read fortunes on England's most visited attraction outside of London.",
  qualitytab
);

let qual03 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/06/DSC_1995-scaled-e1655825489537-800x800.jpg",
  "Wacky Quacky Traditions",
  "This college is virtually unchanged since its opening in 1438, whispering centuries of stories to its visitors. The most famous tale of all? A Duck on Parade.",
  qualitytab
);

let qual04 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/03/7944BDE5-A4E2-4DA4-B1EC-D11C41A5358D-1-800x800.jpeg",
  "A Lifesize Dollhouse",
  "We're not sure where you'll be able to fit your Queen-sized bed.",
  qualitytab
);

let qual05 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2022/01/7EDCEDBF-8D4F-4B7C-A196-FF61EC0CEA49-e1642551780259-800x800.jpg",
  "Buttering up to the Boss",
  `This community staple was without a "movie staple" in its first decade.`,
  qualitytab
);

let qual06 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/06/DSC_0668-1-1-e1624559618938-800x800.jpeg",
  "The Lettuce Of Cabbage Key",
  `A small island where tips are taped to the walls of the bar, and perhaps one of the most famous "Cheeseburgers in Paradise" is served.`,
  qualitytab
);

let qual07 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/05/9986ECD1-943E-4B89-8DF7-657C34475BF1-e1620851027230-800x770.jpeg",
  "The Pasta King And His Spaghetti Palace",
  "Royal Rigatoni",
  qualitytab
);

let qual08 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/01/Hilite-News-_-@Hilitenews-1-e1611186816735-800x415.jpg",
  "Finding Faulkner In The Frozen Food Aisle",
  "During the renovation of the local library in Carmel, Indiana all the books are conveniently relocated to the nearest supermarket.",
  qualitytab
);

let qual09 = new createcard2(
  "https://accidentallywesanderson.com/wp-content/uploads/2021/01/7605484290_808346e0dc_b-2-e1611767801612-800x506.jpg",
  "Celebrating A Chic Shetland Shelter",
  "Cold and unforgiving Shetland weather inspired a young schoolboy to write the local paper to build a new bus shelter for him and his classmates, but it ended up becoming more than a bus stop.",
  qualitytab
);

let quality = [
  qual01,
  qual02,
  qual03,
  qual04,
  qual05,
  qual06,
  qual07,
  qual08,
  qual09,
];

// create localstorage

localStorage.setItem("ADVENTURE", JSON.stringify(adventure));

localStorage.setItem("IN", JSON.stringify(itd));

localStorage.setItem("WHALEBONE", JSON.stringify(whale));

localStorage.setItem("ARCHITECTURAL", JSON.stringify(arch));

localStorage.setItem("SKILLED", JSON.stringify(skilled));

localStorage.setItem("QUALITY", JSON.stringify(quality));

////////////////////////////////////////////////////

let contenttab = document.querySelector(".contenttab");
let tabs = contenttab.querySelectorAll("span");

// tab 누르면 누른 탭의 내용 실행
tabs.forEach(function (a, b) {
  tabs[b].addEventListener("click", function () {
    // console.log(typeof a.innerHTML);
    let spl = a.innerHTML.split(" ");
    // console.log(spl[0]);
    let aabb = JSON.parse(localStorage.getItem(spl[0]));
    // console.log(Object.keys(aabb[0]).length);

    if (Object.keys(aabb[0]).length == 5) {
      aabb.forEach((a, b) => {
        let imgcards = document.querySelector(".imgcards");
        let imgcard = document.createElement("div");
        let imgcardin = document.createElement("div");
        let img = document.createElement("img");
        let img2 = document.createElement("img");
        let imgbtm = document.createElement("div");
        let imgbtmtxt = document.createElement("div");
        let ctspan = document.createElement("span");
        let cardtxtbox = document.createElement("div");
        let cardtxt = document.createElement("div");
        let cta = document.createElement("a");
        let ctp = document.createElement("p");
        let ctp2 = document.createElement("p");
        let cardimg = document.createElement("div");

        // imgcards.replaceChildren();

        imgcard.className = "imgcard";
        imgcardin.className = "imgcardin";
        img.src = aabb[b].mainimg;
        imgbtm.className = "imgbtm";
        imgbtmtxt.className = "imgbtmtxt";
        ctspan.innerHTML = "PRESENTED WITH";
        img2.src = aabb[b].logoimg;
        cardtxtbox.className = "cardtxtbox";
        cardtxt.className = "cardtxt";
        cta.innerHTML = aabb[b].title;
        ctp.innerHTML = aabb[b].text;
        ctp2.innerHTML = aabb[b].tab;

        cardimg.className = "cardimg";
        cardtxt.append(cta);
        cardtxt.append(ctp);
        cardtxt.append(ctp2);
        cardtxtbox.append(cardtxt);

        imgbtmtxt.append(ctspan);
        imgbtmtxt.append(img2);
        imgbtm.append(imgbtmtxt);

        cardimg.append(img);
        cardimg.append(imgbtm);
        imgcardin.append(cardimg);
        imgcardin.append(cardtxtbox);
        imgcard.append(imgcardin);
        imgcards.append(imgcard);
      });
    }
    if (Object.keys(aabb[0]).length == 4) {
      aabb.forEach((a, b) => {
        let imgcards = document.querySelector(".imgcards");
        let imgcard = document.createElement("div");
        let imgcardin = document.createElement("div");
        let img = document.createElement("img");
        // let img2 = document.createElement("img");
        // let imgbtm = document.createElement("div");
        // let imgbtmtxt = document.createElement("div");
        // let ctspan = document.createElement("span");
        let cardtxtbox = document.createElement("div");
        let cardtxt = document.createElement("div");
        let cta = document.createElement("a");
        let ctp = document.createElement("p");
        let ctp2 = document.createElement("p");
        let cardimg = document.createElement("div");

        // imgcards.replaceChildren();

        imgcard.className = "imgcard";
        imgcardin.className = "imgcardin";
        img.src = aabb[b].mainimg;
        // imgbtm.className = "imgbtm";
        // imgbtmtxt.className = "imgbtmtxt";
        // ctspan.innerHTML = "PRESENTED WITH";
        // img2.src = aabb[b].logoimg;
        cardtxtbox.className = "cardtxtbox";
        cardtxt.className = "cardtxt";
        cta.innerHTML = aabb[b].title;
        ctp.innerHTML = aabb[b].text;
        ctp2.innerHTML = aabb[b].tab;

        cardimg.className = "cardimg";
        cardtxt.append(cta);
        cardtxt.append(ctp);
        cardtxt.append(ctp2);
        cardtxtbox.append(cardtxt);

        // imgbtmtxt.append(ctspan);
        // imgbtmtxt.append(img2);
        // imgbtm.append(imgbtmtxt);

        cardimg.append(img);
        // cardimg.append(imgbtm);
        imgcardin.append(cardimg);
        imgcardin.append(cardtxtbox);
        imgcard.append(imgcardin);
        imgcards.append(imgcard);
      });
    }
  });
});

// let te = ["a", "b", "c", "d", "e"];
// let tee = ["a", "b", "c", "d"];

// console.log(Object.keys(itd01).length);
// console.log(Object.keys(qual01).length);

/////////////////////////////////////////////

// // stories card info localstorage save
// // let cardinfo = document.querySelector(".cardtxt");
// let cardtitle = "Modular Accommodations";
// // let cardpall = cardinfo.querySelectorAll("p");
// let cardtext =
//   "Rising above Denver’s flourishing RiNo neighborhood, the Catbird Hotel is playful and eccentric.";
// let cardtab = "IN THE DETAILS";
// let img1 =
//   "https://accidentallywesanderson.com/wp-content/uploads/2023/04/catbirrd-800x800.jpg";
// let ITDimg =
//   "https://accidentallywesanderson.com/wp-content/uploads/2021/12/dlr-group_bug1.png";

// // console.log(cardtitle);
// // console.log(cardtext);
// // console.log(cardtab);
// function createITD(title, text, tab, img1, ITDimg) {
//   this.title = title;
//   this.text = text;
//   this.tab = tab;
//   this.img1 = img1;
//   this.ITDimg = ITDimg;
// }

// let testlocal = new createITD(cardtitle, cardtext, cardtab, img1, ITDimg);
// let testlocal2 = new createITD(cardtitle, cardtext, cardtab, img1, ITDimg);

// localStorage.setItem("INTHEDETAILS", JSON.stringify([testlocal]));
// let abc = JSON.parse(localStorage.getItem("INTHEDETAILS"));

// let abb = testlocal2;
// (function () {
//   console.log("test");
//   abc.push(abb);
//   console.log(abc);
//   localStorage.setItem("INTHEDETAILS", JSON.stringify(abc));
// })();

// // 로컬 스토리지에 정보가 있으면 가져와서 카드를 만듬
// if (localStorage.getItem("INTHEDETAILS").length != 0) {
//   let tlocal = JSON.parse(localStorage.getItem("INTHEDETAILS"));
//   tlocal.forEach((a, b) => {
//     console.log(tlocal);
//     console.log(tlocal[b].title);
//     let imgcards = document.querySelector(".imgcards");
//     let imgcard = document.createElement("div");
//     let imgcardin = document.createElement("div");
//     let img = document.createElement("img");
//     let img2 = document.createElement("img");
//     let imgbtm = document.createElement("div");
//     let imgbtmtxt = document.createElement("div");
//     let ctspan = document.createElement("span");
//     let cardtxtbox = document.createElement("div");
//     let cardtxt = document.createElement("div");
//     let cta = document.createElement("a");
//     let ctp = document.createElement("p");
//     let ctp2 = document.createElement("p");
//     let cardimg = document.createElement("div");

//     imgcard.className = "imgcard";
//     imgcardin.className = "imgcardin";
//     img.src = tlocal[b].img1;
//     imgbtm.className = "imgbtm";
//     imgbtmtxt.className = "imgbtmtxt";
//     ctspan.innerHTML = "PRESENTED WITH";
//     img2.src = tlocal[b].ITDimg;
//     cardtxtbox.className = "cardtxtbox";
//     cardtxt.className = "cardtxt";
//     cta.innerHTML = tlocal[b].title;
//     ctp.innerHTML = tlocal[b].text;
//     ctp2.innerHTML = tlocal[b].tab;

//     cardimg.className = "cardimg";
//     cardtxt.append(cta);
//     cardtxt.append(ctp);
//     cardtxt.append(ctp2);
//     cardtxtbox.append(cardtxt);

//     imgbtmtxt.append(ctspan);
//     imgbtmtxt.append(img2);
//     imgbtm.append(imgbtmtxt);

//     cardimg.append(img);
//     cardimg.append(imgbtm);
//     imgcardin.append(cardimg);
//     imgcardin.append(cardtxtbox);
//     imgcard.append(imgcardin);
//     imgcards.append(imgcard);
//   });
// }
