// 테토 vs 애겐 - 질문 카드 컴포넌트

/**
 * 질문 카드 렌더링
 * @param {object} question - 질문 객체
 * @returns {string} HTML 문자열
 */
export function QuestionCard(question) {
  return `
    <div class="question-card">
      <h2 class="question-title">${question.question}</h2>
      <div class="options">
        ${question.options.map((opt, idx) => `
          <button class="option-btn" onclick="selectAnswer(${opt.score}, event)">
            ${opt.text}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}
