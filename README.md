# 📝 논리논술

> **미래사회 핵심역량을 기르는 논리논술 교실**  
> 2022 개정교육과정 학교 자율시간 연계 AI 기반 논술 지도 플랫폼  
> Claude AI · 단일 HTML 파일 · 설치 없이 바로 실행

---

## 🖥️ 데모

👉 **[GitHub Pages에서 바로 사용하기](https://본인계정.github.io/논리논술/)**

---

## ✨ 주요 기능

### 모드 A — 논술 생성
학교급 · 분야 · 유형을 선택하면 **4가지 산출물을 동시에 자동 생성**합니다.

| 탭 | 산출물 | 활용 |
|---|---|---|
| 논술문 모범답안 | 서·본·결 구조 색상 표시 + 복사·PDF | 교사 참고 / 학생 분석용 |
| 학습지 | A4 인쇄용, 개요표·줄글씨칸·체크리스트 | 학생 배포 |
| 루브릭 | 5영역 100점, 클릭식 인터랙티브 채점 | 교사 채점 |
| 수업 지도서 | 논술 유형별 서·본·결 지도법, 발문 TIP | 교사 수업 준비 |

### 모드 B — 학생 글 AI 채점
두 가지 입력 방식 지원 + 결과 탭 2개 제공

| 입력 방식 | 설명 |
|---|---|
| 📷 사진 업로드 | 여러 장 동시 업로드 · 자동 선명화 처리 후 AI 인식 |
| 📋 텍스트 붙여넣기 | 워드·한글 문서에서 복사 후 즉시 채점 |

| 결과 탭 | 내용 |
|---|---|
| 학생답안 | AI가 인식한 손글씨 전문 텍스트 |
| 채점결과 | 5개 영역 100점 + 영역별 피드백 + 총평 + 개선 포인트 |

---

## 📂 파일 구조

```
논리논술/
├── index.html          ← 메인 앱 (이 파일 하나로 모든 기능 동작)
├── security-check.js   ← GitHub 업로드 전 보안 자가 점검 스크립트
├── .gitignore          ← GitHub 업로드 차단 목록
└── README.md
```

> ✅ `index.html` 파일 하나만 있으면 동작합니다.  
> ✅ 별도 설치, 서버, 데이터베이스 불필요.

---

## 🏫 학교급별 차등 설계

| 구분 | 초등학교 | 중학교 | 고등학교 |
|---|---|---|---|
| 글자 수 | 300 / 500 / 800자 | 800 / 1000 / 1500자 | 1000 / 1500 / 2000자 |
| 본론 문단 | 2개 | 3개 | 4개 |
| 루브릭 총점 | 5영역 × 20점 = **100점** | 5영역 × 20점 = **100점** | 5영역 × 20점 = **100점** |
| 피드백 어조 | 격려 중심 | 분석 + 개선 안내 | 대입 논술 수준 |

---

## 🚀 시작하기

### 방법 1 — 로컬에서 바로 실행

1. `index.html` 다운로드
2. 크롬(Chrome) 또는 엣지(Edge) 브라우저로 파일 열기
3. API 키 입력 후 바로 사용

> ⚠️ 인터넷 익스플로러(IE)는 지원하지 않습니다.

### 방법 2 — GitHub Pages 배포 (여러 교사와 공유)

1. GitHub 저장소 생성 → `index.html`, `.gitignore`, `README.md` 업로드
2. 저장소 **Settings → Pages → Branch: main → Save**
3. 약 1분 후 URL 생성 → 교사들과 공유

---

## 🔑 API 키 설정

### 발급 방법 (5단계)

1. [console.anthropic.com](https://console.anthropic.com) 접속
2. Gmail 소셜 로그인 (신용카드 불필요)
3. **Billing → 카드 등록 → $10 크레딧 충전**
4. **Settings → API Keys → Create Key**
5. 생성된 키 복사 (단 한 번만 표시 — 반드시 저장!)

> 💡 처음 충전 권장: **$10** (약 14,000원)  
> 교사 1인 월 4회 수업 기준 약 **$6~14** 소요

### 앱에서 키 입력

앱 왼쪽 패널 상단 API 키 입력란에 붙여넣기 → **저장** 클릭 또는 **Enter**

입력한 키는 **브라우저 localStorage에만 저장**됩니다.  
`index.html` 코드에는 기록되지 않으며, GitHub에 올려도 노출되지 않습니다.

---

## 🔐 보안 구조

```
교사가 화면에서 API 키 입력
         ↓
브라우저 localStorage에만 저장
(파일 시스템과 완전히 분리)
         ↓
index.html 코드에 기록 안 됨
         ↓
GitHub에 올려도 키 없음 ✅
```

### GitHub 업로드 전 보안 점검

Node.js가 설치된 경우 아래 명령으로 안전 여부를 확인합니다.

```bash
node security-check.js
```

정상 출력:
```
✅ 실제 API 키 포함 여부 — 없음 (안전)
✅ localStorage 저장 방식 사용 여부
✅ Overloaded 자동 재시도 로직
✅ 보안 점검 통과! GitHub에 안전하게 업로드할 수 있습니다.
```

### 절대 하지 말아야 할 것

```
❌ index.html 코드 안에 sk-ant-... 직접 입력
❌ 채팅창 / 카카오톡 / 이메일에 API 키 붙여넣기
❌ GitHub Issues / 커밋 메시지에 키 입력
❌ 화면 공유 / 발표 중 API 키 화면에 노출
```

---

## ⚡ Overloaded 오류 자동 처리

Claude API 서버가 혼잡할 때 자동으로 재시도합니다.

| 시도 | 대기 시간 |
|---|---|
| 1회 재시도 | 15초 후 |
| 2회 재시도 | 30초 후 |
| 3회 재시도 | 45초 후 |
| 4회 재시도 | 60초 후 |

---

## 📷 손글씨 사진 채점 기능

- 여러 장 동시 업로드 (앞면·뒷면 등)
- Canvas API로 자동 선명화 처리 (대비 1.6배, 최대 2400px 업스케일)
- 흐린 사진도 최대한 인식 — 흐림 부분은 `[일부 흐림, 추정 포함]` 표시
- 채점 후 **학생답안** 탭에서 인식된 전문 텍스트 확인 가능

---

## 📋 지원하는 논술 유형 (19종)

**목적에 따른 유형**  
설명형 · 주장형 · 비판형 · 대안제시형 · 비교·분석형 · 서사형

**사고구조에 따른 유형**  
원인-결과형 · 문제-해결형 · 찬반형 · 자료해석형 · 통합형

**학교 현장 특화**  
독후감 · 시사 · 토론 · 환경 · 인성 · 진로 · 과학 · AI·디지털 논술

---

## 💰 비용 안내

| 모델 | 특징 | 월 예상 비용 (1인) |
|---|---|---|
| claude-haiku-4-5 | 빠름, 저렴 | 약 $2~5 |
| **claude-sonnet-4-6** ★ | 성능·가격 균형 | 약 $6~14 |
| claude-opus-4-7 | 최고 성능 | 약 $15~30 |

> 기본 모델: `claude-sonnet-4-6`

---

## 🛠️ 기술 스택

- **프론트엔드**: HTML5 + CSS3 + Vanilla JavaScript (단일 파일)
- **AI**: Anthropic Claude API
- **아이콘**: Lucide Icons
- **폰트**: Noto Sans KR / Noto Serif KR (Google Fonts)
- **배포**: GitHub Pages

---

## ❓ 자주 묻는 질문

**Q. Claude Pro 구독이 있는데 API 크레딧도 별도로 사야 하나요?**  
A. 네. claude.ai(Pro)와 API Console은 완전히 별개입니다. console.anthropic.com에서 별도 크레딧을 구매해야 합니다.

**Q. 학교에서 교사 여러 명이 API 키 하나를 공유할 수 있나요?**  
A. 가능합니다. 담당 교사 1명이 키를 발급해 학교 내부 채널로 공유하면 각 교사가 자신의 브라우저에 입력해서 사용합니다. 자세한 내용은 앱 내 **도움말 탭**을 참고하세요.

**Q. 학생 사진이 외부 서버에 저장되나요?**  
A. 아닙니다. 채점을 위해 Claude API에 일시 전송되며 어디에도 저장되지 않습니다.

**Q. API 키가 노출된 것 같으면?**  
A. 즉시 console.anthropic.com → Settings → API Keys에서 해당 키를 삭제하고 새 키를 발급받으세요.

---

## 📞 문의 및 참고

- Anthropic API 문서: [docs.anthropic.com](https://docs.anthropic.com)
- Anthropic 지원: [support.anthropic.com](https://support.anthropic.com)
- API 키 발급: [console.anthropic.com](https://console.anthropic.com)
- 제작자 이메일: yso21@naver.com
- Senior Ai Design Academy: [youtube.com/@42da](https://youtube.com/@42da)
- Music: [youtube.com/@pianocanvas](https://youtube.com/@pianocanvas)

---

## 📄 라이선스

교육 목적 자유 사용 (비상업적)  
© Produced by 2026 You Seung-oh. yso21@naver.com, All rights reserved.
