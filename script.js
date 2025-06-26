// change meta theam color acording to var
window.addEventListener('DOMContentLoaded', () => {
  const themeColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color')
    .trim();

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', themeColor);
  }
});


//-------------END-------------

//. drop-down toggle function 

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('dropdown');
  const toggle = document.querySelector('.menu-toggle');

  function toggleDropdown(event) {
    event.stopPropagation(); // ⛔ Prevents click from bubbling to document
    dropdown.classList.toggle('hidden');
    toggle.classList.toggle('open');

    if (toggle.classList.contains('open')) {
      toggle.innerHTML = `<i id='xmark' class="fa-solid fa-xmark"></i>`;
    } else {
      toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  }

  toggle.addEventListener('click', toggleDropdown);

  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target) && !toggle.contains(event.target)) {
      dropdown.classList.add('hidden');
      toggle.classList.remove('open');
      toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  });
});