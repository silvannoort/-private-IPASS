document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-on-load");
  
    _.forEach(animatedElements, function (element, index) {
      setTimeout(function () {
        element.classList.add("animate-in");
      }, 200 * index);
    });
  });
  