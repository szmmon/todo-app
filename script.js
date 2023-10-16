const inputBox = document.querySelector(".input-task");
const listContainer = document.querySelector(".list-container");
const submitBtn = document.querySelector(".submit-task");
const taskAdd = () => {
  //   console.log("works");
  //   console.log(inputBox.value);
  if (inputBox.value === "") {
    alert("Please input text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  dataSave();
};

submitBtn.addEventListener("click", taskAdd);

listContainer.addEventListener(
  "click",
  function (e) {
    // console.log(e.target.tagName);
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      dataSave();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      dataSave();
    }
  },
  false
);

const dataSave = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const refresh = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
refresh();
