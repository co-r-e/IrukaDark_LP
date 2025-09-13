document.getElementById('year').textContent = new Date().getFullYear();

// Multi-language support
const translations = {
  en: {
    'meta.title': 'IrukaDark — AI that instantly explains your screen',
    'meta.description': 'Explain text, images, tables, and PDFs right on your screen. One‑key shortcuts (Option+A/S), bilingual JA/EN, privacy‑friendly, open source.',
    'header.clone': 'Download for Mac',
    'hero.title': 'Everything on your screen, <span class="grad-white">explained fast</span>',
    'hero.subtitle': 'Pick anything—text, images, tables. IrukaDark turns it into the gist. Press Option+A for text, Option+S for screenshots.',
    'hero.cta': 'Download for Mac',
    'demo.question': 'What does this mean?',
    'demo.explanation': 'This `reduce` method takes each element (user) from the array and converts it into an object. `acc` is the accumulator with an initial value of an empty object `{}`. It creates a hash map with each user\'s ID as the key and the user object as the value.',
    'features.title': 'Work Faster on Your Computer',
    'features.subtitle': 'No more “I don’t get it.” Instant, context‑aware understanding keeps you moving.',
    'features.instant.title': 'Instant Explanation (Option+A)',
    'features.instant.description': 'Select text in any website, document, or app and press Option+A to get a clear, context‑aware explanation. Faster than dictionaries or search.',
    'features.flow.title': 'Stay in Flow',
    'features.flow.description': 'Skip window‑switching and copy‑paste. Ask in place with Option+A, or capture an area with Option+S. Resolve questions without breaking focus.',
    'features.secure.title': 'Simple & Private',
    'features.secure.description': 'IrukaDark stores no data and doesn’t train on your content, helping protect your privacy.',
    'usecases.title': 'Great For',
    'usecases.subtitle': 'Turn every “What does this mean?” into quick, clear understanding.',
    'usecases.programming.title': 'Programming & Code Reading',
    'usecases.programming.description': 'Meet unfamiliar APIs or patterns while reading code? Get quick explanations right in place.',
    'usecases.workplace.title': 'New Role or Industry',
    'usecases.workplace.description': 'Ramp up faster by understanding domain‑specific terms and concepts when starting a new job or industry.',
    'usecases.understanding.title': 'Deeper Understanding',
    'usecases.understanding.description': 'Go beyond dictionary meanings to intent, nuance, and why an expression is used.',
    'usecases.academic.title': 'Academic Papers & Research',
    'usecases.academic.description': 'When complex concepts appear in papers or research, get clear explanations in plain language.',
    'usecases.english.title': 'English Websites & Docs',
    'usecases.english.description': 'When translation tools fall short, get natural, context‑fit explanations for English technical content.',
    'usecases.legal.title': 'Contracts & Legal Documents',
    'usecases.legal.description': 'Understand specialized clauses and terminology when reviewing important legal documents.',

    // Demo section
    'demo.title': 'See It in Action',
    'demo.subtitle': 'Select text or capture an area—IrukaDark explains it on‑screen.',
    'demo.note': 'Tip: Text = Option+A · Screenshot = Option+S',

    // Where it works
    'where.title': 'Works where you work',
    'where.subtitle': 'IrukaDark rides on top of your tools—no context switching.',
    'where.web.title': 'On websites',
    'where.web.li1': 'Programming',
    'where.web.li1.desc': 'Explain unfamiliar code, APIs, and patterns in place.',
    'where.web.li2': 'Marketing jargon',
    'where.web.li2.desc': 'Turn buzzwords into clear, plain‑language meaning.',
    'where.web.li3': 'Academic papers',
    'where.web.li3.desc': 'Summarize concepts, formulas, and study context.',
    'where.web.li4': 'Foreign websites & materials',
    'where.web.li4.desc': 'Get natural explanations beyond literal translation.',
    'where.web.li5': 'Contracts & legal documents',
    'where.web.li5.desc': 'Clarify clauses, terms, and what they imply.',
    'where.apps.title': 'On apps',
    'where.apps.li1': 'Other AI tools',
    'where.apps.li1.desc': 'Summarize outputs or prompts without switching windows.',
    'where.apps.li2': 'Terminal',
    'where.apps.li2.desc': 'Explain commands, flags, and errors instantly.',
    'where.apps.li3': 'Social media',
    'where.apps.li3.desc': 'Unpack threads, acronyms, and context at a glance.',
    'where.apps.li4': 'Editors',
    'where.apps.li4.desc': 'Understand code or docs as you write.',
    'where.apps.li5': 'Design tools',
    'where.apps.li5.desc': 'Describe layers, components, and UI copy quickly.',
    'where.images.title': 'For complex images',
    'where.images.li1': 'Diagram explanations',
    'where.images.li1.desc': 'Label parts and walk through flows.',
    'where.images.li2': 'Map reading',
    'where.images.li2.desc': 'Interpret routes, legends, and points of interest.',
    'where.images.li3': 'Uncopyable text',
    'where.images.li3.desc': 'Select text in images to read and explain.',
    'where.images.li4': 'Photo explanations',
    'where.images.li4.desc': 'Explain what’s shown and key details.',
    'where.images.li5': 'Online meeting screens',
    'where.images.li5.desc': 'Summarize slides and screen shares as they appear.',
    'where.web.badge': 'Web',
    'where.apps.badge': 'Apps',
    'where.images.badge': 'Images',
    'howto.title': 'How It Works',
    'howto.subtitle': 'Three quick steps: download and start.',
    'howto.step1.title': 'Download and Install',
    'howto.step1.description': 'Download the macOS installer and follow the steps.',
    'howto.step2.title': 'Select Text (Option+A) or Area (Option+S)',
    'howto.step2.description': 'Select text in websites, docs, or apps and press Option+A for explanations. Select an area and press Option+S for screenshot analysis.',
    'howto.step2.hint': 'Text → Option+A • Area → Option+S',
    'howto.screenshot.hint': 'Screenshot Analysis',
    'howto.step3.title': 'Get Context‑Aware Explanations',
    'howto.step3.description': 'Understand intent and background—not just words—so you can keep working.',
    'cta.title': 'Download',
    'cta.description': 'Download for macOS. Open‑source and free.',
    'cta.button': 'Download for Mac',
    'footer.copyright': '© <span id="year"></span> CORe, Inc. All rights reserved.'
  },
  ja: {
    'meta.title': 'IrukaDark（イルカダーク）— 画面のすべてを超高速解説するAI',
    'meta.description': 'IrukaDark（イルカダーク）は、テキスト・画像・表・PDFを画面上でそのまま解説・要約。Option+A/Sのショートカット、日英対応、プライバシー配慮、オープンソース。',
    'header.clone': 'Mac用ダウンロード',
    'hero.title': '画面のぜんぶ、<span class="grad-white">超高速解説</span>。',
    'hero.subtitle': 'テキストも画像も表も、選ぶだけ。IrukaDark（イルカダーク）が一瞬で要点に。テキストはOption+A、スクショはOption+S。',
    'hero.cta': 'Mac用ダウンロード',
    'demo.question': 'これどういうこと？',
    'demo.explanation': 'この`reduce`メソッドは、配列の各要素（user）を取り出し、オブジェクトに変換しています。`acc`は累積器（accumulator）で、初期値は空のオブジェクト`{}`です。各ユーザーのIDをキー、ユーザーオブジェクトを値としたハッシュマップを作成しています。',
    'features.title': 'パソコン作業が高速に捗る',
    'features.subtitle': 'もう「わからない」で止まらない。瞬時理解で作業が加速します。',
    'features.instant.title': '瞬時解説（Option+A）',
    'features.instant.description': 'ウェブサイト、ドキュメント、アプリなどで難しい文章や専門用語を選択してOption+A。辞書や検索よりも速く、文脈に沿った的確な解説が得られます。',
    'features.flow.title': 'フローを断ち切らない',
    'features.flow.description': 'いちいち別のウィンドウに移動して、知りたいテキストをコピーして、AIの入力フォームに貼り付けて、回答を待つ、なんてことは不要です。その場で選択してOption+Aを押すだけ。作業の流れを止めることなく、瞬時に疑問を解決できます。',
    'features.secure.title': 'シンプルで安全',
    'features.secure.description': 'IrukaDarkはデータベースを持ちません。AIの学習には使われず、プライバシーを守りながら安心して使えます。',
    'usecases.title': 'こんなシーンで活躍',
    'usecases.subtitle': '日常のパソコン作業で「これどういうこと？」と思う瞬間を、すべて即時理解できます。',
    'usecases.programming.title': 'プログラミング学習',
    'usecases.programming.description': 'さまざまなメソッドや関数に出会ったとき。コードを読んでいて知らない処理に遷遇した瞬間に、その場で解説を受け取れます。',
    'usecases.workplace.title': '新しい職場・業界',
    'usecases.workplace.description': '転職や異動で専門用語にたくさん触れるとき。業界特有の言葉や概念を素早く理解して、新しい環境に早く馴染めます。',
    'usecases.understanding.title': '深い理解が欲しいとき',
    'usecases.understanding.description': 'ただの翻訳ではなく、知らない言葉の意図や背景を知りたいとき。単語の意味を超えて、なぜその表現が使われるのかまで理解できます。',
    'usecases.academic.title': '学術論文・研究資料',
    'usecases.academic.description': '論文や研究資料を読んでいて難解な概念に出会ったとき。専門分野の深い内容も、分かりやすい言葉で解説してもらえます。',
    'usecases.english.title': '海外サイト・英語資料',
    'usecases.english.description': '英語の技術文書やサイトを読んでいて、翻訳ツールでは理解しきれない表現に出会ったとき。文脈に沿った自然な解説が得られます。',
    'usecases.legal.title': '契約書・法的文書',
    'usecases.legal.description': '重要な契約書や法的文書を確認していて、専門的な条項や用語の意味を把握したいとき。理解をサポートします。',

    // どこで使えるか
    'where.title': 'いつもの画面でそのまま',
    'where.subtitle': 'いつものツールの上に重ねて、すぐ使えます。',
    'where.web.title': 'Webサイトの上で使う',
    'where.web.li1': 'プログラミング学習',
    'where.web.li1.desc': '知らないコードやAPI/パターンをその場で解説。',
    'where.web.li2': 'マーケティング専門用語',
    'where.web.li2.desc': 'バズワードを噛み砕いて、平易な日本語に。',
    'where.web.li3': '学術論文',
    'where.web.li3.desc': '概念・数式・研究の文脈を手短に要約。',
    'where.web.li4': '海外サイト・海外資料',
    'where.web.li4.desc': '直訳を超えて、自然で文脈に合う説明。',
    'where.web.li5': '契約書・法的文書',
    'where.web.li5.desc': '条項や用語の意味と含意を明確に。',
    'where.apps.title': 'アプリの上で使う',
    'where.apps.li1': '他AIツール',
    'where.apps.li1.desc': '出力やプロンプトをその場で要点整理。',
    'where.apps.li2': 'ターミナル',
    'where.apps.li2.desc': 'コマンド・フラグ・エラーを即解説。',
    'where.apps.li3': 'SNS',
    'where.apps.li3.desc': 'スレ・略語・文脈をサクッと把握。',
    'where.apps.li4': 'エディタ',
    'where.apps.li4.desc': '書きながらコード/文章の理解を補助。',
    'where.apps.li5': 'デザインツール',
    'where.apps.li5.desc': 'レイヤーやコンポーネント、UI文言を素早く説明。',
    'where.images.title': '複雑な画像に使う',
    'where.images.li1': '図の説明',
    'where.images.li1.desc': '構成要素にラベル付けして流れを解説。',
    'where.images.li2': '地図の読み取り',
    'where.images.li2.desc': 'ルートや凡例、ランドマークを読み解く。',
    'where.images.li3': 'コピーできない文字',
    'where.images.li3.desc': '画像内の文字を読み取り、意味を説明。',
    'where.images.li4': '写真の解説',
    'where.images.li4.desc': '写っている内容やポイントを簡潔に整理。',
    'where.images.li5': 'オンラインmtg画面',
    'where.images.li5.desc': 'スライドや画面共有をその場で要約。',
    'where.web.badge': 'Web',
    'where.apps.badge': 'アプリ',
    'where.images.badge': '画像',
    'howto.title': '使い方',
    'howto.subtitle': 'たった3ステップ。ダウンロードしてすぐ使える',
    'howto.step1.title': 'ダウンロードしてインストール',
    'howto.step1.description': 'macOS 用インストーラをダウンロードし、案内に従ってインストールします。',
    'howto.step2.title': 'テキストを選択してOption+A / 範囲を選択してOption+S',
    'howto.step2.description': 'ウェブサイト、ドキュメント、アプリで出会った難しいテキストはOption+Aで解説。画像やグラフなどの視覚コンテンツは範囲を選んでOption+Sでスクリーンショット解析。',
    'howto.step2.hint': 'テキスト → Option+A / 範囲 → Option+S',
    'howto.screenshot.hint': 'スクリーンショット解説',
    'howto.step3.title': '文脈を踏まえた解説を受け取り',
    'howto.step3.description': 'ただの単語の意味ではなく、文脈や背景を踏まえた理解が得られ、パソコン作業がスムーズに進みます。',
    'cta.title': 'ダウンロード',
    'cta.description': 'macOS向けにダウンロード。オープンソースで無料。',
    'cta.button': 'Mac用ダウンロード',
    'footer.copyright': '© <span id="year"></span> CORe, Inc. All rights reserved.'
    ,
    // Demo section
    'demo.title': '操作デモを見る',
    'demo.subtitle': 'テキスト選択や範囲キャプチャに反応して、その場でAIが解説します。',
    'demo.note': 'ヒント: テキスト = Option+A ・ スクショ = Option+S'
  }
};

let currentLang = 'en'; // デフォルトは英語

// Information notices (language-specific)
const infoNotices = {
  ja: [
    {
      date: '2025-09-13',
      title: 'GitHubからクローンすればmacOSで利用できます',
      body: 'GitHub の公開リポジトリをクローンすることで、macOS 上でも IrukaDark をご利用いただけます。<br><code>git clone https://github.com/co-r-e/IrukaDark.git</code><br><code>cd IrukaDark</code><br>詳しい手順は GitHub の README をご確認ください（<a href="https://github.com/co-r-e/IrukaDark" target="_blank" rel="noopener">co-r-e/IrukaDark</a>）。'
    },
    {
      date: '2025-09-05',
      title: '不具合が発生中',
      body: '現在、一部の環境で不具合が発生しています。問題が解消されるまでダウンロードはお控えください。お問い合わせは <a href="https://co-r-e.net/contact" target="_blank" rel="noopener">こちら</a> からお願いします。'
    },
    {
      date: '2025-09-01',
      title: 'Webサイト公開',
      body: 'IrukaDark の公式サイトを公開しました。使い方のポイントやデモ動画を用意しています。ぜひ触ってみて、フィードバックをお寄せください。'
    }
  ],
  en: [
    {
      date: '2025-09-13',
      title: 'Use on macOS by cloning from GitHub',
      body: 'You can use IrukaDark on macOS by cloning the public repository.<br><code>git clone https://github.com/co-r-e/IrukaDark.git</code><br><code>cd IrukaDark</code><br>See the README on GitHub for details (<a href="https://github.com/co-r-e/IrukaDark" target="_blank" rel="noopener">co-r-e/IrukaDark</a>).'
    },
    {
      date: '2025-09-05',
      title: 'Issue Ongoing',
      body: 'We are investigating an issue affecting some environments. Please hold off on downloads until it\'s resolved. Questions? <a href="https://co-r-e.net/contact" target="_blank" rel="noopener">Contact us</a>.'
    },
    {
      date: '2025-09-01',
      title: 'Website Launched',
      body: 'We\'ve launched the official IrukaDark site with a cleaner layout and demo video. Take a look and share your feedback!'
    }
  ]
};
window.infoNotices = infoNotices;

// Language switching functionality
function switchLanguage(lang) {
  currentLang = lang;
  
  // Update dropdown display (if present on this page)
  const langTrigger = document.getElementById('langTrigger');
  const langCodeEl = langTrigger ? langTrigger.querySelector('#langCode') : null;
  const langOptions = document.querySelectorAll('.lang-option');
  
  // Keep the globe icon the same for both languages
  // No need to change the globe icon
  
  // Update active option
  if (langOptions && langOptions.length) {
    langOptions.forEach(option => {
      option.classList.toggle('active', option.dataset.lang === lang);
    });
  }
  
  // Update compact code label next to globe
  if (langCodeEl) {
    langCodeEl.textContent = (lang === 'ja' ? 'JA' : 'EN');
  }

  // Close dropdown
  if (langTrigger) closeLanguageDropdown();
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Update meta tags
  const titleMeta = document.querySelector('title');
  const descMeta = document.querySelector('meta[name="description"]');
  
  if (titleMeta && translations[lang]['meta.title']) {
    titleMeta.textContent = translations[lang]['meta.title'];
  }
  
  if (descMeta && translations[lang]['meta.description']) {
    descMeta.setAttribute('content', translations[lang]['meta.description']);
  }
  
  // Update content patterns for animation
  updateContentPatternsLanguage(lang);
  // Refresh pattern keys for animation to match selected language
  patternKeys = Object.keys(contentPatterns[lang] || contentPatterns.en);
}

// Dropdown toggle functionality
function toggleLanguageDropdown() {
  const trigger = document.getElementById('langTrigger');
  const menu = document.getElementById('langMenu');
  
  const isOpen = menu.classList.contains('open');
  
  if (isOpen) {
    closeLanguageDropdown();
  } else {
    openLanguageDropdown();
  }
}

function openLanguageDropdown() {
  const trigger = document.getElementById('langTrigger');
  const menu = document.getElementById('langMenu');
  
  trigger.classList.add('open');
  menu.classList.add('open');
  trigger.setAttribute('aria-expanded', 'true');
  
  // Add click outside listener
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside);
  }, 0);
}

function closeLanguageDropdown() {
  const trigger = document.getElementById('langTrigger');
  const menu = document.getElementById('langMenu');
  
  trigger.classList.remove('open');
  menu.classList.remove('open');
  trigger.setAttribute('aria-expanded', 'false');
  
  // Remove click outside listener
  document.removeEventListener('click', handleClickOutside);
}

function handleClickOutside(event) {
  const dropdown = document.querySelector('.lang-dropdown');
  if (!dropdown.contains(event.target)) {
    closeLanguageDropdown();
  }
}

// Add event listeners for language buttons
document.addEventListener('DOMContentLoaded', () => {
  // Language dropdown functionality
  const langTrigger = document.getElementById('langTrigger');
  const langOptions = document.querySelectorAll('.lang-option');
  
  // Toggle dropdown
  if (langTrigger) langTrigger.addEventListener('click', toggleLanguageDropdown);
  
  // Language option selection -> navigate to language-specific URL for SEO
  function getCanonicalBaseUrl() {
    const link = document.querySelector('link[rel="canonical"]');
    try {
      const u = new URL(link ? link.href : window.location.href);
      // Standardize to origin without trailing slash per site preference
      return u.origin;
    } catch (e) {
      return window.location.origin;
    }
  }

  function navigateToLanguage(lang) {
    const base = getCanonicalBaseUrl();
    const path = (window.location && window.location.pathname) || '';
    const isDownloads = /\/downloads\/?$/.test(path) || /\/ja\/downloads\/?$/.test(path);
    let target;
    if (isDownloads) {
      target = lang === 'ja' ? base + '/ja/downloads' : base + '/downloads';
    } else {
      target = lang === 'ja' ? base + '/ja' : base;
    }
    window.location.href = target;
  }

  if (langOptions && langOptions.length) {
    langOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToLanguage(option.dataset.lang);
      });
    });
  }
  
  // Initialize with page default language (falls back to 'en')
  const initialLang = window.DEFAULT_LANG || 'en';
  switchLanguage(initialLang);

  // Demo video: autoplay only when in view
  (function setupDemoAutoplay() {
    const videos = document.querySelectorAll('.demo-video');
    if (!videos.length) return;

    videos.forEach(v => { v.loop = true; v.muted = true; });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const v = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const p = v.play();
            if (p && typeof p.catch === 'function') p.catch(() => {});
          } else {
            v.pause();
          }
        });
      }, { threshold: [0, 0.5, 1] });

      videos.forEach(v => io.observe(v));

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          videos.forEach(v => v.pause());
        }
      });
    } else {
      // Fallback without IntersectionObserver
      const isInView = (el) => {
        const r = el.getBoundingClientRect();
        const vpH = window.innerHeight || document.documentElement.clientHeight;
        const vpW = window.innerWidth || document.documentElement.clientWidth;
        const visibleH = Math.min(r.bottom, vpH) - Math.max(r.top, 0);
        const visibleW = Math.min(r.right, vpW) - Math.max(r.left, 0);
        const area = Math.max(0, visibleH) * Math.max(0, visibleW);
        return area >= (r.width * r.height) * 0.5;
      };
      const onScroll = () => {
        videos.forEach(v => {
          if (isInView(v)) {
            const p = v.play();
            if (p && typeof p.catch === 'function') p.catch(() => {});
          } else {
            v.pause();
          }
        });
      };
      ['scroll', 'resize', 'orientationchange', 'load'].forEach(evt => window.addEventListener(evt, onScroll, { passive: true }));
      onScroll();
    }
  })();

  // Terms modal (open/close on click, close on outside/Escape)
  (function setupTermsModal() {
    const modal = document.getElementById('termsModal');
    if (!modal) return;
    const openBtns = document.querySelectorAll('.js-open-terms-modal');
    const closeBtns = modal.querySelectorAll('.js-close-terms-modal');
    const dialog = modal.querySelector('.modal-dialog');

    function open() {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      // Prevent background scroll
      document.documentElement.style.overflow = 'hidden';
    }
    function close() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.documentElement.style.overflow = '';
    }

    openBtns.forEach(btn => btn.addEventListener('click', open));
    closeBtns.forEach(btn => btn.addEventListener('click', close));
    modal.addEventListener('click', (e) => {
      if (!dialog.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
  })();

  // Information list: render first 3, lazy-load more on scroll
  (function setupInformationList(){
    const section = document.getElementById('information');
    if (!section) return;
    const list = section.querySelector('#infoList');
    if (!list) return;

    const lang = currentLang || window.DEFAULT_LANG || 'en';
    const all = Array.from((infoNotices[lang] || [])).sort((a,b) => (b.date || '').localeCompare(a.date || ''));
    let rendered = 0;
    const firstBatch = 3;
    const pageSize = 10;

    function createItem(item){
      const li = document.createElement('li');
      li.className = 'info-item';
      const time = document.createElement('time');
      time.className = 'info-date';
      time.setAttribute('datetime', item.date);
      time.textContent = item.date;
      const btn = document.createElement('button');
      btn.className = 'info-title js-open-info-modal';
      btn.type = 'button';
      btn.textContent = item.title;
      btn.setAttribute('data-info-title', item.title);
      btn.setAttribute('data-info-body', item.body);
      li.appendChild(time);
      li.appendChild(btn);
      return li;
    }

    function renderBatch(count){
      const end = Math.min(rendered + count, all.length);
      const frag = document.createDocumentFragment();
      for (let i = rendered; i < end; i++) frag.appendChild(createItem(all[i]));
      list.appendChild(frag);
      rendered = end;
    }

    renderBatch(Math.min(firstBatch, all.length));

    // Lazy append on scroll near bottom
    let ticking = false;
    list.addEventListener('scroll', () => {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => {
        const nearBottom = (list.scrollTop + list.clientHeight) >= (list.scrollHeight - 24);
        if (nearBottom && rendered < all.length) {
          renderBatch(pageSize);
        }
        ticking = false;
      });
    }, { passive: true });
  })();

  // Information modal (dynamic title/body via delegation)
  (function setupInfoModal() {
    const modal = document.getElementById('infoModal');
    if (!modal) return;
    const dialog = modal.querySelector('.modal-dialog');
    const titleEl = modal.querySelector('#infoModalTitle');
    const bodyEl = modal.querySelector('#infoModalBody');
    const closeBtns = modal.querySelectorAll('.js-close-info-modal');

    function open(title, htmlBody) {
      const fallbackTitle = (currentLang === 'ja') ? 'お知らせ' : 'Information';
      if (titleEl) titleEl.textContent = title || fallbackTitle;
      if (bodyEl) bodyEl.innerHTML = htmlBody || '';
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.style.overflow = 'hidden';
    }
    function close() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.documentElement.style.overflow = '';
    }

    const infoSection = document.getElementById('information');
    if (infoSection) {
      infoSection.addEventListener('click', (e) => {
        const btn = e.target.closest('.js-open-info-modal');
        if (!btn) return;
        e.preventDefault();
        const title = btn.getAttribute('data-info-title') || (btn.textContent || '').trim();
        const body = btn.getAttribute('data-info-body') || '';
        open(title, body);
      });
    }
    closeBtns.forEach(btn => btn.addEventListener('click', close));
    modal.addEventListener('click', (e) => { if (!dialog.contains(e.target)) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
  })();
});

// Content patterns for different use cases
const contentPatterns = {
  en: {
    programming: {
      lines: [
        'const result = await fetchUserData().then(data => {',
        '  return data.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});',
        '}).catch(error => console.error(error));'
      ],
      selectedIndex: 1,
      explanation: 'This `reduce` method takes each element (user) from the array and converts it into an object. `acc` is the accumulator with an initial value of an empty object `{}`. It creates a hash map with each user\'s ID as the key and the user object as the value.'
    },
    workplace: {
      lines: [
        '■ Q4 KPI Dashboard Review',
        'Analyze ROI, CAC, LTV correlations and',
        'explore churn rate improvement strategies.'
      ],
      selectedIndex: 1,
      explanation: 'ROI (Return on Investment), CAC (Customer Acquisition Cost), and LTV (Lifetime Value) are key business metrics. This correlation analysis helps understand the relationship between investment efficiency and customer value, enabling more effective marketing strategies.'
    },
    understanding: {
      lines: [
        'The phenomenological approach to consciousness',
        'emphasizes the subjective experience and',
        'intentionality of mental states in cognition.'
      ],
      selectedIndex: 0,
      explanation: 'The phenomenological approach is a philosophical method that emphasizes the subjective experience of consciousness and the intentionality (the quality of being directed toward something) of mental states. It seeks to understand consciousness from the experiencer\'s own perspective rather than through objective observation.'
    },
    academic: {
      lines: [
        'The p-value indicates the probability of observing',
        'such extreme results under the null hypothesis,',
        'typically requiring α < 0.05 for significance.'
      ],
      selectedIndex: 1,
      explanation: 'The p-value represents the probability of obtaining the observed results (or more extreme ones) when the null hypothesis is true. Generally, the significance level α is set below 0.05, and when the p-value falls below this threshold, the result is considered statistically significant.'
    },
    english: {
      lines: [
        'The implementation leverages microservices',
        'architecture with eventual consistency patterns',
        'to ensure scalable distributed computing.'
      ],
      selectedIndex: 1,
      explanation: '"Eventual consistency" is a distributed systems concept where not all nodes are immediately synchronized, but consistency is guaranteed over time. This architecture prioritizes availability and performance, commonly used in systems that favor these aspects.'
    },
    legal: {
      lines: [
        'Article 12 (Disclaimer)',
        'Regarding non-performance due to force majeure,',
        'the parties shall mutually exempt each other.'
      ],
      selectedIndex: 1,
      explanation: 'Force majeure refers to external circumstances beyond the parties\' control or effort, such as natural disasters, wars, or legal changes. This clause exempts responsibility when contract performance becomes impossible due to such situations.'
    }
  },
  ja: {
    programming: {
      lines: [
        'const result = await fetchUserData().then(data => {',
        '  return data.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});',
        '}).catch(error => console.error(error));'
      ],
      selectedIndex: 1,
      explanation: 'この`reduce`メソッドは、配列の各要素（user）を取り出し、オブジェクトに変換しています。`acc`は累積器（accumulator）で、初期値は空のオブジェクト`{}`です。各ユーザーのIDをキー、ユーザーオブジェクトを値としたハッシュマップを作成しています。'
    },
    workplace: {
      lines: [
        '■ Q4 KPI Dashboard Review',
        'Analyze ROI, CAC, LTV correlations and',
        'explore churn rate improvement strategies.'
      ],
      selectedIndex: 1,
      explanation: 'ROI（投資収益率）、CAC（顧客獲得費用）、LTV（顧客生涯価値）は重要なビジネス指標です。この相関性分析により、投資効率と顧客価値の関係性を把握し、より効果的なマーケティング戦略を立案できます。'
    },
    understanding: {
      lines: [
        'The phenomenological approach to consciousness',
        'emphasizes the subjective experience and',
        'intentionality of mental states in cognition.'
      ],
      selectedIndex: 0,
      explanation: '現象学的アプローチは、意識の主観的体験と心的状態の志向性（何かに向けられている性質）を重視する哲学的手法です。客観的観察ではなく、体験者自身の視点から意識を理解しようとする方法論です。'
    },
    academic: {
      lines: [
        'The p-value indicates the probability of observing',
        'such extreme results under the null hypothesis,',
        'typically requiring α < 0.05 for significance.'
      ],
      selectedIndex: 1,
      explanation: 'p値は帰無仮説が真である場合に、観測された結果またはそれより極端な結果が得られる確率を示します。一般的にα（有意水準）を0.05未満に設定し、p値がこれを下回る場合に統計的に有意と判定します。'
    },
    english: {
      lines: [
        'The implementation leverages microservices',
        'architecture with eventual consistency patterns',
        'to ensure scalable distributed computing.'
      ],
      selectedIndex: 1,
      explanation: '「eventual consistency」は結果整合性と呼ばれる分散システムの概念です。すべてのノードが即座に同期されるのではなく、最終的には整合性が保たれる仕組みで、可用性とパフォーマンスを優先したアーキテクチャで使用されます。'
    },
    legal: {
      lines: [
        'Article 12 (Disclaimer)',
        'Regarding non-performance due to force majeure,',
        'the parties shall mutually exempt each other.'
      ],
      selectedIndex: 1,
      explanation: '不可抗力とは、天災、戦争、法令の変更など、当事者の意思や努力では防ぐことができない外部的な事情を指します。このような状況で契約履行ができない場合、責任を免除する条項です。'
    }
  }
};

// Update content patterns based on language
function updateContentPatternsLanguage(lang) {
  // Update current content patterns reference
  window.currentContentPatterns = contentPatterns[lang];
}

let currentPatternIndex = 0;
let patternKeys = Object.keys(contentPatterns.en);
let animationInterval;

// Function to update text demo content with smooth animation
function updateTextDemo(patternKey) {
  const currentContentPatterns = window.currentContentPatterns || contentPatterns[currentLang];
  const pattern = currentContentPatterns[patternKey];
  const textDemo = document.getElementById('textDemo');
  
  if (!textDemo) return;
  
  // Add fade out class
  textDemo.classList.add('fade-out');
  
  setTimeout(() => {
    // Update content
    const textLines = textDemo.querySelectorAll('.text-line');
    const bubbleContent = textDemo.querySelector('.bubble-content');
    
    
    // Update text lines
    pattern.lines.forEach((line, index) => {
      if (textLines[index]) {
        textLines[index].textContent = line;
        textLines[index].classList.toggle('selected', index === pattern.selectedIndex);
      }
    });
    
    // Update explanation
    if (bubbleContent) {
      bubbleContent.textContent = pattern.explanation;
    }
    
    // Remove fade out and add fade in
    textDemo.classList.remove('fade-out');
    textDemo.classList.add('fade-in');
    
    setTimeout(() => {
      textDemo.classList.remove('fade-in');
      
    }, 500);
  }, 250);
}

// Start the animation cycle
function startContentAnimation() {
  // Initial delay
  setTimeout(() => {
    animationInterval = setInterval(() => {
      currentPatternIndex = (currentPatternIndex + 1) % patternKeys.length;
      updateTextDemo(patternKeys[currentPatternIndex]);
    }, 7000); // Change every 7 seconds
  }, 3000); // Start after 3 seconds
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  
  // Initialize language switching
  // cleanup: .lang-btn not used
  
  // Initialize with page default language (falls back to 'en')
  const initialLang = window.DEFAULT_LANG || 'en';
  switchLanguage(initialLang);
  
  // Initialize animation
  startContentAnimation();
});

// Subtle tilt effect for .tilt elements
// removed: tilt effect (unused)

// ------------------------------
// Download button enhancement
// - Detect OS
// - Fetch latest GitHub release assets
// - Point buttons to correct installer
// ------------------------------
(function setupDownloadButtons(){
  const REPO = 'co-r-e/IrukaDark';
  const STABLE_MAC = 'IrukaDark-macOS-arm64.dmg';

  async function fetchLatest(){
    try{
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers: { 'Accept': 'application/vnd.github+json' } });
      if (!res.ok) throw new Error('GitHub API error');
      return await res.json();
    }catch(e){
      return null;
    }
  }

  function pickMacAsset(assets){
    if (!Array.isArray(assets)) return null;
    const byName = (pat) => assets.find(a => a && a.name && pat.test(a.name));
    return byName(/arm64.*\.dmg$/i) || byName(/\.dmg$/i) || byName(/\.pkg$/i) || null;
  }

  async function init(){
    const btns = [
      document.getElementById('download-btn'),
      document.getElementById('download-btn-cta')
    ].filter(Boolean);
    const navBtn = document.getElementById('download-nav');
    const lang = (document.documentElement && document.documentElement.lang) || currentLang || window.DEFAULT_LANG || 'en';
    const downloadBase = (lang === 'ja') ? '/ja/downloads' : '/downloads';

    // Default: point to mac downloads page
    btns.forEach(b => { if (b) b.href = downloadBase; });
    if (navBtn) navBtn.href = downloadBase;

    // Try to fetch latest release and update buttons to direct mac asset
    const release = await fetchLatest();
    const asset = release && pickMacAsset(release.assets);
    const url = asset && asset.browser_download_url ? asset.browser_download_url : `https://github.com/${REPO}/releases/latest/download/${encodeURIComponent(STABLE_MAC)}`;
    btns.forEach(b => { b.href = url; });
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ---------------------------------------------
// Mobile-only header CTA label override
// - Header button (`#download-nav`) shows a shorter label on small screens
// - Only affects the header; hero/CTA buttons remain unchanged
// ---------------------------------------------
(function mobileHeaderCtaLabel(){
  function applyHeaderCtaResponsiveLabel(){
    const navBtn = document.getElementById('download-nav');
    if (!navBtn) return;
    const lang = (document.documentElement && document.documentElement.lang) || currentLang || (window.DEFAULT_LANG || 'en');
    const isMobile = (window.matchMedia && window.matchMedia('(max-width: 720px)').matches) || (window.innerWidth && window.innerWidth <= 720);
    const desktopLabel = (translations[lang] && translations[lang]['header.clone']) || navBtn.textContent || '';
    const mobileLabel = (lang === 'ja') ? 'ダウンロード' : 'Download';
    navBtn.textContent = isMobile ? mobileLabel : desktopLabel;
  }
  // Expose for reuse from elsewhere if needed
  window.applyHeaderCtaResponsiveLabel = applyHeaderCtaResponsiveLabel;

  const reapply = () => { try { applyHeaderCtaResponsiveLabel(); } catch (_) {} };
  document.addEventListener('DOMContentLoaded', reapply);
  window.addEventListener('resize', reapply, { passive: true });
  window.addEventListener('orientationchange', reapply, { passive: true });
})();
