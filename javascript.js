    let  first_name=document.getElementById("first_name");
    let  last_name=document.getElementById("last_name");
    let  useremailaddr=document.getElementById("emailaddr");
    let  phone=document.getElementById("phone");
    let  subject=document.getElementById("subject");
    let  message=document.getElementById("message");

    let firstname_error=document.getElementsByClassName("firstname_error")[0];
    let lastname_error=document.getElementsByClassName("lastname_error")[0];
    let email_error=document.getElementsByClassName("email_error")[0];
    let phone_error=document.getElementsByClassName("phone_error")[0];
    let subject_error=document.getElementsByClassName("subject_error")[0];
    let message_error=document.getElementsByClassName("message_error")[0];
    let error=0;
    let email_regex=/[a-zA-Z0-9_.]{4,30}[@][a-zA-Z]{2,10}[.][a-zA-Z]{2,6}/;
    let phone_regex=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; 
function validateContactForm()
{
    validateFisrstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validateSubject();
    validateMessage();
    if(error==0)
    {
        alert("Message sent successfully");
    }
}
function validateFisrstName()
{
    if(first_name.value=="")
    {
        firstname_error.style.visibility="visible";
        first_name.style.border="2px solid #d9534f";
        error=1;
    }
    else {
        firstname_error.style.visibility="hidden";
        first_name.style.border="1px solid #d4d4d4";
        error=0;
    }

}
function validateLastName()
{
    if(last_name.value=="")
    {
        lastname_error.style.visibility="visible";
        last_name.style.border="2px solid #d9534f";
        error=1;
    }
    else {
        lastname_error.style.visibility="hidden";
        last_name.style.border="1px solid #d4d4d4";
        error=0;
    }
}
function validateEmail()
{
    if(useremailaddr.value=="")
    {
        email_error.style.visibility="visible";
        useremailaddr.style.border="2px solid #d9534f";
        error=1;
    }
    else if(!email_regex.test(useremailaddr.value)) {
        email_error.innerHTML="Invalid email address";
        email_error.style.visibility="visible";
        error=1;
    }
    else {
        email_error.style.visibility="hidden";
        useremailaddr.style.border="1px solid #d4d4d4";
        error=0;
    }
}
function validatePhone()
{
    if(phone.value==="")
    { 
        phone_error.style.visibility="visible";
        phone.style.border="2px solid #d9534f";
        error=1;
    }
    else if(!phone_regex.test(phone.value))
    {
        phone_error.innerHTML="Invalid phone format";
        phone_error.style.visibility="visible";
        error=1;
    }
    else {
        phone_error.style.visibility="hidden";
        phone.style.border="1px solid #d4d4d4";
        error=0;
    }
}
function validateSubject()
{
    if(subject.value=="")
    {
        subject_error.style.visibility="visible";
        subject.style.border="2px solid #d9534f";
        error=1;
    }
    else {
        subject_error.style.visibility="hidden";
        subject.style.border="1px solid #d4d4d4";
        error=0;
    }
}
function validateMessage()
{
    if(message.value=="")
    {
        message_error.style.visibility="visible";
        message.style.border="2px solid #d9534f";
        error=1;
    }
    else {
        message_error.style.visibility="hidden";
        message.style.border="1px solid #d4d4d4";
        error=0;
    }
}