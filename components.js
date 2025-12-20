// Header and Footer Components
// This file generates common header and footer for all pages

(function() {
  // Detect base path based on current page location
  function getBasePath() {
    const path = window.location.pathname;
    // Check if we're in a subdirectory
    if (path.includes('/ja/downloads/') || path.includes('/ja/user-guide/')) {
      return '../../';
    } else if (path.includes('/downloads/') || path.includes('/user-guide/') || 
               path.includes('/ja/privacy') || path.includes('/ja/terms')) {
      return '../';
    } else if (path.includes('/ja/') || path.includes('/ja')) {
      return '../';
    }
    return './';
  }

  // Detect if current page is Japanese
  function isJapanesePage() {
    return window.location.pathname.includes('/ja');
  }

  // Get home URL based on language
  function getHomeUrl() {
    return isJapanesePage() ? '/ja' : '/';
  }

  // Get downloads URL based on language
  function getDownloadsUrl() {
    return isJapanesePage() ? '/ja/downloads' : '/downloads';
  }

  // Generate Header HTML
  function generateHeader() {
    const basePath = getBasePath();
    const isJa = isJapanesePage();
    const homeUrl = getHomeUrl();
    
    // Navigation links based on language
    const navLinks = isJa ? `
          <a href="${homeUrl}#how" class="nav-link">機能</a>
          <a href="${homeUrl}#pricing" class="nav-link">料金プラン</a>
          <a href="${homeUrl}#information" class="nav-link">お知らせ</a>
          <a href="${homeUrl}#faq" class="nav-link">FAQ</a>
    ` : `
          <a href="${homeUrl}#how" class="nav-link">Features</a>
          <a href="${homeUrl}#pricing" class="nav-link">Pricing</a>
          <a href="${homeUrl}#information" class="nav-link">Information</a>
          <a href="${homeUrl}#faq" class="nav-link">FAQ</a>
    `;

    const downloadLabel = isJa ? 'Mac用ダウンロード' : 'Download for Mac';

    return `
    <header class="nav">
      <div class="container">
        <div class="nav-menu">
          ${navLinks}
        </div>
        <a class="brand" href="${homeUrl}">
          <img src="${basePath}icons/logo.svg" alt="IrukaDark" class="brand-logo lg" />
        </a>
        <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="navActions" aria-label="Open navigation">
          <svg class="nav-toggle-icon nav-toggle-icon-menu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
          <svg class="nav-toggle-icon nav-toggle-icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <nav class="nav-actions" id="navActions">
          <div class="lang-dropdown">
            <button class="lang-trigger" id="langTrigger" aria-haspopup="true" aria-expanded="false">
              <svg class="globe-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9"/>
                <path d="M3 12h18"/>
                <path d="M12 3a15 15 0 0 1 0 18"/>
                <path d="M12 3a15 15 0 0 0 0 18"/>
              </svg>
              <span class="lang-text" id="langCode">${isJa ? 'JA' : 'EN'}</span>
            </button>
            <div class="lang-menu" id="langMenu">
              <button class="lang-option" data-lang="en">
                <span class="lang-text">English</span>
              </button>
              <button class="lang-option" data-lang="ja">
                <span class="lang-text">日本語</span>
              </button>
            </div>
          </div>
          <a id="download-nav" href="${getDownloadsUrl()}" class="btn btn-primary" data-i18n="header.clone">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 2px; vertical-align: middle;">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            ${downloadLabel}
          </a>
        </nav>
      </div>
    </header>`;
  }

  // Generate Footer HTML
  function generateFooter() {
    const basePath = getBasePath();
    const isJa = isJapanesePage();
    
    const termsUrl = isJa ? '/ja/terms.html' : `${basePath}terms.html`;
    const privacyUrl = isJa ? '/ja/privacy.html' : `${basePath}privacy.html`;
    const termsLabel = isJa ? '利用規約' : 'Terms of Service';
    const privacyLabel = isJa ? 'プライバシーポリシー' : 'Privacy Policy';

    return `
    <footer class="container footer">
      <div class="footer-logo">
        <img src="${basePath}icons/logo.svg" alt="IrukaDark" class="footer-logo-img" />
      </div>
      <div class="footer-content">
        <div class="foot-left">
          <span class="muted" data-i18n="footer.copyright">© <span id="year"></span> CORe, Inc. All rights reserved.</span>
        </div>
        <div class="foot-right">
          <a class="link" href="${termsUrl}" data-i18n="footer.terms">${termsLabel}</a>
          <a class="link" href="${privacyUrl}" data-i18n="footer.privacy">${privacyLabel}</a>
          <a class="link" href="https://co-r-e.net" target="_blank" rel="noopener">Company</a>
          <a class="link" href="https://co-r-e.net/contact" target="_blank" rel="noopener">Contact</a>
        </div>
      </div>
    </footer>`;
  }

  // Initialize components
  function initComponents() {
    // Replace header placeholder
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = generateHeader();
    }

    // Replace footer placeholder
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = generateFooter();
    }

    // Set year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }

  // Expose functions globally for debugging
  window.IrukaDarkComponents = {
    generateHeader,
    generateFooter,
    getBasePath,
    isJapanesePage
  };
})();

