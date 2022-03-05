var usernameField = document.getElementById("username");
var username=document.getElementById('username').value;

window.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && username!==null) {
        console.log("Hey!");
        //style.display = "block";
    }
});