var username=document.querySelector('.sign input[type=text]');
var useremail=document.querySelector('.sign input[type=email]');

var userpass=document.querySelector('.sign #exampleFormControlInput2');
var signup=document.querySelector('.sign button');

var myinputs=document.querySelectorAll('.sign input');
var myicon=document.querySelector('.sign .password-toggle-icon');
 
var userlist=[];
if(localStorage.getItem('myuser')!==null) {
userlist=JSON.parse(localStorage.getItem('myuser'));

}else{
    userlist=[];
}
function adduser(){
    if(username.value=='' ||useremail.value==''||userpass.value==''){
        
        document.getElementById('massege').innerHTML=`<p class="text-danger text-center">All inputs is required</p>`;
        document.getElementById('massege').style.display="block";
    }
    else{
var userobj={
    name:username.value,
   email:useremail.value,
    pass:userpass.value,
}
userlist.push(userobj);
console.log(userlist);
localStorage.setItem('myuser', JSON.stringify(userlist));
document.getElementById('massege').innerHTML=`<p class="text-success text-center">success</p>`;
document.getElementById('massege').style.display="block";
    }
}
signup.addEventListener('click',adduser);


function toggleicon(){
    if(userpass.type==="password"){
     
        userpass.type="text";
    
        myicon.innerHTML=`<i class="fa-solid fa-eye bg-transparent"></i>`
    }
    else{
       
        userpass.type="password";
      
        myicon.innerHTML=`<i class="fa-solid fa-eye-slash bg-transparent"></i>`;
    }
}
myicon.addEventListener('click',toggleicon);
userpass.addEventListener('focus', function() {
   myicon.style.cursor = "pointer";
  });



for(var i=0; i<myinputs.length; i++){
  
    myinputs[i].addEventListener('input',function(e){
       validateinputs(e.target.id,e.target.value); 
    
});
}
function validateinputs(id,value){
    var el=document.getElementById(id);
var regex={
exampleFormControlInput: /^[A-Z][a-z0-9]{3,8}$/,
exampleFormControlInput1:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
exampleFormControlInput2:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
}
if(regex[id].test(value)==true){
    document.getElementById("namenote").style.display="none";
    document.getElementById("emailnote").style.display="none";
    document.getElementById("passnote").style.display="none"; 
   
    return true;
  }
  else{
if(id=="exampleFormControlInput"&&el.value!=''){
    document.getElementById("namenote").style.display="block";
    document.getElementById("emailnote").style.display="none";
    document.getElementById("passnote").style.display="none";
}
else if(id=="exampleFormControlInput1"&&el.value!=''){
    document.getElementById("emailnote").style.display="block";
    document.getElementById("namenote").style.display="none";
    document.getElementById("passnote").style.display="none";
}
else if(id=="exampleFormControlInput2"&&el.value!=''){
    document.getElementById("namenote").style.display="none";
    document.getElementById("emailnote").style.display="none";
    document.getElementById("passnote").style.display="block"; 
}
   
    return false;
  }

}
