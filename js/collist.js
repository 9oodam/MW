// 페이지 로딩시 데이터 불러오기 위한 준비
// let locallist = window.localStorage;

// let localnames = [];

// for (let i = 0; i < window.localStorage.length; i++) {
//   let temp = window.localStorage.key(i);

//   localnames.push(temp);
// }
// console.log(localnames);

// let listfilter = JSON.parse(localnames.filter((e) => e[0] == '"'));
// // localStorage.removeItem(`"${qwe}"`);

// console.log(listfilter);

// let tmplocal = localStorage.getItem(`"${listfilter}"`);
// let namechk = tmplocal;
// console.log(namechk);
// let qewe = JSON.parse(localStorage.getItem(`${namechk}`));
// console.log(qewe);

// let po = JSON.parse(localStorage.setItem(`"${qwer}"`));
// console.log(po);

// card 생성자
function createcard(title, img, country, location, description) {
  this.title = title;
  this.img = img;
  this.country = country;
  this.location = location;
  this.description = description;
}

// THEMES IMGS

//////////////////////////////////////////////////
// create CABLE CARS
let cabledesc =
  "Aerial lifts, tramways, cableways... Occasionally the best way to get from point A to B is on a wire. Cable Cars were first pioneered for human transportation at the end of the 19th century and have maintained their value and charm with unique variations on the mode of transport across the globe.";

let cable01 = new createcard(
  "CABLECARS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/03/IMG_8088-800x800.jpg",
  "ANON CITY, COLORADO, UNITED STATES",
  "Royal Gorge Bridge & Park",
  "Once the world's highest suspension bridge. Don't look down."
);
let cable02 = new createcard(
  "CABLECARS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/10/DSC_6102_Final_3-800x800.jpg",
  "Fort William, Scotland",
  "The Nevis Range Mountain Gondola",
  "Following in the footsteps of your heroes is never easy, but if your hero is Sir Hugh Munro you’ve got a tough mountain to climb to reach your goal."
);
let cable03 = new createcard(
  "CABLECARS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/08/224-finicular-800x800.jpg",
  "Tbilisi, Georgia",
  "Finicular Tbilisi",
  "A beloved symbol of Tbilisi whose popularity increased when a grand leisure park was constructed on the plateau in the 1930s."
);
let cable04 = new createcard(
  "CABLECARS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/07/225651493_572220817131126_7887283526794437294_n-800x800.jpg",
  "Beatenberg, Switzerland",
  "Beatenberg – Niederhorn Cable Car",
  "This Swiss Cable Car is located in a town with medieval origins - and an origin story that involves slaying a dragon."
);

// create CLASSIC FACADES
let classicdesc = `"The stunners contained within this theme scream AWA. Guess what, they are all real places, each with a story to tell. We invite you to explore some of the most "classic" spots around the globe."`;

let classic01 = new createcard(
  "CLASSIC FACADES",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/AWA-800x800.jpg",
  "PORTO ALEGRE, BRAZIL",
  "Palácio do Comércio",
  "Palácio do Comércio is not just a source of “architectural pride”, but a historical city-wide landmark."
);
let classic02 = new createcard(
  "CLASSIC FACADES",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7A89E35B-5BCB-4C2B-9DC2-B15A28F8D8CD-800x800.jpg",
  "EL PASO, TEXAS, UNITED STATES",
  "The Plaza Hotel Pioneer Park",
  "In the 1950s, both a wealthy hotelier and a Hollywood legend called this towering hotel home."
);
let classic03 = new createcard(
  "CLASSIC FACADES",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/villa-empain-insta-1-800x800.jpg",
  "BRUSSELS, BELGIUM",
  "Villa Empain",
  "Let us explain the style of Emplain."
);
let classic04 = new createcard(
  "CLASSIC FACADES",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/336819521_118907344440832_351575098074494538_n-800x800.jpg",
  "PARIS, FRANCE",
  "Place Vendôme",
  "The site of some of the most luxurious brands is also the site of some of the most unusual ... recycling."
);

// create DOORS
let doordesc = `"Many times a door is just a door, but sometimes the door represents passage to a new, fantastical place. Other times, the doors themselves have a certain charm, an undeniable "it factor". This collection contains doors of all kinds. Step through and discover something new."`;

let door01 = new createcard(
  "DOORS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/5800546B-AD10-407F-AFEF-3A7C4F0DF5EA-800x800.jpeg",
  "PHILADELPHIA, PENNSYLVANIA, UNITED STATES",
  "Horace Jayne House",
  "This building which drew inspiration from the battlefield is the missing link from Thomas Jefferson's Monticello to Frank Lloyd Wright's organic architecture."
);
let door02 = new createcard(
  "DOORS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/03/156448714_781545412470577_5889255509518121176_n-800x800.jpg?lossy=1&strip=1&webp=1",
  "AGRA, INDIA",
  "Agra Fort",
  "Totaling 94 acres, this massive fortress made of red sandstone was the former residence and capital city of India's medieval Mughal Dynasty."
);
let door03 = new createcard(
  "DOORS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/08/296096599_441339587721502_9000750911016865526_n-800x800.jpg",
  "LONDON, UNITED KINGDOM",
  "The Mildmay Club",
  `"One of the last "Working Men's Clubs" in London, Mildmay is a testament to Community and belonging."`
);
let door04 = new createcard(
  "DOORS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/295617042_5562616073773094_7564432010437480444_n-800x800.jpg",
  "CLEVELAND, OHIO, UNITED STATES",
  "Cleveland Institute of Music",
  "Like the best compositions, this conservatory's story began with the humility of a single note, then built and built until something truly beautiful was born…"
);

// create EDUCATIONAL INSTITUTIONS
let edudesc =
  "Spanning all cultures and eras, Humanity's quest for knowledge is a constant from time immemorial. Each of the places and spaces within this theme have a connection to learning. Some formal, others less so.";

let edu01 = new createcard(
  "EDUCATIONAL INSTITUTIONS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/20220124_104522-800x800.jpg",
  "DEBRECEN, HUNGARY",
  "University of Debrecen",
  "This university is celebrated for its academic programs -- and its cactus collection."
);
let edu02 = new createcard(
  "EDUCATIONAL INSTITUTIONS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/294554016_185299867253649_1417697834781966114_n-800x800.jpg",
  "LUGO, SPAIN",
  "The Círculo de las Artes",
  "The only city in the world to be completely surrounded by intact Roman walls."
);
let edu03 = new createcard(
  "EDUCATIONAL INSTITUTIONS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/inbound2161675608016262826-800x800.jpg",
  "CASSOPOLIS, MICHIGAN, UNITED STATES",
  "Geneva School",
  "The county and a story about one of it's most famous citizens will lure you in."
);
let edu04 = new createcard(
  "EDUCATIONAL INSTITUTIONS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/295617042_5562616073773094_7564432010437480444_n-800x800.jpg",
  "CLEVELAND, OHIO, UNITED STATES",
  "Cleveland Institute of Music",
  "Like the best compositions, this conservatory's story began with the humility of a single note, then built and built until something truly beautiful was born…"
);

// create GOVERNMENT BUILDINGS
let govedesc =
  "The thought of a government building might bring to mind drab, unimaginative hallways and unmarked doors. It does not need to be so! These places represent the opposite of that aesthetic.";

let gove01 = new createcard(
  "GOVERNMENT BUILDINGS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/04/279000231_528048965549113_3734253335068831328_n-800x720.jpg",
  "HANOI, VIETNAM",
  "Presidential Palace",
  "A symbol of when it was a French colony, the presidential palaces offers a glimpse into the storied history of Vietnam."
);
let gove02 = new createcard(
  "GOVERNMENT BUILDINGS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/03/DSC_6071-1-800x800.jpg",
  "GRAND JUNCTION, COLORADO, UNITED STATES",
  "Wayne N. Aspinall Federal Building and Courthouse",
  "A painting removed for a routine cleaning disappeared for decades."
);
let gove03 = new createcard(
  "GOVERNMENT BUILDINGS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/04/277603393_506043934413764_4578293418272300498_n-800x800.jpg",
  "SARAJEVO, BOSNIA AND HERZEGOVINA",
  "Vijećnica",
  "Playing host to the killing that sparked WWI was only the beginning of this heralded hall’s story — it’s one of triumph, tragedy, and a tantalizing return to glory."
);
let gove04 = new createcard(
  "GOVERNMENT BUILDINGS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/02/273174039_1043305403066496_3991599836811027518_n-800x800.jpg",
  "LANGLEY, BRITISH COLUMBIA, CANADA",
  "Fort Langley Community Hall",
  "In 1924, the construction of this town hall was funded for a total of $137.13."
);

// create HIDDEN WONDERS
let hiddendesc =
  "A collection the most unusual places and things with deeper meanings and untold stories. Let's explore together!";

let hidden01 = new createcard(
  "HIDDEN WONDERS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/4F8D0B2D-A777-4796-A19B-5DD8FCF98259-1-800x800.jpeg",
  "SOUTH SARDINIA, ITALY",
  "Porto Flavia",
  "A fanciful doorway hides a masterpiece of engineering."
);
let hidden02 = new createcard(
  "HIDDEN WONDERS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/05/DSC_4147-800x800.jpg",
  "NEW YORK, NEW YORK, UNITED STATES",
  "American Museum of Natural History",
  "That spirit of exploration is shared by museum goers, as they’re invited to observe 45 permanent exhibition halls—including one dedicated to the extraordinary achievements of intrepid polar explorer."
);
let hidden03 = new createcard(
  "HIDDEN WONDERS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/126231979_131777811752478_3368863512616670864_n-800x800.jpg",
  "DAYTONA BEACH, FLORIDA, UNITED STATES",
  "Daytona International Speedway",
  "If Daytona was going to be the world capital for competitive speed, it was going to need a precise timer."
);
let hidden04 = new createcard(
  "HIDDEN WONDERS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/05/DSC_3980copy-1-800x800.jpg",
  "NEW YORK, NEW YORK, UNITED STATES",
  "The Metropolitan Museum of Art",
  "David Webb found his muse by frequenting the Met."
);

// create HOTEL / MOTEL
let hmdesc =
  "Weary travelers have found unique places to lay their head since the beginning of human travel. The locations contained within the collection represent some of the more... extravagant, beautiful, and history-laden options.";

let hm01 = new createcard(
  "HOTEL / MOTEL",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/Aliens-Landed-800x800.jpeg",
  "RACHEL, NEVADA, UNITED STATES",
  "Little A’Le’Inn",
  "Located in the closest town to Area 51, this roadside inn invites travelers to enjoy food, lodging, and all things UFO."
);
let hm02 = new createcard(
  "HOTEL / MOTEL",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7A89E35B-5BCB-4C2B-9DC2-B15A28F8D8CD-800x800.jpg",
  "EL PASO, TEXAS, UNITED STATES",
  "The Plaza Hotel Pioneer Park",
  "In the 1950s, both a wealthy hotelier and a Hollywood legend called this towering hotel home."
);
let hm03 = new createcard(
  "HOTEL / MOTEL",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/DSC_3529-800x800.jpg",
  "SAWTOOTH CITY, IDAHO, UNITED STATES",
  "Smiley Creek Lodge",
  "The best darn milkshakes in the valley."
);
let hm04 = new createcard(
  "HOTEL / MOTEL",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/IMG_4619-800x800.jpg",
  "LONDON, UNITED KINGDOM",
  "The Connaught Bar",
  "Enjoy a long list of libations at what was voted the world's greatest bar."
);

// create INTERIORS
let interdesc =
  "Who doesn't love an immaculately designed interior? It's where we spend most of our waking hours, at least for many of us. This collection represents the best of the best when you need a little inspiration for your own inside spaces.";
let inter01 = new createcard(
  "INTERIORS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/image-800x800.jpeg",
  "VICHY, FRANCE",
  "Hall des Sources",
  "Water with some healing powers."
);
let inter02 = new createcard(
  "INTERIORS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/0152E625-B2A2-462D-8DA4-4AB2B6FB3BA1_1_102_a-1-800x800.jpeg",
  "SAN FRANCISCO, CALIFORNIA, UNITED STATES",
  "Olympic Club",
  `"A club that's earned the title "Olympic" with some medal-winning members."`
);
let inter03 = new createcard(
  "INTERIORS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7CBB507E-A4D0-4107-81F0-E8B2441F6541-800x800.jpeg",
  "MONTREAL, CANADA",
  "Notre-Dame Basilica",
  "Not only was Notre-Dame the largest place of worship in North America for a half-decade (before New York’s St. Patrick’s Cathedral), it is perhaps (still) the most impressive church on the continent."
);
let inter04 = new createcard(
  "INTERIORS",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/LGP_6250-69-800x800.jpeg",
  "SAN JOSE, COSTA RICA",
  "National Theatre of Costa Rica",
  "A theatre built by the coffee bean."
);

// create LIBRARY
let libdesc =
  "To get lost in a book is one of life's simple pleasures. To get lost in one of these libraries, well, you can let us know what you think!";

let lib01 = new createcard(
  "LIBRARY",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/89EC38C4-BA20-4DA3-827F-8994A720BA16-800x800.jpeg",
  "PUHOI, NEW ZEALAND",
  "Puhoi Town Library",
  "In a country known for exemplifying the phrase “tiny-but-mighty,” one of the most delightful, and heroic, little buildings belongs to a small river-front community."
);
let lib02 = new createcard(
  "LIBRARY",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/11/Library2-800x800.jpg",
  "DERBY LINE, VERMONT, UNITED STATES",
  "Haskell Free Library & Opera House",
  "Purposely built to pledge allegiance to two flags, this structure automatically enrolls performers into an international tour."
);
let lib03 = new createcard(
  "LIBRARY",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/08/DSCF7611-Edited-800x800.jpg",
  "KETCHUM, IDAHO, UNITED STATES",
  "Community Library",
  "Located all around the world. Founded by a group of 17 enterprising women from the Sun Valley area, the Community Library holds a unique chapter in the region’s history. "
);
let lib04 = new createcard(
  "LIBRARY",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/291342886_574273087651240_2828036662521882592_n-800x800.jpg",
  "KESZTHELY, HUNGARY",
  "Festetics Palace",
  "Some of us are just late bloomers, but this hulking Hungarian palace had a bit longer of an awkward phase than we're used to."
);

// create LIGHTHOUSE
let lightdesc =
  "Beacons, most often situated on a coast, help watercraft avoid disaster while also guiding them to a friendly port. They come in all shapes and sizes, and each has a story to tell. Learn about these iconic sentinels of the sea (and lakes).";

let light01 = new createcard(
  "LIGHTHOUSE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/255260CE-78EB-48CE-B285-50DC8F343532-800x800.jpeg",
  "ALMADA, PORTUGAL",
  "Farol de Cacilhas",
  "A lighthouse comes back home."
);
let light02 = new createcard(
  "LIGHTHOUSE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/CD94C6BA-4198-4401-AF3C-5647729AF1B2-800x800.jpeg",
  "ANATOLIKI MANI, GREECE",
  "Lighthouse Tenaro",
  "If you’re an Ancient Greek, though, you’d give this abyss a more… creative description: the gate to the Underworld."
);
let light03 = new createcard(
  "LIGHTHOUSE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/09/IMG_3846-720x800.jpg",
  "NEWFOUNDLAND AND LABRADOR, CANADA",
  "Cape Spear Lighthouse",
  "It was a foggy morning on the easternmost point of North America. The route to the wharf was primed for celebration — but disaster was about to strike."
);
let light04 = new createcard(
  "LIGHTHOUSE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/08/DSC_3335-Edited-800x800.jpg",
  "BRISTOL, MAINE, UNITED STATES",
  "Pemaquid Point Lighthouse",
  "A former Keeper of this lighthouse is the only person to be awarded both the Medal of Honor and the Gold Lifesaving Medal–America’s highest military and civilian decorations."
);

// create MUSEUM
let museumdesc =
  "A night at the museum? We'd need YEARS of exploration to get through all of these lovely homes of art, antiquity and ingenuity.";

let museum01 = new createcard(
  "MUSEUM",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/villa-empain-insta-1-800x800.jpg",
  "BRUSSELS, BELGIUM",
  "Villa Empain",
  "Let us explain the style of Emplain."
);
let museum02 = new createcard(
  "MUSEUM",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/Sir-John-Soanes-Museum-800x800.jpg",
  "LONDON, UNITED KINGDOM",
  "Sir John Soane’s Museum",
  "Sir John Soane was attempting to collect everything during his lifetime - paintings, sculptures, even sarcophagi. By the end of his life, Parliament had no other choice but to turn his collection into a museum."
);
let museum03 = new createcard(
  "MUSEUM",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/Schlosspark-Hellbrunn-800x800.jpg",
  "SALZBURG, AUSTRIA",
  "Schloss Hellbrunn",
  "This Austrian palace is celebrated for its fountains and water tricks."
);
let museum04 = new createcard(
  "MUSEUM",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/07/211307432_4366960029992302_3165379696640939529_n.jpg",
  "KRASNODAR, RUSSIA",
  "The Krasnodar State Historic and Archaeological Museum-Reserve of Felitsyn E.D.",
  "This Museum goes on underwater archeological expeditions to gather artifacts for its exhibits."
);

// create NATURE
let naturedesc =
  "The great outdoors. Sights, sounds, smells. Nature is a wonderful spot to get lost.";
let nature01 = new createcard(
  "NATURE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/White-Sands-National-Park-_-Tyshaia-Earnest-_-@_tyshaia-800x800.jpg",
  "DOÑA ANA COUNTY, NEW MEXICO, UNITED STATES",
  "White Sands National Park",
  "This illusion of a winter wonderland is located within the hot deserts of New Mexico."
);
let nature02 = new createcard(
  "NATURE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/DSC_6329-800x800.jpg",
  "GRAND JUNCTION, COLORADO, UNITED STATES",
  "Colorado National Monument",
  "Imagine taking care of 32 square miles for one dollar a year."
);
let nature03 = new createcard(
  "NATURE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/mairead-bolger_awa-submission-ireland-eye-howth-800x800.jpg",
  "DUBLIN, IRELAND",
  "Ireland’s Eye",
  "Sometimes you trade in fishing for tourism."
);
let nature04 = new createcard(
  "NATURE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/DSC_3717-800x800.jpg",
  "SUN VALLEY, IDAHO, UNITED STATES",
  "Sun Valley Ski Patrol",
  "These pups know snow."
);

// content별 배열에 저장
let cablecarss = [cable01, cable02, cable03, cable04];
let classics = [classic01, classic02, classic03, classic04];
let doors = [door01, door02, door03, door04];
let edus = [edu01, edu02, edu03, edu04];
let goves = [gove01, gove02, gove03, gove04];
let hiddens = [hidden01, hidden02, hidden03, hidden04];
let hms = [hm01, hm02, hm03, hm04];
let inters = [inter01, inter02, inter03, inter04];
let libs = [lib01, lib02, lib03, lib04];
let lights = [light01, light02, light03, light04];
let museums = [museum01, museum02, museum03, museum04];
let natures = [nature01, nature02, nature03, nature04];

localStorage.setItem(
  "THEMESIMG",
  `[{ "cablecars" : ${JSON.stringify(
    cablecarss
  )} },{ "classics" : ${JSON.stringify(
    classics
  )} },{ "doors" : ${JSON.stringify(doors)} },{ "edus" : ${JSON.stringify(
    edus
  )}},{ "goves" : ${JSON.stringify(goves)}},{ "hiddens" : ${JSON.stringify(
    hiddens
  )}},{ "hms" : ${JSON.stringify(hms)}},{ "inters" : ${JSON.stringify(
    inters
  )}},{ "libs" : ${JSON.stringify(libs)}},{ "lights" : ${JSON.stringify(
    lights
  )}},{ "museums" : ${JSON.stringify(museums)}},{ "natures" : ${JSON.stringify(
    natures
  )}}]`
);

let asdf = JSON.parse(localStorage.getItem("THEMESIMG"));
// console.log(asdf[0][0].cablecars[0]);
// console.log(asdf[0]);

// let aa = JSON.parse(localStorage.getItem("THEMESIMG"));
// console.log(aa);

////////////////////////////////////////////////////////////////

// COLOR PALETTE IMGS

////////////////////////////////////////////////////////////////
let blackdesc =
  "Occasionally darkness is required to bring out the pops of color in contrast. Black. The opposite of White.";

let black01 = new createcard(
  "BLACK",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/IMG_4619-800x800.jpg",
  "LONDON, UNITED KINGDOM",
  "The Connaught Bar",
  "Enjoy a long list of libations at what was voted the world's greatest bar."
);
let black02 = new createcard(
  "BLACK",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/DSC_7804-800x800.jpg",
  "MILTON, DELAWARE, UNITED STATES",
  "King’s Ice Cream",
  "An ice cream shop that serves up the royal treatment."
);
let black03 = new createcard(
  "BLACK",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/05/DSC_4221-Retouched-650x800.jpg",
  "CAMBRIDGE, UNITED KINGDOM",
  "Queens’ College",
  "Owing its name to two Queens, this hall is located in one of the oldest colleges at Cambridge University."
);
let black04 = new createcard(
  "BLACK",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/272002569_2716402315329780_4598027038124583783_n-800x800.jpg",
  "COMO, COLORADO, UNITED STATES",
  "Como Depot",
  "Likely took its name from a large group Italian immigrants who named the Depot after Como, Italy."
);

// create BLUE

let bluedesc =
  "Blue has been an important color since ancient times. Often associated with peace and harmony, explore our collection for calm vibes.";

let blue01 = new createcard(
  "BLUE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/White-Sands-National-Park-_-Tyshaia-Earnest-_-@_tyshaia-800x800.jpg",
  "DOÑA ANA COUNTY, NEW MEXICO, UNITED STATES",
  "White Sands National Park",
  "This illusion of a winter wonderland is located within the hot deserts of New Mexico."
);
let blue02 = new createcard(
  "BLUE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/Aliens-Landed-800x800.jpeg",
  "RACHEL, NEVADA, UNITED STATES",
  "Little A’Le’Inn",
  "Located in the closest town to Area 51, this roadside inn invites travelers to enjoy food, lodging, and all things UFO."
);
let blue03 = new createcard(
  "BLUE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/0152E625-B2A2-462D-8DA4-4AB2B6FB3BA1_1_102_a-1-800x800.jpeg",
  "SAN FRANCISCO, CALIFORNIA, UNITED STATES",
  "Olympic Club",
  `"A club that's earned the title "Olympic" with some medal-winning members."`
);
let blue04 = new createcard(
  "BLUE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7CBB507E-A4D0-4107-81F0-E8B2441F6541-800x800.jpeg",
  "MONTREAL, CANADA",
  "Notre-Dame Basilica",
  "Not only was Notre-Dame the largest place of worship in North America for a half-decade (before New York’s St. Patrick’s Cathedral), it is perhaps (still) the most impressive church on the continent."
);

// create BROWN
let browndesc =
  "Wood, brick, and a variety of construction materials often employ brown as a base color. This collection showcases some of the best browns around.";

let brown01 = new createcard(
  "BROWN",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/04/Copy-of-Crescent-Moon-Theater-_-Kanab-UT-800x800.jpeg",
  "KANAB, UTAH, UNITED STATES",
  "Crescent Moon Theater",
  "This theater, celebrated for its Western culture, was built in memory of a real life Utah cowboy."
);
let brown02 = new createcard(
  "BROWN",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/DSC_6329-800x800.jpg",
  "GRAND JUNCTION, COLORADO, UNITED STATES",
  "Colorado National Monument",
  "Imagine taking care of 32 square miles for one dollar a year."
);
let brown03 = new createcard(
  "BROWN",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7A89E35B-5BCB-4C2B-9DC2-B15A28F8D8CD-800x800.jpg",
  "EL PASO, TEXAS, UNITED STATES",
  "The Plaza Hotel Pioneer Park",
  "In the 1950s, both a wealthy hotelier and a Hollywood legend called this towering hotel home."
);
let brown04 = new createcard(
  "BROWN",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/mairead-bolger_awa-submission-ireland-eye-howth-800x800.jpg",
  "DUBLIN, IRELAND",
  "Ireland’s Eye",
  "Sometimes you trade in fishing for tourism."
);

// create gray
let graydesc =
  "Gray doesn't have to equate to drab. This collection features a wide array of images and locations that are, upon closer inspection, anything but!";

let gray01 = new createcard(
  "GRAY",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/AWA-800x800.jpg",
  "PORTO ALEGRE, BRAZIL",
  "Palácio do Comércio",
  "Palácio do Comércio is not just a source of “architectural pride”, but a historical city-wide landmark."
);
let gray02 = new createcard(
  "GRAY",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/villa-empain-insta-1-800x800.jpg",
  "BRUSSELS, BELGIUM",
  "Villa Empain",
  "Let us explain the style of Emplain."
);
let gray03 = new createcard(
  "GRAY",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/CD94C6BA-4198-4401-AF3C-5647729AF1B2-800x800.jpeg",
  "ANATOLIKI MANI, GREECE",
  "Lighthouse Tenaro",
  "If you’re an Ancient Greek, though, you’d give this abyss a more… creative description: the gate to the Underworld."
);
let gray04 = new createcard(
  "GRAY",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/12/E0EF83D6-F2C6-4931-BC79-C36E787FB4E6-800x800.jpeg",
  "SCHWENDE, SWITZERLAND",
  "Aescher Berg Gasthaus",
  "Welcome to the guesthouse with a built-in rock wall, a 100-foot vertical drop below the patio, and nowhere to actually spend the night."
);

// create green
let greendesc =
  "Lush natural scenery, fields of clover, sporting pitches, and brilliant emeralds - all green. Dive in to a collection filled with green goodness.";

let green01 = new createcard(
  "GREEN",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/Lindsey-Velde_Gulfport-Casino-FL-800x800.jpg",
  "GULFPORT, FLORIDA, UNITED STATES",
  "Gulfport Casino",
  "The $10 price of admission includes a free dance lesson, proving that at Gulfport Casino, everyone’s a winner."
);
let green02 = new createcard(
  "GREEN",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/mairead-bolger_awa-submission-ireland-eye-howth-800x800.jpg",
  "DUBLIN, IRELAND",
  "Ireland’s Ey",
  "Sometimes you trade in fishing for tourism."
);
let green03 = new createcard(
  "GREEN",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/image-800x800.jpeg",
  "BOYERTOWN, PENNSYLVANIA, UNITED STATES",
  "The Colebrookedale Railroad",
  "All aboard an old American pastime."
);
let green04 = new createcard(
  "GREEN",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/292601982_145317784771524_8699380577223449671_n-800x800.jpg",
  "LONDON, UNITED KINGDOM",
  "Wimbledon Court 18",
  "This pitch witnessed the longest match in tennis history."
);

// create ORANGE
let orangedesc =
  "The color and name of a popular fruit. You won't find any citrus in this colorful collection, but it is a tasty one nonetheless.";

let orange01 = new createcard(
  "ORANGE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/Lindsey-Velde_Gulfport-Casino-FL-800x800.jpg",
  "GULFPORT, FLORIDA, UNITED STATES",
  "Gulfport Casino",
  "The $10 price of admission includes a free dance lesson, proving that at Gulfport Casino, everyone’s a winner."
);
let orange02 = new createcard(
  "ORANGE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/336819521_118907344440832_351575098074494538_n-800x800.jpg",
  "PARIS, FRANCE",
  "Place Vendôme",
  "The site of some of the most luxurious brands is also the site of some of the most unusual ... recycling."
);
let orange03 = new createcard(
  "ORANGE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/10/249504219_125015146582690_3068292557799564609_n-800x800.jpg",
  "LA CHAUX-DE-FONDS, SWITZERLAND",
  "Salle de Musique",
  "This theatre is a perfect reflection of the precise nature of it's watch-making patrons."
);
let orange04 = new createcard(
  "ORANGE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/03/156448714_781545412470577_5889255509518121176_n-800x800.jpg",
  "AGRA, INDIA",
  "Agra Fort",
  "Totaling 94 acres, this massive fortress made of red sandstone was the former residence and capital city of India's medieval Mughal Dynasty."
);

// create PINK
let pinkdesc = `"A "pop of pink" is a quintessential element of the AWA aesthetic. This popular collection provides a feast for the eyes that upon further inspection sets up some equally enchanting stories."`;

let pink01 = new createcard(
  "PINK",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/DSC_6488-2-e1639497801962-800x800.jpg",
  "CLEVELAND, OHIO, UNITED STATES",
  "Malley’s Chocolates",
  "Each 88-foot silo could contain ~100,000 pounds of its respective raw ingredient."
);
let pink02 = new createcard(
  "PINK",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/04/23595073_1689113034433739_1346042720501628928_n-800x800.jpg",
  "PRAGUE, CZECH REPUBLIC",
  "Hotel Opera",
  "A hot-pink confection of Bohemian Neo-Renaissance style, the Hotel Opera stands in the less touristy Nové Město, or “New Town,” quarter of storied Prague."
);
let pink03 = new createcard(
  "PINK",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/07/211307432_4366960029992302_3165379696640939529_n.jpg",
  "KRASNODAR, RUSSIA",
  "The Krasnodar State Historic and Archaeological Museum-Reserve of Felitsyn E.D.",
  "This Museum goes on underwater archeological expeditions to gather artifacts for its exhibits."
);
let pink04 = new createcard(
  "PINK",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/09/242114715_540655170523429_7934170419823120741_n-800x800.jpg",
  "HELSINKI, FINLAND",
  "Ihantola",
  "Ihantola translates to “Wonderful Place” and oh, what a wonder it is!"
);

// create PURPLE
let purpledesc =
  "Royal and regal, Purple has long been associated with the finer things in life. This petite collection is so lush that you can almost feel the velvet through the screen.";

let purple01 = new createcard(
  "PURPLE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/11/25_00062_00_N2_st-e1639495838116-800x800.jpg",
  "SAN DIEGO, CALIFORNIA, UNITED STATES",
  "Balboa Theater",
  "Built in 1924, this storied theater was slated for demolition just three decades later."
);
let purple02 = new createcard(
  "PURPLE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/05/189913045_920095848844858_3774646512706581676_n-800x800.jpg",
  "WASHINGTON DC, UNITED STATES",
  "Fellows Building – Dumbarton Oaks",
  "Intellectual debates and lively parties were enjoyed at this residence for Harvard research fellows."
);
let purple03 = new createcard(
  "PURPLE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/02/128453505_502322554059835_3181569347249400351_n-800x800.jpg",
  "RYDE, UNITED KINGDOM",
  "Ryde Pier Head Railway Station",
  "This railroad pier transports visitors traveling by sea to the town of Ryde on the Isle of Wight."
);
let purple04 = new createcard(
  "PURPLE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/104111916_3183897281687968_1202839659952370745_n-800x800.jpg",
  "DERBYSHIRE, UNITED KINGDOM",
  "East Midlands Trains",
  "Established in 2007, East Midlands Trains (EMT) provided train services to the East Midlands area of England for twelve years and are now known as East Midlands Railway."
);

// create RED
let reddesc =
  "Is it warm in here? Red, often associated with love, passion, and all things hot, you might need to cool off after exploring this collection.";

let red01 = new createcard(
  "RED",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/Aliens-Landed-800x800.jpeg",
  "RACHEL, NEVADA, UNITED STATES",
  "Little A’Le’Inn",
  "Located in the closest town to Area 51, this roadside inn invites travelers to enjoy food, lodging, and all things UFO."
);
let red02 = new createcard(
  "RED",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/255260CE-78EB-48CE-B285-50DC8F343532-800x800.jpeg",
  "ALMADA, PORTUGAL",
  "Farol de Cacilhas",
  "A lighthouse comes back home."
);
let red03 = new createcard(
  "RED",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/JanneMonard-AWAII-800x800.jpg",
  "GHENT, BELGIUM",
  "UGent Sports Centre / Ghent University",
  "Ghent's hero scored big points in the industrial game against England."
);
let red04 = new createcard(
  "RED",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/image-1-1-800x800.jpeg",
  "AMSTERDAM, NETHERLANDS",
  "Pathe Tuschinski",
  "One man's dream to create one of the most beautiful cinema's in the world."
);

// create TURQUOISE
let turquoisedesc =
  "Ahhh... Take a dip in this refreshing collection dominated by aquatic tones of turquoise and teal.";

let turquoise01 = new createcard(
  "TURQUOISE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/image-800x800.jpeg",
  "VICHY, FRANCE",
  "Hall des Sources",
  "Water with some healing powers."
);
let turquoise02 = new createcard(
  "TURQUOISE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/3F186F56-62A8-4FCA-AF45-1ED217EBC733-800x800.jpeg",
  "WOODSTOCK, ILLINOIS, UNITED STATES",
  "Sunnyside Farms",
  "Woodstock would forever be changed by playing the part of a village over 500 miles away—Punxsutawney, Pennsylvania."
);
let turquoise03 = new createcard(
  "TURQUOISE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/01/Story-clun-800x800.jpg",
  "CLUN, UNITED KINGDOM",
  "Clun Post Office",
  "A peaceful town that wasn't always so tranquil."
);
let turquoise04 = new createcard(
  "TURQUOISE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/07/289629751_715387973050315_1441269879910284433_n-800x800.jpg",
  "TUSCANY, ITALY",
  "Versilia",
  "During Roman times, Versilia was not an area where the Emperor was known to roam. A few centuries later, the Tuscans had a holiday hotspot on their hands."
);

// create WHITE
let whitedesc =
  "Similar to the Black collection, White often serves as a contrast that allows other pops of color to take center stage. One thing is for certain, these snaps & stories aren't vanilla.";

let white01 = new createcard(
  "WHITE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2022/01/White-Sands-National-Park-_-Tyshaia-Earnest-_-@_tyshaia-800x800.jpg",
  "DOÑA ANA COUNTY, NEW MEXICO, UNITED STATES",
  "White Sands National Park",
  "This illusion of a winter wonderland is located within the hot deserts of New Mexico."
);
let white02 = new createcard(
  "WHITE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2020/08/Aliens-Landed-800x800.jpeg",
  "RACHEL, NEVADA, UNITED STATES",
  "Little A’Le’Inn",
  "Located in the closest town to Area 51, this roadside inn invites travelers to enjoy food, lodging, and all things UFO."
);
let white03 = new createcard(
  "WHITE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/image-800x800.jpeg",
  "VICHY, FRANCE",
  "Hall des Sources",
  "Water with some healing powers."
);
let white04 = new createcard(
  "WHITE",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/0152E625-B2A2-462D-8DA4-4AB2B6FB3BA1_1_102_a-1-800x800.jpeg",
  "SAN FRANCISCO, CALIFORNIA, UNITED STATES",
  "Olympic Club",
  `"A club that's earned the title "Olympic" with some medal-winning members."`
);

// create YELLOW
let yellowdesc =
  "An underrated color in the AWA universe, yellow has a lot to offer. We find that there is a lot to love when yellow appears as a pop of color and hope that you'll be delighted, too.";

let yellow01 = new createcard(
  "YELLOW",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2021/01/Lemon-Dome-800x800.jpg",
  "CARTAGO, CALIFORNIA, UNITED STATES",
  "The Lemon House",
  "Squeeze the day!"
);
let yellow02 = new createcard(
  "YELLOW",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/7CBB507E-A4D0-4107-81F0-E8B2441F6541-800x800.jpeg",
  "MONTREAL, CANADA",
  "Notre-Dame Basilica",
  "Not only was Notre-Dame the largest place of worship in North America for a half-decade (before New York’s St. Patrick’s Cathedral), it is perhaps (still) the most impressive church on the continent."
);
let yellow03 = new createcard(
  "YELLOW",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/03/D29BB590-4E16-4121-B206-8F04F0F8A0B1-800x800.jpeg",
  "MILAN, ITALY",
  "Yellow Line",
  "Would you like to sit down?"
);
let yellow04 = new createcard(
  "YELLOW",
  "https://b2581825.smushcdn.com/2581825/wp-content/uploads/2023/02/image-1-800x800.jpeg",
  "ALPE DEVERO, ITALY",
  "Bar Pensione Fattorini",
  "The only place in the world one can find Bettelmatt cheese."
);

// contect save arr
let blacks = [black01, black02, black03, black04];
let blues = [blue01, blue02, blue03, black04];
let browns = [brown01, brown02, brown03, brown04];
let grays = [gray01, gray02, gray03, gray04];
let greens = [green01, green02, green03, green04];
let oranges = [orange01, orange02, orange03, orange04];
let pinks = [pink01, pink02, pink03, pink04];
let purples = [purple01, purple02, purple03, purple04];
let reds = [red01, red02, red03, red04];
let turquoises = [turquoise01, turquoise02, turquoise03, turquoise04];
let whites = [white01, white02, white03, white04];
let yellows = [yellow01, yellow02, yellow03, yellow04];

localStorage.setItem(
  "COLORIMG",
  `[{ "blacks" : ${JSON.stringify(blacks)} },{ "blues" : ${JSON.stringify(
    blues
  )} },{ "browns" : ${JSON.stringify(browns)} },{ "grays" : ${JSON.stringify(
    grays
  )}},{ "greens" : ${JSON.stringify(greens)}},{ "oragnes" : ${JSON.stringify(
    oranges
  )}},{ "pinks" : ${JSON.stringify(pinks)}},{ "purples" : ${JSON.stringify(
    purples
  )}},{ "reds" : ${JSON.stringify(reds)}},{ "turquoises" : ${JSON.stringify(
    turquoises
  )}},{ "whites" : ${JSON.stringify(whites)}},{ "yellows" : ${JSON.stringify(
    yellows
  )}}]`
);

////////////////////////////////////////////////////////////////

// 그려주는 함수
let contentwrap = document.querySelector(".content_wrap");
let card = document.querySelector(".card");
let cardin = document.querySelector(".cardin");
// let cardcover = document.querySelector(".cardcover");
let titletop = document.querySelector(".title_top");
let titleh1 = titletop.querySelector("h1");

let titletoptxt = document.querySelector(".title_top_txt");
let titletoptxtp = titletoptxt.querySelector("p");

let titlebottomtxt = document.querySelector(".title_bottom_txt");
let titlebottomtxtspan = titlebottomtxt.querySelectorAll("span");

// THEMESIMG 불러오기
let readthemes = JSON.parse(localStorage.getItem("THEMESIMG"));

// COLORIMG 불러오기
let readcolor = JSON.parse(localStorage.getItem("COLORIMG"));

// title 이미지 출력

// h1 출력 / 변하는 부분 1
titleh1.innerHTML = "CABLE CARS";

// p태그 출력 / 변하는 부분 2
titletoptxtp.innerHTML =
  " Aerial lifts, tramways, cableways... Occasionally the best way toget from point A to B is on a wire. Cable Cars were firstpioneered for human transportation at the end of the 19th centuryand have maintained their value and charm with unique variationson the mode of transport across the globe.";

// span 출력 / 변하는 부분 3
titlebottomtxtspan[4].innerHTML = "CABLE CARS";

// console.log(readthemes[0].cablecars);
let themesname = readthemes[0].cablecars;
let colorname = readcolor[0].blacks;
// console.log(themesname);
// console.log(colorname);

// cardcover.addEventListener("click", function (e) {
//   console.log(e.target.value);
// });

// 선택된 이미지만 출력

function selectthemes(themesname) {
  themesname.forEach((value) => {
    let readvalue = Object.values(value)[0];
    // console.log(value);

    let carddiv = document.createElement("div");
    let cardindiv = document.createElement("div");
    let cardtxtdiv = document.createElement("div");
    let cardcoverdiv = document.createElement("div");
    let img = document.createElement("img");

    let h4 = document.createElement("h4");
    let h2 = document.createElement("h2");
    let ptag = document.createElement("p");

    carddiv.className = "card";
    cardindiv.className = "cardin";
    cardcoverdiv.className = "cardcover";
    img.src = value.img;
    cardtxtdiv.className = "cardtxt";
    h4.innerHTML = value.country;
    h2.innerHTML = value.location;
    ptag.innerHTML = value.description;

    cardtxtdiv.append(h4);
    cardtxtdiv.append(h2);
    cardtxtdiv.append(ptag);
    cardindiv.append(cardcoverdiv);
    cardindiv.append(img);
    cardindiv.append(cardtxtdiv);

    carddiv.append(cardindiv);
    contentwrap.append(carddiv);
    readvalue = "";
  });
}
selectthemes(themesname);

// 윈도우를 켜면 로딩이 끝난 후 함수 실행
// 추후 다른곳에서 이미지를 클릭했을대 값을 가져와 데이터 출력해야함
window.onload = function () {
  contentwrap.innerHTML = "";
  selectthemes(themesname);
};

// window.addEventListener("click", function (e) {
//   console.log(e.target.className);
// });

// THEMES 모든 이미지 출력됨

// function allthemes() {
//   readthemes.forEach((value) => {
//     let readvalue = Object.values(value)[0];
//     // console.log(value);

//     for (let i = 0; i < readvalue.length; i++) {
//       let carddiv = document.createElement("div");
//       let cardindiv = document.createElement("div");
//       let cardtxtdiv = document.createElement("div");
//       let img = document.createElement("img");

//       let h4 = document.createElement("h4");
//       let h2 = document.createElement("h2");
//       let ptag = document.createElement("p");

//       carddiv.className = "card";
//       cardindiv.className = "cardin";
//       img.src = readvalue[i].img;
//       cardtxtdiv.className = "cardtxt";
//       h4.innerHTML = readvalue[i].country;
//       h2.innerHTML = readvalue[i].location;
//       ptag.innerHTML = readvalue[i].description;

//       cardtxtdiv.append(h4);
//       cardtxtdiv.append(h2);
//       cardtxtdiv.append(ptag);
//       cardindiv.append(img);
//       cardindiv.append(cardtxtdiv);

//       carddiv.append(cardindiv);
//       contentwrap.append(carddiv);
//     }
//     readvalue = "";
//     // });
//   });
// }
// allthemes();
