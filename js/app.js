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

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-60% 0px -40% 0px" }
);

const menuLinks = document.querySelectorAll(`.menu a[href^="#"]`);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});