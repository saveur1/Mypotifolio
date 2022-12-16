// document.addEventListener("DOMContentLoaded",main);
var aboutMe=document.getElementById("aboutMe");
var content=document.getElementById("content_holder");
var home_btn=document.getElementsByClassName("come_home")[0];
// function main()
// {
//     // getData();
// }
    function getData()
    {
        let request=new XMLHttpRequest();
        let form=new FormData();
        form.append("home","Back Home");
        request.open("POST","homePage.html");
        request.send(form);
        request.onreadystatechange=function() {
            if(request.readyState==4 && request.status==200)
            {
               content.innerHTML=request.responseText;
            }
        }
    }
  function getAboutMe() {
        let request=new XMLHttpRequest();
        let form=new FormData();
        form.append("about","about me");
        request.open("POST","aboutme.html");
        request.send(form);
        request.onreadystatechange=function() {
            if(request.readyState==4 && request.status==200)
            {
               content.innerHTML=request.responseText;
            }
        }
    }