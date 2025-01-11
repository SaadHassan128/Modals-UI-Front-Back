"use strict";

const modalContent = {
  "ui-ux": {
    title: "UI & UX: The Foundation of Great Design 😍",
    paragraph:
      "UI (User Interface) and UX (User Experience) design are two crucial elements that work hand in hand to create a seamless and enjoyable experience for users. UI focuses on the visual aspects of a product, ensuring that the design is aesthetically pleasing and easy to navigate, while UX is concerned with the overall experience a user has when interacting with the product. A well-designed UI enhances the users journey, making it intuitive and engaging, while a thoughtful UX ensures that the product meets the users needs and exceeds their expectations. Together, they form the foundation of a product that is not only functional but also delightful to use.",
  },
  "front-end": {
    title: "Front-end Development 🛠️",
    paragraph:
      "Front-end development involves creating the user interface of a web application using HTML, CSS, and JavaScript. It focuses on how the application looks and feels, ensuring that it is visually appealing and user-friendly. Front-end developers work on making the website responsive, interactive, and accessible across different devices and browsers. They implement the design provided by UI/UX designers and ensure that the user can interact smoothly with the application.",
  },
  "back-end": {
    title: "Back-end Development ⚙️",
    paragraph:
      "Back-end development is responsible for the server-side of an application, including the database, server, and application logic. It handles data storage, retrieval, and processing, ensuring that the application functions correctly and efficiently. Back-end developers use languages like Python, Java, or Ruby to build APIs, manage server configurations, and handle user authentication and authorization. The back-end is the engine that powers the application, enabling it to perform complex operations and deliver a seamless user experience.",
  },
};
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function (modalType) {
  if (modalContent.hasOwnProperty(modalType)) {
    modal.querySelector("h1").textContent = modalContent[modalType].title;
    modal.querySelector("p").textContent = modalContent[modalType].paragraph;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else {
    console.error("Modal type not recognized:", modalType);
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function (e) {
    const modalType = e.target.dataset.modal;
    openModal(modalType);
  });
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
