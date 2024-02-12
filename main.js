//functionality
//add items
//delete items
//search items
let form=document.getElementById("addForm")
let itemList=document.getElementById("items")
let filter=document.getElementById("filter")

document.addEventListener("DOMContentLoaded",function(e){
    let item=localStorage.getItem("item")
    let li=document.createElement("li")
    let btn=document.createElement("button")
    btn.appendChild(document.createTextNode("X"))
    li.appendChild(document.createTextNode(item))
    li.appendChild(btn)
    btn.className="btn btn-danger btn-sm float-right delete"
    li.className="list-group-item"
    itemList.appendChild(li)
    document.getElementById("item").value=''
})

form.addEventListener("submit", function(e){
    e.preventDefault()
    let item=document.getElementById("item").value
    localStorage.setItem(item,item)
    // let item=localStorage.getItem("item")
    // console.log(item)
    let li=document.createElement("li")
    let btn=document.createElement("button")
    btn.appendChild(document.createTextNode("X"))
    li.appendChild(document.createTextNode(item))
    li.appendChild(btn)
    btn.className="btn btn-danger btn-sm float-right delete"
    li.className="list-group-item"
    itemList.appendChild(li)
    document.getElementById("item").value=''
})

itemList.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are u confirm to delete the item")){
            itemList.removeChild(e.target.parentElement)
        }
    }
})

filter.addEventListener("keyup", function(e){
    let value=e.target.value.toLowerCase()
    let li=document.getElementsByTagName("li")
    Array.from(li).forEach(function(item){
        if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1){
            item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    })
})