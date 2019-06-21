
////////////////////////////////////////////
//
// Dom access
//
/////////////////////////////////////////////

const form = document.querySelector("form");
const clear = document.querySelector("button");
const items = document.querySelector("ul");
const input = document.querySelector("input");

////////////////////////////////////////////
//
// values
//
/////////////////////////////////////////////

let log = console.log;
let data = []

/////////////////////////////////////////////
//
// local storage
//
/////////////////////////////////////////////

let localData = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [] 

////////////////////////////////////////////
//
// functions
//
/////////////////////////////////////////////

const itemMaker = text => {
  const item = document.createElement("li");
  item.innerHTML = text;
  items.appendChild(item);
};

const clearAll = () => {
    items.innerHTML = ""
    localStorage.clear()
}


localData.forEach((item)=>{
    itemMaker(item)
})

////////////////////////////////////////////
//
// event listeners
//
/////////////////////////////////////////////

clear.addEventListener("click",clearAll)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    data.push(input.value)
    localStorage.setItem("items",JSON.stringify(data))
    itemMaker(input.value)
    input.value = ""
})

