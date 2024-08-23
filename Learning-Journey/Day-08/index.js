let user = prompt("Enter Your username")
let pass = +prompt("Enter Your Password")
if (user === "admin" && pass === 123) {
    alert("User Logined.")
} else {
    alert("auth failed.")
}