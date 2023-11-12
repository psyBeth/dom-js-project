//will convert css file to js here
const header = document.querySelector(".header")
header.style.textAlign = "center";

const title = document.getElementById("title")
title.textContent = "JavaScript Dom Assignment 1"

const navLi = document.querySelector(".nav-item")
navLi.style.display = "flex";
navLi.style.alignItems = "center"; //!

navLi.style.gap = "20px"
navLi.style.listStyle = "none"

const liItem = document.getElementById("home");
liItem.style.paddingLeft = "45%" //? had to bcs center didn't work somehow