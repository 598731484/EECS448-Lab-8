var password = document.getElementById("password");
var match = document.getElementById("match");
var verify = document.getElementById("verify");
var length = document.getElementById("length");
var message = document.getElementById("message");
var conformed = document.getElementById("conformed");

function result()
{
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("conformed").value;
    if (password1 != password2)
    {
        match.style.display = "";
    }
    if (password.value.length <= 7)
    {
        length.style.display = "";
    }
}