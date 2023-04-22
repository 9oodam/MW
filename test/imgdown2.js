// window.localStorage.clear();

const image = document.getElementById("myImage");
// const image2 = document.getElementById("myImage2");

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.width = image.width;
canvas.height = image.height;
context.drawImage(image, 0, 0);
const aa = canvas.toDataURL();
let test = 1;

function createimg(nickname, title, description) {
  this.nickname = nickname;
  this.tiile = title;
  this.description = description;
}

let imgobj = {
  filename: 1,
  img: aa,
};

let imgobj2 = {
  filename: 2,
  img: aa,
};

if (window.localStorage.length == 0) {
  localStorage.setItem("myImage", `${JSON.stringify(imgobj)}`);
  console.log(window.localStorage.getItem("myImage"));
}
// else {
// let tt = JSON.parse(localStorage.getItem("myImage"));
// console.log(tt);
// // console.log(JSON.stringify(tt));
// // console.log(JSON.stringify(tt) == JSON.stringify(imgobj));
// localStorage.setItem(
//   "myImage",
//   `${JSON.stringify(tt)}` + "::" + `${JSON.stringify(imgobj2)}`
// );
// }

// image.src = imageDataURL;
// image2.src = imageDataURL;
// document.body.appendChild(image);
// document.getElementById("image2").appendChild(image);

const imageDataURL = localStorage.getItem("myImage");
// console.log(imageDataURL);
let tttt = localStorage.getItem("myImage").split("::");

let t0 = JSON.parse(tttt[0]);
console.log(t0);
console.log(t0.filename);
console.log(t0.img);
// console.log(imageDataURL);
console.log(tttt);
// console.log(Object.keys(tttt[0]));
console.log(typeof tttt);
console.log(typeof imgobj);
console.log(imgobj.filename);
let aaa = localStorage.key("myImage");
// let bb = localStorage.getItem(aaa).split("::");
// console.log(bb[0]);

let asdf = localStorage.getItem("test");
console.log(asdf);

const image2 = document.getElementById("myImage2");
const image3 = document.getElementById("myImage3");

const images = new Image();
// images.src = imageDataURL.img;
images.src = t0.img;
// console.log(images);
document.getElementById("myImage2").setAttribute("src", t0.img);
document.getElementById("myImage3").setAttribute("src", asdf);
// document.querySelector(".test").appendChild(t1.img);

////////////////////////////////////

// const image3 = document.getElementById("myImage3");
// // image3.src = imageDateURL;

// let test = localStorage.key(0);
// let test2 = localStorage.getItem(test);
// // console.log(test2);
// image3.src = test2;
// document.getElementById("image3").appendChild();
