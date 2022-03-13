let clock = document.querySelector("#myClock");
let nameArea = document.querySelector("#myName");
let name = prompt("İsim giriniz: ");
name ? ( nameArea.innerHTML = `${name}`) : (nameArea.innerHTML = `Ziyaretçi`);

function showTime(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var day = time.getDay();
    var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    clock.innerHTML = `${addZero(hour)}:${addZero(minute)}:${second} - ${days[day]}`
}
function addZero(n) {
    return n < 10 ? (n = "0" + n) : n;
  }

  setInterval(showTime,1000);

showTime();