document.addEventListener("DOMContentLoaded", () => {
  let showModal = document.getElementById("show-modal");
  let modal = document.getElementById("popupModal");
  let close = document.getElementById("close-btn");
  let body = document.getElementsByTagName("BODY")[0];
  let isModalShown = false;

  showModal.addEventListener("click", () => {
    modal.style.display = "block";
    isModalShown = true;
    body.style.overflow = "hidden";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
    isModalShown = false;
    body.style.overflow = "auto";
  });

  document.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
      isModalShown = false;
      body.style.overflow = "auto";
    }
  };

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.key == "Escape") {
      if (isModalShown) {
        modal.style.display = "none";
        body.style.overflow = "auto";
      }
    }
  };
});
