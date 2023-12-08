const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const yearEl = document.getElementById("year");

let date = new Date();
console.log(date.getDate());
dateEl.innerText = date.getDate();
dayEl.innerText = date.toLocaleString("eng", {
    weekday: "long",
});
yearEl.innerText = date.getFullYear();
monthEl.innerText = date.toLocaleString("en", {
    month: "long",
});
