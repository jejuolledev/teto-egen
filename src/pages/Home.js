// 테토 vs 애겐 - 메인 홈 페이지

export function renderHome() {
  return `
    <div class="hero">
      <div class="emoji-header">💘</div>
      <h1 class="title">테토 vs 애겐</h1>
      <p class="subtitle">너의 연애 주도권은 어디에?</p>
      
      <div class="type-preview">
        <div class="type-box">
          <span class="type-emoji">👨‍💼</span>
          <span class="type-name">테토형</span>
          <span class="type-desc">주도적 계획형</span>
        </div>
        <div class="vs">VS</div>
        <div class="type-box">
          <span class="type-emoji">🧑‍🎨</span>
          <span class="type-name">애겐형</span>
          <span class="type-desc">수용적 감성형</span>
        </div>
      </div>

      <div style="margin: 40px 0;">
        <button class="btn" onclick="startTest()">테스트 시작하기</button>
        <p class="test-info">⏱️ 소요시간: 1분 | 📊 총 15문항</p>
      </div>

      <div class="stats">
        <div class="stat-item">
          <span class="stat-number">128.5K</span>
          <span class="stat-label">참여자</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">4가지</span>
          <span class="stat-label">결과 타입</span>
        </div>
      </div>

      <footer class="footer">
        <p>Made with 💕 by ZZB Labs</p>
        <p class="footer-small">연애 성향 테스트 · 재미로 즐겨주세요</p>
      </footer>
    </div>
  `;
}
