const card = document.querySelector(".card");
const container = document.querySelector("#container");

const title = document.querySelector(".title");
const jellycat = document.querySelector(".jellycat img");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  jellycat.style.transform = "translateZ(200px) rotateZ(-30deg) scale(0.7)";
  description.style.transform = "translateZ(125px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.75s ease";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  title.style.transform = "translateZ(0px)";
  jellycat.style.transform = "translateZ(0) rotateZ(0deg) scale(0.7)";
  description.style.transform = "translateZ(0px)";
});
