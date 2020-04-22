var Controller = (function () {
    document.querySelector('.menu-bar-btn').addEventListener('click', () => {

        document.querySelector('.bar1').classList.toggle('press');
        document.querySelector('.bar2').classList.toggle('press');
        document.querySelector('.bar3').classList.toggle('press');
        document.querySelector('.menu-bar-btn').classList.toggle('press');
        document.querySelector('.menu-bar-option').classList.toggle('active');
        document.querySelector('.menu-bar-list').classList.toggle('active');
        document.querySelectorAll('.menu-bar-list li').forEach(link => {
            link.classList.toggle('fade');
        });

    });
})();

var tracker = (function () {


    fetch("https://api.covid19india.org/data.json")
        .then(Response => Response.json())
        .then(data => {
            var todayData = data.cases_time_series;
            var todayDataUpdate = todayData[todayData.length - 1];

            document.querySelector('.card-1 p').innerHTML = parseInt(todayDataUpdate.totalconfirmed);
            document.querySelector('.card-2 p').innerHTML = parseInt(todayDataUpdate.totaldeceased);
            document.querySelector('.card-3 p').innerHTML = parseInt(todayDataUpdate.totalrecovered);
            document.querySelector('.card-head p').innerHTML = ('As per ' + todayDataUpdate.date + '2020 update given by Govt of India.');
            document.querySelector('.card-4 p').innerHTML = parseInt(todayDataUpdate.dailyconfirmed);
            // console.log(todayDataUpdate.totalconfirmed);
            console.log(data);

            var statedata = data.statewise;
            console.log(statedata);
           
            for (var i = 1; i < statedata.length; i++) {
                var current = statedata[i];
                document.querySelector('.' + current.statecode + ' h2').innerHTML = current.state;
                document.querySelector('.' + current.statecode + ' p .TC').innerHTML = current.confirmed;
                document.querySelector('.' + current.statecode + ' p .TD').innerHTML = current.deaths;
                document.querySelector('.' + current.statecode + ' p .RC').innerHTML = current.recovered;

            }




        });
})();
