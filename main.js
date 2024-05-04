 const hidden = document.querySelector('.hidden')

function bars(){
   
    if(hidden.style.display === "flex"){
        hidden.style.display = "none"
        
    }
    else{
        hidden.style.display = "flex"
       
    }
}
function list(){
    hidden.style.display = "none"
}



function Darkmode(){
    var boddy  = document.getElementById("body")
    var titletext = document.querySelectorAll(".title")
    var home = document.getElementById("home")
    var about = document.getElementById("textAbout")
    var link = document.querySelectorAll(".links a")
    if(boddy.style.backgroundColor == "white"){
        boddy.style.backgroundColor = "#3D3B40"
       
        home.style.color = "white"
        about.style.color ="white"
        
        for (let i = 0; i < link.length && titletext.length; i++) {
            link[i].style.color = "white";
            titletext[i].style.color = "white"
          }
    }
    else{
        boddy.style.backgroundColor ="white"
        home.style.color = "#3D3B40"
        about.style.color ="#3D3B40"
      
        
        for (let i = 0; i < link.length && titletext.length; i++) {
            link[i].style.color = "#3D3B40";
            titletext[i].style.color = "#3D3B40"
          }
    }
}
