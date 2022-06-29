setInterval(() => {
   const hours = document.getElementById('hours');
   const minutes = document.getElementById('minutes');
   const seconds = document.getElementById('seconds');
   const ampm = document.getElementById('ampm');

   const hh = document.getElementById('hh');
   const mm = document.getElementById('mm');
   const ss = document.getElementById('ss');

   const hrDot = document.querySelector('.hr_dot');
   const minDot = document.querySelector('.min_dot');
   const secDot = document.querySelector('.sec_dot');

   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   const am = h >= 12 ? 'PM' : 'AM';

   // convert 24hr clock to 12hr clock
   if (h > 12) h -= 12;

   // add zero before single digit number
   h = (h < 10) ? '0' + h : h;
   m = (m < 10) ? '0' + m : m;
   s = (s < 10) ? '0' + s : s;

   hours.innerHTML = h + '<br><span>hours</span>';
   minutes.innerHTML = m + '<br><span>minutes</span>';
   seconds.innerHTML = s + '<br><span>seconds</span>';
   ampm.textContent = am;

   hh.style.strokeDashoffset = 440 - (440 * h) / 12;
   // 12 hrs clock
   mm.style.strokeDashoffset = 440 - (440 * m) / 60;
   // 60 minutes
   ss.style.strokeDashoffset = 440 - (440 * s) / 60;
   // 60 Seconds

   hrDot.style.transform = `rotate(${h * 30}deg)`;
   // 360/12 = 30
   minDot.style.transform = `rotate(${m * 6}deg)`;
   // 360/60 = 6
   secDot.style.transform = `rotate(${s * 6}deg)`;
   // 360/60 = 6
})
