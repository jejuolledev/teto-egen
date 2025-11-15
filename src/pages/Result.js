// 테토 vs 애겐 - 결과 페이지

import { results } from '../data/results.js';

export function renderResult(resultData) {
  const result = results[resultData.type];
  
  return `
    <div class="result-header">
      <h1 class="result-title">당신의 연애 성향은</h1>
      <span class="result-emoji">${result.emoji}</span>
      <h2 class="result-type-name">${result.title}</h2>
      <p class="result-subtitle">${result.subtitle}</p>
      <p class="result-oneliner">"${result.oneLiner}"</p>
    </div>

    <div class="content-section">
      <h3 class="section-title">📝 당신은 이런 사람</h3>
      <p class="description">${result.description}</p>
    </div>

    <div class="content-section">
      <h3 class="section-title">💕 연애 스타일</h3>
      <ul class="style-list">
        ${result.loveStyle.map(style => `<li>${style}</li>`).join('')}
      </ul>
    </div>

    <div class="content-section">
      <h3 class="section-title">공유하기</h3>
      <div class="share-buttons">
        <button class="share-btn" onclick="shareResult()">
          💬 카카오톡
        </button>
        <button class="share-btn" onclick="shareTwitter()">
          🐦 트위터
        </button>
        <button class="share-btn" onclick="copyLink()">
          🔗 링크 복사
        </button>
      </div>
      <p style="font-size: 14px; color: var(--text-light); text-align: center; font-style: italic;">
        ${result.shareText}
      </p>
    </div>

    <div style="text-align: center; margin: 30px 0;">
      <button class="btn" onclick="restart()">🔄 다시 테스트하기</button>
    </div>

    <footer style="text-align: center; padding: 40px 20px;">
      <p style="color: var(--text-light); font-size: 14px; margin-bottom: 15px;">Made with 💕 by ZZB Labs</p>
      <div class="hashtags">
        ${result.hashtags.map(tag => `<span class="hashtag">${tag}</span>`).join('')}
      </div>
    </footer>
  `;
}
