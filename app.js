const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".number-btn");
const resetBtn = document.getElementById("reset");
const operationBtn = document.querySelectorAll(".operation-btn");
const equalBtn = document.getElementById("eq");

const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const devideBtn = document.getElementById("devide");
const timesBtn = document.getElementById("times");
const dot = document.getElementById("dot");
const delBtn = document.getElementById("del");

delBtn.addEventListener("click", () => {
  display.value = display.value.substring(0, display.value.length - 1);
});

dot.addEventListener("click", dotFunction);
equalBtn.addEventListener("click", count);

var a,
  b,
  dzialanie,
  przecinek = false;

function dzialania(y) {
  a = display.value;
  a = parseFloat(a);
  display.value = "";
  dzialanie = y;
  przecinek = false;
}

function dotFunction() {
  if (przecinek == false) {
    display.value += ".";
    przecinek = true;
  }
}
// COUNT

function count() {
  let wynik;
  b = display.value;
  b = parseFloat(b);

  if (dzialanie === 1) {
    wynik = a + b;
    display.value = wynik;
  } else if (dzialanie === 2) {
    display.value = wynik = a - b;
  } else if (dzialanie === 3) {
    display.value = wynik = a * b;
  } else if (dzialanie === 4) {
    display.value = wynik = a / b;
  }
}

numButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    display.value += e.target.value;
  });
});

operationBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    display.value = "";
  });
});

resetBtn.addEventListener("click", () => {
  display.value = "";
  przecinek = false;
});

// theme

const themeMode = document.querySelector(".theme-mode");
const themeOption1 = document.querySelector(".theme-option-1");
const themeOption2 = document.querySelector(".theme-option-2");
const themeOption3 = document.querySelector(".theme-option-3");
const buttons = document.querySelector(".buttons");
const bar = document.querySelector(".theme-bar");
const calcInfoH2 = document.querySelector(".calc-info h2");
const themeTitle = document.querySelector(".theme-title");
const themeSelectP = document.querySelectorAll(".theme-select p");
const buttonsBtn = document.querySelectorAll(".buttons button");

// ----THEME1----
themeOption1.addEventListener("click", () => {
  themeMode.classList.add("theme1-active");
  themeMode.classList.remove("theme2-active");
  themeMode.classList.remove("theme3-active");
  document.body.classList.remove("theme2");
  buttons.classList.remove("theme2bg");
  bar.classList.remove("theme2bg");
  display.classList.add("theme1change");
  calcInfoH2.classList.remove("theme2color");
  themeTitle.classList.remove("theme2color");
  themeSelectP.forEach((p) => {
    p.classList.remove("theme2color");
  });
  resetBtn.classList.remove("theme2btn");
  delBtn.classList.remove("theme2btn");
  // theme3 removal
  calcInfoH2.classList.remove("theme3color");
  themeTitle.classList.remove("theme3color");
  themeSelectP.forEach((p) => {
    p.classList.remove("theme3color");
  });
  display.classList.remove("theme2change");
  display.classList.remove("theme3color");
  document.body.classList.remove("theme3");
  buttonsBtn.forEach((btn) => {
    btn.classList.remove("theme3color");
  });
  calcInfoH2.classList.remove("theme3color");
  themeTitle.classList.remove("theme3color");
  themeSelectP.forEach((p) => {
    p.classList.remove("theme3color");
  });
  bar.classList.remove("theme3bg");
  display.classList.remove("theme3bg");
  buttons.classList.remove("theme3bg");
  buttonsBtn.forEach((btn) => {
    btn.classList.remove("theme3bgc");
  });
  resetBtn.classList.remove("theme3change");
  delBtn.classList.remove("theme3change");
  equalBtn.classList.remove("theme3eq");
  themeMode.classList.remove("dot-change");
});

// ----THEME2----
themeOption2.addEventListener("click", () => {
  display.classList.remove("theme3bg");
  themeMode.classList.add("theme2-active");
  themeMode.classList.remove("theme1-active");
  themeMode.classList.remove("theme3-active");
  document.body.classList.add("theme2");
  buttons.classList.add("theme2bg");
  bar.classList.add("theme2bg");
  display.classList.add("theme2change");
  calcInfoH2.classList.add("theme2color");
  themeTitle.classList.add("theme2color");
  themeSelectP.forEach((p) => {
    p.classList.add("theme2color");
  });
  equalBtn.classList.add("theme2btn");
  resetBtn.classList.add("theme2btn");
  delBtn.classList.add("theme2btn");
  //theme1 removal {
  display.classList.remove("theme1change");
  // theme 3 removal
  document.body.classList.remove("theme3");
  buttonsBtn.forEach((btn) => {
    btn.classList.remove("theme3color");
  });
  calcInfoH2.classList.remove("theme3color");
  themeTitle.classList.remove("theme3color");
  themeSelectP.forEach((p) => {
    p.classList.remove("theme3color");
  });
  bar.classList.remove("theme3bg");
  buttons.classList.remove("theme3bg");
  buttonsBtn.forEach((btn) => {
    btn.classList.remove("theme3bgc");
  });
  resetBtn.classList.remove("theme3change");
  delBtn.classList.remove("theme3change");
  equalBtn.classList.remove("theme3eq");
  themeMode.classList.remove("dot-change");
});

// ----THEME3----
themeOption3.addEventListener("click", () => {
  themeMode.classList.add("theme3-active");
  themeMode.classList.remove("theme2-active");
  themeMode.classList.remove("theme1-active");
  themeMode.classList.add("dot-change");
  // theme2 removal

  document.body.classList.add("theme3");
  calcInfoH2.classList.add("theme3color");
  themeTitle.classList.add("theme3color");
  themeSelectP.forEach((p) => {
    p.classList.add("theme3color");
  });
  display.classList.add("theme3color");
  buttonsBtn.forEach((btn) => {
    btn.classList.add("theme3color");
  });
  bar.classList.add("theme3bg");
  display.classList.add("theme3bg");
  buttons.classList.add("theme3bg");
  buttonsBtn.forEach((btn) => {
    btn.classList.add("theme3bgc");
  });
  resetBtn.classList.add("theme3change");
  delBtn.classList.add("theme3change");
  equalBtn.classList.add("theme3eq");
});
