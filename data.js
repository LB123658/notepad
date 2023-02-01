//show date and time
function loadTime() {
const date = new date();
var m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var d = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var h;
if (date.getHours() > 12) {
  h = date.getHours() - 12;
}	
if (journal) {
  t.value = journal + "\n" + d[date.getDay()] + ", " + m[date.getMonth()] + " " + date.getDate() + " " + h + ":" + date.getMinutes() + " >>>";
} else {
  t.value = "";
}
}
loadTime();
