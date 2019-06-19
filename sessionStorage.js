
//**********************************************************************************************//

//session storage

// The sessionStorage property allows you to access a session Storage object for the current origin. 
// sessionStorage is similar to localStorage; 
// the only difference is while data stored in localStorage has no expiration time, 
// data stored in sessionStorage gets cleared when the page session ends.
// A page session lasts for as long as the browser is open and survives over page reloads and restores.

//**********************************************************************************************//


// the following code will save and get the value on session storage using unique key

sessionStorage.setItem("name","AbdulQadir")

let data = sessionStorage.getItem("name")

const head = document.getElementById("head")

head.innerHTML = data

// this code will get data from textarea field and save it if the page is refresed and then again 
// post in textarea so the user will not lose data if the page is refresed 

const field = document.getElementById("field")
if(sessionStorage.getItem("autosave"))
{
    field.value = sessionStorage.getItem("autosave")
}

field.addEventListener("change",()=>{
    sessionStorage.setItem("autosave",field.value)
})

////////////////////////////////////////////////////









