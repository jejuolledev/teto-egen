// 테토 vs 애겐 - 메인 앱 로직

// 테스트 시작
function startTest() {
  // localStorage 초기화
  localStorage.removeItem('testResult');
  localStorage.removeItem('userGender');
  
  // 테스트 페이지로 이동
  window.location.href = 'test.html';
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  console.log('테토 vs 애겐 - 연애 성향 테스트 로드됨');
  
  // 참여자 수 애니메이션 (선택사항)
  animateCounter();
});

// 카운터 애니메이션
function animateCounter() {
  const statNumber = document.querySelector('.stat-number');
  if (!statNumber) return;
  
  let count = 0;
  const target = 128500; // 128.5K
  const duration = 2000;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    
    // 숫자 포맷팅 (K 단위)
    const displayValue = (count / 1000).toFixed(1) + 'K';
    statNumber.textContent = displayValue;
  }, 16);
}

// 유틸리티 함수들
const utils = {
  // 점수를 퍼센트로 변환 (-30 ~ +30 → 0% ~ 100%)
  scoreToPercent: function(score) {
    return Math.round(((score + 30) / 60) * 100);
  },
  
  // 타입 결정
  getType: function(score, gender) {
    if (score >= 0 && gender === 'male') return '테토남';
    if (score >= 0 && gender === 'female') return '테토녀';
    if (score < 0 && gender === 'male') return '애겐남';
    return '애겐녀';
  }
};

// export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { startTest, utils };
}
