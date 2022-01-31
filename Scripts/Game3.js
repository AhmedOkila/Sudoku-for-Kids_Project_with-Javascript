let start = document.getElementById("start");
var table = document.getElementsByTagName("table")[0];
let player_state = document.getElementById("win_lose");
let selectionImages = document.querySelectorAll(".item img");

//let group = localStorage.getItem("Group");
let group = "aliens";
console.log(group);
let source;
source = `images/space_theme/${group}/`;

for (let index = 0; index < selectionImages.length; index++) {
  selectionImages[index].src = `${source}/${index + 1}.png`;
}

var arr = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];
function vail() {
  for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr[k].length; i++) {
      itrator = 0;
      itr = 0;
      for (let j = 0; j < arr[k].length; j++) {
        if (arr[k][i] == arr[k][j] || arr[k][i] == arr[j][k]) {
          itrator++;
        }
        if (itrator > 1) {
          player_state.innerText = "Fail!";
        } else {
          player_state.innerText = "Success";
        }
      }
    }
  }
}

let tmContainer = document.getElementById("time");
let time = 120;

let tt;
start.addEventListener("click", function () {
  table.style.transform = "rotate(360deg)";
  table.style.visibility = "visible";
  tt = setInterval(() => {
    time--;
    tmContainer.innerText = time;
  }, 1000);
});
setTimeout(() => {
    clearInterval(tt);
    vail();
  }, time * 1000);

table.addEventListener("keyup", (e) => {
  let currentInput = document.activeElement;
  let currentTd = currentInput.parentNode.parentNode;
  let currentTr = currentTd.parentNode;
  let index = Array.from(currentTr.children).indexOf(currentTd);
  let id = e.target.getAttribute("id");
  let arrc = id.split("");

  switch (e.key) {
    case "ArrowLeft":
      // Left pressed
      currentTd.previousElementSibling.getElementsByTagName("input")[0].focus();
      break;
    case "ArrowRight":
      // Right pressed
      currentTd.nextElementSibling.getElementsByTagName("input")[0].focus();
      break;
    case "ArrowUp":
      // Up pressed
      Array.from(currentTr.previousElementSibling.children)
        [index].getElementsByTagName("input")[0]
        .focus();
      break;
    case "ArrowDown":
      // Down pressed
      Array.from(currentTr.nextElementSibling.children)
        [index].getElementsByTagName("input")[0]
        .focus();
      break;
  }

  switch (e.target.value) {
    case "1":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "rect");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[0].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "2":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "circle");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[1].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "3":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "triangle");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[2].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "4":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "star");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[3].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "5":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "oval");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[4].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "6":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "PARABOLIC");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[5].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "7":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "ELLIPSE");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[6].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "8":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "TRAPEZOID");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[7].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "9":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "CIRCULARSECTION");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[8].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      break;
    case "":
      break;
    default:
      e.target.value = "";
      console.log("enter valid number");
      break;
  }
});

/*---------------code for default img--------------*/
function random_location() {
  let ran, ran2, idd, el;
  //for (let index = 0; index < 9; index++) {
    ran = Math.floor(Math.random() * 9);
    ran2 = Math.floor(Math.random() * 9);
    idd = ran.toString() + ran2.toString();
    el = document.getElementById(idd);
    el.nextElementSibling.children[0].src = `${source}${(
      ran + 1
    ).toString()}.png`;
    el.nextElementSibling.children[0].style.display = "block";
    el.disabled = true;
 // }
}
random_location();
