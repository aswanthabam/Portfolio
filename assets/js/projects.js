showingSkills = [];
window.addEventListener("DOMContentLoaded", () => {
  params = getQueryParams();
  if (params.skill) {
    showProjectsWithSkill(params.skill);
  }
  console.log("projects.js loaded");
});

function filterBySkill(skill) {
  console.log("showing projects with skill: " + skill);
  selected = document.getElementById("filter-skill-" + skill);
  selected.classList.add("active");
  selected.onclick = function () {
    removeFilterBySkill(skill);
  };
  showingSkills.push(skill);
  document.querySelector("#selected-filter-skill-"+skill).classList.add("active");
  document.querySelectorAll(".project").forEach((project) => {
    if (project.classList.contains("project-skill-" + skill)) {
      project.style.display = "block";
    } else {
      tmp = true;
      for (i in showingSkills)
        if (project.classList.contains("project-skill-" + showingSkills[i])) {
          tmp = false;
          break;
        }
      if (tmp) project.style.display = "none";
    }
  });
}

function removeFilterBySkill(skill) {
  console.log("hiding projects with skill: " + skill);
  selected = document.getElementById("filter-skill-" + skill);
  selected.classList.remove("active");
  selected.onclick = function () {
    filterBySkill(skill);
  };
  showingSkills = showingSkills.filter((item) => item !== skill);
  document.querySelector("#selected-filter-skill-"+skill).classList.remove("active");
  if (showingSkills.length == 0) {
    document.querySelectorAll(".project").forEach((project) => {
      project.style.display = "block";
    });
    return;
  }
  document.querySelectorAll(".project").forEach((project) => {
    tmp = true;
      for (i in showingSkills)
        if (project.classList.contains("project-skill-" + showingSkills[i])) {
          tmp = false;
          break;
        }
      if (tmp) project.style.display = "none";
  });
}

function getQueryParams() {
  const params = {};
  window.location.search.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (str, key, value) {
      params[key] = value;
    }
  );
  return params;
}
