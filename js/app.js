window.addEventListener("scroll", function(){
  var navScroll = document.getElementById("nav")
  navScroll.classList.toggle("fixed", window.scrollY > 10)
})
function na(){
var lo=document.getElementById("de");
lo.style.textTransform="uppercase"
 
var logo=document.getElementById("logo")
logo.style.textTransform="uppercase"
}
na()
var a = document.getElementById('demo');
var i = 0;
var text = 'My job Frontend Developer '
function func() {
    if (i < text.length) {
        a.innerHTML += text.charAt(i)
        i++;
        setTimeout(func, 90)
    }
}
func()
function query(){
  var ism = prompt(" what's your name? ")
  alert(" Hello " + ism +" "+ "good, your name is beautiful ")
  var familya = prompt("what's your lastname")
  alert(ism +" "+ familya + "nice to meet you ")
}  
query()

function navBack(){
 var nav=document.getElementById("nav").classList.toggle("change")
}


