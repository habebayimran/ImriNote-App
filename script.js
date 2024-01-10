var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var popupbtn=document.getElementById("popupbtn")
popupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel-note")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


var container=document.querySelector(".container")
var addnote=document.getElementById("add-note")
var noteheading=document.getElementById("note-heading")
var notedescription=document.getElementById("note-description")
var notetext=document.getElementById("note-text")
addnote.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","note-container")
    div.innerHTML=`<h2>${noteheading.value}</h2>
    <h5>${notedescription.value}</h5>
    <p>${notetext.value}</p>
    <button onclick="deletenote(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletenote(event){
    event.target.parentElement.remove()
}