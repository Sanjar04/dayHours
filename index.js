const elYear = document.querySelector('.dayYear');
const elHours = document.querySelector('.hoursTime');
const elDay = document.querySelector('.day');

setInterval(() => {
  let dates = new Date;
  let date = dates.getDate();
  let month = dates.getMonth()+ 1
  let year = dates.getFullYear();
  let hours = dates.getHours();
  let minutes = dates.getMinutes();
  let seconds = dates.getSeconds();
  let day = dates.getDay();
  if(day === 1){
    elDay.innerHTML = "Dushanba";
  }else if(day === 2){
    elDay.innerHTML = "Seshanba";
  }else if(day === 3){
    elDay.innerHTML = "Chorshanba";
  }else if(day === 4){
    elDay.innerHTML = "Payshanba";
  }else if(day === 5){
    elDay.innerHTML = "Juma";
  }else if(day === 6){
    elDay.innerHTML = "Shanba";
  }else if(day === 7){
    elDay.innerHTML = "Yakshanba";
  }
  elYear.innerHTML = `${date} / ${month} / ${year}`;
  elHours.innerHTML = `${hours} : ${minutes} : ${seconds}`
}, "1000");