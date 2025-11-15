// 테토 vs 애겐 - 메인 앱 로직

import { questions } from './data/questions.js';
import { calculateResult } from './utils/calculator.js';
import { renderHome } from './pages/Home.js';
import { renderTest } from './pages/Test.js';
import { renderAd } from './pages/Ad.js';
import { renderResult } from './pages/Result.js';

// 앱 상태
let currentPage = 'home';
let currentQuestion = 0;
let answers = [];
let userGender = null;
let isPremium = false;
let adCountdown = 15;
let isProcessing = false;

/**
 * 테스트 시작
 */
export function startTest() {
  currentPage = 'test';
  currentQuestion = 0;
  answers = [];
  userGender = null;
  isPremium = false;
  isProcessing = false;
  render();
}

/**
 * 성별 선택
 * @param {string} gender - 'male' or 'female'
 */
export function selectGender(gender) {
  userGender = gender;
  render();
}

/**
 * 답변 선택
 * @param {number} score - 선택한 답의 점수 (2 or -2)
 * @param {Event} event - 클릭 이벤트
 */
export function selectAnswer(score, event) {
  if (isProcessing) return;
  isProcessing = true;
  
  // 선택 피드백
  if (event && event.currentTarget) {
    const btn = event.currentTarget;
    btn.classList.add('selected');
    btn.blur();
  }
  
  answers.push(score);
  
  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      render();
      isProcessing = false;
    } else {
      currentPage = 'ad';
      adCountdown = 15;
      render();
      startAdCountdown();
      isProcessing = false;
    }
  }, 200);
}

/**
 * 광고 카운트다운 시작
 */
function startAdCountdown() {
  const interval = setInterval(() => {
    adCountdown--;
    
    if (adCountdown > 0) {
      const countdownEl = document.querySelector('.ad-countdown');
      const progressEl = document.querySelector('.ad-progress-fill');
      if (countdownEl) countdownEl.textContent = adCountdown;
      if (progressEl) {
        const progress = ((15 - adCountdown) / 15) * 100;
        progressEl.style.width = progress + '%';
      }
    } else {
      clearInterval(interval);
      render();
    }
  }, 1000);
}

/**
 * 프리미엄 결과 해제
 */
export function unlockPremium() {
  isPremium = true;
  currentPage = 'result';
  render();
}

/**
 * 다시 시작
 */
export function restart() {
  currentPage = 'home';
  currentQuestion = 0;
  answers = [];
  userGender = null;
  isPremium = false;
  adCountdown = 15;
  isProcessing = false;
  render();
}

/**
 * 결과 공유 (카카오톡)
 */
export function shareResult() {
  alert('카카오톡 공유 기능 (Kakao SDK 연동 필요)');
}

/**
 * 트위터 공유
 */
export function shareTwitter() {
  const resultData = calculateResult(answers, userGender);
  const result = results[resultData.type];
  const text = encodeURIComponent(result.shareText + ' ' + result.hashtags.join(' '));
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

/**
 * 링크 복사
 */
export function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('링크가 복사되었습니다! 🎉');
  });
}

/**
 * 렌더링
 */
function render() {
  const app = document.getElementById('app');
  
  // 버튼 상태 초기화
  const oldButtons = document.querySelectorAll('.option-btn');
  oldButtons.forEach(btn => {
    btn.classList.remove('selected');
    btn.removeAttribute('style');
    btn.blur();
  });
  
  // 페이지별 렌더링
  let content;
  if (currentPage === 'home') {
    content = renderHome();
  } else if (currentPage === 'test') {
    content = renderTest(currentQuestion, userGender);
  } else if (currentPage === 'ad') {
    content = renderAd(adCountdown);
  } else {
    const resultData = calculateResult(answers, userGender);
    content = renderResult(resultData);
  }
  
  app.innerHTML = `<div class="container">${content}</div>`;
  
  // 테스트 화면 버튼 강제 초기화
  if (currentPage === 'test') {
    setTimeout(() => {
      const buttons = document.querySelectorAll('.option-btn');
      buttons.forEach(btn => {
        btn.classList.remove('selected');
        btn.style.background = 'white';
        btn.style.border = '2px solid var(--border)';
      });
    }, 50);
  }
}

/**
 * Safari bfcache 방지
 */
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    restart();
  }
});

// 초기 렌더
render();
