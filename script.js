"use strict";

const details = document.querySelectorAll(".notification__main--details");

const desc = document.querySelectorAll(".main__details--desc");
const markAll = document.querySelector(".notification__header--mark-all");
const number = document.querySelector(".notification__title--number");

const detailsAcc = document.querySelectorAll(
  ".notification__main--details--acc"
);

///////////////////////////////////////////////////////////////////////////////////
details.forEach(function (detail, value) {
  detail.addEventListener("click", () =>
    detailsAcc[value].classList.toggle("hidden")
  );
});

///////////////////////////////////////////////////////////////////////////////////

let check = true;
markAll.addEventListener("click", function () {
  if (check) {
    details.forEach((detail) => {
      detail.classList.remove("seen");
    });
    desc.forEach((des) => {
      des.classList.remove("bullet");
    });

    number.textContent = 0;
    markAll.textContent = "Mark all as unread";
  } else {
    details.forEach((detail) => {
      detail.classList.add("seen");
    });
    desc.forEach((des) => {
      des.classList.add("bullet");
    });

    number.textContent = details.length;
    markAll.textContent = "Mark all as read";
  }
  check = !check;
});
