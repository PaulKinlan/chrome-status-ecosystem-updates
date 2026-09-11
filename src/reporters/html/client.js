const features = Array.from(document.querySelectorAll('.feature-card')).map(card => {
  return {
    el: card,
    id: card.id,
    milestone: card.dataset.milestone || '',
    status: card.dataset.status || '',
    momentum: card.dataset.momentum || '',
    hasDelta: card.dataset.hasDelta === 'true',
    isNew: card.dataset.isNew === 'true',
    statusChanged: card.dataset.statusChanged === 'true',
    searchText: (card.dataset.searchText || '').toLowerCase()
  };
});

let currentMilestone = 'all';
let currentStatus = 'all';
let currentMomentum = 'all';
let currentActivity = 'all';
let currentSearch = '';

function updateStats(activeSubset) {
  document.getElementById('stat-total').textContent = activeSubset.length;
  document.getElementById('stat-high').textContent = activeSubset.filter(f => f.momentum === 'High').length;
  // Consensus and contested state are carried on the card's data attributes
  // because they are only ever read here, unlike the fields hoisted onto the
  // feature index above.
  document.getElementById('stat-consensus').textContent = activeSubset.filter(f => f.el.dataset.consensus === 'Multi-Engine Consensus').length;
  document.getElementById('stat-contested').textContent = activeSubset.filter(f => f.el.dataset.contested === 'true').length;
  document.getElementById('stat-deltas').textContent = activeSubset.filter(f => f.hasDelta).length;
}


function renderFeatures() {
  let matchCount = 0;
  
  // The summary stats intentionally reflect the milestone selection only, so
  // the totals stay a stable denominator while you narrow by search, status or
  // momentum.
  const milestoneSubset = currentMilestone === 'all'
    ? features
    : features.filter(f => f.milestone === currentMilestone);

    
  updateStats(milestoneSubset);

  for (const f of features) {
    let show = true;
    if (currentMilestone !== 'all' && f.milestone !== currentMilestone) show = false;
    if (currentStatus !== 'all' && f.status !== currentStatus) show = false;
    if (currentMomentum !== 'all' && f.momentum !== currentMomentum) show = false;

    if (currentActivity === 'deltas' && !f.hasDelta) show = false;
    else if (currentActivity === 'new' && !f.isNew) show = false;
    else if (currentActivity === 'status-change' && !f.statusChanged) show = false;

    if (currentSearch && !f.searchText.includes(currentSearch)) show = false;

    if (show) {
      f.el.removeAttribute('hidden');
      matchCount++;
    } else {
      f.el.setAttribute('hidden', '');
    }
  }

  const emptyState = document.getElementById('empty-state');
  if (matchCount === 0) {
    emptyState.removeAttribute('hidden');
  } else {
    emptyState.setAttribute('hidden', '');
  }

  // Update aria-live region
  const announcer = document.getElementById('filter-announcer');
  if (announcer) {
    announcer.textContent = `${matchCount} features match your filters.`;
  }
}

function initFilters() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('milestone')) currentMilestone = urlParams.get('milestone');
  if (urlParams.has('status')) currentStatus = urlParams.get('status');
  if (urlParams.has('momentum')) currentMomentum = urlParams.get('momentum');
  if (urlParams.has('activity')) currentActivity = urlParams.get('activity');
  if (urlParams.has('q')) currentSearch = urlParams.get('q');
  
  const searchInput = document.getElementById('search-input');
  if (searchInput && currentSearch) {
    searchInput.value = currentSearch;
  }

  // Update active states on buttons
  const applyActive = (type, val) => {
    document.querySelectorAll(`[data-filter-type="${type}"]`).forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    const btn = document.querySelector(`[data-filter-type="${type}"][data-filter-val="${val}"]`);
    if (btn) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    }
  };

  applyActive('milestone', currentMilestone);
  applyActive('status', currentStatus);
  applyActive('momentum', currentMomentum);
  applyActive('activity', currentActivity);

  renderFeatures();
}

function updateURL() {
  const urlParams = new URLSearchParams();
  if (currentMilestone !== 'all') urlParams.set('milestone', currentMilestone);
  if (currentStatus !== 'all') urlParams.set('status', currentStatus);
  if (currentMomentum !== 'all') urlParams.set('momentum', currentMomentum);
  if (currentActivity !== 'all') urlParams.set('activity', currentActivity);
  if (currentSearch) urlParams.set('q', currentSearch);

  const newUrl = window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
  window.history.replaceState({}, '', newUrl);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const type = btn.dataset.filterType;
    const val = btn.dataset.filterVal;

    document.querySelectorAll(`[data-filter-type="${type}"]`).forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    if (type === 'milestone') currentMilestone = val;
    if (type === 'status') currentStatus = val;
    if (type === 'momentum') currentMomentum = val;
    if (type === 'activity') currentActivity = val;
    
    updateURL();
    renderFeatures();
  });
});

const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim().toLowerCase();
    updateURL();
    renderFeatures();
  });
}

document.getElementById('feature-container').addEventListener('click', (e) => {
  const trigger = e.target.closest('.expander-trigger');
  if (!trigger) return;
  const id = trigger.dataset.id;
  if (!id) return;

  const body = document.getElementById('details-' + id);
  if (!body) return;

  const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    trigger.setAttribute('aria-expanded', 'false');
    body.setAttribute('hidden', 'until-found');
  } else {
    trigger.setAttribute('aria-expanded', 'true');
    body.removeAttribute('hidden');
  }
});

const deltaBtn = document.getElementById('stat-card-deltas');
if (deltaBtn) {
  deltaBtn.addEventListener('click', () => {
    const btn = document.querySelector('[data-filter-type="activity"][data-filter-val="deltas"]');
    if (btn) btn.click();
  });
}

// Initialise
initFilters();
