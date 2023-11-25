let heading = document.getElementById("heading");

let list = document.getElementById("list");

let btn = document.getElementById("button");

let li = document.querySelectorAll("ul li");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", active);
}

function active() {
  heading.innerHTML = this.innerHTML;
}

btn.addEventListener("click", add);

let counter = 1;

function add() {
  list.innerHTML += `<li>New ${counter}</li>`;
  counter++;
}
