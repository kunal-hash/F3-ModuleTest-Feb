let container = document.getElementById("container");

let data = JSON.parse(localStorage.getItem("bookSearchedHistory"));

let button= document.getElementById("clear-search-btn");



button.addEventListener("click",()=>{
    localStorage.removeItem("bookSearchedHistory");
    container.innerHTML = "";

})



data.map((data,i)=>{
    container.innerHTML += 
    `<div class="item-container" style="display:block; width:100%; margin:5px; ">
<a href="searched.html"  style="text-decoration:none; onclick:myfunction()">

<div class="item" style="display:flex; justify-content:space-between; border:1px solid white; padding:10px">

<div class="book-name" style="margin:20px; text-decoration:none; color:white; font-size:15px">${data.bookName}</div>

<div class="date" style="margin:20px text-decoration:none; padding-top:20px; color:white; font-size:15px">${data.dateTime}</div>

</div>

</a>

</div>`
})

// function myfunction(){
//     fetch(url+bookName)
//     .then(Response => Response.json())
//     .then((data)=>{
//         data.items.map((items)=>{
            


//         })



//     })

// }
