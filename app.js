// Multi-language support
const translations = {
  en: {
    'meta.title': 'IrukaDark — AI that instantly explains your screen',
    'meta.description': 'Explain text, images, tables, and PDFs right on your screen. One‑key shortcuts (Option+A/S), bilingual JA/EN, privacy‑friendly.',
    'header.clone': '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 2px; vertical-align: middle;"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>Download for Mac',
    'hero.title': '<span class="grad-white">High-Speed Desktop AI</span><br>That Boosts Your Productivity.',
    'hero.subtitle': '<strong>Instant explanations, terminal, and clipboard tools, all in one. A compact AI utility summoned by a single shortcut, packed with powerful features to accelerate your workflow.</strong>',
    'hero.cta': '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 3px; vertical-align: middle;"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>Download for Mac',
    'demo.question': 'What does this mean?',
    'demo.explanation': 'This `reduce` method takes each element (user) from the array and converts it into an object. `acc` is the accumulator with an initial value of an empty object `{}`. It creates a hash map with each user\'s ID as the key and the user object as the value.',
    'features.title': 'AI That Accelerates Your Thinking and Work.',
    'features.subtitle': 'No more "I don\'t get it." Instant, context‑aware understanding keeps you moving.',
    'features.instant.title': 'Shortcut → Whoosh → Done.',
    'features.instant.description': 'No need to type prompts like "explain this error code." Just highlight what\'s on your screen and hit the shortcut. IrukaDark instantly delivers context-aware explanations right where you are.',
    'features.flow.title': 'Analyzes the Screen You\'re Looking At.',
    'features.flow.description': 'Dev tools, SaaS dashboards, technical docs, academic PDFs. IrukaDark handles them all through one universal interface: your screen. No need to learn how each app works. Just select what catches your eye, and understand it instantly—in any language.',
    'features.secure.title': 'Versatile Features at Your Fingertips.',
    'features.secure.description': 'Image generation, video creation, deep-dive explanations, diagrams, slide creation, terminal operations, and more. Handle all your quick tasks without switching screens—your all-in-one AI companion.',
    'features.clipboard.title': 'Copy, Copy, Copy. Then Paste, Paste, Paste.',
    'features.clipboard.description': 'No more switching back and forth. Stack multiple copies in a row, then paste them in sequence. Turn repetitive copy-paste into a lightning-fast workflow.',
    'features.timer.title': 'Smart Time Control.',
    'features.timer.description': 'Timer, stopwatch, and more—set a time to automatically open apps or websites. Never forget "I need to do that task in an hour."',

    // Demo section
    'demo.title': 'See It in Action',
    'demo.subtitle': 'Select text or capture an area—IrukaDark explains it on-screen.',
    'demo.note': 'Tip: Text = Option+A · Screenshot = Option+S',

    // Languages section
    'languages.title': 'Understands Languages Worldwide. Translates by Meaning, Not Word-for-Word.',
    'languages.subtitle': 'IrukaDark delivers explanations in 17 languages worldwide.',

    // Where it works
    'where.title': 'From Any Screen,<br>In an Instant.',
    'where.chatgpt.title': 'On ChatGPT',
    'where.chatgpt.desc': 'Explain AI outputs with AI. Review and refine prompts in place.',
    'where.gemini.title': 'On Gemini',
    'where.gemini.desc': 'Quickly understand complex responses and refine your queries for better results.',
    'where.claude.title': 'On Claude',
    'where.claude.desc': 'Analyze detailed explanations and improve conversation flow effortlessly.',
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
    'where.aws.title': 'On AWS',
    'where.aws.desc': 'Understand complex AWS services and error messages instantly. Select console screens or logs for explanations.',
    'where.huggingface.title': 'On Hugging Face',
    'where.huggingface.desc': 'Quickly understand model architectures, parameters, and documentation. Get instant explanations of datasets and model cards.',
    'where.figma.title': 'On Figma',
    'where.figma.desc': 'Select design comments or component names to quickly grasp intent.',
    'where.canva.title': 'On Canva',
    'where.canva.desc': 'Understand template structures, design elements, and layout principles instantly.',
    'where.adobe.title': 'On Adobe',
    'where.adobe.desc': 'Quickly learn tool functions, effects, and design techniques across Adobe Creative Cloud.',
    'where.pinterest.title': 'On Pinterest',
    'where.pinterest.desc': 'Analyze design trends, style references, and visual inspiration boards efficiently.',
    'where.midjourney.title': 'On Midjourney',
    'where.midjourney.desc': 'Decode complex prompts and understand AI-generated image variations instantly.',
    'where.runway.title': 'On Runway',
    'where.runway.desc': 'Grasp AI video editing techniques and creative workflows with quick explanations.',
    'where.sora.title': 'On Sora',
    'where.sora.desc': 'Understand AI video generation prompts and parameters instantly. Support creative video production.',
    'where.manus.title': 'On Manus',
    'where.manus.desc': 'Quickly understand document structure and style settings. Streamline your writing workflow.',
    'where.workflow.title': 'For Workflow Diagrams',
    'where.workflow.desc': 'Capture complex flow charts to clearly understand structure and process.',
    'where.paper.title': 'In AI Research Papers',
    'where.paper.desc': 'Select cutting-edge methods or formulas to explain concepts in plain language.',
    'where.sheets.title': 'On Google Spreadsheet',
    'where.sheets.desc': 'Understand complex formulas, data patterns, and spreadsheet structures instantly.',
    'where.excel.title': 'On Excel',
    'where.excel.desc': 'Decode advanced functions, pivot tables, and data analysis techniques quickly.',
    'where.powerpoint.title': 'On PowerPoint',
    'where.powerpoint.desc': 'Grasp presentation structures, design principles, and storytelling approaches efficiently.',
    'where.notion.title': 'On Notion',
    'where.notion.desc': 'Navigate databases, templates, and workspace organization with ease.',
    'where.tldv.title': 'On tl;dv',
    'where.tldv.desc': 'Quickly summarize meeting insights and action items from video transcripts.',
    'where.zoom.title': 'On Zoom',
    'where.zoom.desc': 'Understand meeting features, settings, and collaboration tools in real-time.',
    'where.x.title': 'On X (Twitter)',
    'where.x.desc': 'Select long threads or technical terms to instantly grasp context and key points.',
    'where.slack.title': 'On Slack',
    'where.slack.desc': 'Quickly understand channel conversations and shared links. Streamline team communication.',
    'where.producthunt.title': 'On Product Hunt',
    'where.producthunt.desc': 'Select product descriptions to quickly understand features and value.',
    'where.lovable.title': 'On Lovable',
    'where.lovable.desc': 'Explain generated code or prompts in place. Develop smoothly.',
    'where.dify.title': 'On Dify',
    'where.dify.desc': 'Understand AI workflow settings and node configurations instantly. Grasp complex flow designs smoothly.',
    'where.copilot.title': 'On Microsoft Copilot',
    'where.copilot.desc': 'Instantly understand AI-generated content and suggestions. Maximize productivity.',

    // Terminal section
    'terminal.title': 'Mini Terminal: AI-CLI at Your Fingertips.',
    'terminal.subtitle': 'Control your terminal from IrukaDark. Don\'t know the command? No problem—just describe what you want in plain language. You can even launch Claude Code for quick AI-driven development right from the corner of your screen.',
    'terminal.generate.title': 'AI-Generated Commands',
    'terminal.generate.description': 'Simply describe what you want to do in natural language, and IrukaDark generates the appropriate terminal command. No need to remember complex syntax or flags.',
    'terminal.execute.title': 'Direct Execution',
    'terminal.execute.description': 'Execute generated commands directly from IrukaDark. Review the command before running, and see the output in real-time within the app.',
    'terminal.history.title': 'Command History',
    'terminal.history.description': 'All executed commands are saved to history. Quickly rerun previous commands or modify them for new tasks, improving your workflow efficiency.',
    'terminal.safe.title': 'Safe Execution Mode',
    'terminal.safe.description': 'IrukaDark highlights potentially destructive commands and requires explicit confirmation. This prevents accidental execution of dangerous operations like rm -rf.',

    'howto.title': 'Instant AI Activation.',
    'howto.subtitle': 'Use global shortcuts to trigger IrukaDark instantly.',
    'howto.group.screenshot': 'AI Reads Everything You See.',
    'howto.group.text': 'Instant Explanation for Selected Text.',
    'howto.group.url': 'No More Time Wasted on Long Articles.',
    'howto.group.translate': 'Rewrite × Translate. Your Exact Nuance, in Any Language.',
    'howto.group.voice': 'Just a Quick Word Is All It Takes.',
    'howto.cards.instant.title': 'Option+A — Quick Explain',
    'howto.cards.instant.caption': 'Option+A',
    'howto.cards.instant.description': 'Select text in any app and press Option+A for a concise explanation that keeps you in flow.',
    'howto.cards.detail.title': 'Option+Shift+A — Deep Dive',
    'howto.cards.detail.caption': 'Option+Shift+A',
    'howto.cards.detail.description': 'Need extra context or step-by-step reasoning? Press Option+Shift+A to request a more thorough breakdown.',
    'howto.cards.diagram.title': 'Option+Control+A — Diagram',
    'howto.cards.diagram.caption': 'Option+Control+A',
    'howto.cards.diagram.description': 'Converts selected text into a visual diagram. Great for understanding concepts and relationships visually.',
    'howto.cards.rewrite.title': 'Option+E — Rewrite',
    'howto.cards.rewrite.caption': 'Option+E',
    'howto.cards.rewrite.description': 'Rewrite your text with improved clarity while preserving the original meaning.',
    'howto.cards.translate.title': 'Option+R — Translate & Rephrase',
    'howto.cards.translate.caption': 'Option+R',
    'howto.cards.translate.description': 'Turn the selection into natural Japanese or English with Option+R. Perfect for quick translations or rewrites.',
    'howto.cards.voice.title': 'Option+X — Voice Input',
    'howto.cards.voice.caption': 'Option+X',
    'howto.cards.voice.description': 'Press Option+X and speak. Give commands to AI without touching the keyboard.',
    'howto.cards.voiceScreen.title': 'Option+Shift+X — Screen + Voice',
    'howto.cards.voiceScreen.caption': 'Option+Shift+X',
    'howto.cards.voiceScreen.description': 'Press Option+Shift+X to read your entire screen and answer your spoken question.',
    'howto.cards.linkQuick.title': 'Option+Q — URL Quick Summary',
    'howto.cards.linkQuick.caption': 'Option+Q',
    'howto.cards.linkQuick.description': 'Select a URL in any document, hit Option+Q, and IrukaDark fetches the page to deliver an on-the-spot overview.',
    'howto.cards.linkDetail.title': 'Option+Shift+Q — URL Deep Summary',
    'howto.cards.linkDetail.caption': 'Option+Shift+Q',
    'howto.cards.linkDetail.description': 'Press Option+Shift+Q on a highlighted link for a richer breakdown with key sections and takeaways.',
    'howto.cards.screenshot.title': 'Option+S — Screenshot Explain',
    'howto.cards.screenshot.caption': 'Option+S',
    'howto.cards.screenshot.description': 'Drag over images, charts, or PDFs and press Option+S to explain what is on screen without leaving your app.',
    'howto.cards.screenshotDetail.title': 'Option+Shift+S — Screenshot Deep Dive',
    'howto.cards.screenshotDetail.caption': 'Option+Shift+S',
    'howto.cards.screenshotDetail.description': 'Press Option+Shift+S for a more detailed analysis of the region you capture—ideal for dense visuals.',
    'time.title': 'Smart Time Management for Peak Focus.',
    'time.subtitle': 'Make time your ally and maximize productivity.',
    'time.timer.title': 'Timer',
    'time.timer.description': 'Perfect for focused work sessions and the Pomodoro Technique. Get notified when your set time is up.',
    'time.stopwatch.title': 'Stopwatch',
    'time.stopwatch.description': 'Track how long tasks take. Know exactly where your time goes.',
    'time.schedule.title': 'Scheduler',
    'time.schedule.description': 'Launch apps or open websites at scheduled times. Set your online meeting URL and it opens automatically when it\'s time. Never forget an appointment again. No more "Sorry, I was so focused on my work that I lost track of time." Stay fully immersed in your focus time. You can even set it to open a site the moment your favorite artist\'s concert tickets go on sale at exactly 12:00 tomorrow.',
    'chat.title': 'Text, Images, Videos—Generated Instantly.',
    'chat.subtitle': 'Generate content and extend conversations with @ commands and slash commands.',
    'chat.atcommand.title': 'Generate Creatives On-the-Spot with @ Commands.',
    'chat.atcommand.subtitle': '',
    'chat.slash.title': 'Slash Commands for Fine-Tuned Control.',
    'chat.slash.subtitle': '',
    'atcommand.image.title': '@image',
    'atcommand.image.description': 'Type <code>@image</code> followed by a space and your prompt to generate images. Configure size and parallel generation count with <code>/image</code>.',
    'atcommand.video.title': '@video',
    'atcommand.video.description': 'Type <code>@video</code> followed by a space and your prompt to generate videos. Configure size, duration, quality, and count with <code>/video</code>.',
    'atcommand.slide.title': '@slide',
    'atcommand.slide.description': 'Type <code>@slide</code> followed by a space and your prompt to generate slide images. Configure templates and settings with <code>/slide</code>.',
    'howto2.title': 'Slash Commands',
    'howto2.subtitle': 'Slash commands that build on your latest explanation.',
    'howto2.group.extend': 'Extend Explanations',
    'howto2.group.generate': 'Generate Content',
    'howto2.group.settings': 'Settings & Modes',
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
    'howto2.commands.image.title': '/image',
    'howto2.commands.image.description': 'Configure image generation settings: size and number of images to generate in parallel.',
    'howto2.commands.video.title': '/video',
    'howto2.commands.video.description': 'Configure video generation settings: size, duration, quality, and number of videos.',
    'howto2.commands.slide.title': '/slide',
    'howto2.commands.slide.description': 'Configure slide generation settings: templates, count, and visual style.',
    'cta.title': 'Download',
    'cta.description': 'Never stop thinking. Upgrade your workflow. Free download for macOS.',
    'cta.button': '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 3px; vertical-align: middle;"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>Download',
    'footer.copyright': '© <span id="year"></span> CORe, Inc. All rights reserved.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'terms.title': 'Terms of Service',
    'terms.updated': 'Last updated: September 3, 2025',
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: December 22, 2021'
  },
  ja: {
    'meta.title': 'IrukaDark（イルカダーク）— 画面のすべてを超高速解説するAI',
    'meta.description': 'IrukaDark（イルカダーク）は、テキスト・画像・表・PDFを画面上でそのまま解説・要約。Option+A/Sのショートカット、日英対応、プライバシー配慮。',
    'header.clone': '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 2px; vertical-align: middle;"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>Mac用ダウンロード',
    'hero.title': '作業効率が大幅に向上する<br><span class="grad-white">高速デスクトップAI</span>',
    'hero.subtitle': '<strong>画面の「瞬間解説」も、ターミナルも、クリップボード拡張もこれひとつ。ショートカット一発で現れる小さなAIに、デスクワークを加速させる強力な機能を凝縮したオールインワン・ユーティリティ。</strong>',
    'hero.cta': '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 3px; vertical-align: middle;"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>Mac用ダウンロード',
    'demo.question': 'これどういうこと？',
    'demo.explanation': 'この`reduce`メソッドは、配列の各要素（user）を取り出し、オブジェクトに変換しています。`acc`は累積器（accumulator）で、初期値は空のオブジェクト`{}`です。各ユーザーのIDをキー、ユーザーオブジェクトを値としたハッシュマップを作成しています。',
    'features.title': 'あなたの思考と作業を加速するAI。',
    'features.subtitle': 'もう「わからない」で止まらない。瞬時理解で作業が加速します。',
    'features.instant.title': 'ショートカットキーでシュタッっと解説。',
    'features.instant.description': 'わざわざ「このエラーコードの意味を教えて」なんてプロンプトを入力する必要はありません。画面に映っている気になる箇所で専用ショートカットを押すだけ。状況に応じて最適なコマンドを切り替えながら、文脈に沿った解説がその場で瞬時に得られます。',
    'features.flow.title': '今、あなたが見ているその画面を解析。',
    'features.flow.description': '開発ツール、SaaSダッシュボード、技術ドキュメント、学術論文PDF。IrukaDarkは、それらすべてを「画面」という共通のインターフェースで扱います。アプリごとの使い方を覚える必要はありません。気になる部分を選べば、どんな言語でも、その場で意味が分かります。',
    'features.secure.title': 'かゆいところに手が届く、多彩な機能。',
    'features.secure.description': '画像生成・動画生成はもちろん、解説の深掘りや図解、スライド作成、ターミナル操作まで。ちょっとした作業も画面を変えずに全部まとめて任せられる、オールインワンな相方です。',
    'features.clipboard.title': 'コピー、コピー、コピー。そしてペースト、ペースト、ペースト。',
    'features.clipboard.description': '行ったり来たりはもう不要。複数のコピーを連続で積み上げて、順番にペースト。繰り返しのコピペ作業が一気に高速化します。',
    'features.timer.title': '時間をスマートにコントロールする。',
    'features.timer.description': 'タイマー、ストップウォッチはもちろん、時間設定でアプリやWebサイトを自動で開くことができます。"1時間後にあの作業をするぞ"ということを忘れることがありません。',

    // どこで使えるか
    'where.title': 'どんな画面からでも<br>一瞬で。',
    'where.chatgpt.title': 'ChatGPTの上で',
    'where.chatgpt.desc': 'AIの出力をさらにAIで要約・解説。プロンプトの見直しもその場で。',
    'where.gemini.title': 'Geminiの上で',
    'where.gemini.desc': '複雑なレスポンスを素早く理解し、クエリを改善してより良い結果を。',
    'where.claude.title': 'Claudeの上で',
    'where.claude.desc': '詳細な説明を分析し、会話の流れをスムーズに改善。',
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
    'where.aws.title': 'AWSの上で',
    'where.aws.desc': '複雑なAWSサービスやエラーメッセージを即座に理解。コンソール画面やログを選択して解説。',
    'where.huggingface.title': 'Hugging Faceの上で',
    'where.huggingface.desc': 'モデルのアーキテクチャやパラメータ、ドキュメントを素早く理解。データセットやモデルカードの説明も即座に取得。',
    'where.figma.title': 'Figmaの上で',
    'where.figma.desc': 'デザインコメントやコンポーネント名を選択して意図を素早く把握。',
    'where.canva.title': 'Canvaの上で',
    'where.canva.desc': 'テンプレートの構造やデザイン要素、レイアウト原則を即座に理解。',
    'where.adobe.title': 'Adobeの上で',
    'where.adobe.desc': 'Adobe Creative Cloudのツール機能、エフェクト、デザインテクニックを素早く学習。',
    'where.pinterest.title': 'Pinterestの上で',
    'where.pinterest.desc': 'デザイントレンドやスタイルリファレンス、ビジュアルインスピレーションボードを効率的に分析。',
    'where.midjourney.title': 'Midjourneyの上で',
    'where.midjourney.desc': '複雑なプロンプトを解読し、AI生成画像のバリエーションを即座に理解。',
    'where.runway.title': 'Runwayの上で',
    'where.runway.desc': 'AI動画編集テクニックやクリエイティブワークフローを素早く把握。',
    'where.sora.title': 'Soraの上で',
    'where.sora.desc': 'AI動画生成プロンプトやパラメータを即座に理解。クリエイティブな動画制作をサポート。',
    'where.manus.title': 'Manusの上で',
    'where.manus.desc': 'ドキュメント構造やスタイル設定を素早く理解。執筆ワークフローを効率化。',
    'where.workflow.title': 'ワークフロー図の解説で',
    'where.workflow.desc': '複雑なフロー図をキャプチャして構造と流れを明確に理解。',
    'where.paper.title': 'AI関連の学術論文で',
    'where.paper.desc': '最新の研究手法や数式を選択して概念を平易に解説。',
    'where.sheets.title': 'Googleスプレッドシートの上で',
    'where.sheets.desc': '複雑な数式やデータパターン、スプレッドシート構造を即座に理解。',
    'where.excel.title': 'Excelの上で',
    'where.excel.desc': '高度な関数、ピボットテーブル、データ分析手法を素早く解読。',
    'where.powerpoint.title': 'PowerPointの上で',
    'where.powerpoint.desc': 'プレゼン構造、デザイン原則、ストーリーテリング手法を効率的に把握。',
    'where.notion.title': 'Notionの上で',
    'where.notion.desc': 'データベース、テンプレート、ワークスペース構成を簡単にナビゲート。',
    'where.tldv.title': 'tl;dvの上で',
    'where.tldv.desc': 'ビデオトランスクリプトから会議の洞察とアクションアイテムを素早く要約。',
    'where.zoom.title': 'Zoomの上で',
    'where.zoom.desc': '会議機能、設定、コラボレーションツールをリアルタイムで理解。',
    'where.x.title': 'Xの上で',
    'where.x.desc': '長いスレッドや専門用語を選択して文脈と要点を即座に把握。',
    'where.slack.title': 'Slackの上で',
    'where.slack.desc': 'チャンネルの会話や共有リンクを素早く理解。チームコミュニケーションを効率化。',
    'where.producthunt.title': 'ProductHuntの上で',
    'where.producthunt.desc': '新しいプロダクトの説明を選択して機能と価値を素早く理解。',
    'where.lovable.title': 'Lovableの上で',
    'where.lovable.desc': '生成されたコードやプロンプトをその場で解説。開発がスムーズに。',
    'where.dify.title': 'Difyの上で',
    'where.dify.desc': 'AIワークフローの設定やノード構成を即座に理解。複雑なフロー設計をスムーズに把握。',
    'where.copilot.title': 'Microsoft Copilotの上で',
    'where.copilot.desc': 'AI生成コンテンツや提案内容を即座に理解。作業効率を最大化。',

    // Terminal section
    'terminal.title': 'ミニターミナルで、いつでもAI-CLIを起動。',
    'terminal.subtitle': 'IrukaDarkからターミナルを操作できます。コマンドがわからなくても大丈夫。自然言語でコマンドを生成してくれます。Claude Codeも起動できるので、サクッと画面端でAI駆動開発もできます。',
    'terminal.generate.title': 'AI生成コマンド',
    'terminal.generate.description': '自然言語で「やりたいこと」を伝えるだけで、IrukaDarkが適切なターミナルコマンドを生成。複雑な構文やフラグを覚える必要はありません。',
    'terminal.execute.title': '直接実行機能',
    'terminal.execute.description': '生成されたコマンドをIrukaDarkから直接実行できます。実行前にコマンドを確認でき、出力結果もアプリ内でリアルタイムに確認できます。',
    'terminal.history.title': 'コマンド履歴',
    'terminal.history.description': '実行したコマンドはすべて履歴に保存されます。以前のコマンドを素早く再実行したり、修正して新しいタスクに応用でき、作業効率が向上します。',
    'terminal.safe.title': '安全実行モード',
    'terminal.safe.description': 'IrukaDarkは破壊的な可能性のあるコマンドをハイライト表示し、明示的な確認を要求します。rm -rfのような危険な操作の誤実行を防ぎます。',

    'howto.title': '瞬間AI起動',
    'howto.subtitle': 'ショートカットでいつでもIrukaDarkを呼び出せます。',
    'howto.group.screenshot': '見えているもの全てを、AIが読み解く。',
    'howto.group.text': '選択したテキストを、即座に解説。',
    'howto.group.url': '長文記事のインプットは、もう時間をかけない。',
    'howto.group.translate': 'リライト×翻訳。想い通りのニュアンスを、あらゆる言語で。',
    'howto.group.voice': 'ちょっと話しかけるだけでもいい。',
    'howto.cards.instant.title': 'Option+A — 概要解説',
    'howto.cards.instant.caption': 'Option+A',
    'howto.cards.instant.description': 'テキストを選択してOption+A。その場で要点を押さえた短い解説を表示します。',
    'howto.cards.detail.title': 'Option+Shift+A — 詳細解説',
    'howto.cards.detail.caption': 'Option+Shift+A',
    'howto.cards.detail.description': '背景説明や手順が欲しいときはOption+Shift+A。より深い情報を含むロングアンサーを得られます。',
    'howto.cards.diagram.title': 'Option+Control+A — 図解',
    'howto.cards.diagram.caption': 'Option+Control+A',
    'howto.cards.diagram.description': '選択したテキストを図解画像にします。概念や関係性を視覚的に理解したいときに。',
    'howto.cards.rewrite.title': 'Option+E — リライト',
    'howto.cards.rewrite.caption': 'Option+E',
    'howto.cards.rewrite.description': '文章の意味を変えずに、より洗練された表現に書き換えます。',
    'howto.cards.translate.title': 'Option+R — 翻訳・言い換え',
    'howto.cards.translate.caption': 'Option+R',
    'howto.cards.translate.description': '選択したテキストを自然な日本語・英語に翻訳、または噛み砕いて言い換え。Option+Rで即座に切り替えできます。',
    'howto.cards.voice.title': 'Option+X — 音声入力',
    'howto.cards.voice.caption': 'Option+X',
    'howto.cards.voice.description': 'Option+Xを押して話すだけ。キーボードを使わずに、音声でAIに指示を出せます。',
    'howto.cards.voiceScreen.title': 'Option+Shift+X — 画面認識+音声入力',
    'howto.cards.voiceScreen.caption': 'Option+Shift+X',
    'howto.cards.voiceScreen.description': 'Option+Shift+Xで画面すべてを読み取り、音声入力した質問に回答します。',
    'howto.cards.linkQuick.title': 'Option+Q — URL概要',
    'howto.cards.linkQuick.caption': 'Option+Q',
    'howto.cards.linkQuick.description': 'URLテキストを選択してOption+Q。ページを読み込んで要点だけを素早く解説します。',
    'howto.cards.linkDetail.title': 'Option+Shift+Q — URL詳細解説',
    'howto.cards.linkDetail.caption': 'Option+Shift+Q',
    'howto.cards.linkDetail.description': 'Option+Shift+Qで選択したリンクを詳しく読み込み、重要セクションやポイントまで整理して届けます。',
    'howto.cards.screenshot.title': 'Option+S — スクショ解説',
    'howto.cards.screenshot.caption': 'Option+S',
    'howto.cards.screenshot.description': '画像・グラフ・PDFなどを範囲選択してOption+S。画面上の内容をそのまま読み取って要約します。',
    'howto.cards.screenshotDetail.title': 'Option+Shift+S — スクショ詳細解説',
    'howto.cards.screenshotDetail.caption': 'Option+Shift+S',
    'howto.cards.screenshotDetail.description': '情報量の多いスライドや図解はOption+Shift+Sで詳細版を。細部まで丁寧に解説を受け取れます。',
    'time.title': '極限の集中を維持するための、スマートなタイムマネジメント。',
    'time.subtitle': '時間を味方につけて、作業効率を最大化。',
    'time.timer.title': 'タイマー機能',
    'time.timer.description': '集中作業やポモドーロテクニックに最適。設定した時間が来たら通知でお知らせします。',
    'time.stopwatch.title': 'ストップウォッチ機能',
    'time.stopwatch.description': '作業時間の計測に便利。タスクにかかった時間を正確に把握できます。',
    'time.schedule.title': 'スケジュール機能',
    'time.schedule.description': '指定した時間にアプリを起動させたり、Webサイトを開くことができます。オンライン会議URLをセットすれば、指定した時間に自動でアクセス。もう予定を忘れることはありません。つまり、「すみません。作業に集中していて遅れました。」という失態を犯すことはなくなったということです。集中タイムに没頭できます。「アイドルのLIVEチケットの販売開始時間が明日の12:00ぴったりだから、その時間になった瞬間にサイトを開くぞ」ということもできるということです。',
    'chat.title': '文章も、画像も、動画も、すぐに生成。',
    'chat.subtitle': '@コマンドとスラッシュコマンドでコンテンツ生成や会話の拡張ができます。',
    'chat.atcommand.title': '@コマンドで、クリエイティブをその場で生成。',
    'chat.atcommand.subtitle': '',
    'chat.slash.title': 'スラッシュコマンドで、かゆいところに手が届く。',
    'chat.slash.subtitle': '',
    'atcommand.image.title': '@image',
    'atcommand.image.description': '<code>@image</code> に続けてプロンプトを入力すると画像を生成できます。サイズや同時生成枚数は <code>/image</code> で設定します。',
    'atcommand.video.title': '@video',
    'atcommand.video.description': '<code>@video</code> に続けてプロンプトを入力すると動画を生成できます。サイズ、秒数、画質、本数は <code>/video</code> で設定します。',
    'atcommand.slide.title': '@slide',
    'atcommand.slide.description': '<code>@slide</code> に続けてプロンプトを入力するとスライド画像を生成できます。テンプレートや設定は <code>/slide</code> で管理します。',
    'howto2.title': 'スラッシュコマンド',
    'howto2.subtitle': 'スラッシュコマンドで直前の解説をさらに活用。',
    'howto2.group.extend': '解説を拡張',
    'howto2.group.generate': 'コンテンツ生成',
    'howto2.group.settings': '設定・モード切替',
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
    'howto2.commands.image.title': '/image',
    'howto2.commands.image.description': '画像生成の設定：サイズや同時生成枚数を調整できます。',
    'howto2.commands.video.title': '/video',
    'howto2.commands.video.description': '動画生成の設定：サイズ、秒数、画質、本数を調整できます。',
    'howto2.commands.slide.title': '/slide',
    'howto2.commands.slide.description': 'スライド生成の設定：テンプレート、枚数、スタイルを調整できます。',
    'cta.title': 'ダウンロード',
    'cta.description': 'もう思考を止めない。あなたのワークフローを、アップグレードしよう。macOS向けに無料ダウンロード',
    'cta.button': '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 3px; vertical-align: middle;"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>Mac用ダウンロード',
    'footer.copyright': '© <span id="year"></span> CORe, Inc. All rights reserved.',
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシーポリシー',
    'terms.title': '利用規約',
    'terms.updated': '最終更新日: 2025年9月3日',
    'privacy.title': 'プライバシーポリシー',
    'privacy.updated': '最終更新日: 2021年12月22日',
    // Demo section
    'demo.title': '操作デモを見る',
    'demo.subtitle': 'テキスト選択や範囲キャプチャに反応して、その場でAIが解説します。',
    'demo.note': 'ヒント: テキスト = Option+A ・ スクショ = Option+S',

    // Languages section
    'languages.title': '世界中の言葉を理解し、直訳ではなく意味ベースでの翻訳。',
    'languages.subtitle': 'IrukaDark は世界17言語でそのまま解説を返します。'
  }
};

let currentLang = 'en'; // デフォルトは英語

// Information notices (language-specific)
const infoNotices = {
  ja: [
    {
      date: '2025-12-02',
      title: 'v1.3.4 クリップボード機能強化',
      body: 'クリップボードにカラーコード表示ができるようになりました。また、クリップボードの表示速度が向上し、より高速に動作するようになりました。'
    },
    {
      date: '2025-11-29',
      title: 'v1.3.1 スライドテンプレート&カスタムロゴ',
      body: 'v1.3.1でスライドテンプレート管理（カスタムプロンプト/参照画像の保存・編集・削除）とスライド枚数設定(1–4枚)を追加しました。/slide template や /slide count で即アクセスできます。ロゴポップアップのアイコンも設定>外観から70x70px推奨で差し替え可能になり、テンプレートのサジェスト改善やi18n更新、パフォーマンス最適化も含まれています。'
    },
    {
      date: '2025-11-27',
      title: 'v1.2.22 スライド画像ショートカット強化',
      body: 'スライド画像生成のショートカット設定を追加し、i18nを更新しました。生成中はローディングアニメーションが表示され、進行状況が分かりやすくなっています。'
    },
    {
      date: '2025-11-27',
      title: 'v1.2.21 安定性アップデート',
      body: '細かなバグ修正と安定性向上を実施しました。'
    },
    {
      date: '2025-11-26',
      title: 'v1.2.20 CIランナー更新',
      body: 'macOS x64のCIランナーをmacos-15-intelへ更新し、ビルド環境を最新化しました。'
    },
    {
      date: '2025-11-25',
      title: 'v1.2.18 起動ウィンドウ改善',
      body: '起動時ウィンドウを刷新し、全体的な使い勝手を改善しました。'
    },
    {
      date: '2025-11-26',
      title: 'v1.2.19 クリップボードの高速化',
      body: 'IrukaDark v1.2.19 でクリップボードがバックグラウンドプロセスに常駐するようになり、より高速に動作するようになりました。'
    },
    {
      date: '2025-11-26',
      title: 'v1.2.17 スニペットに画像を保存',
      body: 'IrukaDark v1.2.17 でスニペットに画像を保存できるようになりました。テキストだけでなく、画像もスニペットとして管理・再利用できます。'
    },
    {
      date: '2025-11-21',
      title: 'v1.2.9 ターミナル機能を追加',
      body: 'IrukaDark v1.2.9 でターミナル機能が追加されました。自然言語でコマンドを生成し、アプリ内から直接実行できます。詳しくは<a href="#terminal" class="link">ターミナル機能</a>セクションをご覧ください。'
    },
    {
      date: '2025-11-11',
      title: 'v1.2.0 クリップボードHUD & ワークスペース2.0',
      body: 'IrukaDark v1.2.0 ではネイティブ自動化ブリッジ（IrukaAutomation）により、<code>Alt+C</code> でクリップボード履歴の上位20件をHUD表示できます。クリップボードワークスペース2.0ではリッチテキスト、base64画像、サムネイル、ネストされたフォルダー構成に対応。新しいランチャータブ（ベータ版）では、アプリ、ファイル、システムコマンドをキーボードナビゲーションで検索でき、ソース別フィルターとお気に入りバーも利用可能です。'
    },
    {
      date: '2025-11-06',
      title: 'v1.1.4 ランチャー刷新 & Spotlight検索',
      body: 'IrukaDark v1.1.4 ではランチャーを単一ビューに再設計し、アプリ・ファイル・システムアクションをフィルターやショートカットで横断検索できます。Spotlight（mdfind）連携で最近開いたファイルを素早く見つけ、スリープや再起動などの操作も確認付きで直接実行可能に。Gemini 画像生成も参照画像の複数投入と詳細ログに対応しました。'
    },
    {
      date: '2025-11-06',
      title: 'v1.1.3 タブナビ & 翻訳リフレッシュ',
      body: 'IrukaDark v1.1.3 では Chat / Clipboard / Snippet / Memo が Tab・Shift+Tab で切り替えられるようになり、小さなウィンドウでもアクティブタブが自動スクロールで見失われません。タイトルバーのタブストリップも横スクロール対応となり、表示幅が狭くてもラベルが欠けません。さらにクリップボードワークスペースの翻訳を全言語で見直し、新しいタブ名や「添付を追加」のアクションが自然な表現に揃いました。'
    },
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
      body: 'IrukaDark v1.0.13 で <code>Option+Q</code> が登場。選択したURLを読み込んでその場で概要を解説します。さらに <code>Option+Shift+Q</code> で詳細解説も可能になりました。'
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
      date: '2025-12-02',
      title: 'v1.3.4 Clipboard Enhancements',
      body: 'Clipboard now displays color codes. Additionally, clipboard rendering is now faster for improved performance.'
    },
    {
      date: '2025-11-29',
      title: 'v1.3.1 Slide Templates & Custom Logo',
      body: 'Added a slide template manager (save/edit/delete custom prompts and reference images) and a slide count setting (1–4 slides) accessible via /slide template or /slide count. The popup logo icon can now be customized from Settings > Appearance (70x70px recommended). Slash-command suggestions, i18n, and performance have also been improved.'
    },
    {
      date: '2025-11-27',
      title: 'v1.2.22 Slide image shortcut & loading',
      body: 'Added shortcut configuration and i18n updates for slide image generation, plus a loading animation while images render.'
    },
    {
      date: '2025-11-27',
      title: 'v1.2.21 Stability update',
      body: 'Bug fixes and stability improvements.'
    },
    {
      date: '2025-11-26',
      title: 'v1.2.20 macOS-15 CI runner',
      body: 'Updated the macOS x64 CI runner to macos-15-intel to modernize the build environment.'
    },
    {
      date: '2025-11-25',
      title: 'v1.2.18 Startup window improvements',
      body: 'Refreshed the initial window and delivered general usability improvements.'
    },
    {
      date: '2025-11-26',
      title: 'v1.2.19 Faster Clipboard',
      body: 'IrukaDark v1.2.19 now runs the clipboard as a background process, enabling faster and more responsive performance.'
    },
    {
      date: '2025-11-26',
      title: 'v1.2.17 Save Images to Snippets',
      body: 'IrukaDark v1.2.17 now allows you to save images to snippets. Manage and reuse not only text but also images as snippets.'
    },
    {
      date: '2025-11-21',
      title: 'v1.2.9 Terminal Features Added',
      body: 'IrukaDark v1.2.9 introduces terminal features. Generate commands in natural language and execute them directly from the app. Learn more in the <a href="#terminal" class="link">Terminal Features</a> section.'
    },
    {
      date: '2025-11-11',
      title: 'v1.2.0 Clipboard HUD & Workspace 2.0',
      body: 'IrukaDark v1.2.0 introduces a native automation bridge (IrukaAutomation) that enables text selection and an <code>Alt+C</code> clipboard display mirroring the top 20 history items/snippets. Clipboard Workspace 2.0 now features rich text, base64 images, thumbnails, and nested folder organization for snippets. The new Launcher tab (beta) searches apps, files, and system commands with keyboard navigation, filter chips per source, and a favorites bar.'
    },
    {
      date: '2025-11-06',
      title: 'v1.1.4 Launcher redesign & Spotlight search',
      body: 'IrukaDark v1.1.4 redesigns the launcher into a single view that searches apps, files, and system commands with filters and keyboard control. Spotlight-powered quick file search surfaces up to 15 recent documents, while sleep, restart, and other system actions can run directly with confirmation. Gemini image generation now accepts multiple reference images and ships richer response logging.'
    },
    {
      date: '2025-11-06',
      title: 'v1.1.3 Tab navigation & refreshed copy',
      body: 'IrukaDark v1.1.3 lets you cycle across Chat, Clipboard, Snippet, and Memo with Tab / Shift+Tab while auto-scrolling the active tab into view so the clipboard window stays keyboard-friendly on compact displays. The titlebar tab strip now scrolls horizontally with hidden scrollbars, preventing clipped labels on narrow windows. Clipboard workspace translations have also been refreshed across every locale, covering the updated Clipboard tab name and “Add attachment” action.'
    },
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
      body: 'IrukaDark v1.0.13 introduces <code>Option+Q</code> for instant URL overviews. Highlight a link and get a summary on the fly. Need more detail? Use <code>Option+Shift+Q</code> for a deeper dive.'
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
  // Set year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

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
      '/user-guide': { en: '/user-guide', ja: '/ja/user-guide' },
      '/ja/user-guide': { en: '/user-guide', ja: '/ja/user-guide' },
      '/terms': { en: '/terms', ja: '/ja/terms' },
      '/ja/terms': { en: '/terms', ja: '/ja/terms' },
      '/privacy': { en: '/privacy', ja: '/ja/privacy' },
      '/ja/privacy': { en: '/privacy', ja: '/ja/privacy' }
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

    const prefersReduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    videos.forEach(v => { v.loop = true; v.muted = true; });

    if (prefersReduceMotion) {
      videos.forEach(v => v.pause());
      return;
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const v = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const p = v.play();
            if (p && typeof p.catch === 'function') p.catch(() => { });
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
            if (p && typeof p.catch === 'function') p.catch(() => { });
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
  (function setupInformationList() {
    const section = document.getElementById('information');
    if (!section) return;
    const list = section.querySelector('#infoList');
    if (!list) return;

    const lang = currentLang || window.DEFAULT_LANG || 'en';
    const all = Array.from((infoNotices[lang] || [])).sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    function createItem(item) {
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

    function renderAll() {
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
(function setupDownloadButtons() {
  function init() {
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

  if (document.readyState === 'loading') {
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
(function mobileHeaderCtaLabel() {
  function applyHeaderCtaResponsiveLabel() {
    const navBtn = document.getElementById('download-nav');
    if (!navBtn) return;
    const lang = (document.documentElement && document.documentElement.lang) || currentLang || (window.DEFAULT_LANG || 'en');
    const isMobile = (window.matchMedia && window.matchMedia('(max-width: 720px)').matches) || (window.innerWidth && window.innerWidth <= 720);
    const svgIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 2px; vertical-align: middle;"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>';
    const desktopLabel = (translations[lang] && translations[lang]['header.clone']) || (svgIcon + (lang === 'ja' ? 'Mac用ダウンロード' : 'Download for Mac'));
    const mobileLabel = svgIcon + (lang === 'ja' ? 'ダウンロード' : 'Download');
    navBtn.innerHTML = isMobile ? mobileLabel : desktopLabel;
  }
  // Expose for reuse from elsewhere if needed
  window.applyHeaderCtaResponsiveLabel = applyHeaderCtaResponsiveLabel;

  const reapply = () => { try { applyHeaderCtaResponsiveLabel(); } catch (_) { } };
  document.addEventListener('DOMContentLoaded', reapply);
  window.addEventListener('resize', reapply, { passive: true });
  window.addEventListener('orientationchange', reapply, { passive: true });
})();

// ---------------------------------------------
// Infinite scroll for vertical cards
// ---------------------------------------------
(function infiniteScrollCards() {
  function setupInfiniteScroll() {
    const cardContainers = document.querySelectorAll('.grid.features.vertical-cards');

    cardContainers.forEach(container => {
      const cards = Array.from(container.children);
      if (cards.length === 0) return;

      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'scroll-wrapper';

      // Move original cards to wrapper
      cards.forEach(card => wrapper.appendChild(card));

      // Clone cards for infinite effect
      cards.forEach(card => {
        const clone = card.cloneNode(true);
        wrapper.appendChild(clone);
      });

      // Add wrapper to container
      container.appendChild(wrapper);
    });
  }

  // FAQ Accordion
  function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherQuestion = otherItem.querySelector('.faq-question');
            otherQuestion.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          question.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupInfiniteScroll();
    setupFAQAccordion();
  });
})();

// ---------------------------------------------
// Google Analytics (GA4) Download Tracking
// ---------------------------------------------
(function setupDownloadTracking() {
  function trackDownloadClick(element) {
    // GA4が読み込まれているか確認
    if (typeof gtag === 'undefined') {
      console.warn('GA4 (gtag) is not loaded');
      return;
    }

    // ダウンロードボタンの情報を取得
    const osType = element.closest('.dl-card')?.dataset.os || 'unknown';
    const buttonId = element.id || 'unknown';
    const downloadUrl = element.href || '';

    // ページの場所を判定
    let buttonLocation = 'unknown';
    const pathname = window.location.pathname;

    if (pathname.includes('/downloads')) {
      buttonLocation = 'downloads_page';
    } else if (element.closest('#hero') || element.closest('.hero')) {
      buttonLocation = 'hero';
    } else if (element.closest('#cta') || element.closest('.cta')) {
      buttonLocation = 'cta';
    } else if (element.closest('header') || element.closest('.nav')) {
      buttonLocation = 'header';
    }

    const lang = currentLang || window.DEFAULT_LANG || 'en';

    // GA4にイベント送信
    gtag('event', 'download_click', {
      'event_category': 'downloads',
      'event_label': osType,
      'download_os': osType,
      'button_id': buttonId,
      'button_location': buttonLocation,
      'download_url': downloadUrl,
      'page_language': lang,
      'page_path': pathname,
      'value': 1
    });

    console.log('Download click tracked:', {
      os: osType,
      buttonId: buttonId,
      location: buttonLocation,
      url: downloadUrl,
      language: lang,
      path: pathname
    });
  }

  function init() {
    // 全てのダウンロードボタンを取得
    const downloadButtons = document.querySelectorAll('.dl-btn, #download-btn, #download-btn-cta, #download-nav');

    downloadButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        trackDownloadClick(this);
        // リンクの遷移は妨げない（トラッキング後に通常通り遷移）
      });
    });
  }

  // DOMContentLoadedイベントで初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ---------------------------------------------
// Howto Fullscreen Section Animations
// ---------------------------------------------
(function setupHowtoAnimations() {
  function init() {
    // Key cycling animation
    const cyclingKey = document.getElementById('cycling-key');
    if (cyclingKey) {
      const keyChar = cyclingKey.querySelector('.howto-key-char');
      const keys = ['A', 'S', 'Q', 'R'];
      let currentIndex = 0;

      setInterval(() => {
        keyChar.style.opacity = '0';
        keyChar.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % keys.length;
          keyChar.textContent = keys[currentIndex];
          keyChar.style.opacity = '1';
          keyChar.style.transform = 'translateY(0)';
        }, 200);
      }, 2000);

      // Add transition styles
      keyChar.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    }

    // Scroll-triggered animations for feature blocks
    const featureBlocks = document.querySelectorAll('.howto-feature-block');
    
    if (featureBlocks.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '-50px'
      });

      featureBlocks.forEach(block => {
        observer.observe(block);
      });
    } else {
      // Fallback: show all blocks immediately
      featureBlocks.forEach(block => {
        block.classList.add('visible');
      });
    }

    // Parallax effect on scroll for orbs
    const orbs = document.querySelectorAll('.howto-gradient-orb');
    if (orbs.length > 0) {
      let ticking = false;
      
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const howtoSection = document.querySelector('.howto-fullscreen');
            
            if (howtoSection) {
              const sectionTop = howtoSection.offsetTop;
              const relativeScroll = scrolled - sectionTop;
              
              if (relativeScroll > -window.innerHeight && relativeScroll < howtoSection.offsetHeight) {
                orbs.forEach((orb, index) => {
                  const speed = 0.05 + (index * 0.02);
                  const yOffset = relativeScroll * speed;
                  orb.style.transform = `translateY(${yOffset}px)`;
                });
              }
            }
            ticking = false;
          });
          ticking = true;
        }
      });
    }
  }

  // Initialize on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
