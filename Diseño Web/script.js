// --- Tooltip flotante para fechas ---
const tooltip = document.getElementById('floating-tooltip');
const tooltipTitle = document.getElementById('tooltip-title');
const tooltipInfo = document.getElementById('tooltip-info');
const dateItems = document.querySelectorAll('.date-item');

dateItems.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    tooltip.style.display = 'block';
    tooltipTitle.textContent = item.dataset.title;
    tooltipInfo.textContent = item.dataset.info;

    const offsetX = 15;
    const offsetY = 20;
    let left = e.clientX + offsetX;
    let top = e.clientY + offsetY;

    const tooltipRect = tooltip.getBoundingClientRect();
    if(left + tooltipRect.width > window.innerWidth) {
      left = e.clientX - tooltipRect.width - offsetX;
    }
    if(top + tooltipRect.height > window.innerHeight) {
      top = e.clientY - tooltipRect.height - offsetY;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  });

  item.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});


const scrollBtn = document.getElementById('scroll-to-hero');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});


const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');

searchIcon.addEventListener('click', () => {
  if(searchBox.style.display === 'block') {
    searchBox.style.display = 'none';
  } else {
    searchBox.style.display = 'block';
    searchBox.querySelector('input').focus();
  }
});

// --- Modal sugerir lugar ---
const suggestBtn = document.getElementById('suggest-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const suggestForm = document.getElementById('suggestForm');

suggestBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.classList.remove('show');
  }
});

// Manejar formulario
suggestForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias por sugerir un lugar!');
  suggestForm.reset();
  modal.classList.remove('show');
});

// --- Popup dónde comer ---
const foodBtn = document.getElementById('food-btn');
const foodPopup = document.getElementById('food-popup');
const closeFoodPopupBtn = document.getElementById('close-food-popup');

foodBtn.addEventListener('click', () => {
  foodPopup.style.display = 'flex';
});

closeFoodPopupBtn.addEventListener('click', () => {
  foodPopup.style.display = 'none';
});

foodPopup.addEventListener('click', e => {
  if(e.target === foodPopup) {
    foodPopup.style.display = 'none';
  }
});
