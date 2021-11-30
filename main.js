//var into function is turning the variable into a function, so I can use it later to change the intervals by the second.
var getnewyorkTime = function() {
    document.getElementById("newyorkTime").innerHTML = 
    new Date().toLocaleString("en-US", {timeZone:'America/New_York', timeStyle: "medium", hourCycle:'h12'})
}
getnewyorkTime();
setInterval(getnewyorkTime, 1000);

//This code above explanation:
//en-US is the location that we're currently in, the timezone is a timezone that we can use to get a specific area, the timeStyle represents how we want our time to look like, and the hourCycle is the amount of hours inside the cycle.

var getpakistanTime = function() {
    document.getElementById("pakistanTime").innerHTML = 
    new Date().toLocaleString("en-US", {timeZone:'Asia/Karachi', timeStyle: "medium", hourCycle:'h12'})
}
getpakistanTime();
setInterval(getpakistanTime, 1000);

var getsydneyTime = function() {
    document.getElementById("sydneyTime").innerHTML = 
    new Date().toLocaleString("en-US", {timeZone:'Australia/Sydney', timeStyle: "medium", hourCycle:'h12'})
}
getsydneyTime();
setInterval(getsydneyTime, 1000);