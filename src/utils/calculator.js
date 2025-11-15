// 테토 vs 애겐 - 계산 유틸리티

/**
 * 답변 배열과 성별로 최종 결과 계산
 * @param {number[]} answers - 각 질문의 점수 배열 (2 or -2)
 * @param {string} gender - 'male' or 'female'
 * @returns {object} 결과 객체 { type, score, percentage }
 */
export function calculateResult(answers, gender) {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  // 점수 범위: -30 ~ +30
  // 양수: 테토형, 음수: 애겐형
  
  let type;
  if (totalScore >= 0 && gender === 'male') {
    type = '테토남';
  } else if (totalScore >= 0 && gender === 'female') {
    type = '테토녀';
  } else if (totalScore < 0 && gender === 'male') {
    type = '애겐남';
  } else {
    type = '애겐녀';
  }
  
  return {
    type: type,
    score: totalScore,
    percentage: Math.round(((totalScore + 30) / 60) * 100) // 0~100% 변환
  };
}

/**
 * 점수를 퍼센트로 변환 (-30 ~ +30 → 0% ~ 100%)
 * @param {number} score - 총점
 * @returns {number} 퍼센트 (0~100)
 */
export function scoreToPercent(score) {
  return Math.round(((score + 30) / 60) * 100);
}

/**
 * 타입 결정 (점수와 성별로)
 * @param {number} score - 총점
 * @param {string} gender - 'male' or 'female'
 * @returns {string} 타입 ('테토남', '테토녀', '애겐남', '애겐녀')
 */
export function getType(score, gender) {
  if (score >= 0 && gender === 'male') return '테토남';
  if (score >= 0 && gender === 'female') return '테토녀';
  if (score < 0 && gender === 'male') return '애겐남';
  return '애겐녀';
}
