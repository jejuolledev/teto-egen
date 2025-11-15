// 테토 vs 애겐 - 프로그레스 바 컴포넌트

/**
 * 진행률 바 렌더링
 * @param {number} current - 현재 문항 번호 (0부터 시작)
 * @param {number} total - 전체 문항 수
 * @returns {string} HTML 문자열
 */
export function ProgressBar(current, total) {
  const progress = ((current + 1) / total) * 100;
  
  return `
    <div class="progress-wrapper">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <p class="progress-text">${current + 1} / ${total}</p>
    </div>
  `;
}
