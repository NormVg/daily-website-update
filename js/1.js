var i = 0;
var txt = 'We Are TheAlphaOnes.'; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */
document.getElementById("tw").innerHTML = ""
function typeWriter() {
  if (i < txt.length) {
    
    document.getElementById("tw").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()