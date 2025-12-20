#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = process.cwd();

// 現在の日時を取得（YYYYMMDDHHMMSS形式）
function getCurrentTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

// HTMLファイルを再帰的に検索
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // node_modules と .git をスキップ
      if (file !== 'node_modules' && file !== '.git' && !file.startsWith('.')) {
        findHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// ファイル内のキャッシュバスターを更新
function updateCacheBuster(filePath, newTimestamp) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // 既存のキャッシュバスターを検索して置換
  // パターン: ?v=数字（8桁以上）
  const pattern = /\?v=\d{8,}/g;
  const matches = content.match(pattern);
  
  if (matches) {
    matches.forEach(match => {
      const newBuster = `?v=${newTimestamp}`;
      if (match !== newBuster) {
        content = content.replace(match, newBuster);
        updated = true;
      }
    });
  } else {
    // キャッシュバスターがない場合、追加
    // styles.css, components.js, app.js のパスを検索
    const cssPattern = /(href=["']([^"']*styles\.css)(["']))/g;
    const jsPatterns = [
      /(src=["']([^"']*components\.js)(["']))/g,
      /(src=["']([^"']*app\.js)(["']))/g
    ];
    
    let hasChanges = false;
    
    // CSSファイルにキャッシュバスターを追加
    content = content.replace(cssPattern, (match, full, url, quote) => {
      if (!url.includes('?')) {
        hasChanges = true;
        return `href="${url}?v=${newTimestamp}"`;
      }
      return match;
    });
    
    // JSファイルにキャッシュバスターを追加
    jsPatterns.forEach(pattern => {
      content = content.replace(pattern, (match, full, url, quote) => {
        if (!url.includes('?')) {
          hasChanges = true;
          return `src="${url}?v=${newTimestamp}"`;
        }
        return match;
      });
    });
    
    if (hasChanges) {
      updated = true;
    }
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

// メイン処理
function main() {
  const newTimestamp = getCurrentTimestamp();
  console.log(`\n🔄 キャッシュバスターを更新中...`);
  console.log(`📅 新しいタイムスタンプ: ${newTimestamp}\n`);
  
  const htmlFiles = findHtmlFiles(ROOT);
  let updatedCount = 0;
  
  htmlFiles.forEach(filePath => {
    const relativePath = path.relative(ROOT, filePath);
    if (updateCacheBuster(filePath, newTimestamp)) {
      console.log(`✅ 更新: ${relativePath}`);
      updatedCount++;
    }
  });
  
  if (updatedCount === 0) {
    console.log('ℹ️  更新が必要なファイルはありませんでした。');
  } else {
    console.log(`\n✨ ${updatedCount}個のファイルを更新しました！`);
  }
  console.log(`\n💡 次回更新時は、このスクリプトを再実行してください。\n`);
}

main();

