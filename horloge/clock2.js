function showTime() {

    var date = new Date();

    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    

    var time = hrs + ":" + min + ":" + sec;

    // hrs = (hrs<10) ? "0" + hrs : hrs;
    // min = (min<10) ? "0" + min : min;
    // sec = (sec<10) ? "0" + sec : sec;

    if (hrs < 10) {
        hrs = "0" + hrs
    }

    if (min < 10) {
         min = "0" + min
        }

    if (sec < 10)  {
       sec = "0" + sec
    }
    
    document.getElementById("clock").innerText = time;
    setTimeout(showTime, 1000);
}
    showTime();
