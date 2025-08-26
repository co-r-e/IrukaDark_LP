document.getElementById('year').textContent = new Date().getFullYear();

// Multi-language support
const translations = {
  en: {
    'meta.title': 'IrukaDark — AI that instantly explains unknown text',
    'meta.description': 'Simply select unknown text you encounter while using your computer and press Option+A. IrukaDark provides clear explanations on the spot. Clone from GitHub and start using immediately.',
    'header.clone': 'Clone & Use',
    'hero.title': 'AI assistant that <span class="grad-white">instantly explains</span> unknown text and stays on your desktop',
    'hero.subtitle': 'Difficult sentences and technical terms you encounter while using your computer. Just select text and press Option+A for instant explanations, or select any area and press Option+S to take a screenshot and get visual explanations. No need to stop anymore.',
    'hero.cta': 'Clone from GitHub',
    'demo.question': 'What does this mean?',
    'demo.explanation': 'This `reduce` method takes each element (user) from the array and converts it into an object. `acc` is the accumulator with an initial value of an empty object `{}`. It creates a hash map with each user\'s ID as the key and the user object as the value.',
    'features.title': 'Accelerate Your Computer Work',
    'features.subtitle': 'No more stopping at "I don\'t understand." Instant comprehension speeds up your workflow.',
    'features.instant.title': 'Instant Explanation (Option+A)',
    'features.instant.description': 'Select difficult sentences or technical terms on websites, documents, or apps and press Option+A. For images, graphs, or visual content, select the area and press Option+S for screenshot explanations. Get accurate, context-aware explanations faster than dictionaries or search engines.',
    'features.flow.title': 'Never Break Your Flow',
    'features.flow.description': 'No need to switch to another window, copy text you want to understand, paste it into an AI input form, and wait for an answer. Just select text and press Option+A, or select an area and press Option+S on the spot. Resolve questions instantly without disrupting your workflow.',
    'features.secure.title': 'Simple & Secure',
    'features.secure.description': 'IrukaDark doesn\'t maintain a database. Your data isn\'t used for AI training, ensuring privacy protection and peace of mind.',
    'usecases.title': 'Perfect for These Scenarios',
    'usecases.subtitle': 'Instantly understand every "What does this mean?" moment in your daily computer work.',
    'usecases.programming.title': 'Programming Learning',
    'usecases.programming.description': 'When encountering various methods and functions. Get explanations on the spot the moment you encounter unknown processes while reading code.',
    'usecases.workplace.title': 'New Workplace & Industry',
    'usecases.workplace.description': 'When job changes or transfers expose you to many technical terms. Quickly understand industry-specific words and concepts to adapt to new environments faster.',
    'usecases.understanding.title': 'Deep Understanding Needed',
    'usecases.understanding.description': 'When you want to know the intent and background of unfamiliar words, not just translations. Understand beyond word meanings to why certain expressions are used.',
    'usecases.academic.title': 'Academic Papers & Research',
    'usecases.academic.description': 'When encountering complex concepts while reading papers or research materials. Get clear explanations of deep specialized content in understandable language.',
    'usecases.english.title': 'Foreign Sites & English Resources',
    'usecases.english.description': 'When reading English technical documents or websites and encountering expressions that translation tools can\'t fully clarify. Get natural explanations that fit the context.',
    'usecases.legal.title': 'Contracts & Legal Documents',
    'usecases.legal.description': 'When reviewing important contracts or legal documents and needing to understand specialized clauses or terminology. Get support for better comprehension.',
    'howto.title': 'How to Use',
    'howto.subtitle': 'Just 3 steps: Clone from GitHub and start using immediately',
    'howto.step1.title': 'Clone from GitHub',
    'howto.step1.description': 'Clone the repository to your local environment, install necessary dependencies, and complete the setup.',
    'howto.step2.title': 'Select Text and Press Option+A / Select Area and Press Option+S',
    'howto.step2.description': 'Select difficult text you encounter on websites, documents, or apps, and request explanations with Option+A. For visual content like images or graphs, select the area and press Option+S for screenshot explanations.',
    'howto.step2.hint': 'Text → Option + A / Area → Option + S',
    'howto.screenshot.hint': 'Screenshot Explanation',
    'howto.step3.title': 'Receive Context-Aware Explanations',
    'howto.step3.description': 'Get understanding based on context and background, not just word meanings, making your computer work smoother.',
    'cta.title': 'Clone and Use Now',
    'cta.description': 'Clone from GitHub and immediately improve your computer work efficiency. Available as open source for free.',
    'cta.button': 'GitHub',
    'footer.copyright': '© <span id="year"></span> CORe, Inc. All rights reserved.'
  },
  ja: {
    'meta.title': 'IrukaDark — わからないテキストを瞬時に理解するAI',
    'meta.description': 'パソコン操作中に出会うわからない文章や専門用語を選択してOption+Aを押すだけ。IrukaDarkがその場で分かりやすく解説します。GitHubからクローンして今すぐ利用開始。',
    'header.clone': 'クローンして使う',
    'hero.title': 'わからないテキストを<span class="grad-white">瞬時に解説</span>してくれるデスクトップ常駐AIアシスタント',
    'hero.subtitle': 'パソコン操作中に出会う難しい文章や専門用語。テキストを選択してOption+A、または範囲を選択してOption+Sでスクリーンショットを撮影し、IrukaDarkがその場で分かりやすく解説します。もう立ち止まる必要はありません。',
    'hero.cta': 'GitHubでクローン',
    'demo.question': 'これどういうこと？',
    'demo.explanation': 'この`reduce`メソッドは、配列の各要素（user）を取り出し、オブジェクトに変換しています。`acc`は累積器（accumulator）で、初期値は空のオブジェクト`{}`です。各ユーザーのIDをキー、ユーザーオブジェクトを値としたハッシュマップを作成しています。',
    'features.title': 'パソコン作業が高速に捗る',
    'features.subtitle': 'もう「わからない」で止まらない。瞬時理解で作業が加速します。',
    'features.instant.title': '瞬時解説（Option+A）',
    'features.instant.description': 'ウェブサイト、ドキュメント、アプリなどで難しい文章や専門用語を選択してOption+A。辞書や検索よりも速く、文脈に沿った的確な解説が得られます。',
    'features.flow.title': 'フローを断ち切らない',
    'features.flow.description': 'いちいち別のウィンドウに移動して、知りたいテキストをコピーして、AIの入力フォームに貼り付けて、回答を待つ、なんてことは不要です。その場で選択してOption+Aを押すだけ。作業の流れを止めることなく、瞬時に疑問を解決できます。',
    'features.secure.title': 'シンプル・セキュア',
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
    'howto.step2.title': 'テキストを選択してOption+A',
    'howto.step2.description': 'ウェブサイト、ドキュメント、アプリなどで出会った難しいテキストを選択し、Option+Aで解説をリクエスト。',
    'howto.step2.hint': 'テキスト → Option + A / 範囲 → Option + S',
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
  
  // Language option selection
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      switchLanguage(option.dataset.lang);
    });
  });
  
  // Initialize with English
  switchLanguage('en');
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
        '■ KPIダッシュボードの四半期レビュー',
        'ROI、CAC、LTVの相関性分析を実施し、',
        'チャーンレートの改善施策を検討する。'
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
        '第12条（免責事項）',
        '不可抗力による履行不能については、',
        '当事者は相互に免責されるものとする。'
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
  
  // Initialize with English
  switchLanguage('en');
  
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
