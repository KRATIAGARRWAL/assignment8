console.log("jjj")
function clearErrors()
{
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function setError(id,error)
{
     element=document.getElementById(id);
     element.getElementsByClassName("formerror")[0].innerHTML=error;
}
function validateForm()
{
    var returnVal=true;
    clearErrors();
    var fname=document.forms['myForm']["first_name"].value;
    if(fname.length==0){
        setError("f_name", "Name cannot be empty");
        returnVal=false;
    }
    var l_name=document.forms['myForm']['last_name'].value;
    if(l_name.length==0){
        setError("l_name","Name cannot be empty");
        returnVal=false;
    }
    var num=document.forms['myForm']['contact_number'].value;
    if(num.length!=10){
        setError("number","Please enter a valid phone number");
        returnVal=false;
    }
    var em=document.forms['myForm']['mail'].value;
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(em.match(mailformat)){
        returnVal=true;
    }
    else{
        setError("ail","Please enter a valid email");
        returnVal=false;
    }
    var pass=document.forms['myForm']['pass'].value;
    if(pass.length<8){
        setError("pass","Please enter a valid password");
        returnVal=false;
    }
    var passw=  /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
    if(pass.match(passw)){
        
        returnVal=true;
    }
    else{
        setError("pass","Please enter a valid password");
        returnVal=false;
    }
    


    return returnVal;
}