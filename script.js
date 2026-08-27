/**
 * Bharat Brand Stories
 * Client-side Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Episode Database
  const episodes = [
    {
      id: 'ep1',
      title: 'Visionary Technologies Pvt Ltd',
      tagline: 'From a garage in Bengaluru to a global tech powerhouse.',
      founder: 'Rohan Mehta',
      role: 'Founder & CEO',
      category: 'Tech & AI',
      featured: true,
      revenue: '₹500Cr+',
      quote: 'Building tech for the world starts with solving India-scale problems with unyielding tenacity.',
      bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtGM5nGe1HmTnjM0wXxSV1QokA0abz3OOsmmn6rjWXkR1LBLitrgA75ECdDVASgOx-HgJYN_lcsshfbsH908yBX9xSq3P-LldQFqmcaXGcqybOugmErDM7SDDFw0lRCLnuJqErGe6j-Wxp-f5E0Q0YHTTz7gSA2PJt3A6LNu87V_kUYEbWdxN7tZ-jCaWBXEU6UHdHzSDjzKIjKnU3ph78AlzE-4rGoWmfhuLhHH5FHgSunD51pDWCpQ',
      avatarImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzNGygYHDEUlCXhazqdp5CrTF6xsaNrQVJpI1zDKvFwJtb3I0yc-QTBvN42ajclzJMSqDcx3--R3HYazbYnDwQ_E8CBGZ1cMHRTFwgo-GRaH5E9rzLMd82VhLbZZBBok4K0hAQxnRQ8pxowMFaAlvv6J4D7s-7XJw171K_T2j8MLCconR5VvEqSjktKD1bf8p5gIkSLr9smpyR-YHgJOMIOMqzWBkL83pKrIULrKcLjdBS8HPoL-WT7A',
      spotlightBadge: 'Season Finale Spotlight',
      summary: 'Visionary Tech revolutionized enterprise AI cloud infrastructure across South Asia. Starting with 3 engineers in a 10x10 garage in Indiranagar, Rohan Mehta scaled the firm to multi-national operations serving Fortune 500 enterprises.'
    },
    {
      id: 'ep2',
      title: 'Apex Manufacturing',
      tagline: 'Building the infrastructure of tomorrow.',
      founder: 'Priya Sharma',
      role: 'Managing Director',
      category: 'Manufacturing',
      featured: false,
      revenue: '₹250Cr+',
      quote: 'Heavy industry isn’t just about steel and gears; it’s about empowering millions of skilled craftsmen.',
      bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZVjYF3XEqS5QfEm92xX5v_Y94PQpBU91ZT0K9yLvIvyc-ySQyVhlDKwJWaTbklL0hcC8eZFb142TjAWI8Oanku6cCqUWYW8wKbfmxoSaBhJTf1W1kphDP5lOK0_r6P09_MM9E9Hf2upqM1yIPfnWxTQticoD2zkUU4PR7gSjX0FpHJOnsM_LbWGee-HgXT1sb3b8VcI6RsFqGw706Y_t2DUzCIOE-V-pYjO7t1lTQ4GukhUMMZNQs1Q',
      avatarImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrih54VRaAH-aBumGR4E06U8mBf3NxVBkyYxK9URBRFQvBUrlTLA1oydpBaWrV_kVqa1-q7-_ib_JmgZ11w-w-w-yJPfc2lekBAwoTnYoPAzYorg4zs36Dg4z2NGZADI0qLz4Qdd7vzSMoTIHuPB0ZTzfSv5aoud43qwMqdQGeAd3Yixziq5E9Gqf3e1E3QsjlylWbYtUNj6J1Mr7hxGGN7L68COISRnU2oJDBT6onqUMIYq5mHhQzgw',
      spotlightBadge: 'Industrial Titan',
      summary: 'Priya Sharma broke glass ceilings in heavy industrial robotics manufacturing. Apex today equips India’s high-speed rail lines and automated solar gigafactories.'
    },
    {
      id: 'ep3',
      title: 'GreenEarth Organics',
      tagline: 'Rooted in tradition, growing globally.',
      founder: 'Vikram Singh',
      role: 'Co-Founder',
      category: 'Agritech',
      featured: false,
      revenue: '₹180Cr+',
      quote: 'When you honor ancient soil wisdom with modern IoT precision, Indian agriculture transforms into a world leader.',
      bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQCMOiGQqhSoXVwrg5lF6Mme7s7Zfy3IYR7aXlbyTrUhBqcs4WQco7kfvU4HQtPD7LhH-1h2EwEV__rtVEBAadV7vlFfaE18PpfNQDLKdSzJ_dsYe5Q4-mKzh6LKFnKEVPb0E9XCWHgwfQPHuPPCD9_WeEucHD0Hrup00AMuQo65txoez6QR9T5lKAizYEmdFfuETlL-lLUFmR36Z853BF9_Nal_I5K3_tesct85BnpoqYo2EerZ-J1Q',
      avatarImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-xwI4f4fZX0U7aa59Rg_QKdIAsE1QBehdmLRDmUa9LX5eJAKzEB5Uo8yRhL22rActnbaw2Xkv-HUgbnl_2dKVuuZObKRdx9vcVlRaZSQu8sppZ2T15iT_yUbAdT8yqdZIj9mN52xZm1glpu4ZJaJjm3n8VLSr0Li_jAXdPV7KC9oFret9l_dvcw4egXUEz358ju_Tx-9bI-TQiBTyw8uYMBgGegPshi2zheCzkCMkJeiu3AzjbqRY4g',
      spotlightBadge: 'Sustainable Scale',
      summary: 'Connecting 40,000+ organic farmers directly to European and North American retail chains, GreenEarth Organics brought sustainable bio-farming into high-margin global commerce.'
    },
    {
      id: 'ep4',
      title: 'BharatPay Innovations',
      tagline: 'Democratizing micro-finance across Tier-3 India.',
      founder: 'Aarav Kapoor',
      role: 'Founder & CEO',
      category: 'Fintech',
      featured: false,
      revenue: '₹320Cr+',
      quote: 'Financial inclusion is not charity; it is the single greatest economic growth engine of Modern Bharat.',
      bgImage: 'assets/ep4_fintech.jpg',
      avatarImage: 'assets/founder_aarav.jpg',
      spotlightBadge: 'Fintech Pioneer',
      summary: 'Aarav Kapoor spearheaded voice-assisted payment pods for rural shopkeepers, facilitating seamless digital transactions for over 8 million small business owners nationwide.'
    },
    {
      id: 'ep5',
      title: 'Astra Dynamics',
      tagline: 'Next-gen EV drive units & drone logistics.',
      founder: 'Ananya Roy',
      role: 'Chief Technology Officer',
      category: 'Aerospace',
      featured: false,
      revenue: '₹410Cr+',
      quote: 'Indian aerospace engineers are designing zero-emission urban air mobility systems that define the century.',
      bgImage: 'assets/ep5_ev_aerospace.jpg',
      avatarImage: 'assets/founder_ananya.jpg',
      spotlightBadge: 'DeepTech Disruptor',
      summary: 'Astra Dynamics engineered indigenous high-efficiency electric motors and autonomous delivery drones, cutting medical logistics delivery times in remote Himalayan regions by 85%.'
    },
    {
      id: 'ep6',
      title: 'Veda Pure Handicrafts',
      tagline: 'Weaving heritage crafts into luxury global markets.',
      founder: 'Devendra Verma',
      role: 'Master Craftsman & Chairman',
      category: 'Heritage',
      featured: false,
      revenue: '₹140Cr+',
      quote: 'Our handloom weavers carry centuries of royal lineage; modern luxury is recognizing their priceless artistry.',
      bgImage: 'assets/ep6_heritage.jpg',
      avatarImage: 'assets/founder_devendra.jpg',
      spotlightBadge: 'Cultural Heritage',
      summary: 'Devendra Verma united 12 artisan guilds across Rajasthan and Varanasi to create high-end luxury home textiles sold in Milan, Paris, and Tokyo boutique stores.'
    }
  ];

  // DOM Elements
  const episodeContainer = document.getElementById('episode-grid-container');
  const searchInput = document.getElementById('episode-search-input');
  const categoryFilter = document.getElementById('episode-category-filter');
  const filterBtns = document.querySelectorAll('.filter-btn');

  const episodeModal = document.getElementById('episode-modal');
  const videoModal = document.getElementById('video-modal');
  const mediaKitModal = document.getElementById('mediakit-modal');

  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

  const partnerForm = document.getElementById('partner-form');
  const nominateForm = document.getElementById('nominate-form');

  const hurdleTextarea = document.getElementById('hurdle-textarea');
  const charCountEl = document.getElementById('char-count');

  // Initialize Episode Vault
  function renderEpisodes(filteredEpisodes) {
    if (!episodeContainer) return;
    episodeContainer.innerHTML = '';

    if (filteredEpisodes.length === 0) {
      episodeContainer.innerHTML = `
        <div class="col-span-full glass-panel rounded-xl p-12 text-center text-on-surface-variant">
          <span class="material-symbols-outlined text-5xl mb-3 text-primary">search_off</span>
          <h3 class="font-headline text-xl font-bold text-on-surface mb-2">No Matching Episodes Found</h3>
          <p class="text-sm">Try tweaking your search term or filter category to discover more stories.</p>
        </div>
      `;
      return;
    }

    filteredEpisodes.forEach(ep => {
      const isFeatured = ep.featured && filteredEpisodes.length > 3;
      const card = document.createElement('div');
      
      if (isFeatured) {
        card.className = 'md:col-span-2 md:row-span-2 glass-panel glass-panel-hover rounded-xl overflow-hidden group relative gold-border cursor-pointer flex flex-col justify-end p-8 min-h-[380px]';
        card.innerHTML = `
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60" style="background-image: url('${ep.bgImage}')"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div class="absolute inset-0 border border-transparent group-hover:border-[#ff9933]/50 transition-colors duration-300 rounded-xl"></div>
          <div class="relative z-10 w-full">
            <div class="inline-block px-3 py-1 rounded-full border border-[#ff9933] text-[#ff9933] text-xs font-semibold mb-4 bg-black/50 backdrop-blur-sm tracking-wide">
              ${ep.spotlightBadge}
            </div>
            <h3 class="font-headline text-2xl md:text-3xl text-on-surface font-bold mb-2 group-hover:text-primary transition-colors">${ep.title}</h3>
            <p class="text-on-surface-variant text-base line-clamp-2 mb-6">"${ep.tagline}"</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full border-2 border-primary overflow-hidden shrink-0 shadow-lg">
                <img class="w-full h-full object-cover" src="${ep.avatarImage}" alt="${ep.founder}">
              </div>
              <div>
                <p class="font-bold text-on-surface text-base">${ep.founder}</p>
                <p class="text-xs text-on-surface-variant">${ep.role} • <span class="text-primary font-semibold">${ep.revenue} Revenue</span></p>
              </div>
              <button class="ml-auto btn-primary px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1">
                Explore Story <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        `;
      } else {
        card.className = 'glass-panel glass-panel-hover rounded-xl overflow-hidden group relative silver-border cursor-pointer flex flex-col justify-end p-6 min-h-[300px]';
        card.innerHTML = `
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-luminosity" style="background-image: url('${ep.bgImage}')"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div class="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-colors duration-300 rounded-xl"></div>
          <div class="relative z-10 w-full">
            <span class="inline-block px-2.5 py-0.5 rounded-full border border-secondary/50 text-secondary text-[11px] font-medium mb-2 bg-black/40 backdrop-blur-sm">
              ${ep.category}
            </span>
            <h3 class="font-headline text-xl text-on-surface font-bold mb-1 group-hover:text-primary transition-colors">${ep.title}</h3>
            <p class="text-xs text-on-surface-variant italic mb-4 line-clamp-2">"${ep.tagline}"</p>
            <div class="flex items-center gap-3 pt-2 border-t border-white/10">
              <div class="w-8 h-8 rounded-full border border-secondary overflow-hidden shrink-0">
                <img class="w-full h-full object-cover" src="${ep.avatarImage}" alt="${ep.founder}">
              </div>
              <div>
                <p class="text-xs font-bold text-on-surface">${ep.founder}</p>
                <p class="text-[10px] text-primary">${ep.revenue}</p>
              </div>
              <span class="material-symbols-outlined ml-auto text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
                open_in_new
              </span>
            </div>
          </div>
        `;
      }

      card.addEventListener('click', () => openEpisodeModal(ep));
      episodeContainer.appendChild(card);
    });
  }

  // Filter & Search Handlers
  let currentCategory = 'All';

  function filterEpisodes() {
    const searchTerm = (searchInput?.value || '').toLowerCase().trim();
    const filtered = episodes.filter(ep => {
      const matchesCategory = currentCategory === 'All' || ep.category.toLowerCase().includes(currentCategory.toLowerCase()) || (currentCategory === 'Tech & AI' && ep.category === 'Tech & AI');
      const matchesSearch = ep.title.toLowerCase().includes(searchTerm) || 
                            ep.founder.toLowerCase().includes(searchTerm) || 
                            ep.tagline.toLowerCase().includes(searchTerm) ||
                            ep.category.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
    renderEpisodes(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => {
        b.classList.remove('btn-primary', 'font-bold');
        b.classList.add('btn-secondary');
      });
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary', 'font-bold');
      currentCategory = btn.dataset.category || 'All';
      filterEpisodes();
    });
  });

  searchInput?.addEventListener('input', filterEpisodes);
  categoryFilter?.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    filterEpisodes();
  });

  renderEpisodes(episodes);

  // Modal Dialog Handlers
  function openEpisodeModal(ep) {
    if (!episodeModal) return;
    document.getElementById('modal-ep-title').textContent = ep.title;
    document.getElementById('modal-ep-tagline').textContent = `"${ep.tagline}"`;
    document.getElementById('modal-ep-founder').textContent = ep.founder;
    document.getElementById('modal-ep-role').textContent = ep.role;
    document.getElementById('modal-ep-revenue').textContent = ep.revenue;
    document.getElementById('modal-ep-category').textContent = ep.category;
    document.getElementById('modal-ep-quote').textContent = `"${ep.quote}"`;
    document.getElementById('modal-ep-summary').textContent = ep.summary;
    document.getElementById('modal-ep-bg').style.backgroundImage = `url('${ep.bgImage}')`;
    document.getElementById('modal-ep-avatar').src = ep.avatarImage;

    const modalWatchBtn = document.getElementById('modal-watch-btn');
    if (modalWatchBtn) {
      modalWatchBtn.onclick = () => {
        episodeModal.close();
        openVideoModal(ep.title);
      };
    }

    episodeModal.showModal();
  }

  window.openVideoModal = function(title = "Bharat Brand Stories Season 1 Highlights") {
    if (!videoModal) return;
    document.getElementById('video-modal-title').textContent = title;
    videoModal.showModal();
    const video = document.getElementById('highlight-video-player');
    if (video) {
      video.play().catch(() => {});
    }
  };

  window.openMediaKitModal = function() {
    if (!mediaKitModal) return;
    mediaKitModal.showModal();
  };

  // Close modals on clicking close buttons or backdrop
  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      episodeModal?.close();
      if (videoModal) {
        const video = document.getElementById('highlight-video-player');
        if (video) video.pause();
        videoModal.close();
      }
      mediaKitModal?.close();
    });
  });

  [episodeModal, videoModal, mediaKitModal].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        if (modal === videoModal) {
          const video = document.getElementById('highlight-video-player');
          if (video) video.pause();
        }
        modal.close();
      }
    });
  });

  // Mobile Navigation Drawer Toggle
  if (mobileNavToggle && mobileNavDrawer) {
    mobileNavToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('hidden');
    });

    mobileNavDrawer.querySelectorAll('a, button').forEach(item => {
      item.addEventListener('click', () => {
        mobileNavDrawer.classList.add('hidden');
      });
    });
  }

  // Count-up Animated Statistics
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimatedStats = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimatedStats) {
        hasAnimatedStats = true;
        animateStats();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('impact-stats-section');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  function animateStats() {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.dataset.target || '0', 10);
      const prefix = stat.dataset.prefix || '';
      const suffix = stat.dataset.suffix || '';
      if (!target) return;

      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = `${prefix}${current}${suffix}`;
      }, 30);
    });
  }

  // Hurdle Textarea Word Counter
  if (hurdleTextarea && charCountEl) {
    hurdleTextarea.addEventListener('input', () => {
      const text = hurdleTextarea.value.trim();
      const words = text ? text.split(/\s+/).length : 0;
      charCountEl.textContent = `${words}/50 words`;
      if (words > 50) {
        charCountEl.classList.add('text-error');
      } else {
        charCountEl.classList.remove('text-error');
      }
    });
  }

  // Toast Notification System
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item p-4 rounded-xl glass-panel gold-border flex items-center gap-3 shadow-2xl text-sm font-semibold max-w-md ${
      type === 'success' ? 'text-primary' : 'text-error'
    }`;
    toast.innerHTML = `
      <span class="material-symbols-outlined text-xl">${type === 'success' ? 'check_circle' : 'error'}</span>
      <span class="text-on-surface">${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Form Submissions
  partnerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = partnerForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="material-symbols-outlined animate-spin text-sm">progress_activity</span> Submitting Pitch...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      partnerForm.reset();
      showToast('Thank you! Your partnership request for Season 2 has been submitted to Republic Bharat & BBS leadership.');
    }, 1500);
  });

  nominateForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = nominateForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="material-symbols-outlined animate-spin text-sm">progress_activity</span> Submitting Story...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      nominateForm.reset();
      if (charCountEl) charCountEl.textContent = '0/50 words';
      showToast('Nomination Received! Our editorial jury will review your brand journey for Season 2 selection.');
    }, 1500);
  });

  // Simulated Media Kit File Download
  window.downloadMediaKit = function() {
    showToast('Starting download: Bharat_Brand_Stories_Season2_MediaKit.pdf');
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Bharat Brand Stories - Season 2 Official Media Kit & Rate Card Document');
    link.download = 'Bharat_Brand_Stories_Season2_MediaKit.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
});
