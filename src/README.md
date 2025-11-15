# src 폴더 - 개발용 모듈화 구조

이 폴더는 **개발 및 유지보수**를 위한 모듈화된 소스 코드입니다.

## 📂 폴더 구조

```
src/
├── data/              # 데이터 파일
│   ├── questions.js   # 15개 질문 데이터
│   └── results.js     # 4가지 결과 타입 데이터
│
├── pages/             # 페이지 컴포넌트
│   ├── Home.js        # 메인 홈 화면
│   ├── Test.js        # 테스트 진행 화면
│   ├── Ad.js          # 광고 화면
│   └── Result.js      # 결과 화면
│
├── components/        # 재사용 컴포넌트
│   ├── ProgressBar.js # 진행률 바
│   └── QuestionCard.js # 질문 카드
│
├── styles/            # 스타일 파일
│   └── main.css       # 메인 CSS
│
├── utils/             # 유틸리티 함수
│   └── calculator.js  # 점수 계산 로직
│
└── app.js             # 메인 앱 로직
```

## 🎯 각 폴더 역할

### 📊 data/
테스트에 필요한 모든 데이터를 관리합니다.
- `questions.js` - 15개 질문, 카테고리, 선택지, 점수
- `results.js` - 4가지 타입별 설명, 스타일, 해시태그

### 📄 pages/
각 화면을 담당하는 페이지 컴포넌트입니다.
- `Home.js` - 랜딩 페이지
- `Test.js` - 성별 선택 + 질문 화면
- `Ad.js` - 광고 시청 화면
- `Result.js` - 결과 표시 화면

### 🧩 components/
여러 페이지에서 재사용할 수 있는 컴포넌트입니다.
- `ProgressBar.js` - 진행률 표시
- `QuestionCard.js` - 질문 카드

### 🎨 styles/
CSS 스타일 파일입니다.
- `main.css` - 전체 스타일 정의

### 🔧 utils/
유틸리티 함수 모음입니다.
- `calculator.js` - 점수 계산, 타입 결정

### ⚙️ app.js
메인 앱 로직 및 상태 관리입니다.
- 앱 상태 관리
- 페이지 렌더링
- 이벤트 핸들러

## 💻 개발 방법

### 1. 질문 수정
`src/data/questions.js` 파일에서 질문 배열 수정

### 2. 결과 타입 수정
`src/data/results.js` 파일에서 결과 객체 수정

### 3. 디자인 변경
`src/styles/main.css` 파일에서 CSS 수정

### 4. 새 페이지 추가
`src/pages/` 폴더에 새 파일 생성 후 `app.js`에서 import

## 🚀 빌드 방법

현재는 **모듈 방식**이므로 ES6 import/export를 사용합니다.

### 방법 1: 개발용 서버 실행
```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

### 방법 2: index.html 통합
`index.html`은 모든 모듈을 하나로 통합한 **배포용 버전**입니다.
- src 폴더 수정 후 index.html에 반영 필요
- 또는 번들러 사용 (webpack, vite 등)

## 📝 코드 스타일

### Import/Export 사용
```javascript
// export
export function calculateResult(answers, gender) { ... }

// import
import { calculateResult } from './utils/calculator.js';
```

### 함수형 컴포넌트
```javascript
export function renderHome() {
  return `<div>...</div>`;
}
```

## 🔄 index.html과의 관계

```
src/ (개발용)           →      index.html (배포용)
- 모듈 분리                    - 단일 파일
- 개발 편리                    - 배포 편리
- 코드 정리                    - 로드 빠름
```

## ✨ 장점

### 모듈화 구조의 이점
1. **유지보수 쉬움** - 파일별로 기능 분리
2. **재사용성** - 컴포넌트 재사용 가능
3. **확장성** - 새 기능 추가 쉬움
4. **협업** - 여러 명이 작업 가능
5. **디버깅** - 문제 파일 쉽게 찾기

## 🎯 다음 단계

1. **타입스크립트 도입** - 타입 안정성
2. **빌드 시스템** - Webpack, Vite
3. **테스트 코드** - Jest, Vitest
4. **상태 관리** - Zustand, Redux
5. **프레임워크** - React, Vue

---

Made with 💕 by ZZB Labs
