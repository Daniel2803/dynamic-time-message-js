
let msg = document.getElementById("message");
let button = document.getElementById("btn");
const day = new Date();
const hour = day.getHours();


button.addEventListener("click", function(){

if( day > 6 && day < 12){
  msg.innerHTML = '<h1>Good Morning</h1>'
}
else if (day > 12 && day < 18) {
    msg.innerHTML = '<h1>Good Afternoon</h1>'
}
else if (day > 18){
    msg.innerHTML = '<h1>Good Evening</h1>'
}
})
