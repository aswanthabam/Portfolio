window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);
  skillsMarquee();
  messageSlidesShow();
  console.log("loaded");
};

/* Show Messages as a slideshow on homescreen */
async function messageSlidesShow() {
  var messages = document.getElementsByClassName("msg");
  showMessage(messages, 0);
}
/* Show Skills as a marquee on homescreen */
function skillsMarquee() {
  var skills = document.getElementsByClassName("skill");
  var wrapper = document.getElementById("skills");
  var timeline = gsap.timeline();
  curWidth = 0;
  gsap.set(skills, {
    x: (index) => {
      tmp = curWidth;
      curWidth += skills[index].offsetWidth + 30;
      return tmp;
    },
  });
  wrapper.style.width = curWidth + "px";
  timeline.to(".skill", {
    duration: 20,
    repeat: -1,
    ease: "none",
    x: `+=${wrapper.offsetWidth}`,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % wrapper.offsetWidth), //force x value to be between 0 and 500 using modulus
    },
  });
  wrapper.onmouseover = () => {
    timeline.pause();
  };
  wrapper.onmouseout = () => {
    timeline.play();
  } ;
}
/* Recursive function for showing messages one after another */
function showMessage(messages, index) {
  const reverseTimeline = gsap.timeline({
    onComplete: function () {
      reverseTimeline.reverse();
    },
  });
  reverseTimeline.to(messages[index], {
    duration: 0,
    opacity: 1,
    delay: 0,
    ease: "none",
    onComplete: function () {
      gsap.to(messages[index], {
        duration: 5,
        opacity: 1,
        onComplete: function () {
          gsap.to(messages[index], {
            duration: 0.5,
            opacity: 0,
            onComplete: function () {
              index++;
              console.log(index);
              if (index >= messages.length - 1) index = 0;
              showMessage(messages, index);
            },
          });
        },
      });
    },
  });
}
