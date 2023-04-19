const tabs = document.querySelectorAll('.tab-navigation a');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();

    tabContents.forEach(content => {
      content.style.display = 'none';
    });

    const target = e.target.getAttribute('href');
    document.querySelector(target).style.display = 'block';

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});