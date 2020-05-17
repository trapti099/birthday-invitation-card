let launchDate = new Date("May 21, 2020 12:00:00").getTime();

let timer = setInterval(tick, 1000);


function tick () {

    let now = new Date().getTime();
    let t = launchDate - now;

    //check if time is above zero
    if (t>0) {
        //calculation of days
        let days = Math.floor(t / (1000*60*60*24));
        if (days<10) { days = "0" + days; }

        //calculation of hours
        let hours = Math.floor(t % (1000 * 60 * 60 * 24)/(1000*60*60));
        if (hours < 10) { hours = "0" + hours; }

        //calculation of minutes
        let mins = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        //calculation of seconds
        let secs = Math.floor(t % (1000 * 60 * 60 * 24) / (1000));
        if (secs < 10) { secs = "0" + secs; }

        //creat time string
        let time = `${days} Days: ${hours} Hours : ${mins} Minutes : ${secs} Seconds`;

        document.querySelector('.countdown').innerText = time;

    }
}
