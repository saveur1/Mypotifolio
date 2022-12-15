function validateContactForm()
{
    let  first_name=document.getElementById("first_name");
    let  last_name=document.getElementById("last_name");
    let  useremailaddr=document.getElementById("emailaddr");
    let  phone=document.getElementById("phone");
    let  subject=document.getElementById("subject");
    let  message=document.getElementById("message");
    let firstname_error=document.getElementsByClassName("firstname_error")[0];
    let lastname_error=document.getElementsByClassName("lastname_error")[0];
    let error=0;
    if(first_name.value=="")
    {
        firstname_error.style.display="block";
        error++;
    }
    if(last_name.value=="")
    {
        lastname_error.style.display="block";
        error++;
    }
}