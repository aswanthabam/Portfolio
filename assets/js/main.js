window.addEventListener("DOMContentLoaded", () => {
  var menuBtn = document.getElementById("menuBtn");
  var closeBtn = document.getElementById("closeBtn");
  menuBtn.onclick = openMenu;
  closeBtn.onclick = closeMenu;
});

function closeMenu() {
  var menu = document.getElementById("menu");
  var menuBtn = document.getElementById("menuBtn");
  var timeline = gsap.timeline();
  timeline.to(menu, {
    duration: 0.5,
    opacity: 0,
    width: 0,
    height: 0,
    ease: "none",
    borderRadius: "0% 50% 50% 50%",
  });
}

function openMenu() {
  var menu = document.getElementById("menu");
  var menuBtn = document.getElementById("menuBtn");
  var timeline = gsap.timeline();
  timeline.fromTo(
    menu,
    {
      borderRadius: "0% 50% 50% 50%",
      width: 0,
      height: 0,
      top: 0,
      ease: "power4.out",
    },
    {
      duration: 0.5,
      opacity: 1,
      width: "calc(100vw - 20px)",
      padding: "10px 10px 40px 10px",
      height: "auto",
      top: 0,
      ease: "power4.in",
      borderRadius: "0%",
    }
  );
}
