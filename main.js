document.addEventListener('DOMContentLoaded', function (e) {
  var DAYS = ['日', '月', '火', '水', '木', '金', '土']
  var clock = function () {
    var now = new Date()
    var padZero = function (val) {
      return `${val}`.padStart(2, '0')
    }
    var current = {
      year: now.getFullYear(),
      month: padZero(now.getMonth() + 1),
      date: padZero(now.getDate()),
      day: DAYS[now.getDay()],
      hour: padZero(now.getHours()),
      minute: padZero(now.getMinutes())
    }
    for (key in current) {
      document.getElementById(key).innerHTML = current[key]
    }

    var colon = document.querySelector('.colon')
    colon.classList.toggle('hidden')
  }

  setInterval(clock, 500)
})
