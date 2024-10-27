var input=document.getElementById("inp");
var button=document.getElementById("btn");
var list=document.getElementById("list");
var dele=document.getElementById("del");
function update(){
    var listitem=document.createElement("li");
    listitem.innerHTML=input.value+" <button onclick='deleteitem(event)'>Delete</button>";
    list.append(listitem);
}
function deleteitem(event){
    event.target.parentElement.remove();
}