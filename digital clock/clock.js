function clock() {
    var month_Names = ["Januray","Feburary","March","April","May","June","July","August",
                        "September","October","November","December"];
    var days = ["Sunday","Monday","Tuesday","Wednessday","Thursday","Friday","Saturday"];
    var today = new Date();
    
    document.getElementById('date').innerHTML =(days[today.getDay()] + " " + today.getDate() 
                            + " " + month_Names[today.getMonth()] + " " + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var day = h<11 ? "AM" : "PM";

    h = h<10? '0'+h : h;
    m = m<10? '0'+m : m;
    s = s<10? '0'+s : s;

    document.getElementById('hours').innerHTML = h
    document.getElementById('minute').innerHTML = m
    document.getElementById('seconds').innerHTML = s

} 

var intervals = setInterval(clock, 400);

