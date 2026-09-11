import { escapeHtml, h, raw, safeUrl, isSafeUrl } from '../../escape.js';
import { toFeatureView } from '../../viewmodel.js';

export function renderCard(item) {
  const view = toFeatureView(item);
  const {
    f, a, eco, delta, blogs, docs,
    communityUrl, communityTileTitle, communityTileVal, topDiscussion,
    hasDelta, isContested, sliceLimits,
  } = view;


  const momentumBadgeClass = a.momentumLevel === 'High' ? 'badge-primary'
    : a.momentumLevel === 'Moderate' ? 'badge-success'
    : 'badge';

  const consensusBadgeClass = a.consensus === 'Multi-Engine Consensus' ? 'badge-success'
    : (a.consensus || '').includes('Contested') ? 'badge-danger'
    : 'badge-warning';

  const chromeUrl = safeUrl(f.bugUrl || f.chromeStatusUrl);
  const ffStd = (eco.standards || []).find(s => s.vendor === 'Mozilla');
  const firefoxUrl = safeUrl(f.browsers?.firefox?.url || ffStd?.url || `https://github.com/mozilla/standards-positions/issues?q=${encodeURIComponent(f.name)}`);
  
  const safariStd = (eco.standards || []).find(s => s.vendor === 'WebKit');
  const safariUrl = safeUrl(f.browsers?.safari?.url || safariStd?.url || `https://github.com/WebKit/standards-positions/issues?q=${encodeURIComponent(f.name)}`);

  const safeCommunityUrl = safeUrl(communityUrl);

  const polyfill = eco.verifiedPolyfill;
  const polyfillBadge = polyfill ? h`
    <a href="${safeUrl(polyfill.url)}" target="_blank" rel="noopener" class="badge badge-purple badge-link" title="Open ${polyfill.name} on NPM">
      <span aria-hidden="true">📦</span> Polyfill: ${polyfill.name} ↗
    </a>
  ` : '';

  const baseline = eco.baseline;
  const baselineBadge = baseline ? h`
    <a href="${safeUrl(baseline.url)}" target="_blank" rel="noopener" class="badge ${baseline.status === 'widely' ? 'badge-success' : baseline.status === 'newly' ? 'badge-primary' : 'badge-warning'}" title="View Baseline Status on baseline.dev">
      <span aria-hidden="true">🌐</span> ${baseline.statusLabel} ↗
    </a>
  ` : '';

  const stdCount = (eco.standards || []).length;
  const bzCount = (eco.bugs || []).length;
  const discCount = (eco.discussions || []).length;
  const blogCount = blogs.length;
  const docCount = docs.length;

  let deltaBadges = '';
  if (delta) {
    if (delta.statusChanged) {
      deltaBadges += h`<span class="badge badge-primary" title="Status updated this week"><span aria-hidden="true">🔄</span> Moved to ${f.category}</span>`;
    }
    if (delta.isNewFeature) {
      deltaBadges += h`<span class="badge badge-warning" title="Newly tracked feature this week"><span aria-hidden="true">✨</span> Newly Tracked</span>`;
    }
    if (delta.momentumChanged) {
      deltaBadges += h`<span class="badge badge-purple" title="Momentum shift"><span aria-hidden="true">🚀</span> ${a.momentumLevel} (was ${delta.previousMomentum || ''})</span>`;
    }
    if (delta.newArticlesCount > 0 || delta.newDiscussionsCount > 0) {
      const parts = [];
      if (delta.newArticlesCount > 0) parts.push(`+${delta.newArticlesCount} articles`);
      if (delta.newDiscussionsCount > 0) parts.push(`+${delta.newDiscussionsCount} msgs`);
      deltaBadges += h`<span class="badge badge-success" title="New ecosystem activity discovered this week"><span aria-hidden="true">⚡</span> ${parts.join(', ')}</span>`;
    }
  }

  const searchText = [f.name, f.summary, ...(f.tags || [])].join(' ');


  return h`
    <article class="feature-card" id="card-${f.id}" 
      data-milestone="${f.milestone || ''}"
      data-status="${f.statusType || ''}"
      data-momentum="${a.momentumLevel || ''}"
      data-has-delta="${hasDelta}"
      data-is-new="${delta?.isNewFeature || false}"
      data-status-changed="${delta?.statusChanged || false}"
      data-consensus="${a.consensus || ''}"
      data-contested="${isContested}"
      data-search-text="${searchText}"
    >
      <div class="feature-header">
        <h2 class="feature-title">
          <a href="${safeUrl(f.chromeStatusUrl)}" target="_blank" rel="noopener">${f.name}</a>
        </h2>
        <div class="feature-badges">
          <span class="badge">Chrome ${f.milestone || ''}</span>
          <span class="badge ${momentumBadgeClass}">${a.momentumLevel} Momentum</span>
          <span class="badge ${consensusBadgeClass}">${a.consensus}</span>
          ${raw(deltaBadges)}
          ${raw(baselineBadge)}
          ${raw(polyfillBadge)}
          ${a.isGroundedWithGoogleSearch ? raw('<span class="badge badge-primary" title="Grounded with live Google Search via Gemini"><span aria-hidden="true">🌐</span> Google Search Grounded</span>') : ''}
        </div>
      </div>

      <p class="feature-summary">${f.summary}</p>

      <div class="analysis-callout">
        <strong><span aria-hidden="true">💡</span> Takeaway:</strong> ${a.executiveSummary}
        ${a.groundedQueries && a.groundedQueries.length ? raw(`
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.45rem;">
            <span aria-hidden="true">🔍</span> <strong>Google Search Grounding:</strong> ${a.groundedQueries.map(q => `<em>"${escapeHtml(q)}"</em>`).join(', ')}
          </div>
        `) : ''}
      </div>

      <div class="vendors-grid">
        <a href="${chromeUrl}" target="_blank" rel="noopener" class="vendor-tile" title="View Chromium Bug / Status">
          <div class="vendor-tile-header">
            <span class="name">Chromium</span>
            <span class="external-arrow">↗</span>
          </div>
          <div class="val">${f.browsers?.chrome?.status || 'Active'}</div>
          <div class="subtext">Tracking Bug & CLs</div>
        </a>

        <a href="${firefoxUrl}" target="_blank" rel="noopener" class="vendor-tile" title="View Mozilla Standards Position Issue">
          <div class="vendor-tile-header">
            <span class="name">Firefox</span>
            <span class="external-arrow">↗</span>
          </div>
          <div class="val">${f.browsers?.firefox?.view || 'No signal'}</div>
          <div class="subtext">${ffStd ? 'Standards Issue #' + ffStd.url.split('/').pop() : 'Search Position'}</div>
        </a>

        <a href="${safariUrl}" target="_blank" rel="noopener" class="vendor-tile" title="View WebKit Standards Position Issue">
          <div class="vendor-tile-header">
            <span class="name">Safari</span>
            <span class="external-arrow">↗</span>
          </div>
          <div class="val">${f.browsers?.safari?.view || 'No signal'}</div>
          <div class="subtext">${safariStd ? 'Standards Issue #' + safariStd.url.split('/').pop() : 'Search Position'}</div>
        </a>

        <a href="${safeCommunityUrl}" target="_blank" rel="noopener" class="vendor-tile" title="View Developer Discussions">
          <div class="vendor-tile-header">
            <span class="name">${communityTileTitle}</span>
            <span class="external-arrow">↗</span>
          </div>
          <div class="val">${communityTileVal}</div>
          <div class="subtext">${topDiscussion ? 'View Top Discussion' : 'Search Discussions'}</div>
        </a>
      </div>

      <button type="button" class="expander-trigger" aria-expanded="false" aria-controls="details-${f.id}" data-id="${f.id}">
        <div class="expander-left">
          <span><span aria-hidden="true">🔍</span> Ecosystem Evidence & Inspected Resources</span>
          <span class="expander-pill"><span aria-hidden="true">🏛️</span> ${stdCount} standards</span>
          ${bzCount ? raw(`<span class="expander-pill"><span aria-hidden="true">🐛</span> ${bzCount} bugs</span>`) : ''}
          ${blogCount ? raw(`<span class="expander-pill"><span aria-hidden="true">📰</span> ${blogCount} blogs</span>`) : ''}
          <span class="expander-pill"><span aria-hidden="true">💬</span> ${discCount} discussions</span>
          ${polyfill ? raw('<span class="expander-pill" style="color: var(--purple);"><span aria-hidden="true">📦</span> 1 polyfill</span>') : ''}
        </div>
        <span class="expander-chevron" aria-hidden="true">⌄</span>
      </button>

      <div class="expander-body" id="details-${f.id}" hidden="until-found">
        ${hasDelta ? raw(`
          <div style="background: rgba(147, 51, 234, 0.08); border-left: 3px solid var(--purple); border-radius: 6px; padding: 0.85rem 1.1rem; margin-bottom: 1.25rem;">
            <strong style="color: var(--purple);"><span aria-hidden="true">⚡</span> What Happened This Week (Delta):</strong>
            <ul style="margin: 0.4rem 0 0 1.2rem; font-size: 0.88rem; color: var(--text);">
              ${delta.isNewFeature ? '<li><span aria-hidden="true">✨</span> <strong>Newly Tracked:</strong> First time appearing in ecosystem tracking</li>' : ''}
              ${delta.statusChanged ? `<li><span aria-hidden="true">🔄</span> <strong>Status Transition:</strong> Moved from <em>${escapeHtml(delta.previousStatus || 'N/A')}</em> to <strong>${escapeHtml(f.category)}</strong></li>` : ''}
              ${delta.momentumChanged ? `<li><span aria-hidden="true">🚀</span> <strong>Momentum Shift:</strong> Shifted from <em>${escapeHtml(delta.previousMomentum || 'N/A')}</em> to <strong>${escapeHtml(a.momentumLevel)}</strong></li>` : ''}
              ${delta.newArticlesCount > 0 ? `<li><span aria-hidden="true">📰</span> <strong>${delta.newArticlesCount} new article(s)/tutorial(s)</strong> discovered</li>` : ''}
              ${delta.newDiscussionsCount > 0 ? `<li><span aria-hidden="true">💬</span> <strong>${delta.newDiscussionsCount} new community discussion(s)</strong> surfaced</li>` : ''}
            </ul>
          </div>
        `) : ''}

        ${a.takeaways && a.takeaways.length ? raw(`
          <div class="section-title"><span aria-hidden="true">💡</span> Key Recommendations & Analysis:</div>
          <ul style="margin-left: 1.5rem; margin-bottom: 1.25rem;">
            ${a.takeaways.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
          </ul>
        `) : ''}

        ${polyfill ? raw(`
          <div class="section-title"><span aria-hidden="true">📦</span> Verified NPM Polyfill / Package:</div>
          <ul class="links-list" style="margin-bottom: 1.25rem;">
            <li>
              <span aria-hidden="true">📦</span> <a href="${safeUrl(polyfill.url)}" target="_blank" rel="noopener"><strong>${escapeHtml(polyfill.name)}</strong></a>
              <span class="tag-pill">v${escapeHtml(polyfill.version)}</span>
              <span>— ${escapeHtml(polyfill.description)}</span>
            </li>
          </ul>
        `) : ''}

        ${eco.standards && eco.standards.length ? raw(`
          <div class="section-title"><span aria-hidden="true">🏛️</span> Standards Positions & Inspected Issues:</div>
          <ul class="links-list" style="margin-bottom: 1.25rem;">
            ${eco.standards.map(s => `
              <li>
                <div>
                  <span aria-hidden="true">🏛️</span> <strong>${escapeHtml(s.vendor)}:</strong>
                  <a href="${safeUrl(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a>
                  <span class="tag-pill">[${escapeHtml(s.state)}]</span>
                  ${(s.labels || []).map(l => `<span class="tag-pill">${escapeHtml(l)}</span>`).join(' ')}
                  ${s.commentSummary ? `<div class="comment-quote">${escapeHtml(s.commentSummary)}</div>` : ''}
                </div>
              </li>
            `).join('')}
          </ul>
        `) : ''}

        ${eco.bugs && eco.bugs.length ? raw(`
          <div class="section-title"><span aria-hidden="true">🐛</span> Engine Implementation Trackers (Bugzilla):</div>
          <ul class="links-list" style="margin-bottom: 1.25rem;">
            ${eco.bugs.map(b => `
              <li>
                <span aria-hidden="true">🐛</span> <strong>${escapeHtml(b.vendor)}:</strong>
                <a href="${safeUrl(b.url)}" target="_blank" rel="noopener">Bug #${escapeHtml(b.id)}: ${escapeHtml(b.title)}</a>
                <span class="tag-pill">${escapeHtml(b.status)}${b.resolution ? ' (' + escapeHtml(b.resolution) + ')' : ''}</span>
              </li>
            `).join('')}
          </ul>
        `) : ''}

        ${eco.discussions && eco.discussions.length ? raw(`
          <div class="section-title"><span aria-hidden="true">💬</span> Verified Community Discussions & Social Pulse:</div>
          <ul class="links-list" style="margin-bottom: 1.25rem;">
            ${eco.discussions.slice(0, sliceLimits.discussions).map(d => `
              <li>
                <div>
                  <span aria-hidden="true">${(d.source || '').includes('Twitter') ? '<span aria-hidden="true">🐦</span>' : '<span aria-hidden="true">💬</span>'}</span>
                  <strong style="color: var(--text);">${escapeHtml(d.source || 'Discussion')}:</strong>
                  <a href="${safeUrl(d.discussionUrl || d.url)}" target="_blank" rel="noopener">
                    ${escapeHtml(d.title || d.content)}
                  </a>
                  <span class="tag-pill">${escapeHtml(d.points)} ${(d.source || '').includes('Twitter') ? 'likes & RTs' : 'pts'} / ${escapeHtml(d.commentsCount)} ${(d.source || '').includes('Twitter') ? 'replies' : 'comments'}</span>
                  ${d.author ? `<span class="tag-pill" style="color: var(--primary);">${escapeHtml(d.author)}</span>` : ''}
                  ${(d.content && d.content !== d.title) ? `<div class="comment-quote">${escapeHtml(d.content.slice(0, 220))}...</div>` : ''}
                </div>
              </li>
            `).join('')}
          </ul>
        `) : ''}

        ${blogs.length ? raw(`
          <div class="section-title"><span aria-hidden="true">📰</span> Ecosystem Blogs & Articles:</div>
          <ul class="links-list" style="margin-bottom: 1.25rem;">
            ${blogs.slice(0, sliceLimits.blogs).map(art => `
              <li>
                <div>
                  <span aria-hidden="true">📰</span> <a href="${safeUrl(art.url)}" target="_blank" rel="noopener"><strong>${escapeHtml(art.title)}</strong></a>
                  ${art.domain ? `<span class="tag-pill">${escapeHtml(art.domain)}</span>` : ''}
                  ${art.author ? `<span class="tag-pill">by ${escapeHtml(art.author)}</span>` : ''}
                  ${(art.contentExcerpt || art.snippet) ? `<div class="comment-quote">${escapeHtml((art.contentExcerpt || art.snippet).slice(0, 220))}...</div>` : ''}
                </div>
              </li>
            `).join('')}
          </ul>
        `) : ''}

        ${eco.reverseLinks && eco.reverseLinks.length ? raw(`
          <div class="section-title"><span aria-hidden="true">🔗</span> Inbound Citations & Reverse Links:</div>
          <ul class="links-list" style="margin-bottom: 1.25rem;">
            ${eco.reverseLinks.slice(0, sliceLimits.reverseLinks).map(link => `
              <li>
                <div>
                  <span aria-hidden="true">🔗</span> <a href="${safeUrl(link.url)}" target="_blank" rel="noopener"><strong>${escapeHtml(link.title)}</strong></a>
                  ${link.domain ? `<span class="tag-pill">${escapeHtml(link.domain)}</span>` : ''}
                  ${link.reverseLinkedTo ? `<span class="tag-pill" style="color: var(--purple);">Cites: ${escapeHtml(link.reverseLinkedTo)}</span>` : ''}
                  ${(link.contentExcerpt || link.snippet) ? `<div class="comment-quote">${escapeHtml((link.contentExcerpt || link.snippet).slice(0, 220))}...</div>` : ''}
                </div>
              </li>
            `).join('')}
          </ul>
        `) : ''}

        ${docs.length ? raw(`
          <div class="section-title"><span aria-hidden="true">📚</span> Documentation & Specifications:</div>
          <ul class="links-list" style="margin-bottom: 1.25rem;">
            ${docs.slice(0, sliceLimits.docs).map(doc => `
              <li>
                <span aria-hidden="true">📚</span> <a href="${safeUrl(doc.url)}" target="_blank" rel="noopener">${escapeHtml(doc.title)}</a>
                ${doc.domain ? `<span class="tag-pill">${escapeHtml(doc.domain)}</span>` : ''}
              </li>
            `).join('')}
          </ul>
        `) : ''}

        ${eco.auditTrail ? raw(`
          <div class="section-title"><span aria-hidden="true">🔍</span> Investigation Audit Trail:</div>
          <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 0.85rem 1rem; margin-bottom: 1.25rem; font-size: 0.85rem;">
            <div style="margin-bottom: 0.4rem;"><strong>Searches Executed:</strong></div>
            <ul style="list-style: none; margin-left: 0.5rem; margin-bottom: 0.65rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.35rem;">
              ${(eco.auditTrail.searchesExecuted || []).map(s => `
                <li>
                  • <strong style="color: var(--text);">${escapeHtml(s.provider || (s.type || '').toUpperCase())}:</strong> ${s.status ? `<em style="color: var(--text-muted);">(${escapeHtml(s.status)})</em>` : `${s.query ? '<em>"' + escapeHtml(s.query) + '"</em> — ' : ''}found ${escapeHtml(s.rawFound || s.count || 0)} candidate(s), verified ${escapeHtml(s.verified !== undefined ? s.verified : s.count || 0)}`}
                  ${s.queryAudits && s.queryAudits.length ? `
                    <ul style="margin-left: 1.2rem; margin-top: 0.25rem; font-size: 0.8rem; color: var(--text-muted); list-style: circle;">
                      ${s.queryAudits.map(qa => `
                        <li><code>${escapeHtml(qa.query)}</code> ${qa.isReverseLink ? '<span class="tag-pill" style="font-size: 0.7rem;">Reverse</span>' : ''} — <em>${escapeHtml(qa.description)}</em> (${escapeHtml(qa.count)} found)</li>
                      `).join('')}
                    </ul>
                  ` : ''}
                </li>
              `).join('')}
            </ul>
            <div><strong>Content Inspected:</strong></div>
            <div style="color: var(--text-muted); margin-left: 0.5rem; margin-top: 0.2rem;">
              Spec verified: ${eco.auditTrail.contentInspected?.hasSpec ? '✔ Yes' : '○ None'} |
              Explainers read: ${eco.auditTrail.contentInspected?.explainerCount || 0} |
              Standards comments read: ${eco.auditTrail.contentInspected?.standardsCommentsRead || 0} |
              Docs indexed: ${eco.auditTrail.contentInspected?.docCount || 0}
            </div>
          </div>
        `) : ''}

        <div class="section-title"><span aria-hidden="true">🔗</span> Official Platform References:</div>
        <ul class="links-list">
          <li><span aria-hidden="true">🔗</span> <a href="${safeUrl(f.chromeStatusUrl)}" target="_blank" rel="noopener">ChromeStatus (#${f.id}) ↗</a></li>
          <li><span aria-hidden="true">⚡</span> <a href="${safeUrl(f.chromeStatusLiteUrl)}" target="_blank" rel="noopener">ChromeStatusLite ↗</a></li>
          ${f.specUrl ? raw(`<li><span aria-hidden="true">📜</span> <a href="${safeUrl(f.specUrl)}" target="_blank" rel="noopener">Specification Standard ↗</a></li>`) : ''}
          ${f.bugUrl ? raw(`<li><span aria-hidden="true">🐛</span> <a href="${safeUrl(f.bugUrl)}" target="_blank" rel="noopener">Chromium Bug Tracker ↗</a></li>`) : ''}
        </ul>
      </div>
    </article>
  `;
}
