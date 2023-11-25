let heading = document.getElementById("heading");

let list = document.getElementById("list");

let btn = document.getElementById("button");

let li = document.querySelectorAll("ul li");

list.addEventListener("click", active);

function active(e) {
  if (e.target.nodeName == "LI") {

    heading.innerHTML = e.target.innerHTML;

    for (let i = 0; i < e.target.parentNode.children.length; i++) {

      e.target.parentNode.children[i].classList.remove("active");

    }

    e.target.classList.add("active");
  }
}

btn.addEventListener("click", add);

let counter = 1;

function add() {
  list.innerHTML += 
  `<li>New Item ${counter}</li>`;
  counter++;
}
