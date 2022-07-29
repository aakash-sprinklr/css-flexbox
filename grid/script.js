const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const navbarItems = document.querySelector(".navbar-items");
const imageGrids = document.querySelectorAll(".image-grid");
const toggeleHideClass = () => {
  hamburger.classList.toggle("visible");
  closeBtn.classList.toggle("visible");
  navbarItems.classList.toggle("visible");
};

hamburger.addEventListener("click", toggeleHideClass);
closeBtn.addEventListener("click", toggeleHideClass);

const images = [
  "https://picsum.photos/id/137/4752/3168",
  "https://picsum.photos/id/139/3465/3008",
  "https://picsum.photos/id/14/2500/1667",
  "https://picsum.photos/id/140/2448/2448",
  "https://picsum.photos/id/141/2048/1365",
  "https://picsum.photos/id/142/4272/2848",
  "https://picsum.photos/id/143/3600/2385",
  "https://picsum.photos/id/144/4912/2760",
  "https://picsum.photos/id/145/4288/2848",
  "https://picsum.photos/id/146/5184/3456",
  "https://picsum.photos/id/147/2448/2448",
  "https://picsum.photos/id/149/3454/2288",
  "https://picsum.photos/id/15/2500/1667",
  "https://picsum.photos/id/151/4288/3216",
  "https://picsum.photos/id/152/3888/2592",
  "https://picsum.photos/id/153/4763/3155",
  "https://picsum.photos/id/154/3264/2176",
  "https://picsum.photos/id/155/3264/2176",
  "https://picsum.photos/id/156/2177/3264",
  "https://picsum.photos/id/157/6211/4862",
  "https://picsum.photos/id/158/4836/3224",
  "https://picsum.photos/id/159/5184/2551",
  "https://picsum.photos/id/16/2500/1667",
  "https://picsum.photos/id/160/3200/2119",
  "https://picsum.photos/id/161/4240/2832",
  "https://picsum.photos/id/162/1500/998",
  "https://picsum.photos/id/163/2000/1333",
  "https://picsum.photos/id/164/1200/800",
  "https://picsum.photos/id/165/2000/1333",
  "https://picsum.photos/id/166/1280/720",
];

const loadImages = () => {
  images.forEach((item, index) => {
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.setAttribute("src", item);
    image.classList.add("grid-image");
    imageContainer.append(image);
    imageGrids[index % 4].append(imageContainer);
  });
};
loadImages();
