const btns = document.querySelectorAll("tr>th>button");
const pw = document.querySelector(".inputed-pw>span");
const stars = document.querySelectorAll(".inputed-pw>p>span");
const hidden = document.querySelector(".hidden");
const correctPw = "260213";
const pwArr = [];
let pwstr = "";

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clicked = e.target.closest("button");

    const length = pwArr.length;
    if (clicked.textContent === "지우기") {
      if (length) {
        pwArr.pop();
        stars[length - 1].style.color = "#aaa";
      }
    } else if (clicked.textContent === "초기화") {
      pwArr.length = 0;
      stars.forEach((star) => (star.style.color = "#aaa"));
    } else {
      pwArr.push(clicked.textContent);
    }

    for (let i = 0; i < pwArr.length; i++) {
      if (pwArr[i]) stars[i].style.color = "#000";
    }

    if (pwArr.length === 6) {
      pwstr = pwArr.join("");
      pwArr.length = 0;
      stars.forEach((star) => (star.style.color = "#aaa"));
      if (pwstr === correctPw) {
        location.href = "card.html";
      } else {
        hidden.style.opacity = 1;
        setTimeout(() => {
          hidden.style.opacity = 0;
        }, 1000);
      }
    }
  });
});
