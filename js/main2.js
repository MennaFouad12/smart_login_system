var logusername = document.querySelector(".login input[type=email]");
var loguserpass = document.querySelector(".login input[type=password]");
var login = document.querySelector(".login button");
var myicon=document.querySelector('.input-group .password-toggle-icon');
 
var users =[];
var preventDefault = false;
login.addEventListener("click", function (e) {
  users = JSON.parse(localStorage.getItem("myuser"));
  if (logusername.value !=="" && loguserpass.value !=="") {
    for (var i = 0; i < users.length; i++) {
        
      if (
        users[i].email === logusername.value &&
        users[i].pass === loguserpass.value
      ) {
        preventDefault = true;
localStorage.setItem('username',users[i].name);
        break;
      }
    }
    if (preventDefault == false) {
      e.preventDefault();
      console.log("data is not correct");
      document.getElementById('massege').innerHTML=`<p class="text-danger text-center">data is not correct</p>`;
    document.getElementById('massege').style.display="block";
    }
  } 
  else {
    e.preventDefault();
    console.log("comlete data");
    document.getElementById('massege').innerHTML=`<p class="text-danger text-center">All inputs is required</p>`;
    document.getElementById('massege').style.display="block";
  }
});
function toggleicon(){
  if(loguserpass.type==="password"){
   
    loguserpass.type="text";
  
      myicon.innerHTML=`<i class="fa-solid fa-eye bg-transparent"></i>`
  }
  else{
     
    loguserpass.type="password";
    
      myicon.innerHTML=`<i class="fa-solid fa-eye-slash bg-transparent"></i>`;
  }
}
myicon.addEventListener('click',toggleicon);

