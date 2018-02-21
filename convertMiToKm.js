// fixed bugs by adding missing double quote on line 3 and semicolon on line 5 and changed the value being multiplied with the miles value so that it produced the expected result
var kilometersElement = document.getElementById("kValue");
var milesElement = document.getElementById("mValue");
function convert() {
   var km = milesElement.value * 1.6;
   kilometersElement.innerHTML = km;
}

// add backward compatible event listener to Convert to Km button and clear form
var submitButton = document.getElementById("convertButton");
if (submitButton.addEventListener) {
   submitButton.addEventListener("click", convert, false); 
   window.addEventListener("load", function() {
      document.getElementById('mValue').value = ""; // clear last miles value on reload
      document.getElementById('kValue').innerHTML = ""; // clear previous results on reload 
   }, false);
} else if (submitButton.attachEvent)  {
   submitButton.attachEvent("onclick", convert);
   window.attachEvent("onload", function() {
      document.getElementById('mValue').value = ""; // clear last miles value on reload
      document.getElementById('kValue').innerHTML = ""; // clear previous results on reload 
   });
}