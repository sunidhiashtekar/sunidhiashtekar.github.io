document.addEventListener("DOMContentLoaded", function () {
  var avatarButton = document.querySelector(".site-avatar-button");
  var modal = document.getElementById("profile-photo-modal");
  if (!avatarButton || !modal) {
    return;
  }

  var closeButtons = modal.querySelectorAll(".avatar-modal__backdrop, .avatar-modal__close");

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  avatarButton.addEventListener("click", function () {
    openModal();
  });

  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      closeModal();
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
