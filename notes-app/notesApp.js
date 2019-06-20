let log = console.log;
const form = document.querySelector("form");
const clear = document.querySelector("button");
const items = document.querySelector("ul");
const input = document.querySelector("input");

const itemMaker = text => {
  const item = document.createElement("li");
  item.innerHTML = text;
  items.appendChild(item);
};
itemMaker("hellooo")
itemMaker("hellooo")
itemMaker("hellooo")
itemMaker("hellooo")
itemMaker("hellooo")

const clearAll = () => {
    items.innerHTML = ""
}

clear.addEventListener("click",clearAll)

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    itemMaker(input.value)
    input.value = ""
})