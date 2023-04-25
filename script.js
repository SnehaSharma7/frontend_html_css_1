// const logo = document.getElementById("logo");
// const popup = document.getElementById("popup");
// const closeBtn = document.getElementById("close-btn");

// logo.addEventListener("click", () => {
//   popup.classList.add("show");
// });

// closeBtn.addEventListener("click", () => {
//   popup.classList.remove("show");
// });

$(document).ready(function () {
  $("#logo").click(function () {
    $("#Mymodal").modal("show");
  });
});
