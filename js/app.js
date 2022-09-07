const menu = document.getElementById("enlaces");
const menu_btn = document.getElementById("open");
const buttons = document.querySelectorAll("btn-header");
let closed = true;
const menuLinks = document.querySelectorAll('.enlaces a[href^="#"]');

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

$("#enlace-inicio").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    100
  );
});

$("#enlace-pop").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: productos - 150,
    },
    100
  );
});

$("#enlace-sucu").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: sucursales - 150,
    },
    100
  );
});

$("#enlace-contacto").on("click", (e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: about - 150 ,
    },
    100
  );
});

window.sr = ScrollReveal();
sr.reveal(".guitars", {
  duration: 3000,
  origin: "bottom",
  distance: "-100px",
});

sr.reveal(".sucursales", {
  duration: 3000,
  origin: "left",
  distance: "-500px",
});

function menus() {
  let Desplz_actual = window.pageYOffset;
  if (Desplz_actual <= 50) {
    nav.classList.remove("nav2");
    nav.className = "nav1";
    menu.style.top = "80px";
  } else {
    nav.classList.remove("nav1");
    nav.className = "nav2";
    menu.style.top = "100px";
  }
}

window.addEventListener("scroll", () => {
  menus();
});

window.addEventListener("resize", () => {
  if (screen.width >= 700) {
    closed = true;
    menu.style.removeProperty("overflow");
    menu.style.removeProperty("width");
  }
});

// Permite mostrar/cerrar el menu en dispositivos moviles o tablets
menu_btn.addEventListener("click", () => {
  if (closed) {
    menu.style.width = "100vw";
    closed = false;
  } else {
    menu.style.width = "0%";
    menu.style.overflow = "hidden";
    closed = true;
  }
});

// Permite hacer que el menu se cierre cuando se hace click en un enlace (devices)
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    if (screen.width <= 700) {
      if (!closed) {
        menu.style.width = "0%";
        menu.style.overflow = "hidden";
        closed = true;
      }
    }
  });
});
