const nav = document.querySelector(".nav");
const menu = document.getElementById("enlaces");
const menu_btn = document.getElementById("open");
const buttons = document.querySelectorAll("btn-header");
let closed = true;
const menuLinks = document.querySelectorAll('#enlaces a[href^="#"]');

window.addEventListener("scroll", function () {
  nav.classList.toggle("active", window.scrollY > 0);
});

new TypeIt("#terror__span__typeit", {
  speed: 50,
  startDelay: 900,
})
  .type("Lo mejor en audio e instrumentos. ", { delay: 100 })
  .pause(300)
  .type(
    `Solo en <strong style="color: #508c8b; font-family: 'Courier New', Courier, monospace">Terror Music</strong>`,
    { delay: 200 }
  )
  .go();

let productos = $("#productos").offset().top,
  sucursales = $("#sucursales").offset().top,
  about = $("#about").offset().top;

window.addEventListener("resize", () => {
  let productos = $("#productos").offset().top,
    sucursales = $("#sucursales").offset().top,
    about = $("#about").offset().top;
});

$("#link__inicio").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    100
  );
});

$("#link__productos").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: productos - 100,
    },
    100
  );
});

$("#link__sucursales").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: sucursales,
    },
    100
  );
});

$("#link__about").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: about,
    },
    100
  );
});

window.sr = ScrollReveal();
  sr.reveal('.guitars', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });