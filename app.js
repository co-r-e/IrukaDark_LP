document.getElementById('year').textContent = new Date().getFullYear();

// Multi-language support
const translations = {
  en: {
    'meta.title': 'IrukaDark — Desktop AI that instantly explains any text',
    'meta.description': 'Select any text on your screen and press Option/Alt+A for a clear, context‑aware explanation. Capture an area with Option/Alt+S for screenshot analysis. Open‑source and free.',
    'header.clone': 'Get Started on GitHub',
    'hero.title': 'Understand <span class="grad-white">any on‑screen text instantly</span> with a desktop AI assistant',
    'hero.subtitle': 'Select text in your browser, docs, or apps and press Option/Alt+A for a context‑aware explanation. Select an area and press Option/Alt+S for screenshot analysis—stay in flow.',
    'hero.cta': 'Get Started on GitHub',
    'demo.question': 'Plain explanation',
    'demo.explanation': "Plain: You'll be charged monthly until you cancel.",
    'features.title': 'Work Faster on Your Computer',
    'features.subtitle': 'No more “I don’t get it.” Instant, context‑aware understanding keeps you moving.',
    'features.instant.title': 'Instant Explanation (Option/Alt+A)',
    'features.instant.description': 'Select text in any website, document, or app and press Option/Alt+A to get a clear, context‑aware explanation. Faster than dictionaries or search.',
    'features.flow.title': 'Stay in Flow',
    'features.flow.description': 'Skip window‑switching and copy‑paste. Ask in place with Option/Alt+A, or capture an area with Option/Alt+S. Resolve questions without breaking focus.',
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
    'howto.title': 'How It Works',
    'howto.subtitle': 'Three quick steps: clone and start immediately.',
    'howto.step1.title': 'Clone from GitHub',
    'howto.step1.description': 'Clone the repo, install dependencies, and finish setup.',
    'howto.step2.title': 'Select Text (Option/Alt+A) or Area (Option/Alt+S)',
    'howto.step2.description': 'Select text in websites, docs, or apps and press Option/Alt+A for explanations. Select an area and press Option/Alt+S for screenshot analysis.',
    'howto.step2.hint': 'Text → Option/Alt+A • Area → Option/Alt+S',
    'howto.screenshot.hint': 'Screenshot Analysis',
    'howto.step3.title': 'Get Context‑Aware Explanations',
    'howto.step3.description': 'Understand intent and background—not just words—so you can keep working.',
    'cta.title': 'Get Started Free',
    'cta.description': 'Clone from GitHub and speed up your work. Open source and free.',
    'cta.button': 'Get Started on GitHub',
    'footer.copyright': '© <span id="year"></span> CORe, Inc. All rights reserved.'
  },
  ja: {
    'meta.title': 'IrukaDark — デスクトップでテキストを瞬時解説するAI（Option+A/Option+S対応）',
    'meta.description': 'テキストを選択して Option+A、範囲を選んで Option+S。文脈に沿った解説をその場で表示。オープンソースで無料。',
    'header.clone': 'クローンして使う',
    'hero.title': 'デスクトップで<span class="grad-white">テキストを瞬時に解説</span>するAIアシスタント',
    'hero.subtitle': 'ブラウザやドキュメント、アプリ上のテキストを選択してOption/Alt+Aで文脈に沿った解説。範囲を選んでOption/Alt+Sでスクリーンショット解析。作業の流れを止めません。',
    'hero.cta': 'GitHubからクローン',
    'demo.question': 'かんたんに言うと',
    'demo.explanation': '簡単に: 解約しないと毎月課金されます。',
    'features.title': 'パソコン作業が高速に捗る',
    'features.subtitle': 'もう「わからない」で止まらない。瞬時理解で作業が加速します。',
    'features.instant.title': '瞬時解説（Option+A）',
    'features.instant.description': 'ウェブサイト、ドキュメント、アプリなどで難しい文章や専門用語を選択してOption/Alt+A。辞書や検索よりも速く、文脈に沿った的確な解説が得られます。',
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
    'howto.title': '使い方',
    'howto.subtitle': 'たった3ステップで、GitHubからクローンして即時利用開始',
    'howto.step1.title': 'GitHubからクローン',
    'howto.step1.description': 'リポジトリをローカル環境にクローンし、必要な依存関係をインストールしてセットアップを完了します。',
    'howto.step2.title': 'テキストを選択してOption/Alt+A / 範囲を選択してOption/Alt+S',
    'howto.step2.description': 'ウェブサイト、ドキュメント、アプリで出会った難しいテキストはOption/Alt+Aで解説。画像やグラフなどの視覚コンテンツは範囲を選んでOption/Alt+Sでスクリーンショット解析。',
    'howto.step2.hint': 'テキスト → Option/Alt+A / 範囲 → Option/Alt+S',
    'howto.screenshot.hint': 'スクリーンショット解説',
    'howto.step3.title': '文脈を踏まえた解説を受け取り',
    'howto.step3.description': 'ただの単語の意味ではなく、文脈や背景を踏まえた理解が得られ、パソコン作業がスムーズに進みます。',
    'cta.title': '今すぐクローンして使う',
    'cta.description': 'GitHubからクローンして、すぐにパソコン作業の効率を向上させましょう。オープンソースで無料で利用できます。',
    'cta.button': 'GitHub',
    'footer.copyright': '© <span id="year"></span> CORe, Inc. All rights reserved.'
  }
};

let currentLang = 'en'; // デフォルトは英語

// Language switching functionality
function switchLanguage(lang) {
  currentLang = lang;
  
  // Update dropdown display
  const langTrigger = document.getElementById('langTrigger');
  const globeIcon = langTrigger.querySelector('.globe-icon');
  const langOptions = document.querySelectorAll('.lang-option');
  
  // Keep the globe icon the same for both languages
  // No need to change the globe icon
  
  // Update active option
  langOptions.forEach(option => {
    option.classList.toggle('active', option.dataset.lang === lang);
  });
  
  // Close dropdown
  closeLanguageDropdown();
  
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
  langTrigger.addEventListener('click', toggleLanguageDropdown);
  
  // Language option selection -> navigate to language-specific URL for SEO
  function getCanonicalBaseUrl() {
    const link = document.querySelector('link[rel="canonical"]');
    try {
      const u = new URL(link ? link.href : window.location.href);
      // Ensure trailing slash and strip `/ja/` if present
      if (u.pathname.endsWith('/ja/')) {
        u.pathname = u.pathname.replace(/ja\/$/, '');
      }
      if (!u.pathname.endsWith('/')) u.pathname += '/';
      u.search = '';
      u.hash = '';
      return u.toString();
    } catch (e) {
      // Fallback to origin + path directory
      const path = window.location.pathname.replace(/(ja\/)?[^/]*$/, '');
      return window.location.origin + path;
    }
  }

  function navigateToLanguage(lang) {
    const base = getCanonicalBaseUrl();
    const target = lang === 'ja' ? base + 'ja/' : base;
    window.location.href = target;
  }

  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToLanguage(option.dataset.lang);
    });
  });
  
  // Initialize with page default language (falls back to 'en')
  const initialLang = window.DEFAULT_LANG || 'en';
  switchLanguage(initialLang);
});

// Content patterns for different use cases
const contentPatterns = {
  en: {
    programming: {
      lines: [
        'Original: The function caches results to speed up,',
        'and may briefly serve slightly stale data',
        'while it refreshes in the background.'
      ],
      selectedIndex: 1,
      explanation: 'Plain: It saves answers to make things fast; info might be slightly out of date for a short time.'
    },
    workplace: {
      lines: [
        'Original: All expenses must be pre‑approved;',
        'claims submitted without prior approval will be',
        'rejected by finance.'
      ],
      selectedIndex: 1,
      explanation: 'Plain: Get approval first; otherwise you won’t be reimbursed.'
    },
    understanding: {
      lines: [
        'Original: Idempotent requests can be retried',
        'without causing additional side effects or',
        'changing the final outcome.'
      ],
      selectedIndex: 1,
      explanation: 'Plain: Sending the same request again won’t change the result.'
    },
    academic: {
      lines: [
        'Original: The small sample size limits the',
        'generalizability of our findings and warrants',
        'caution when interpreting results.'
      ],
      selectedIndex: 1,
      explanation: 'Plain: Few participants; results may not apply broadly.'
    },
    english: {
      lines: [
        'Original: Your plan renews automatically each',
        'month unless you cancel at least 24 hours',
        'before the renewal date.'
      ],
      selectedIndex: 1,
      explanation: "Plain: You'll be charged monthly until you cancel."
    },
    legal: {
      lines: [
        'Original: We may terminate this agreement at',
        'our sole discretion without prior notice to',
        'the customer.'
      ],
      selectedIndex: 1,
      explanation: 'Plain: We can end the contract when we decide.'
    }
  },
  ja: {
    programming: {
      lines: [
        '原文: 関数は処理を高速化するため結果をキャッシュし、',
        '更新中は短時間、やや古い情報を返す場合が',
        'あります。'
      ],
      selectedIndex: 1,
      explanation: '簡単に: 速くするため一時的に古い情報のことがあります。'
    },
    workplace: {
      lines: [
        '原文: 経費は事前承認が必須で、',
        '承認のない申請は経理により',
        '却下されます。'
      ],
      selectedIndex: 1,
      explanation: '簡単に: まず承認。ないと精算されません。'
    },
    understanding: {
      lines: [
        '原文: 冪等なリクエストは再試行しても',
        '追加の副作用を起こさず、',
        '最終的な結果も変わりません。'
      ],
      selectedIndex: 1,
      explanation: '簡単に: 同じ操作を繰り返しても結果は同じです。'
    },
    academic: {
      lines: [
        '原文: サンプル数が少ないため、',
        '研究結果の一般化には限界があり、',
        '解釈には注意が必要です。'
      ],
      selectedIndex: 1,
      explanation: '簡単に: 参加者が少ないので結論は限定的です。'
    },
    english: {
      lines: [
        '原文: プランは解約しない限り毎月自動更新され、',
        '更新日の24時間前までに解約しないと',
        '次回分が請求されます。'
      ],
      selectedIndex: 1,
      explanation: '簡単に: 解約しないと毎月課金されます。'
    },
    legal: {
      lines: [
        '原文: 当社の裁量で、',
        '事前の通知なく本契約を',
        '終了できるものとします。'
      ],
      selectedIndex: 1,
      explanation: '簡単に: 判断次第で契約を終わらせられます。'
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
  console.log('Updating text demo with pattern:', patternKey);
  const currentContentPatterns = window.currentContentPatterns || contentPatterns[currentLang];
  const pattern = currentContentPatterns[patternKey];
  const textDemo = document.getElementById('textDemo');
  
  if (!textDemo) {
    console.error('textDemo element not found!');
    return;
  }
  
  console.log('Found textDemo element, applying fade-out');
  // Add fade out class
  textDemo.classList.add('fade-out');
  
  setTimeout(() => {
    console.log('Updating content with pattern:', pattern);
    // Update content
    const textLines = textDemo.querySelectorAll('.text-line');
    const bubbleContent = textDemo.querySelector('.bubble-content');
    
    console.log('Found text lines:', textLines.length);
    console.log('Found bubble content:', bubbleContent);
    
    // Update text lines
    pattern.lines.forEach((line, index) => {
      if (textLines[index]) {
        textLines[index].textContent = line;
        textLines[index].classList.toggle('selected', index === pattern.selectedIndex);
        console.log(`Updated line ${index}:`, line);
      }
    });
    
    // Update explanation
    if (bubbleContent) {
      bubbleContent.textContent = pattern.explanation;
      console.log('Updated explanation:', pattern.explanation);
    }
    
    // Remove fade out and add fade in
    textDemo.classList.remove('fade-out');
    textDemo.classList.add('fade-in');
    console.log('Applied fade-in effect');
    
    setTimeout(() => {
      textDemo.classList.remove('fade-in');
      console.log('Removed fade-in class');
    }, 500);
  }, 250);
}

// Start the animation cycle
function startContentAnimation() {
  console.log('Starting content animation...');
  // Initial delay
  setTimeout(() => {
    console.log('Initial delay complete, starting interval');
    animationInterval = setInterval(() => {
      currentPatternIndex = (currentPatternIndex + 1) % patternKeys.length;
      console.log('Changing to pattern index:', currentPatternIndex, 'Pattern:', patternKeys[currentPatternIndex]);
      updateTextDemo(patternKeys[currentPatternIndex]);
    }, 7000); // Change every 7 seconds
  }, 3000); // Start after 3 seconds
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded, initializing...');
  
  // Initialize language switching
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
    });
  });
  
  // Initialize with page default language (falls back to 'en')
  const initialLang = window.DEFAULT_LANG || 'en';
  switchLanguage(initialLang);
  
  // Initialize animation
  console.log('Available patterns:', patternKeys);
  console.log('Text demo element:', document.getElementById('textDemo'));
  startContentAnimation();
});

// Subtle tilt effect for .tilt elements
const maxTilt = 6;
const cards = document.querySelectorAll('.tilt');
cards.forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -maxTilt;
    const ry = ((x - rect.width / 2) / rect.width) * maxTilt;
    el.style.transform = `translateY(-2px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});
