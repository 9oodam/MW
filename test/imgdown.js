// 로컬 스토리지에 이미지 저장하기
// 이미지 파일 경로
// const imagePath = 'image.png';
const imagePath = "image.png";

// 이미지를 Base64로 인코딩
const getBase64Image = (img) => {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
};

// 이미지 엘리먼트 생성
const img = new Image();
img.crossOrigin = "anonymous";
img.src = imagePath;

// 이미지 로드 완료 후 localStorage에 저장
img.onload = () => {
  const base64Image = getBase64Image(img);
  localStorage.setItem("imageData", base64Image);
};
