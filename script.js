var toggle = function () {
  document
    .querySelector("#navbarSupportedContent")
    .classList.toggle("collapse");
};

(function () {
  /* */
  var btns = document.getElementsByClassName("nav-link");
  for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", function () {
      var current = document.getElementsByClassName("active")[0];
      current.className = current.className.replace("active", "");
      this.className += " active";
      toggle();
    });
  }
})();

// navbar active class update update on scoll
const sections = document.querySelectorAll("section");
let observer = new IntersectionObserver(
  function (entries, self) {
    entries.map((entry) => {
      if (entry.isIntersecting 
        && entry.intersectionRatio > 0.6
        ) {
        const curActiveNav = document.querySelector(".active");
        const updateNav = document.querySelector(
          `a[href='#${entry.target.id}']`
        );
        if (curActiveNav) curActiveNav.classList.remove("active");
        if (updateNav) updateNav.classList.add("active");
      }
    });
  },
  {
    rootMargin: "-70px 0px 0px",
    threshold: .6
  }
);

sections.forEach((section) => observer.observe(section));
