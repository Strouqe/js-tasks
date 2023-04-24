let minArrow = document.getElementById('min');
let hrArrow = document.getElementById('hr');
let degMin = 180;
let degHr = 90;

let hours = new Date().getHours();
let minutes = new Date().getMinutes();

degHr = (hours * 30) + 180
degMin = (minutes * 6) + 180


function rotate() {
    minArrow.style.transform = `rotate(${degMin}deg)`;
    hrArrow.style.transform = `rotate(${degHr}deg)`;
}


rotate();
setInterval(() => {
  rotate(); 
}, 60000);