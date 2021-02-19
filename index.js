// Add your code here

function submitData(name,email){
return fetch("http://localhost:3000/users",{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name,
        email
    })
    })
.then(function(response){
    return response.json();
}).then(function(object){
    let objName = document.querySelector("body").appendChild(document.createElement("ul")).appendChild(document.createElement("li")).textContent = object["name"]
    let objEmail = document.querySelector("body").appendChild(document.createElement("ul")).appendChild(document.createElement("li")).textContent = object["email"]
}).catch(function(error){
    alert(error.message)
})


}
function renderForm(){
let form = document.createElement("form")
let input1 = document.createElement("input")
input1.placeholder = "Name"
let input2 = document.createElement("input")
input2.placeholder = "Email"
let body = document.querySelector("body")
let submit = document.createElement("button")

body.appendChild(form)
form.appendChild(input1)
form.appendChild(input2)
form.appendChild(submit)
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    submitData(input1.value, input2.value)
})
}
document.addEventListener("DOMContentLoaded",(e)=>{
renderForm()
})

