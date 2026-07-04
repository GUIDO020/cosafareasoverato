// Menu mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Anno corrente nel footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Animazione di comparsa in scroll per card ed elementi
const revealTargets = document.querySelectorAll(
  '.event-card, .activity-card, .ig-card, .day-row'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealTargets.forEach((el) => observer.observe(el));

// --- TABS LOGIC ---
const tabBtns = document.querySelectorAll('.tab-btn');
const eventCards = document.querySelectorAll('.event-card');

if (tabBtns.length > 0 && eventCards.length > 0) {
  // Funzione per filtrare
  const filterEvents = (day) => {
    eventCards.forEach(card => {
      if (card.getAttribute('data-day') === day) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  // Inizializza con il primo tab (venerdi)
  filterEvents('venerdi');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterEvents(btn.getAttribute('data-target'));
    });
  });
}

// --- MODAL LOGIC ---
const modalOverlay = document.getElementById('eventModalOverlay');
const modalClose = document.getElementById('modalClose');

const modalDay = document.getElementById('modalDay');
const modalTitle = document.getElementById('modalTitle');
const modalVenue = document.getElementById('modalVenue');
const modalVenueLink = document.getElementById('modalVenueLink');
const modalTags = document.getElementById('modalTags');
const modalDesc = document.getElementById('modalDesc');

if (modalOverlay && modalClose) {
  eventCards.forEach(card => {
    card.addEventListener('click', () => {
      // Popola i dati
      const title = card.getAttribute('data-title');
      const venue = card.getAttribute('data-venue');
      const day = card.querySelector('.event-day').textContent;
      const desc = card.getAttribute('data-desc') || 'Nessuna descrizione aggiuntiva.';
      const tags = card.getAttribute('data-tags');

      modalDay.textContent = day;
      modalTitle.textContent = title;
      
      const cleanVenue = venue.replace('📍', '').trim();
      modalVenue.textContent = cleanVenue;
      modalVenueLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleanVenue + ' Soverato')}`;

      modalDesc.textContent = desc;

      // Gestione tags
      modalTags.innerHTML = '';
      if (tags) {
        tags.split(',').forEach(tag => {
          const span = document.createElement('span');
          span.textContent = tag.trim();
          modalTags.appendChild(span);
        });
      }

      // Mostra modale
      modalOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Blocca scroll
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}
