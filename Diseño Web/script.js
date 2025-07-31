// --- Tooltip flotante para fechas ---
const tooltip = document.getElementById('floating-tooltip');
const tooltipTitle = document.getElementById('tooltip-title');
const tooltipInfo = document.getElementById('tooltip-info');
const dateContainer = document.querySelector('.hero-dates');

const todayDate = new Date();
const currentDay = todayDate.getDate();
const totalDays = 31;
const loops = 2; 

// Limpio container antes de crear días
dateContainer.innerHTML = '';

// Generar fechas con eventos y tooltip
for (let i = 0; i < loops; i++) {
  for (let d = 1; d <= totalDays; d++) {
    const day = document.createElement('div');
    day.classList.add('date-item');
    day.textContent = d;
    day.dataset.title = `Evento para el día ${d}`;
    day.dataset.info = `Detalles para el día ${d}`;

    if (d === currentDay && i === 0) {
      day.classList.add('active');
      day.style.fontSize = '24px';
    } else {
      day.style.fontSize = '16px';
    }

    day.addEventListener('mouseenter', (e) => {
      tooltip.style.display = 'block';
      tooltipTitle.textContent = day.dataset.title;
      tooltipInfo.textContent = day.dataset.info;

      let left = e.clientX + 15;
      let top = e.clientY + 20;
      const tooltipRect = tooltip.getBoundingClientRect();

      if (left + tooltipRect.width > window.innerWidth) {
        left = e.clientX - tooltipRect.width - 15;
      }
      if (top + tooltipRect.height > window.innerHeight) {
        top = e.clientY - tooltipRect.height - 20;
      }

      tooltip.style.left = left + 'px';
      tooltip.style.top = top + 'px';
    });

    day.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });

    dateContainer.appendChild(day);
  }
}

// Centrar la fecha actual
const allDateItems = document.querySelectorAll('.date-item');
const todayItem = Array.from(allDateItems).find(item => parseInt(item.textContent) === currentDay);
if (todayItem) {
  todayItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// --- Botón para volver al hero ---
const scrollBtn = document.getElementById('scroll-to-hero');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

// --- Mostrar/ocultar buscador ---
const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');

searchIcon.addEventListener('click', () => {
  if (searchBox.style.display === 'block') {
    searchBox.style.display = 'none';
  } else {
    searchBox.style.display = 'block';
    searchBox.querySelector('input').focus();
  }
});

document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target) && e.target !== searchIcon) {
    searchBox.style.display = 'none';
  }
});

// --- Modal sugerir lugar ---
const suggestBtn = document.getElementById('suggest-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const suggestForm = document.getElementById('suggestForm');

suggestBtn.addEventListener('click', () => {
  modal.classList.add('show');
  document.getElementById('place-name').focus();
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

suggestForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias por sugerir un lugar!');
  suggestForm.reset();
  modal.classList.remove('show');
});

// --- Popup "Dónde comer" ---
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
  if (e.target === foodPopup) {
    foodPopup.style.display = 'none';
  }
});

// --- Modal Moovit (sección colectivos) ---
const moovitModal = document.getElementById('moovit-modal');
const closeMoovitBtn = document.getElementById('close-moovit-modal');
const colectivosLink = document.querySelector('a[href="#colectivos"]');

colectivosLink.addEventListener('click', (e) => {
  e.preventDefault();
  moovitModal.style.display = 'flex';
});

closeMoovitBtn.addEventListener('click', () => {
  moovitModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === moovitModal) {
    moovitModal.style.display = 'none';
  }
});

// --- Scroll horizontal automático en "Lugares Populares" ---
const cards = document.querySelector('.cards');

if (cards) {
  // Clonar tarjetas para efecto infinito
  const clone = cards.innerHTML;
  cards.innerHTML += clone;

  // Efecto de scroll horizontal automático
  let scrollAmount = 0;
  const scrollSpeed = 1;

  function autoScroll() {
    scrollAmount += scrollSpeed;
    cards.scrollLeft = scrollAmount;

    if (scrollAmount >= cards.scrollWidth / 2) {
      scrollAmount = 0;
    }

    requestAnimationFrame(autoScroll);
  }

  cards.style.overflowX = 'hidden';
  cards.style.scrollBehavior = 'auto';
  autoScroll();
}

// Código existente para contacto
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeContactBtn = document.getElementById('closeContactBtn');
const contactForm = document.getElementById('contactForm');

contactBtn.addEventListener('click', () => {
  contactModal.classList.add('show');
  contactForm.querySelector('input').focus();
});

closeContactBtn.addEventListener('click', () => {
  contactModal.classList.remove('show');
});

contactModal.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove('show');
  }
});

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias por contactarnos!');
  contactForm.reset();
  contactModal.classList.remove('show');
});

// Nuevo código para toggle Tips Locales
const tipsBtn = document.querySelector('a.btn[href="#tipslocales"]');
const tipsSection = document.getElementById('tipslocales');

tipsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (tipsSection.style.display === 'none' || tipsSection.style.display === '') {
    tipsSection.style.display = 'block';
    tipsSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    tipsSection.style.display = 'none';
  }
});
const reviewsBtn = document.getElementById('reviews-btn');
const reviewsSection = document.getElementById('reviews');
const reviewsForm = document.getElementById('reviewsForm');  
const reviewsList = document.getElementById('reviews-list'); 

reviewsBtn.addEventListener('click', () => {
  const isHidden = window.getComputedStyle(reviewsSection).display === 'none';

  if (isHidden) {
    reviewsSection.style.display = 'block';
    reviewsSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    reviewsSection.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const reviewsForm = document.getElementById('reviewsForm');
  const commentsList = document.querySelector('#reviews .comments-list');

  // Función para evitar inyección HTML
  function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  reviewsForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = reviewsForm.name.value.trim();
    const comment = reviewsForm.comment.value.trim();

    if (!name || !comment) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString();  // ej: 31/07/2025
    const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}); // ej: 13:42

    const commentDiv = document.createElement('div');
    commentDiv.style.backgroundColor = '#444';  
    commentDiv.style.color = '#eee';            
    commentDiv.style.borderRadius = '8px';
    commentDiv.style.padding = '12px 16px';
    commentDiv.style.marginBottom = '15px';     
    commentDiv.style.border = '1px solid #666'; 

    commentDiv.innerHTML = `
      <strong style="color:#f2c14e;">${escapeHTML(name)}</strong>
      <span style="font-size:0.8rem; color:#ccc; margin-left:8px;">${dateStr} ${timeStr}</span>
      <p style="margin-top: 6px; margin-bottom: 0;">${escapeHTML(comment)}</p>
    `;

    commentsList.prepend(commentDiv);

    reviewsForm.reset();
    reviewsForm.name.focus();
  });
});