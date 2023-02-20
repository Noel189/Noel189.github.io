window.onload = function () {
  document.querySelector("#github").onclick = MyFunction;
  document.querySelector("#lkdn").onclick = MyFunction;
  document.querySelector("#learn").onclick = MyFunction;

  //scrolling the window
  document.querySelectorAll(".navigation-list li").forEach(function (listItem) {
    listItem.addEventListener("click", function () {
        let id = this.getAttribute('data-id')
      let topPosition = document.querySelector("#"+id).offsetTop - 60;
      window.scrollTo({
        top: topPosition,
        left: 0,
        behavior: "smooth",
      });
    });
  });
};

function MyFunction() {
  alert("Work In Progress ...");
}
