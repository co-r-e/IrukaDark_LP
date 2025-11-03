document.getElementById('year').textContent = new Date().getFullYear();

// Multi-language support
const translations = {
  en: {
    'meta.title': 'IrukaDark — AI that instantly explains your screen',
    'meta.description': 'Explain text, images, tables, and PDFs right on your screen. One‑key shortcuts (Option+A/S), bilingual JA/EN, privacy‑friendly.',
    'header.clone': 'Free Download for Mac',
    'hero.title': 'Thinking without interruption, <span class="grad-white">your full-screen AI assistant</span>',
    'hero.subtitle': 'Code, errors, PRs, charts, papers, tech sites. Instantly understand anything on your screen with a single shortcut.',
    'hero.cta': 'Free Download for Mac',
    'demo.question': 'What does this mean?',
    'demo.explanation': 'This `reduce` method takes each element (user) from the array and converts it into an object. `acc` is the accumulator with an initial value of an empty object `{}`. It creates a hash map with each user\'s ID as the key and the user object as the value.',
    'features.title': 'AI that accelerates AI utilization',
    'features.subtitle': 'No more "I don\'t get it." Instant, context‑aware understanding keeps you moving.',
    'features.instant.title': 'Ultra-Fast Smart Explanations Without Prompts',
    'features.instant.description': 'No need to type prompts like "explain this error code." Just highlight what\'s on your screen and hit the shortcut. IrukaDark instantly delivers context-aware explanations right where you are.',
    'features.flow.title': 'Real-Time Screen Analysis AI',
    'features.flow.description': 'No more switching between windows. No need to copy text, paste it into an AI input form, and wait for answers. Resolve questions stress-free without breaking your flow.',
    'features.secure.title': 'Works with Any Digital Tool',
    'features.secure.description': 'IrukaDark works with any tool. Of course, it works alongside the latest AI products. It can also be used with legacy business systems.',
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
    'demo.subtitle': 'Select text or capture an area—IrukaDark explains it on-screen.',
    'demo.note': 'Tip: Text = Option+A · Screenshot = Option+S',

    // Languages section
    'languages.title': 'Supported Languages',
    'languages.subtitle': 'IrukaDark delivers explanations in 17 languages worldwide.',
    'languages.note': 'Languages:',

    // Where it works
    'where.title': 'Works where you work',
    'where.subtitle': 'IrukaDark rides on top of your tools—no context switching.',
    'where.chatgpt.title': 'On ChatGPT, Gemini & Claude',
    'where.chatgpt.desc': 'Explain AI outputs with AI. Review and refine prompts in place.',
    'where.cursor.title': 'On Cursor',
    'where.cursor.desc': 'Understand AI-generated code instantly. Speed up code reviews.',
    'where.terminal.title': 'On Terminal',
    'where.terminal.desc': 'Select complex commands or flags for instant explanations. Decode error messages on the spot.',
    'where.paircoding.title': 'For Vibe Coding',
    'where.paircoding.desc': 'Instantly explain errors in unfamiliar languages or frameworks. Understand code intent on the fly.',
    'where.error.title': 'For Error Codes',
    'where.error.desc': 'Select unfamiliar error messages to get causes and solutions instantly.',
    'where.github.title': 'On GitHub',
    'where.github.desc': 'Quickly understand PRs, issues, and code review comments. Speed up your workflow.',
    'where.figma.title': 'On Figma',
    'where.figma.desc': 'Select design comments or component names to quickly grasp intent.',
    'where.workflow.title': 'For Workflow Diagrams',
    'where.workflow.desc': 'Capture complex flow charts to clearly understand structure and process.',
    'where.paper.title': 'In AI Research Papers',
    'where.paper.desc': 'Select cutting-edge methods or formulas to explain concepts in plain language.',
    'where.x.title': 'On X (Twitter)',
    'where.x.desc': 'Select long threads or technical terms to instantly grasp context and key points.',
    'where.producthunt.title': 'On Product Hunt',
    'where.producthunt.desc': 'Select product descriptions to quickly understand features and value.',
    'where.lovable.title': 'On Lovable',
    'where.lovable.desc': 'Explain generated code or prompts in place. Develop smoothly.',
    'howto.title': 'How It Works',
    'howto.subtitle': 'Use global shortcuts to trigger IrukaDark instantly.',
    'howto.cards.instant.title': 'Option+A — Quick Explain',
    'howto.cards.instant.caption': 'Mac: Option+A / Windows/Linux: Alt+A',
    'howto.cards.instant.description': 'Select text in any app and press Option+A (Alt+A on Windows/Linux) for a concise explanation that keeps you in flow.',
    'howto.cards.detail.title': 'Option+Shift+A — Deep Dive',
    'howto.cards.detail.caption': 'Mac: Option+Shift+A / Windows/Linux: Alt+Shift+A',
    'howto.cards.detail.description': 'Need extra context or step-by-step reasoning? Press Option+Shift+A (Alt+Shift+A) to request a more thorough breakdown.',
    'howto.cards.translate.title': 'Option+R — Translate & Rephrase',
    'howto.cards.translate.caption': 'Mac: Option+R / Windows/Linux: Alt+R',
    'howto.cards.translate.description': 'Turn the selection into natural Japanese or English with Option+R (Alt+R). Perfect for quick translations or rewrites.',
    'howto.cards.linkQuick.title': 'Option+1 — URL Quick Summary',
    'howto.cards.linkQuick.caption': 'Mac: Option+1 / Windows/Linux: Alt+1',
    'howto.cards.linkQuick.description': 'Select a URL in any document, hit Option+1 (Alt+1), and IrukaDark fetches the page to deliver an on-the-spot overview.',
    'howto.cards.linkDetail.title': 'Option+Shift+1 — URL Deep Summary',
    'howto.cards.linkDetail.caption': 'Mac: Option+Shift+1 / Windows/Linux: Alt+Shift+1',
    'howto.cards.linkDetail.description': 'Press Option+Shift+1 (Alt+Shift+1) on a highlighted link for a richer breakdown with key sections and takeaways.',
    'howto.cards.screenshot.title': 'Option+S — Screenshot Explain',
    'howto.cards.screenshot.caption': 'Mac: Option+S / Windows/Linux: Alt+S',
    'howto.cards.screenshot.description': 'Drag over images, charts, or PDFs and press Option+S (Alt+S) to explain what is on screen without leaving your app.',
    'howto.cards.screenshotDetail.title': 'Option+Shift+S — Screenshot Deep Dive',
    'howto.cards.screenshotDetail.caption': 'Mac: Option+Shift+S / Windows/Linux: Alt+Shift+S',
    'howto.cards.screenshotDetail.description': 'Press Option+Shift+S (Alt+Shift+S) for a more detailed analysis of the region you capture—ideal for dense visuals.',
    'howto2.title': 'How It Works 2',
    'howto2.subtitle': 'Slash commands that build on your latest explanation.',
    'howto2.commands.what.title': '/what do you mean?',
    'howto2.commands.what.description': 'Ask for a deeper dive on the previous answer, adding missing context or nuance.',
    'howto2.commands.next.title': '/next',
    'howto2.commands.next.description': 'Continue the last explanation so IrukaDark keeps elaborating without reselecting content.',
    'howto2.commands.table.title': '/table',
    'howto2.commands.table.description': 'Reformat the previous response into a clean table to compare points at a glance.',
    'howto2.commands.translate.title': '/translate',
    'howto2.commands.translate.description': 'Translate the last explanation into 17 supported languages—or paraphrase in the same language—just by naming the target.',
    'howto2.commands.web.title': '/web',
    'howto2.commands.web.description': 'Toggle web search mode so IrukaDark pulls in fresh results while it explains.',
    'cta.title': 'Download',
    'cta.description': 'Download for macOS. Free to use.',
    'cta.button': 'Free Download for Mac',
    'footer.copyright': '© <span id="year"></span> CORe, Inc. All rights reserved.'
  },
  ja: {
    'meta.title': 'IrukaDark（イルカダーク）— 画面のすべてを超高速解説するAI',
    'meta.description': 'IrukaDark（イルカダーク）は、テキスト・画像・表・PDFを画面上でそのまま解説・要約。Option+A/Sのショートカット、日英対応、プライバシー配慮。',
    'header.clone': 'Mac用無料ダウンロード',
    'hero.title': '思考を止めない、<br><span class="grad-white">全画面AIアシスタント</span>',
    'hero.subtitle': 'コードも、エラーも、PRも、図表も、論文も、技術サイトも。画面に映るあらゆる情報をショートカット一発で瞬間理解。',
    'hero.cta': 'Mac用無料ダウンロード',
    'demo.question': 'これどういうこと？',
    'demo.explanation': 'この`reduce`メソッドは、配列の各要素（user）を取り出し、オブジェクトに変換しています。`acc`は累積器（accumulator）で、初期値は空のオブジェクト`{}`です。各ユーザーのIDをキー、ユーザーオブジェクトを値としたハッシュマップを作成しています。',
    'features.title': 'AI活用を加速するAI',
    'features.subtitle': 'もう「わからない」で止まらない。瞬時理解で作業が加速します。',
    'features.instant.title': 'プロンプト不要の超高速スマート解説',
    'features.instant.description': 'わざわざ「このエラーコードの意味を教えて」なんてプロンプトを入力する必要はありません。画面に映っている気になる箇所で専用ショートカットを押すだけ。状況に応じて最適なコマンドを切り替えながら、文脈に沿った解説がその場で瞬時に得られます。',
    'features.flow.title': 'リアルタイム画面解析AI',
    'features.flow.description': 'もう、いちいちウィンドウを行き来する必要はありません。「AIに質問するためにテキストをコピーして、AIの入力フォームに貼り付けて、回答を待つ」なんてことは不要です。作業の流れを止めることなく、ストレスフリーに疑問を解決できます。',
    'features.secure.title': 'あらゆるデジタルツールと一緒に',
    'features.secure.description': 'IrukaDarkはあらゆるツールと併用できます。最新AIプロダクトと一緒に使うことはもちろん。業務用のレガシーなシステムと一緒に使うこともできます。',
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
    'where.chatgpt.title': 'ChatGPT・Gemini・Claudeの上で',
    'where.chatgpt.desc': 'AIの出力をさらにAIで要約・解説。プロンプトの見直しもその場で。',
    'where.cursor.title': 'Cursorの上で',
    'where.cursor.desc': 'AI生成コードの意図を即座に理解。コードレビューが加速します。',
    'where.terminal.title': 'ターミナルの上で',
    'where.terminal.desc': '複雑なコマンドやフラグを選択して即解説。エラーメッセージも瞬時に理解。',
    'where.paircoding.title': 'バイブコーディングで',
    'where.paircoding.desc': '未知の言語やフレームワークのエラーも即座に解説。コードの意図を瞬時に理解。',
    'where.error.title': 'エラーコードの解説で',
    'where.error.desc': '見慣れないエラーメッセージを選択して原因と対処法を即座に取得。',
    'where.github.title': 'GitHubの上で',
    'where.github.desc': 'PR・Issue・コードレビューコメントを素早く理解。レビューが捗ります。',
    'where.figma.title': 'Figmaの上で',
    'where.figma.desc': 'デザインコメントやコンポーネント名を選択して意図を素早く把握。',
    'where.workflow.title': 'ワークフロー図の解説で',
    'where.workflow.desc': '複雑なフロー図をキャプチャして構造と流れを明確に理解。',
    'where.paper.title': 'AI関連の学術論文で',
    'where.paper.desc': '最新の研究手法や数式を選択して概念を平易に解説。',
    'where.x.title': 'Xの上で',
    'where.x.desc': '長いスレッドや専門用語を選択して文脈と要点を即座に把握。',
    'where.producthunt.title': 'ProductHuntの上で',
    'where.producthunt.desc': '新しいプロダクトの説明を選択して機能と価値を素早く理解。',
    'where.lovable.title': 'Lovableの上で',
    'where.lovable.desc': '生成されたコードやプロンプトをその場で解説。開発がスムーズに。',
    'howto.title': '使い方',
    'howto.subtitle': 'ショートカットでいつでもIrukaDarkを呼び出せます。',
    'howto.cards.instant.title': 'Option+A — 即解説',
    'howto.cards.instant.caption': 'Mac: Option+A / Win・Linux: Alt+A',
    'howto.cards.instant.description': 'テキストを選択してOption+A（Windows/LinuxはAlt+A）。その場で要点を押さえた短い解説を表示します。',
    'howto.cards.detail.title': 'Option+Shift+A — 詳細解説',
    'howto.cards.detail.caption': 'Mac: Option+Shift+A / Win・Linux: Alt+Shift+A',
    'howto.cards.detail.description': '背景説明や手順が欲しいときはOption+Shift+A（Alt+Shift+A）。より深い情報を含むロングアンサーを得られます。',
    'howto.cards.translate.title': 'Option+R — 翻訳・言い換え',
    'howto.cards.translate.caption': 'Mac: Option+R / Win・Linux: Alt+R',
    'howto.cards.translate.description': '選択したテキストを自然な日本語・英語に翻訳、または噛み砕いて言い換え。Option+R（Alt+R）で即座に切り替えできます。',
    'howto.cards.linkQuick.title': 'Option+1 — URL概要',
    'howto.cards.linkQuick.caption': 'Mac: Option+1 / Win・Linux: Alt+1',
    'howto.cards.linkQuick.description': 'URLテキストを選択してOption+1（Alt+1）。ページを読み込んで要点だけを素早く解説します。',
    'howto.cards.linkDetail.title': 'Option+Shift+1 — URL詳細解説',
    'howto.cards.linkDetail.caption': 'Mac: Option+Shift+1 / Win・Linux: Alt+Shift+1',
    'howto.cards.linkDetail.description': 'Option+Shift+1（Alt+Shift+1）で選択したリンクを詳しく読み込み、重要セクションやポイントまで整理して届けます。',
    'howto.cards.screenshot.title': 'Option+S — スクショ解説',
    'howto.cards.screenshot.caption': 'Mac: Option+S / Win・Linux: Alt+S',
    'howto.cards.screenshot.description': '画像・グラフ・PDFなどを範囲選択してOption+S（Alt+S）。画面上の内容をそのまま読み取って要約します。',
    'howto.cards.screenshotDetail.title': 'Option+Shift+S — スクショ詳細解説',
    'howto.cards.screenshotDetail.caption': 'Mac: Option+Shift+S / Win・Linux: Alt+Shift+S',
    'howto.cards.screenshotDetail.description': '情報量の多いスライドや図解はOption+Shift+S（Alt+Shift+S）で詳細版を。細部まで丁寧に解説を受け取れます。',
    'howto2.title': '使い方2',
    'howto2.subtitle': 'スラッシュコマンドで直前の解説をさらに活用。',
    'howto2.commands.what.title': '/what do you mean?',
    'howto2.commands.what.description': '直前の解説の意味をもっと詳しく。背景や意図まで深掘りして補足してくれます。',
    'howto2.commands.next.title': '/next',
    'howto2.commands.next.description': 'さっきの解説の続きを依頼。再選択せずに話をどんどん掘り下げられます。',
    'howto2.commands.table.title': '/table',
    'howto2.commands.table.description': '直前の回答を表形式に整理。比較しやすく、ポイントが一目でわかります。',
    'howto2.commands.translate.title': '/translate',
    'howto2.commands.translate.description': '直前の解説を指定した言語に翻訳。対応言語は17種類で、言い換えにも使えます。',
    'howto2.commands.web.title': '/web',
    'howto2.commands.web.description': 'Web検索モードのオン/オフを切り替え。最新の検索結果を反映した解説にできます。',
    'cta.title': 'ダウンロード',
    'cta.description': 'macOS向けに無料でダウンロード。',
    'cta.button': 'Mac用無料ダウンロード',
    'footer.copyright': '© <span id="year"></span> CORe, Inc. All rights reserved.'
    ,
    // Demo section
    'demo.title': '操作デモを見る',
    'demo.subtitle': 'テキスト選択や範囲キャプチャに反応して、その場でAIが解説します。',
    'demo.note': 'ヒント: テキスト = Option+A ・ スクショ = Option+S',

    // Languages section
    'languages.title': '対応言語',
    'languages.subtitle': 'IrukaDark は世界17言語でそのまま解説を返します。',
    'languages.note': 'サポート言語：'
  }
};

let currentLang = 'en'; // デフォルトは英語

// Information notices (language-specific)
const infoNotices = {
  ja: [
    {
      date: '2025-10-30',
      title: 'v1.0.34 画像生成機能を追加',
      body: 'IrukaDark v1.0.34 で画像生成機能が追加されました。<code>/image</code> コマンドで同時生成枚数やアスペクト比を調整できます。クリエイティブな作業がさらに便利になりました。'
    },
    {
      date: '2025-10-16',
      title: 'macOS インストーラー配布を再開しました',
      body: 'IrukaDark v1.0.64 から、macOS 向けのインストーラー（Apple Silicon / Intel）を公式サイトのダウンロードページで提供しています。<br><a href="/ja/downloads" class="link">こちらからダウンロード</a>して、すぐにインストールしてご利用いただけます。'
    },
    {
      date: '2025-10-03',
      title: 'v1.0.17 内部最適化',
      body: 'IrukaDark v1.0.17 でコードのリファクタリングを実施し、応答速度をこれまで以上に高速化しました。より快適にご利用いただけます。'
    },
    {
      date: '2025-09-28',
      title: 'v1.0.13 ショートカット追加',
      body: 'IrukaDark v1.0.13 で <code>Option+1</code>（Alt+1）が登場。選択したURLを読み込んでその場で概要を解説します。さらに <code>Option+Shift+1</code>（Alt+Shift+1）で詳細解説も可能になりました。'
    },
    {
      date: '2025-09-17',
      title: 'v1.0.10 翻訳機能アップデート',
      body: 'IrukaDark v1.0.10 で翻訳機能を強化しました。スラッシュコマンド <code>/translate</code> から様々な言語へ高速に翻訳できます。現在は公式サイトから macOS インストーラーをダウンロードしてご利用いただけます。'
    },
    {
      date: '2025-09-01',
      title: 'Webサイト公開',
      body: 'IrukaDark の公式サイトを公開しました。使い方のポイントやデモ動画を用意しています。ぜひ触ってみて、フィードバックをお寄せください。'
    }
  ],
  en: [
    {
      date: '2025-10-30',
      title: 'v1.0.34 Image Generation Feature',
      body: 'IrukaDark v1.0.34 introduces image generation capability. Use the <code>/image</code> command to adjust batch size and aspect ratio for your creative workflows.'
    },
    {
      date: '2025-10-16',
      title: 'macOS Installers Are Back',
      body: 'Starting with IrukaDark v1.0.64, we are shipping official macOS installers for both Apple Silicon and Intel. Grab them from the <a href="/downloads" class="link">downloads page</a> and start using IrukaDark right away.'
    },
    {
      date: '2025-10-03',
      title: 'v1.0.17 Performance Boost',
      body: 'IrukaDark v1.0.17 delivers broad refactoring across the codebase and faster response times, keeping conversations snappy and reliable.'
    },
    {
      date: '2025-09-28',
      title: 'v1.0.13 Shortcut Update',
      body: 'IrukaDark v1.0.13 introduces <code>Option+1</code> (Alt+1) for instant URL overviews. Highlight a link and get a summary on the fly. Need more detail? Use <code>Option+Shift+1</code> (Alt+Shift+1) for a deeper dive.'
    },
    {
      date: '2025-09-17',
      title: 'v1.0.10 Translation Upgrade',
      body: 'IrukaDark v1.0.10 boosts translation. Use the slash command <code>/translate</code> to quickly translate into multiple languages. You can now install the app directly from our macOS installers on the downloads page.'
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
    const translation = translations[lang] && translations[lang][key];
    if (!translation) return;

    const tagName = element.tagName;
    if (tagName === 'META') {
      // Meta tags are void elements; update via attribute to avoid DOMException.
      element.setAttribute('content', translation);
    } else if (tagName === 'TITLE') {
      element.textContent = translation;
    } else {
      element.innerHTML = translation;
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
  // Mobile navigation toggle
  const nav = document.querySelector('.nav');
  const navToggle = document.getElementById('navToggle');
  const navActions = document.getElementById('navActions');

  if (nav && navToggle && navActions) {
    const setNavMenuState = (isOpen) => {
      nav.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    };

    const closeNavMenu = () => {
      setNavMenuState(false);
      if (typeof closeLanguageDropdown === 'function') {
        try {
          closeLanguageDropdown();
        } catch (err) {
          // Ignore if dropdown helpers are unavailable on this page
        }
      }
    };

    // Ensure initial state reflects desktop/mobile on load
    setNavMenuState(false);

    navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const nextState = !nav.classList.contains('is-open');
      setNavMenuState(nextState);
    });

    navActions.addEventListener('click', (event) => {
      const interactiveTarget = event.target instanceof Element ? event.target.closest('a, button') : null;
      if (!interactiveTarget) return;
      if (interactiveTarget.closest('.lang-dropdown')) return;
      if (nav.classList.contains('is-open')) {
        closeNavMenu();
      }
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('is-open')) return;
      if (event.target instanceof Element && nav.contains(event.target)) return;
      closeNavMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNavMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 720 && nav.classList.contains('is-open')) {
        closeNavMenu();
      }
    });
  }

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

  function normalizePathname(path) {
    if (!path) return '/';
    let cleaned = path.replace(/\/index\.html?$/i, '');
    cleaned = cleaned.replace(/\/+$/, '');
    if (cleaned === '') return '/';
    return cleaned;
  }

  function navigateToLanguage(lang) {
    const base = getCanonicalBaseUrl();
    const rawPath = (window.location && window.location.pathname) || '';
    const path = normalizePathname(rawPath);
    const routeMap = {
      '/': { en: '/', ja: '/ja' },
      '/ja': { en: '/', ja: '/ja' },
      '/downloads': { en: '/downloads', ja: '/ja/downloads' },
      '/ja/downloads': { en: '/downloads', ja: '/ja/downloads' },
      '/user-gaide': { en: '/user-gaide', ja: '/ja/user-gaide' },
      '/ja/user-gaide': { en: '/user-gaide', ja: '/ja/user-gaide' }
    };

    const fallback = routeMap['/'];
    const match = routeMap[path] || fallback;
    const targetPath = lang === 'ja' ? match.ja : match.en;
    const target = base + (targetPath === '/' ? '' : targetPath);
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

  // Information list: render first 3, lazy-load more on scroll
  (function setupInformationList(){
    const section = document.getElementById('information');
    if (!section) return;
    const list = section.querySelector('#infoList');
    if (!list) return;

    const lang = currentLang || window.DEFAULT_LANG || 'en';
    const all = Array.from((infoNotices[lang] || [])).sort((a,b) => (b.date || '').localeCompare(a.date || ''));

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

    function renderAll(){
      const frag = document.createDocumentFragment();
      all.forEach(item => frag.appendChild(createItem(item)));
      list.innerHTML = '';
      list.appendChild(frag);
      list.scrollTop = 0;
    }

    renderAll();
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
// Download buttons routing
// - Keep all CTA buttons pointing to localized downloads page
// ------------------------------
(function setupDownloadButtons(){
  function init(){
    const btns = [
      document.getElementById('download-btn'),
      document.getElementById('download-btn-cta')
    ].filter(Boolean);
    const navBtn = document.getElementById('download-nav');
    const lang = (document.documentElement && document.documentElement.lang) || currentLang || window.DEFAULT_LANG || 'en';
    const downloadBase = (lang === 'ja') ? '/ja/downloads' : '/downloads';

    // Route all CTAs to the downloads page; header button included
    btns.forEach(b => { if (b) b.href = downloadBase; });
    if (navBtn) navBtn.href = downloadBase;
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
