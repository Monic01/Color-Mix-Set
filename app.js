document.querySelector("#box1-color").addEventListener("submit", function (e) {
  e.preventDefault();
  const titlecolor = document.querySelector("#box1-title").value;
  const boxcolor = document.querySelector("#box1-box").value;

  document.querySelector("#titlebox1").style.backgroundColor = `#${titlecolor}`;
  document.querySelector(".box1").style.backgroundColor = `#${boxcolor}`;
});

document.querySelector("#box2-color").addEventListener("submit", function (e) {
  e.preventDefault();
  const titlecolor = document.querySelector("#box2-title").value;
  const boxcolor = document.querySelector("#box2-box").value;

  document.querySelector("#titlebox2").style.backgroundColor = `#${titlecolor}`;
  document.querySelector(".box2").style.backgroundColor = `#${boxcolor}`;
});

document.querySelector("#box3-color").addEventListener("submit", function (e) {
  e.preventDefault();
  const titlecolor = document.querySelector("#box3-title").value;
  const boxcolor = document.querySelector("#box3-box").value;

  document.querySelector("#titlebox3").style.backgroundColor = `#${titlecolor}`;
  document.querySelector(".box3").style.backgroundColor = `#${boxcolor}`;
});

document.querySelector("#box4-color").addEventListener("submit", function (e) {
  e.preventDefault();
  const titlecolor = document.querySelector("#box4-title").value;
  const boxcolor = document.querySelector("#box4-box").value;

  document.querySelector("#titlebox4").style.backgroundColor = `#${titlecolor}`;
  document.querySelector(".box4").style.backgroundColor = `#${boxcolor}`;
});
