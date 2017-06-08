document.addEventListener('DOMContentLoaded', function(e){
  var DAYS = ['日', '月', '火', '水', '木', '金', '土'];
  var clock = function(){
    var now = new Date();
    var zeroPadding = function(val) {return (val < 10) ? '0' + val : val;};
    var current = {
      'year': now.getFullYear(),
      'month': zeroPadding(now.getMonth() + 1),
      'date': zeroPadding(now.getDate()),
      'day': DAYS[now.getDay()],
      'hour': zeroPadding(now.getHours()),
      'minute': zeroPadding(now.getMinutes())
    };
    for(key in current){ document.getElementById(key).innerHTML = current[key]; }
  };

  setInterval(clock, 100);
});
