document.getElementById('year').textContent = new Date().getFullYear();

// Multi-language support
const translations = {
  en: {
    'meta.title': 'IrukaDark — AI that instantly explains your screen',
    'meta.description': 'Explain text, images, tables, and PDFs right on your screen. One‑key shortcuts (Option+A/S), bilingual JA/EN, privacy‑friendly, open source.',
    'header.clone': 'Download for Mac',
    'hero.title': 'Everything on your screen, <span class="grad-white">explained fast</span>',
    'hero.subtitle': 'Stop copying, switching screens, pasting, and waiting for output. Skip turning everything into a chat box. Text, code, images, tables, URLs—IrukaDark explains them instantly so you move faster.',
    'hero.cta': 'Download for Mac',
    'demo.question': 'What does this mean?',
    'demo.explanation': 'This `reduce` method takes each element (user) from the array and converts it into an object. `acc` is the accumulator with an initial value of an empty object `{}`. It creates a hash map with each user\'s ID as the key and the user object as the value.',
    'features.title': 'Work Faster on Your Computer',
    'features.subtitle': 'No more “I don’t get it.” Instant, context‑aware understanding keeps you moving.',
    'features.instant.title': 'Instant Explanation Shortcuts',
    'features.instant.description': 'Highlight text or a region and trigger the shortcut that fits the moment. IrukaDark responds in place with fast, context‑aware explanations—no extra windows.',
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
    'howto2.commands.translate.description': 'Translate the last explanation into 10+ supported languages—or paraphrase in the same language—just by naming the target.',
    'howto2.commands.web.title': '/web',
    'howto2.commands.web.description': 'Toggle web search mode so IrukaDark pulls in fresh results while it explains.',
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
    'hero.subtitle': 'もう「コピーして、画面遷移して、貼り付けて、出力を待つ」なんてことは今すぐやめましょう。でチャット欄にする手間は必要ありません。テキストも、コードも、画像も、図表も、URLも。IrukaDarkが一瞬で解説してあなたの作業を超高速にします。',
    'hero.cta': 'Mac用ダウンロード',
    'demo.question': 'これどういうこと？',
    'demo.explanation': 'この`reduce`メソッドは、配列の各要素（user）を取り出し、オブジェクトに変換しています。`acc`は累積器（accumulator）で、初期値は空のオブジェクト`{}`です。各ユーザーのIDをキー、ユーザーオブジェクトを値としたハッシュマップを作成しています。',
    'features.title': 'パソコン作業が高速に捗る',
    'features.subtitle': 'もう「わからない」で止まらない。瞬時理解で作業が加速します。',
    'features.instant.title': '瞬時解説ショートカット',
    'features.instant.description': 'テキストや画面の気になる範囲を選んで専用ショートカットを押すだけ。状況に応じて最適なコマンドを切り替えながら、文脈に沿った解説がその場で得られます。',
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
    'howto2.commands.translate.description': '直前の解説を指定した言語に翻訳。対応言語は10種類以上で、言い換えにも使えます。',
    'howto2.commands.web.title': '/web',
    'howto2.commands.web.description': 'Web検索モードのオン/オフを切り替え。最新の検索結果を反映した解説にできます。',
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
      body: 'IrukaDark v1.0.10 で翻訳機能を強化しました。スラッシュコマンド <code>/translate</code> から様々な言語へ高速に翻訳できます。まだダウンロード配布は準備中のため、GitHub からクローンしてご利用ください。<br><code>git clone https://github.com/co-r-e/IrukaDark.git</code>'
    },
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
      body: 'IrukaDark v1.0.10 boosts translation. Use the slash command <code>/translate</code> to quickly translate into multiple languages. Installers are not ready yet—clone the project from GitHub to use it.<br><code>git clone https://github.com/co-r-e/IrukaDark.git</code>'
    },
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
