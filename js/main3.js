
var mybox=document.getElementById("mybox");
console.log(mybox);


var name = localStorage.getItem("username");
console.log(name);
mybox.innerHTML = `<p class="fs-3 ">Welcome ${name}</p>`;