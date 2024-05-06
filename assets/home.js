window.onload = function () {
  var skills = document.getElementsByClassName("skill");
  var wrapper = document.getElementById("skills");
  window.skills = wrapper;
  curWidth = 0;
  gsap.set(skills, {
    x: (index) => {
      tmp = curWidth;
      curWidth += skills[index].offsetWidth + 30;
      return tmp;
    },
  });
  wrapper.style.width = curWidth + "px";
  gsap.to(".skill", {
    duration: 15,
    repeat: -1,
    ease: "none",
    x: `+=${wrapper.offsetWidth}`,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % wrapper.offsetWidth), //force x value to be between 0 and 500 using modulus
    },
  });

  var messages = document.getElementsByClassName("msg");
  showMessage(messages, 0);
};

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
