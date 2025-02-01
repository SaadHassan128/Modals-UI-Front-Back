"use strict";

const modalContent = {
  "ui-ux": {
    title: "UI & UX: The Foundation of Great Design 😍",
    paragraph: "UI and UX design work together to create seamless and engaging experiences for users."
  },
  "front-end": {
    title: "Front-end Development 🛠️",
    paragraph: "Front-end development focuses on designing the UI of a website using HTML, CSS, and JavaScript."
  },
  "back-end": {
    title: "Back-end Development ⚙️",
    paragraph: "Back-end development is the backbone of web applications, handling data storage, authentication, and server-side logic."
  }
};

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalTitle = document.querySelector(".modal-title");
const modalContentText = document.querySelector(".modal-content");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = (modalType) => {
  if (modalContent[modalType]) {
    modalTitle.textContent = modalContent[modalType].title;
    modalContentText.textContent = modalContent[modalType].paragraph;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modal.classList.add("active");
    overlay.classList.add("active");
  }
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", function () {
    openModal(this.dataset.modal);
  });
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
