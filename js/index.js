function addBtnEvent() {
  let btn = document.querySelector(".addItem");
  let list = document.querySelector("ul");
  let item = document.querySelector("input");
  let itemCount = 0;

  btn.addEventListener("click", event => {
    event.preventDefault();
    list.innerHTML += `<li id="${itemCount}"> 
        <p>
        ${item.value}
        </p>
        <button class="${itemCount} check">check</button>
        <button class="${itemCount} delete">delete</button>
    </li>`;

    itemCount++;
  });

  let results = document.querySelector(".results");

  results.addEventListener("click", event => {
    if (event.target.matches(".check")) {
      let element = document.getElementById(event.target.classList[0]);
      checkElement(element);
    }
    if (event.target.matches(".delete")) {
      deleteElement(event.target.classList[0]);
    }
  });
}

function checkElement(element) {
  if(element.matches('.checked')){
    element.classList.remove("checked");
  } else {
    element.classList.add("checked");
  }
}

function deleteElement(elementId) {
  let element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function init() {
  addBtnEvent();
}

init();
