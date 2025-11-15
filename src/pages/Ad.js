// 테토 vs 애겐 - 광고 페이지

export function renderAd(adCountdown) {
  const progress = ((15 - adCountdown) / 15) * 100;
  
  return `
    <div class="ad-modal">
      <div class="ad-content">
        <h2 class="ad-title">🎁 테스트 완료!</h2>
        <p class="ad-subtitle">당신의 연애 성향이 분석되었어요</p>
        
        ${adCountdown > 0 ? `
          <div class="ad-countdown">${adCountdown}</div>
          <div class="ad-progress">
            <div class="ad-progress-fill" style="width: ${progress}%"></div>
          </div>
          <p style="color: var(--text-light); font-size: 14px;">
            15초 광고 시청 후 바로 확인할 수 있어요
          </p>
        ` : `
          <div style="font-size: 64px; margin: 30px 0;">✅</div>
          <button class="btn" onclick="unlockPremium()">
            🎉 결과 확인하기
          </button>
        `}
      </div>
    </div>
  `;
}
