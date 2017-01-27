document.addEventListener('DOMContentLoaded', function(e){
  var DAYS = ['日', '月', '火', '水', '木', '金', '土'];
  var clock = function(){
    var now = new Date();
    var current = {
      'year': now.getFullYear(),
      'month': (now.getMonth() + 1 < 10) ? '0' + (now.getMonth() + 1) : now.getMonth() + 1,
      'date': now.getDate(),
      'day': DAYS[now.getDay()],
      'hour': (now.getHours() < 10) ? '0' + now.getHours() : now.getHours(),
      'minute': (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes()
    };
    for(key in current){ document.getElementById(key).innerHTML = current[key]; }
  };

  setInterval(clock, 100);
});
