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
      toggle()
    });
  }
})();
