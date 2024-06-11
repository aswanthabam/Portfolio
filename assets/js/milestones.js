window.addEventListener("DOMContentLoaded", function () {
  this.setTimeout(() => {
    this.window.scrollTo(0, 0);
  }, 100);
  gsap.registerPlugin(Observer);
  gsap.registerPlugin(ScrollTrigger);
  animateMilestones();
});
var curElement = null;
var running = false;
var done = false;
function animateMilestones() {
  var milestones = document.querySelectorAll(".milestone");
  var ind = 0;
  var arrow = true;
  const onComplete = () => {
    if (arrow) {
      arrow = false;
      animate(`.arrow-${ind}`, onComplete, true);
    } else if (ind < milestones.length) {
      arrow = true;
      animate(`.milestone-${++ind}`, onComplete);
    } else {
      done = true;
    }
  };
  animate(`.milestone-${++ind}`, onComplete);

  const next = () => {
    if (running) return;
    if (!arrow && !done) {
      animate(`.arrow-${ind}`, onComplete);
    } else {
      animate(`.milestone-${ind}`, onComplete);
    }
  };

  Observer.create({
    target: window, // can be any element (selector text is fine)
    type: "wheel,touch", //
    onDown: () => next(),
    onUp: () => next(),
  });
}

function animate(milestone, onComplete, arrow = false) {
  running = true;
  gsap.fromTo(
    milestone,
    {
      duration: 0,
      opacity: 0,
      scale: 0.5,
    },
    {
      scrollTrigger: {
        trigger: milestone,
        start: "top 100%",
        end: "bottom 20%",
      },
      duration: arrow ? 0.2 : 0.1,
      opacity: 1,
      scale: 1,
      ease: "none",
      onComplete: onComplete,
    }
  );
}

function observerIntersection(element) {
  const rect = element.getBoundingClientRect();
  var jk =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  return jk;
}
