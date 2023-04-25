const navButtons = document.querySelectorAll('#navigation a');
sections = document.querySelectorAll('.content');
sections = Array.from(sections);

currentSection = document.getElementById('about-content');
currentButton = navButtons[0];

sections.forEach(sec => {
  sec.classList.add('right');
});
navButtons.forEach(tab => {
  tab.classList.add('active');
});
currentButton.classList.remove('active');
currentSection.classList.add('active');
currentSection.classList.remove('right')

navButtons.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();

    if (tab.classList.contains('active'))
    {
      currentButton.classList.add('active');
      tab.classList.remove('active');
      currentButton = tab;

      for (let i = 0; i < sections.length; i++)
        sections[i].classList.remove('previous');

      for (let i = 0; i < sections.length; i++)
      {
        if (sections[i].classList.contains('active'))
        {
          sections[i].classList.remove('active');
          sections[i].classList.add('previous');
          break;
        }
      }

      section = document.getElementById(e.target.getAttribute('href'));
      section.classList.remove('right');
      section.classList.remove('left');
      section.classList.remove('previous');
      section.classList.add('active');
      
      sectionNum = sections.indexOf(section);
      sections.forEach(sec => {
        if (sections.indexOf(sec) < sectionNum)
        {
          sec.classList.remove('right');
          sec.classList.add('left');
        }
        else if (sections.indexOf(sec) > sectionNum)
        {
          sec.classList.remove('left');
          sec.classList.add('right');
        }
      });
    }
  });
});

function navButton() {
  document.querySelector('.header-navigation nav').classList.toggle('showed');
}

/*
const lifeTimer = document.getElementById("live-timer");
const birthDate = new Date("May 14, 2002 00:00:00");

month_diff = Date.now() - birthDate.getTime();
age_dt = new Date(month_diff);   
year = age_dt.getUTCFullYear();  
age = Math.abs(year - 1970);

lifeTimer.innerText = age;
*/