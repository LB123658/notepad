//rest of js
var t = document.getElementById("t");
var journal = localStorage.getItem("journal");

function what() {
localStorage.setItem("journal",t.value);
console.log("Saved...");
}

if (navigator.platform == "Android") {
t.style.fontSize = "50px";
} else if (navigator.platform == "iPhone") {
t.style.fontSize = "50px";
}

if (journal) {
  t.value = journal + "\n>>> ";
} else {
  t.value = "";
}

t.scrollTop = t.scrollHeight;
t.focus();
	
//show date and time
//date and time variables
const d = new Date();
var m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var dayy = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var adjustedHours;
var adjustedMinutes;
var ampm;
var dottedLine = "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ";
var timestamp;
//display correct minute number below ten, example: "3:02" instead of "3:2"
if (d.getMinutes() < 10) {
	adjustedMinutes = "0" + d.getMinutes();
} else {
	adjustedMinutes = d.getMinutes();
}
//display hours using 12-hour clock
if (d.getHours() > 12) {
	adjustedHours = d.getHours() - 12;
	ampm = "PM";
} else {
	adjustedHours = d.getHours();
	ampm = "AM";
}
//create timestamp
//make dotted line the same length as the timestamp text
timestamp = adjustedHours + ":" + adjustedMinutes + " " + ampm + " - " + dayy[d.getDay()] + ", " + m[d.getMonth()] + " " + d.getDate();
dottedLine = dottedLine.slice(0,Math.round(timestamp.length * 0.62));
//if journal has been stored, load the text followed by the date and time header
//if there is no saved text, leave page blank
if (journal) {
    t.value = journal + "\n\n" + dottedLine + "\n" + timestamp + "\n";
} else if (journal === false) {
    t.value = "";
} 

//load correct app logo for chromebooks
if (navigator.userAgent.indexOf("CrOS") > -1) {
document.getElementById("manifest").href = "chrome/manifest.json";
}
