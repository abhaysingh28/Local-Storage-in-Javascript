var inputname = document.getElementById("inputname");
var mainname = document.getElementById("mainname");
var button = document.getElementById("button");

button.addEventListener("click", () => {
    const value = inputname.value;
    mainname.innerText = value;
    value === "" ?mainname.innerText = "Please enter a name" :mainname.innerText = "Hey      " + value+ ", how are you?";
    localStorage.setItem("name", value)
});

window.addEventListener("load", ()=>{
    const value = localStorage.getItem("name")
    mainname.innerHTML=value;
})

