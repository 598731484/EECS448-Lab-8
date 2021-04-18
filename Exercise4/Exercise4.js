function changeColor()
{
    document.getElementById("red").style.backgroundColor="red"
    document.getElementById("red").style.borderColor="green"
    document.getElementById("green").style.backgroundColor="green"
    document.getElementById("green").style.borderColor="blue"
    document.getElementById("blue").style.backgroundColor="blue"
    document.getElementById("blue").style.borderColor="red"
}
function showColor()
{
    var background1=document.getElementById("red").style.backgroundColor
    document.getElementById("background1").innerHTML=background1;

    var background2=document.getElementById("green").style.backgroundColor
    document.getElementById("background2").innerHTML=background2;

    var background3=document.getElementById("blue").style.backgroundColor
    document.getElementById("background3").innerHTML=background3;

    var border1=document.getElementById("red").style.borderColor
    document.getElementById("border1").innerHTML=border1;

    var border2=document.getElementById("green").style.borderColor
    document.getElementById("border2").innerHTML=border2;

    var border3=document.getElementById("blue").style.borderColor
    document.getElementById("border3").innerHTML=border3;
}