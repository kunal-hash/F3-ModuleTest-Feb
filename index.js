let search = document.getElementById("search-bar");
let button = document.getElementById("btn");
let output =  document.getElementById("container");
let url = "https://www.googleapis.com/books/v1/volumes?q=";
let form = document.getElementById("my-form");
let message = document.getElementById("book");
let msg = document.getElementById("msg");
let historyButton=document.getElementById("search-history-button");

historyButton.addEventListener("click",()=>{
    window.location.href="./history.html"
})



// let details=[];
// if(window.localStorage.getItem("details")){
//     details.map((value)=>{
//         details.push(value);
//     })
// }
const details =JSON.parse(localStorage.getItem("userData")||"[]");
// let history=[];
// if(window.localStorage.getItem("history")){
//     history.map((value)=>{
//         history.push(value);
//     })
// }

const history = JSON.parse(localStorage.getItem("bookSearchedHistory") ||"[]");
// history.map((value)=>{
//     history.push(value);
// })


form.addEventListener("submit",(e)=>{
e.preventDefault();
myfunction();
})


function myfunction(){
    if(search.value =="" || search.value==null){
        console.log("Empty field.");
        output.innerText = "Search field can't be empty.";
        return false;
    }else{
        message.innerText="'"+ search.value + "'";
        msg.style.display="block";

        let historyDetails ={
            "bookName":search.value,
            "dateTime":new Date()
        }

        history.push(historyDetails);
        window.localStorage.setItem("bookSearchedHistory",JSON.stringify(history));
        
    fetch(url+search.value)
    .then(Response => Response.json())
    .then((data)=>{
        console.log(data.items);
        data.items.map((items)=>{

            output.innerHTML += 
            `<div class="card">
            <div class="card-image">
                <img src="${items.volumeInfo.imageLinks.smallThumbnail}" alt="image">
            </div>
            <div class="card-body">
                <div class="title">
                    Title: ${items.volumeInfo.title}
                </div>
       
                <div class="price">
                    Page Count: ${items.volumeInfo.pageCount}
                </div>

                <div class="price">
                Author: ${items.volumeInfo.authors}
            </div>

            <div class="price">
            Publisher: ${items.volumeInfo.publisher}
        </div>

        <div class="price">
        <button>Buy Now<button>
    </div>
            </div>
        </div>`  
        
        
        })

        
        fetch(url+search.value)
    .then(Response => Response.json()).then((data)=>{
        data.items.map((items)=>{
            let userData={
                "image":items.volumeInfo.imageLinks.smallThumbnail,
                "title":items.volumeInfo.title,
                "count":items.volumeInfo.pageCount,
                "author":items.volumeInfo.authors,
                "publisher":items.volumeInfo.publisher,
                "id":items.id
            }
            details.push(userData);
        window.localStorage.setItem("userData",JSON.stringify(details));
        })
        
    })
    })
    }

    search.value="";
}

    
    

          