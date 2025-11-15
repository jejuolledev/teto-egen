// 테토 vs 애겐 - 질문 데이터

export const questions = [
  // === 데이트 계획 (3문항) ===
  {
    id: 1,
    category: "데이트 계획",
    question: "주말 데이트 어떻게 정해?",
    options: [
      { text: "내가 코스 다 짜서 '여기 가자!' 제안", score: 2 },
      { text: "상대방한테 '어디 가고 싶어?' 물어봄", score: -2 }
    ]
  },
  {
    id: 2,
    category: "데이트 계획",
    question: "갑자기 비 오는 날, 실내 데이트로 변경하려면?",
    options: [
      { text: "바로 대안 찾아서 '여기 어때?' 제시", score: 2 },
      { text: "'어쩌지ㅠ 너 어디 가고 싶어?' 물어봄", score: -2 }
    ]
  },
  {
    id: 3,
    category: "데이트 계획",
    question: "처음 가는 맛집, 메뉴 고를 때 나는?",
    options: [
      { text: "리뷰 미리 찾아보고 '이거 시키자' 결정", score: 2 },
      { text: "'너 먹고 싶은 거 있어?' 상대 의견 먼저", score: -2 }
    ]
  },

  // === 의사결정 (3문항) ===
  {
    id: 4,
    category: "의사결정",
    question: "영화 뭐 볼지 못 정했을 때",
    options: [
      { text: "평점 보고 '이거 보자' 바로 예매", score: 2 },
      { text: "'넌 뭐 보고 싶어?' 계속 물어봄", score: -2 }
    ]
  },
  {
    id: 5,
    category: "의사결정",
    question: "저녁 메뉴 정할 때 둘 다 '아무거나'",
    options: [
      { text: "답답해서 내가 '그럼 치킨' 결정", score: 2 },
      { text: "'진짜 아무거나 괜찮아' 계속 양보", score: -2 }
    ]
  },
  {
    id: 6,
    category: "의사결정",
    question: "기념일 선물 정할 때",
    options: [
      { text: "원하는 거 찾아서 '이거 살까?' 제안", score: 2 },
      { text: "'네가 뭐 갖고 싶은지 말해줘' 기다림", score: -2 }
    ]
  },

  // === 고백/표현 (3문항) ===
  {
    id: 7,
    category: "고백/표현",
    question: "좋아하는 사람 생겼을 때",
    options: [
      { text: "먼저 연락하고 밥 약속 잡음", score: 2 },
      { text: "상대가 먼저 연락 올 때까지 기다림", score: -2 }
    ]
  },
  {
    id: 8,
    category: "고백/표현",
    question: "고백은 누가 먼저?",
    options: [
      { text: "내가 먼저 '너 좋아해' 말함", score: 2 },
      { text: "상대가 먼저 고백하길 기다림", score: -2 }
    ]
  },
  {
    id: 9,
    category: "고백/표현",
    question: "사귄 후 애정표현",
    options: [
      { text: "먼저 '보고 싶어', '사랑해' 말함", score: 2 },
      { text: "상대가 말하면 '나도' 답함", score: -2 }
    ]
  },

  // === 갈등 상황 (3문항) ===
  {
    id: 10,
    category: "갈등 상황",
    question: "연락이 뜸해졌을 때",
    options: [
      { text: "'요즘 왜 연락 안 해?' 먼저 물어봄", score: 2 },
      { text: "상대가 연락할 때까지 기다림", score: -2 }
    ]
  },
  {
    id: 11,
    category: "갈등 상황",
    question: "데이트 중 의견 충돌",
    options: [
      { text: "'내 생각엔 이게 나은 것 같아' 설득", score: 2 },
      { text: "'그래 네 의견대로 하자' 양보", score: -2 }
    ]
  },
  {
    id: 12,
    category: "갈등 상황",
    question: "싸운 다음 날",
    options: [
      { text: "먼저 '미안해' 연락함", score: 2 },
      { text: "상대가 먼저 연락하길 기다림", score: -2 }
    ]
  },

  // === 일상 대화 (3문항) ===
  {
    id: 13,
    category: "일상 대화",
    question: "카톡 대화는 주로",
    options: [
      { text: "내가 먼저 말 걸고 화제 시작", score: 2 },
      { text: "상대 말에 맞장구치며 답장", score: -2 }
    ]
  },
  {
    id: 14,
    category: "일상 대화",
    question: "연애 중 통화할 때",
    options: [
      { text: "'오늘 이런 일 있었어' 내 얘기 먼저", score: 2 },
      { text: "'너는 오늘 어땠어?' 상대 얘기 먼저", score: -2 }
    ]
  },
  {
    id: 15,
    category: "일상 대화",
    question: "연인이 고민 상담할 때",
    options: [
      { text: "'이렇게 해봐' 해결책 제시", score: 2 },
      { text: "'그래서 어떻게 했어?' 경청", score: -2 }
    ]
  }
];
