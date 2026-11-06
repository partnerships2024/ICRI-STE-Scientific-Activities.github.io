/* Optional progressive enhancement: pause/resume with keyboard.
   Hover and focus pause are handled in CSS. */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".icri-newsflow__viewport").forEach(function (viewport) {
    viewport.addEventListener("keydown", function (event) {
      if (event.key === "Home") viewport.scrollLeft = 0;
    });
  });
});
