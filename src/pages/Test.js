// 테토 vs 애겐 - 테스트 페이지

import { questions } from '../data/questions.js';

export function renderGenderSelection() {
  return `
    <div class="gender-selection">
      <h2 class="question-title">먼저, 당신의 성별은?</h2>
      <div class="gender-buttons">
        <button class="gender-btn" onclick="selectGender('male')">
          <span class="gender-emoji">👨</span>
          <span>남자</span>
        </button>
        <button class="gender-btn" onclick="selectGender('female')">
          <span class="gender-emoji">👩</span>
          <span>여자</span>
        </button>
      </div>
    </div>
  `;
}

export function renderTest(currentQuestion, userGender) {
  if (userGender === null) {
    return renderGenderSelection();
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return `
    <div class="progress-wrapper">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <p class="progress-text">${currentQuestion + 1} / ${questions.length}</p>
    </div>

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
