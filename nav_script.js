const navButtons = document.querySelectorAll('.navigation a');
const sections = document.querySelectorAll('.section');
sections[0].classList.add('active');

navButtons.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();

    sections.forEach(sec => {
      sec.classList.remove('active');
    });

    const target = e.target.getAttribute('href');
    document.querySelector(target).classList.add('active');

    document.querySelector('.header-navigation nav').classList.remove('showed');
  });
});

function navButton() {
  document.querySelector('.header-navigation nav').classList.toggle('showed');
}

const lifeTimer = document.getElementById("live-timer");
const birthDate = new Date("May 14, 2002 00:00:00");

month_diff = Date.now() - birthDate.getTime();
age_dt = new Date(month_diff);   
year = age_dt.getUTCFullYear();  
age = Math.abs(year - 1970);

lifeTimer.innerText = age;