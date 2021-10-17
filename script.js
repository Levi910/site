import Masonry from "masonry-layout";

window.onload = () => {
  const grid = document.querySelector(".item");

  const masonry = new Masonry("body", {
    itemSelector: ".item",
    columnWidth: 180,
    gutter: 4,
  });
};
