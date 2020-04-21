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


var UIcontroller = (function () {
  
    var date = new date();
    date.getDate();


});
var date, hmtl , newHtml;
 date=new Date();
        

 html = '<h3>%date%-%month%-%year%</h3>';
newHtml = html.replace('%date%', date.getDate() );
newHtml = newHtml.replace('%month%', parseInt(date.getMonth()+1) );
newHtml = newHtml.replace('%year%', date.getFullYear() );

document.querySelector('.card-head h3').innerHTML= newHtml;






