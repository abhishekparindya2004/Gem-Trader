// JavaScript kept light: hero slider movement + simple filtering only.
let heroIndex = 0;
const totalHeroSlides = 3;

function moveHero(direction) {
  const track = document.getElementById('heroTrack');
  if (!track) return;

  heroIndex = (heroIndex + direction + totalHeroSlides) % totalHeroSlides;
  track.style.transform = `translateX(-${heroIndex * 100}%)`;
}

if (document.getElementById('heroTrack')) {
  setInterval(() => moveHero(1), 3500);
}

window.gemProducts = window.gemProducts || [
  {id:1,category:'Ruby',title:'Natural Red Ruby 0.44 ct Emerald Cut Tanzania Loose Gemstone',price:450,weight:0.44,shape:'Emerald',treatment:'Natural',color:'Red',image:'images/EmeraldCutruby.webp',offer:true,description:'A vivid red ruby suitable for collectors and custom jewellery designs.',url:'gem.html?id=1'},
  {id:2,category:'Alexandrite',title:'Certified Natural Alexandrite 4.05 Ct Cushion Cut',price:2250,weight:4.05,shape:'Cushion',treatment:'Natural',color:'Color Change',image:'images/ruby.jpg',offer:true,description:'A rare color-change gemstone with certificate-ready product presentation.',url:'gem.html?id=2'},
  {id:3,category:'Sapphire',title:'Natural Blue Sapphire 2.15 Ct Oval Cut Loose Gemstone',price:1100,weight:2.15,shape:'Oval',treatment:'Heated',color:'Blue',image:'images/sapphire.jpeg',offer:true,description:'Classic Sri Lankan blue sapphire with a balanced oval cut.',url:'gem.html?id=3'},
  {id:4,category:'Aquamarine',title:'Natural Blue Aquamarine 5.07 Ct Oval Cut',price:720,weight:5.07,shape:'Oval',treatment:'Natural',color:'Aqua Blue',image:'images/Natural BlueAquamarine5.07CtOvalCut.webp',offer:false,description:'Bright aquamarine with soft blue tone and elegant oval shape.',url:'gem.html?id=4'},
  {id:5,category:'Sapphire',title:'Natural Unheated Blue Sapphire 1.10 ct Oval Cut',price:650,weight:1.10,shape:'Oval',treatment:'Unheated',color:'Blue',image:'images/sapphire.jpeg',offer:false,description:'Unheated sapphire option for buyers looking for natural value.',url:'gem.html?id=5'},
  {id:6,category:'Sapphire',title:'Natural Blue Sapphire 3.23 Ct Radiant Cut',price:2390,weight:3.23,shape:'Radiant',treatment:'Heated',color:'Blue',image:'images/sapphire.jpeg',offer:false,description:'Large radiant-cut sapphire with premium showroom appeal.',url:'gem.html?id=6'},
  {id:7,category:'Tourmaline',title:'Natural Yellow Tourmaline 3.85 Ct Square Cut',price:425,weight:3.85,shape:'Square',treatment:'Natural',color:'Yellow',image:'images/ NS-TRM0724-07NaturalYellowTourmaline3.85 CtSquareCut.webp',offer:false,description:'A warm yellow tourmaline for colourful modern jewellery.',url:'gem.html?id=7'},
  {id:8,category:'Sapphire',title:'Natural Vivid Royal Blue Sapphire 2.14 Ct Emerald Cut',price:4999,weight:2.14,shape:'Emerald',treatment:'Unheated',color:'Royal Blue',image:'images/sapphire.jpeg',offer:false,description:'Premium royal blue sapphire positioned for high-value buyers.',url:'gem.html?id=8'},
  {id:9,category:'Sapphire',title:'Natural Blue Sapphire 3.43 Ct Radiant Cut',price:2250,weight:3.43,shape:'Radiant',treatment:'Heated',color:'Blue',image:'images/sapphire.jpeg',offer:false,description:'A bright radiant cut sapphire with strong visual presence.',url:'gem.html?id=9'},
  {id:10,category:'Sapphire',title:'Certified Natural Unheated Teal Sapphire',price:2250,weight:2.68,shape:'Cushion',treatment:'Unheated',color:'Teal',image:'images/sapphire.jpeg',offer:true,description:'Trendy teal sapphire with certification-focused buyer trust.',url:'gem.html?id=10'},
  {id:11,category:'Ruby',title:'Premium Ruby 1.20 Ct Cushion Cut',price:2850,weight:1.20,shape:'Cushion',treatment:'Heated',color:'Deep Red',image:'images/ruby.jpg',offer:false,description:'Brilliant cushion cut ruby with rich red saturation.',url:'gem.html?id=11'},
  {id:12,category:'Ruby',title:'Certified Ruby Oval Cut 0.90 Ct',price:1980,weight:0.90,shape:'Oval',treatment:'Natural',color:'Ruby Red',image:'images/RubyOvalCut .jpg',offer:false,description:'Certified oval ruby with strong color and polished finish.',url:'gem.html?id=12'},
  {id:13,category:'Tourmaline',title:'Green Tourmaline 2.20 Ct Round Cut',price:1290,weight:2.20,shape:'Round',treatment:'Natural',color:'Forest Green',image:'images/tourmaline.jpeg',offer:false,description:'Saturated green tourmaline ideal for luxury jewelry.',url:'gem.html?id=13'},
  {id:14,category:'Tourmaline',title:'Pink Tourmaline 1.80 Ct Pear Cut',price:1420,weight:1.80,shape:'Pear',treatment:'Natural',color:'Pink',image:'images/PinkTourmaline1.80CtPearCut.webp',offer:false,description:'Delicate pink tourmaline with excellent sparkle.',url:'gem.html?id=14'},
  {id:15,category:'Aquamarine',title:'Deep Sea Aquamarine 3.50 Ct Oval Cut',price:1430,weight:3.50,shape:'Oval',treatment:'Heated',color:'Ocean Blue',image:'images/aquamarine.jpeg',offer:false,description:'Deep blue aquamarine with premium clarity.',url:'gem.html?id=15'},
  {id:16,category:'Aquamarine',title:'Light Sky Aquamarine 2.12 Ct Cushion Cut',price:980,weight:2.12,shape:'Cushion',treatment:'Unheated',color:'Sky Blue',image:'images/aquamarine.jpeg',offer:false,description:'Soft sky-blue aquamarine with refined cushion cut.',url:'gem.html?id=16'}
];

window.searchData = window.searchData || window.gemProducts.map(product => ({name: product.title, url: product.url}));

window.getProductById = window.getProductById || function(id) {
  return window.gemProducts.find(product => product.id === Number(id));
};

window.getCartItems = window.getCartItems || function() {
  const items = localStorage.getItem('gemTraderCart');
  const parsed = items ? JSON.parse(items) : [];
  return parsed.map(item => ({
    ...item,
    qty: item.qty ?? item.quantity ?? 1
  }));
};

window.saveCartItems = window.saveCartItems || function(items) {
  const normalized = items.map(item => ({
    ...item,
    qty: item.qty ?? item.quantity ?? 1
  }));
  localStorage.setItem('gemTraderCart', JSON.stringify(normalized));
};

window.getFavoriteItems = window.getFavoriteItems || function() {
  const items = localStorage.getItem('gemTraderFavorites');
  return items ? JSON.parse(items) : [];
};

window.saveFavoriteItems = window.saveFavoriteItems || function(items) {
  localStorage.setItem('gemTraderFavorites', JSON.stringify(items));
};

window.addToCart = window.addToCart || function(productId, quantity = 1) {
  const id = Number(productId);
  const cart = window.getCartItems();
  const existing = cart.find(item => Number(item.id) === id);
  if (existing) {
    existing.qty = (existing.qty ?? existing.quantity ?? 0) + quantity;
  } else {
    cart.push({ id, qty: quantity });
  }
  window.saveCartItems(cart);
  window.updateCartCount?.();
  return cart;
};

window.removeFromCart = window.removeFromCart || function(productId) {
  const id = Number(productId);
  const cart = window.getCartItems().filter(item => Number(item.id) !== id);
  window.saveCartItems(cart);
  window.updateCartCount?.();
  return cart;
};

window.addToFavorites = window.addToFavorites || function(productId) {
  const id = Number(productId);
  const favorites = window.getFavoriteItems();
  if (!favorites.some(item => Number(item) === id)) {
    favorites.push(id);
  }
  window.saveFavoriteItems(favorites);
  window.updateFavoriteCount?.();
  return favorites;
};

window.removeFromFavorites = window.removeFromFavorites || function(productId) {
  const id = Number(productId);
  const favorites = window.getFavoriteItems().filter(item => Number(item) !== id);
  window.saveFavoriteItems(favorites);
  window.updateFavoriteCount?.();
  return favorites;
};

window.moveFavoriteToCart = window.moveFavoriteToCart || function(productId) {
  const id = Number(productId);
  window.removeFromFavorites(id);
  window.addToCart(id, 1);
  return window.getCartItems();
};

window.updateCartCount = window.updateCartCount || function() {
  const countEl = document.querySelector('.cart b');
  if (!countEl) return;
  const total = window.getCartItems().reduce((sum, item) => sum + (item.qty || 0), 0);
  countEl.textContent = total;
};

window.updateFavoriteCount = window.updateFavoriteCount || function() {
  const count = window.getFavoriteItems().length;
  const badge = document.querySelector('.favorite-count');
  if (badge) badge.textContent = count;
};

window.ensureSearchOverlayMarkup = window.ensureSearchOverlayMarkup || function() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  const input = overlay.querySelector('input[type="search"]');
  if (input) {
    if (!input.id) input.id = 'searchInput';
    if (!input.getAttribute('onkeydown')) input.setAttribute('onkeydown', 'handleSearchKey(event)');
  }
  if (!document.getElementById('searchResults')) {
    const results = document.createElement('div');
    results.id = 'searchResults';
    results.className = 'search-results';
    overlay.appendChild(results);
  }
};

window.addHeaderSearchListener = window.addHeaderSearchListener || function() {
  const form = document.getElementById('headerSearchForm');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const query = (document.getElementById('headerSearchInput')?.value || '').trim();
    if (!query) return;
    window.location.href = `dashboard.html?search=${encodeURIComponent(query)}`;
  });
};

function selectedCategory() {
  return new URLSearchParams(window.location.search).get('category') || '';
}

function applyProductFilters() {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.product-card');
  const query = (searchInput?.value || '').toLowerCase().trim();
  const category = selectedCategory().toLowerCase();

  cards.forEach((card) => {
    const title = (card.dataset.title || '').toLowerCase();
    const cardCategory = (card.dataset.category || '').toLowerCase();
    const matchesCategory = !category || cardCategory === category;
    const matchesSearch = !query || title.includes(query) || cardCategory.includes(query);

    card.style.display = matchesCategory && matchesSearch ? '' : 'none';
  });
}

function clearFilters() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  window.history.replaceState(null, '', 'dashboard.html');
  applyProductFilters();
}

function navigateCategory(category) {
  const query = category ? `?category=${encodeURIComponent(category)}` : '';
  window.location.href = `dashboard.html${query}`;
}

function setCategoryDropdown() {
  const select = document.getElementById('categorySelect');
  if (!select) return;
  select.value = selectedCategory() || '';
}

function showSelectedGem() {
  const id = new URLSearchParams(window.location.search).get('id') || '1';
  const details = document.querySelectorAll('.gem-detail-item');
  let matched = false;

  details.forEach((detail) => {
    const isMatch = detail.dataset.id === id;
    detail.style.display = isMatch ? '' : 'none';
    if (isMatch) matched = true;
  });

  if (!matched && details[0]) details[0].style.display = '';
}

document.addEventListener('DOMContentLoaded', () => {
  applyProductFilters();
  showSelectedGem();
  setCategoryDropdown();
});

if (typeof window.toggleSearch === 'undefined') {
  window.toggleSearch = function() {
    const searchBox = document.getElementById('searchBox');
    if (!searchBox) return;
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
    if (searchBox.style.display === 'block') {
      document.getElementById('searchInput')?.focus();
    }
  };
}

if (typeof window.searchGemstones === 'undefined') {
  window.searchGemstones = function() {
    const inputEl = document.getElementById('searchInput');
    const input = (inputEl?.value || '').toLowerCase();
    const products = document.querySelectorAll('.product-card, .cat-card');

    products.forEach(product => {
      const text = product.innerText.toLowerCase();
      product.style.display = text.includes(input) ? '' : 'none';
    });

    window.renderSearchResults?.(input);
  };
}

if (typeof window.renderSearchResults === 'undefined') {
  window.renderSearchResults = function(query) {
    const box = document.getElementById('searchResults');
    if (!box) return;
    const data = window.searchData || [];
    const results = data.filter(item => item.name.toLowerCase().includes(query)).slice(0, 6);

    if (!query) {
      box.innerHTML = data.slice(0, 4).map(item => `<a class="search-result-item" href="${item.url}"><b>${item.name}</b><span>View →</span></a>`).join('');
      return;
    }

    box.innerHTML = results.length
      ? results.map(item => `<a class="search-result-item" href="${item.url}"><b>${item.name}</b><span>View →</span></a>`).join('')
      : `<div class="search-result-item"><b>No exact match</b><span>Press Enter for dashboard search</span></div>`;
  };
}

if (typeof window.submitSearch === 'undefined') {
  window.submitSearch = function(event) {
    if (event) event.preventDefault();
    const query = (document.getElementById('headerSearchInput')?.value || '').trim();
    if (!query) return;
    window.location.href = `dashboard.html?search=${encodeURIComponent(query)}`;
  };
}

if (typeof window.syncSearch === 'undefined') {
  window.syncSearch = function(value) {
    const overlayInput = document.getElementById('searchInput');
    if (overlayInput) overlayInput.value = value;
    window.searchGemstones?.(value.toLowerCase());
  };
}

if (typeof window.handleSearchKey === 'undefined') {
  window.handleSearchKey = function(event) {
    if (event.key === 'Enter') {
      const query = (event.target.value || '').trim();
      if (query) window.location.href = `dashboard.html?search=${encodeURIComponent(query)}`;
    }
    if (event.key === 'Escape') window.closeSearch?.();
  };
}

if (typeof window.toggleTheme === 'undefined') {
  window.toggleTheme = function() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('themeToggle');
    if (document.body.classList.contains('dark-mode')) {
      if (icon) icon.innerHTML = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      if (icon) icon.innerHTML = '☀';
      localStorage.setItem('theme', 'light');
    }
  };
}

if (typeof window.initializeTheme === 'undefined') {
  window.initializeTheme = function() {
    const theme = localStorage.getItem('theme');
    const icon = document.getElementById('themeToggle');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      if (icon) icon.textContent = '🌙';
    } else if (icon) {
      icon.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀';
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  window.ensureSearchOverlayMarkup?.();
  window.updateCartCount?.();
  window.updateFavoriteCount?.();
  window.addHeaderSearchListener?.();
  window.initializeTheme?.();
});

function setActiveGalleryFilter(category = 'All') {
    document.querySelectorAll('.gallery-filters button').forEach(button => {
        const value = button.textContent.trim();
        button.classList.toggle('active', value === category || (category === 'All' && value === 'All'));
    });
}

function filterGallery(category = 'All') {
    setActiveGalleryFilter(category);
    const cards = document.querySelectorAll('.gallery-card');
    const normalizedCategory = category.toLowerCase();
    cards.forEach(card => {
        const itemCategory = (card.dataset.category || '').toLowerCase();
        const show = category === 'All' || itemCategory === normalizedCategory;
        card.style.display = show ? 'grid' : 'none';
    });
}

if (typeof window.openSearch === 'undefined') {
  window.openSearch = function() {
    const overlay = document.getElementById('searchOverlay');
    if (!overlay) return;
    overlay.classList.add('active');
    const input = overlay.querySelector('input[type="search"]');
    if (input) input.focus();
    window.ensureSearchOverlayMarkup?.();
    window.renderSearchResults?.('');
  };
}

if (typeof window.closeSearch === 'undefined') {
  window.closeSearch = function() {
    const overlay = document.getElementById('searchOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
  };
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('visible'));
    setTimeout(() => toast.classList.remove('visible'), 2800);
    setTimeout(() => toast.remove(), 3200);
}

window.getCartItems = window.getCartItems || function() {
    const items = localStorage.getItem('gemTraderCart');
    return items ? JSON.parse(items) : [];
};

window.saveCartItems = window.saveCartItems || function(items) {
    localStorage.setItem('gemTraderCart', JSON.stringify(items));
};

window.getFavoriteItems = window.getFavoriteItems || function() {
    const items = localStorage.getItem('gemTraderFavorites');
    return items ? JSON.parse(items) : [];
};

window.saveFavoriteItems = window.saveFavoriteItems || function(items) {
    localStorage.setItem('gemTraderFavorites', JSON.stringify(items));
};

window.updateCartCount = window.updateCartCount || function() {
    const countEl = document.querySelector('.cart b');
    if (!countEl) return;
    const total = window.getCartItems().reduce((sum, item) => sum + (item.qty || 0), 0);
    countEl.textContent = total;
};

window.getGemLabel = window.getGemLabel || function(gemItem) {
    return gemItem.querySelector('h1')?.innerText || 'this gemstone';
};

window.askAboutGem = window.askAboutGem || function(gemItem) {
    const gemLabel = window.getGemLabel(gemItem);
    const message = prompt(`Message for ${gemLabel}:\nPlease enter your question or request.`);
    if (!message) return;
    showToast(`Your inquiry for ${gemLabel} has been received.`, 'info');
};

window.addToCart = window.addToCart || function(gemItem) {
    const gemId = gemItem.dataset.id;
    const gemLabel = window.getGemLabel(gemItem);
    if (!gemId) return;
    const cart = window.getCartItems();
    if (!cart.some(item => item.id === Number(gemId))) {
        cart.push({ id: Number(gemId), qty: 1 });
        window.saveCartItems(cart);
        window.updateCartCount();
        showToast(`${gemLabel} added to cart.`, 'success');
    } else {
        showToast(`${gemLabel} is already in your cart.`, 'info');
    }
};

window.makeOffer = window.makeOffer || function(gemItem) {
    const gemLabel = window.getGemLabel(gemItem);
    const offer = prompt(`Make an offer for ${gemLabel}:\nEnter your price in USD.`);
    if (!offer || isNaN(Number(offer))) {
        showToast('Offer canceled or invalid.', 'warning');
        return;
    }
    showToast(`Offer of $${Number(offer).toFixed(2)} submitted for ${gemLabel}.`, 'info');
};

window.toggleFavorite = window.toggleFavorite || function(gemItem) {
    const gemId = gemItem.dataset.id;
    const gemLabel = window.getGemLabel(gemItem);
    if (!gemId) return;
    const favorites = window.getFavoriteItems();
    const index = favorites.indexOf(Number(gemId));
    if (index !== -1) {
        favorites.splice(index, 1);
        window.saveFavoriteItems(favorites);
        showToast(`${gemLabel} removed from favorites.`, 'warning');
    } else {
        favorites.push(Number(gemId));
        window.saveFavoriteItems(favorites);
        showToast(`${gemLabel} saved to favorites.`, 'success');
    }
    window.updateFavoriteButtons?.();
};

window.updateFavoriteButtons = window.updateFavoriteButtons || function() {
    document.querySelectorAll('.action-btn[data-action="favorite"]').forEach(button => {
        const gemItem = button.closest('.gem-detail-item');
        const gemId = Number(gemItem?.dataset.id);
        const favorites = window.getFavoriteItems();
        if (gemId && favorites.includes(gemId)) {
            button.textContent = '♥ In favorites';
            button.classList.add('favorite-btn');
        } else {
            button.textContent = '♡ Add to favorites';
            button.classList.remove('favorite-btn');
        }
    });
};

window.attachGemActions = window.attachGemActions || function() {
    document.querySelectorAll('.gem-detail-item').forEach(gemItem => {
        gemItem.querySelectorAll('.action-btn').forEach(button => {
            const action = button.dataset.action;
            if (!action) return;
            button.addEventListener('click', event => {
                event.preventDefault();
                switch(action) {
                    case 'ask': window.askAboutGem(gemItem); break;
                    case 'cart': window.addToCart(gemItem); break;
                    case 'offer': window.makeOffer(gemItem); break;
                    case 'favorite': window.toggleFavorite(gemItem); break;
                }
            });
        });
    });
};

window.toggleMobileNav = window.toggleMobileNav || function() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const isOpen = !header.classList.contains('nav-open');
    header.classList.toggle('nav-open', isOpen);
    const toggle = header.querySelector('.menu-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', String(isOpen));
};

document.addEventListener('click', (event) => {
    if (event.target.closest('.menu-toggle')) {
        toggleMobileNav();
    }

    if (event.target.closest('.site-header.nav-open nav a, .site-header.nav-open .dropdown-content a')) {
        const header = document.querySelector('.site-header');
        if (header) {
            header.classList.remove('nav-open');
            const toggle = header.querySelector('.menu-toggle');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    attachGemActions();
    updateFavoriteButtons();
});

// Remember theme after refresh
window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark-mode");

        const icon = document.getElementById("themeToggle");
        if(icon) icon.innerHTML = "🌙";
    }
});