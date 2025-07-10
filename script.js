const textarea = document.getElementById("message");
const counter = document.getElementById("charCount");
const max = 100;

textarea.addEventListener("input", function () {
  const len = textarea.value.length;
  counter.textContent = len + " / " + max;

  if (len > max) {
    counter.style.color = "red";
  } else if (len >= 90) {
    counter.style.color = "orange";
  } else {
    counter.style.color = "#444";
  }
});
