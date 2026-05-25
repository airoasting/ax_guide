# AGENTS.md: 비즈니스 리더를 위한 AX 실행 가이드

이 파일은 이 프로젝트에서 AI가 일할 때 따라야 할 모든 작업 지침을 담는다. 단일 진실 원천(SSOT) 규칙, 페이지 인벤토리, 코드 규약, 디자인 시스템, 한국어 작성 원칙이 모두 여기에 있다. 변경 이력은 [MEMORY.md](MEMORY.md)에 따로 둔다.

새 규약을 추가하거나 기존 규약을 고칠 때는 이 파일만 수정한다.

## 한 줄 원칙 (글쓰기)

> 자연스러운 한국어로, 주술 구조 맞추어서, 이해하기 쉽게, 번역투 거두어내고 em dash는 절대 쓰지 마.

이 한 줄이 모든 한국어 문장의 뿌리다. 이 문서, 콘텐츠 페이지의 본문, commit 메시지, AI 응답까지 모두 같은 기준으로 쓴다.

---

## 1. 프로젝트 정체성

- **이름**: 비즈니스 리더를 위한 AX 실행 가이드
- **부제(슈퍼타이틀)**: AI-Native 전환을 위한 5단계 프레임워크
- **타깃**: 비즈니스 리더(C-레벨·임원·의사결정자), 실무자(TF·기획), 실행자(현장 운영)
- **포맷**: 단일 폴더 정적 HTML (Vanilla HTML + CSS + 약간의 JS)
- **호스팅**: 사내 정적 호스팅 또는 사내 위키 첨부 (외부 공개 아님, 사내 한정 공유)
- **디자인**: 에디토리얼 세리프 본문 + 산세리프 UI + 진중한 포레스트 그린 강조색 + 카드 레이아웃
- **톤**: BCG·Bain·McKinsey 류의 컨설팅 보고서 톤. 신뢰도 높고, 채도 낮고, 차분하다.
- **분류**: Core Asset (계속 키워야 할 대표 자산)

## North Star

원본 가이드(`plan.md`)의 5층위 구조(A 청사진 + B 5단계 로드맵 + C 미시 메서드 + D 자산 축적 4단계 순환 + E 검증 사례)를 14페이지로 임원이 끊김 없이 읽도록 구현한다. 모든 층위는 **COMPANY BRAIN OS 구축**이라는 궁극 목표로 수렴한다. 각 페이지는 "다음 행동"이 선명해야 한다.

### 궁극 목표

AX의 도착지는 도구 도입이 아니라 **COMPANY BRAIN OS**다. 회사의 암묵지가 구조화된 지식으로 저장되고, 그 지식 위에서 에이전트가 일하고, 사람과 에이전트가 함께 도는 협업 루프가 자산을 분기마다 두껍게 만드는 운영체계다. 5단계 로드맵은 그 두뇌를 짓는 공사 일정이고, 각 단계는 BRAIN OS의 한 층(운영 주체 → 첫 모듈 → 우선 적재 자산 → 전사 확장 → 지속 운영)을 쌓는다.

### 금지 용어

다음 용어는 모든 산출물(HTML·MD·코드 주석·커밋 메시지)에서 절대 쓰지 않는다.

| 금지 용어 | 대체 |
|---|---|
| `라이너`, `LINER`, `라이너 AX Methodology` | `미시 엔진`, `미시 메서드`, `10문항 미시 엔진` |
| `KAL`, `Knowledge-to-Agent Loop` | `자산 축적 4단계 순환`, 또는 단계 함수명(`추출`·`구조화`·`자산화`·`검증`) |
| `K1`, `K2`, `K3`, `K4` | `추출`, `구조화`, `자산화`, `검증` (필요시 `자산 축적 4단계 순환의 추출` 식으로 명시) |
| `AX 브레인`, `AX BRAIN` | `COMPANY BRAIN OS` |

CSS 클래스명·SVG ID 같은 비가시 식별자(`.bp-liner`, `.bp-kal`, `#lineR` 등)는 그대로 두되, 시간이 허락하면 다음 사이클에서 함께 갈아엎는다. 우선순위는 사용자 가시 텍스트다.

---

## 2. 단일 진실 원천 (SSOT) 규칙

**[plan.md](plan.md)가 원본이다.** 다른 모든 산출물은 여기서 파생된다.

순서:
1. 내용이 바뀌면 `plan.md`를 먼저 고친다.
2. 그 변경을 해당 HTML 페이지에 반영한다.
3. 변경 사실을 [MEMORY.md](MEMORY.md)에 기록한다.

금지:
- HTML 본문 카피만 고치고 `plan.md`를 그대로 두지 않는다. 다음 사이클에서 덮어쓰여 사라진다.
- `plan.md`에 없는 새 주장이나 수치를 HTML에 임의로 끼워 넣지 않는다. 추가가 필요하면 `plan.md`를 먼저 고친다.
- 페이지 간 같은 내용이 어긋나면 `plan.md`가 정답이다.

---

## 3. 산출물 묶음과 페이지 인벤토리 (14개)

원본 가이드는 4종 산출물로 구성된다. 이 저장소가 다루는 것은 **웹사이트(HTML)**다. 나머지(MD 본 가이드, 실전 템플릿, BRAIN OS 운영 매뉴얼)는 원본·부록의 형태로 별도 관리한다.

| 산출물 | 역할 | 대상 | 이 저장소의 처리 |
|---|---|---|---|
| 본 가이드 (`plan.md`) | 원본·전체 내용 | 경영진·전체 | SSOT, 직접 수정 |
| 실전 템플릿 (MD) | 채워 쓰는 워크시트 | 실무자 | E 영역(`e2-templates`)에서 인터랙티브로 구현 |
| BRAIN OS 운영 매뉴얼 (MD) | 현장 실행 절차 | 실행자 | E 영역(`e3-playbook`)에서 페이지로 구현 |
| 웹사이트 (HTML) | 전달·공유 매체 | 경영진·전체 | **본 저장소** |

### 3.1 페이지 인벤토리

`index.html`이 라우팅 허브다. 콘텐츠 페이지는 모두 동일한 구조 골격을 공유한다 (header → step-nav → header-pages → sticky sub-menu → container → SM-HAMBURGER).

**원칙: 각 영역(A~E)을 2~3개 HTML 페이지로 나눈다.** 한 페이지가 너무 길어 임원이 스크롤을 포기하지 않도록, 영역을 의미 단위로 쪼갠다. 본문은 정적, 템플릿만 인터랙티브로 가는 하이브리드.

#### 진입 (1개)
| 페이지 | 성격 | 핵심 시각 요소 |
|---|---|---|
| `index.html` | 후킹·5층위 지도·5분 요약 | 5층위 전체 지도, 5분 요약 카드 |

#### A. 청사진 + 진단 (3개)
| 페이지 | 성격 | 핵심 시각 요소 | 출처(plan.md) |
|---|---|---|---|
| `a1-blueprint.html` | 청사진 (전·후 대비·수치) | 전·후 대비표, 4~5배 수치 | A-1, A-2, A-3 |
| `a2-principles.html` | 북극성 원칙 5 | 원칙 5 카드 | A-4 |
| `diagnosis.html` | AX 6대 영역 진단 (24문항 인터랙티브) | 6대 영역 카드, 24문항 폼, 레이더 + 6막대 + 총점, 5단계 성숙도 사다리, 컨설팅펌 출처표 | B-0 (재해석) |

#### B. 거시 로드맵 (단계별 분할)

원래 계획은 3개 묶음 페이지였으나, 단계별 흐름을 더 살리기 위해 단계 안에서 작업 단위로 한 번 더 쪼갰다. 현재 구조는 다음과 같다.

| 단계 | 페이지 | 성격 | 출처(plan.md) |
|---|---|---|---|
| ① 추진 체계 | `organization.html` · `operations.html` · `capability.html` | 조직 세팅 · 운영 계획 · 90일 부트캠프 | B-1 |
| ② 파일럿 실행 | `pilot.html` · `insights.html` | 대상 선정과 실행 · 핵심 시사점 도출 | B-2 |
| ③ 과제 우선순위화 | `criteria.html` · `evaluation.html` · `bets.html` | 기준 설정 · 후보 평가 · 빅 베팅 선정 | B-3 |
| ④ 업무 방식 재설계 (★ 심장) | `resource.html` · `reshape.html` | 자원 재배분(B-4-1) · 업무 재설계(B-4-2) | B-4 |
| ⑤ 운영 내재화 | (미구현) | 살아있는 플랫폼 · 에이전트 운영모델 · 거버넌스 인프라 | B-5 |

④는 두 페이지로 쪼갠다. 첫 페이지 `resource.html`은 10-20-70 자원 재배분과 70퍼센트 안의 세 갈래(리더십·도입·업스킬링)를, 둘째 페이지 `reshape.html`은 끝에서 끝까지 흐름 재설계와 4D 전사 표준, 미시 엔진의 전사 확장을 다룬다. 두 페이지 모두 단계 네비게이션에 자원·업무 두 칩을 노출하고, 본문 끝 인계 박스에서 서로를 가리킨다.

#### C. 미시 엔진 (2개)
| 페이지 | 성격 | 핵심 시각 요소 | 출처(plan.md) |
|---|---|---|---|
| `c1-method-intro.html` | 미시 엔진 중심 · 상단 7문항 | 1번 + What(2·3·4) + Why(5·6·7) 구조표 | C-1, C-2 |
| `c2-method-exec.html` | 하단 3문항 · 호출 구조 | 8·9·10 실행 표, ②③에서의 호출 흐름 | C-3 |

#### D. 자산 축적 4단계 순환 (2개)
| 페이지 | 성격 | 핵심 시각 요소 | 출처(plan.md) |
|---|---|---|---|
| `d1-kal-loop.html` | 4단계 순환 | K1→K2→K3→K4 순환 카드 | D-1 |
| `d2-kal-edge.html` | 차별점 · 5단계 연결 | 비판 대응표, ②③④ 연결도 | D-2, D-3 |

#### E. 검증 사례 · 실무 (3개)
| 페이지 | 성격 | 핵심 시각 요소 | 출처(plan.md) |
|---|---|---|---|
| `e1-casestudy.html` | 게스코리아 CS 검증 사례 | K1~K4 단계별 산출물, ROI 추정 표 | E 전체 |
| `e2-templates.html` | 실전 템플릿 (인터랙티브) | 진단 점수·DRI 매트릭스·BRAIN OS 워크시트 입력 폼 | 부록(템플릿) |
| `e3-playbook.html` | 운영 매뉴얼 | 암묵지 추출 질문지, IT 적용 체크리스트, 공수 산정표 | 부록(운영 매뉴얼) |

### 3.2 공통 자산

저장소에는 두 세대의 자산이 공존한다. 통합 방향은 4.0절을 본다.

**기존 시스템 (살림 · 시각 컴포넌트 차용 대상)**
- `assets/css/tokens.css`: 뉴모피즘 토큰, 베이지 배경, 트랙 컬러 (그린으로 교체 예정)
- `assets/css/base.css`: 로컬 Pretendard `@font-face`, 기본 리셋
- `assets/css/layout.css`: `.container`(1280px), `.site-header`, `.nav-wrapper`(스티키), `.nav-row`(5칸 그리드), `.nav-btn`(뉴모피즘 버튼)
- `assets/css/components.css`: `.card`, `.badge`, `.decision-box`, `.handoff-box`, `.upstream-box`, `.lv-box`, `.perspective-box`, `.compare-table`, `.download-card`
- `assets/css/strategy.css`, `assets/css/execution.css`: 트랙 컬러 override (그린 두 톤으로 재매핑 예정)
- `assets/js/nav.js`: 스크롤 그림자 토글 + 현재 페이지 active
- `assets/js/diagnostic.js`: 5축 진단 + Lv1~5 분류 (plan.md의 6차원으로 재작성 예정)
- `assets/js/pdf-export.js`: PDF 내보내기
- `assets/fonts/PretendardVariable.ttf` 외 정적 8단계
- `assets/logos/logo1-white.png`, `logo1-transparent.png`
- `assets/img/thumbnails/`
- `assets/downloads/`: 워크북·계산기·템플릿 다수 (활용 대상)

**임시 자산 (다음 세션에서 통합 후 정리)**
- `assets/style.css`, `assets/nav.js`: 1차 시도용 단일 파일. 기존 css/js와 충돌하므로 다음 세션에서 흡수·삭제 결정.
- `a1-blueprint.html`: 임시 파일. 기존 시각 시스템 위에서 다시 짠다.

페이지마다 CSS·JS를 중복으로 넣지 않는다. 공통 자산은 14개 페이지가 같은 파일을 참조한다.

### 3.3 페이지 분할 기준 (왜 14개인가)
- **A는 3개로**: 청사진(설득) · 원칙(기준) · 진단(현재 위치)이 성격이 달라 분리한다. 한 페이지에 다 넣으면 길고 톤이 섞인다.
- **B는 3개로**: 5단계를 1개에 몰면 너무 길고, 5개로 쪼개면 흐름이 끊긴다. ①②(준비) · ③④(검증·변혁, 심장 포함) · ⑤(완성) 세 묶음이 자연스러운 리듬이다.
- **C·D는 2개로**: 각각 "구조 소개"와 "실행·차별점"으로 나눈다.
- **E는 3개로**: 검증 사례(증거) · 템플릿(인터랙티브 도구) · 운영 매뉴얼(실무 절차)이 용도가 달라 분리한다.

---

## 4. 디자인 시스템과 코딩 규약

### 4.0 통합 방향 (다음 세션 작업 기준)

**원칙**: plan.md의 A~E 14페이지 구조는 그대로 두고, 기존 `assets/css/*`의 시각 컴포넌트를 차용한다. 차용 = 톤·구조·이름 그대로, 컬러만 그린 계열로 재매핑.

매핑 계획:
- 베이지 배경 `--nm-bg: #EDE8DF` → 유지하거나 `#F0EDE3`(살짝 더 그린에 가까운 따뜻한 베이지)로 미세 조정.
- 뉴모피즘 그림자 `--nm-shadow` → 유지 (질감이 진중한 컨설팅 톤과 어울린다).
- 트랙 컬러 두 개를 그린 두 톤으로 통합:
  - `--strategy-primary` = `--green: #0E3B2A` (메인, 딥 포레스트). A·B·C 영역 (청사진·로드맵·미시 엔진 = 의사결정·청사진 성격).
  - `--execution-primary` = `--green-accent: #1B6E4F` (보조, 액션 그린). D·E 영역 (자산 축적 4단계 순환·검증·실무 = 실행·검증 성격).
- `.decision-box`(전략 머리)·`.handoff-box`(전략→실행 인계)·`.upstream-box`(실행 머리) 컴포넌트는 그대로 활용. plan.md의 ②③④ 단계 호출 구조를 시각적으로 표현하기에 자연스럽다.
- `.perspective-box`의 검정 그라데이션은 유지하되, 작은 액센트(라벨·번호)만 그린으로.
- `compare-table`·`badge`·`card`의 트랙 색은 새 두 톤으로 일괄 교체.

**컨테이너 폭**: 기존 1280px와 내가 만든 1080px 중 선택 필요. 컨설팅 톤이라면 본문 reading column은 720~800px로 잡고 컨테이너는 1280px 그대로 두는 게 자연스럽다. 다음 세션에서 확정.

**폰트**: 로컬 Pretendard 단일. 기존 `base.css`가 이미 `@font-face`로 등록되어 있어 별도 추가 작업 불필요. 세리프 본문은 폐기.

**diagnostic.js 재작성**: 기존 5축(vision·adoption·governance·people·workflow)을 `diagnosis.html`의 AX 6대 영역(전략·인재와 문화·운영모델과 프로세스·데이터·AI 도구·거버넌스와 책임)으로 교체. plan.md B-0의 6차원(전략·인재·운영모델·기술·데이터·도입)에서 "기술"을 "AI 도구"로 구체화하고 "도입"을 "거버넌스와 책임"으로 재정의한 결과다. 추천 페이지 파일명도 `strategy-*`/`exec-*` → `a*`/`b*`/`c*`/`d*`/`e*`로 매핑.

**페이지 인벤토리 차이**: diagnostic.js의 `RECOMMENDATIONS`가 가리키는 `strategy-1-vision.html`·`exec-1-workflows.html` 등은 이전 안의 잔재다. 새 인벤토리(3절)와 충돌하므로 다음 세션에서 정리한다.

### 4.1 콘텐츠 영역 사이즈 (`.container`)

모든 콘텐츠 페이지(14개)는 공통 규격을 따른다.

```css
.container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 32px 32px 80px;
}
```

원칙:
- 데스크톱 시각적 폭 상한은 1080px이다. 더 넓게 쓰지 않는다.
- 좌우 패딩 32px과 하단 80px은 고정값이다. 페이지별로 임의 조정하지 않는다.
- 본문 내부의 카드, 표, 이미지, 코드블록은 이 `.container` 안에서 100% 폭을 기본으로 한다.
- 본문 폰트 크기와 줄간격은 페이지별로 다르게 잡지 않고 사이트 공통 토큰을 따른다.

### 4.2 색상 토큰 (진중한 포레스트 그린)

신뢰도 높은 컨설팅 톤. 채도를 낮추고 명도도 낮춰 진중함을 우선한다.

```css
:root {
    --bg: #F7F5EF;              /* 본문 배경, 중성 아이보리 */
    --ink: #0F1A16;             /* 본문 글자, 잉크에 가까운 검정 */
    --ink-soft: #4A554F;        /* 보조 글자 */
    --green: #0E3B2A;           /* 메인 강조색, Deep Forest */
    --green-deep: #062018;      /* 헤더 그라데이션 끝, 거의 잉크 */
    --green-accent: #1B6E4F;    /* 액션·링크, 한 단계 밝은 그린 */
    --green-soft: #EAF0EC;      /* 카드 배경, 회녹빛 차분한 톤 */
    --line: #D6D2C5;            /* 구분선 */
    --gold: #9A7B0A;            /* 검증 사례 강조(E 영역 한정), 채도 낮은 골드 */
}
```

헤더 그라데이션: `linear-gradient(150deg, #0E3B2A, #062018)`

원칙:
- 메인 그린(`--green`)은 헤더·강조·중요한 카드 보더에 쓴다. 본문 배경이나 큰 면적에 쓰지 않는다.
- 카드 배경에는 `--green-soft`를 옅게 깐다.
- 링크·버튼 호버·CTA는 `--green-accent`로 한 단계 밝게 준다 (저채도이므로 너무 튀지 않는다).
- 골드(`--gold`)는 E 영역의 "검증 사례·증거" 신호에 한정한다. 채도를 낮춰 그린과 충돌하지 않게 한다.
- 페이지 어디에도 형광·고채도 강조색을 추가하지 않는다. 컨설팅 보고서 톤을 유지한다.

### 4.3 타이포그래피

- 본문(에디토리얼): 세리프. `'Noto Serif KR', 'Source Serif Pro', serif`.
- UI·라벨(산세리프): `'Pretendard Variable', 'Inter', sans-serif`.
- h1·h2는 세리프, 메뉴·버튼·태그는 산세리프.
- 한 페이지 안에서 두 계열을 섞을 때는 본문이 세리프, UI 칩이 산세리프라는 규칙을 깨지 않는다.

### 4.4 헤더 메뉴 폭 (`.header-pages`, `.header-page-link`)

원칙: 메뉴 개수별로 기준 페이지를 하나 정하고, 같은 개수의 모든 페이지는 그 폭에 정렬한다.

| 메뉴 수 | 기준 페이지 | `.header-pages` max-width | 각 버튼 폭 |
|---|---|---|---|
| 2개 | 미정 (B 영역 일부) | 490px | 약 238px |
| 3개 | 미정 (A 영역 a1·a2·a3) | 700px | 약 224px |
| 그 외 | 별도 기준 페이지를 정의하기 전까지 손대지 않는다 | 미정 | 미정 |

버튼(`.header-page-link`)과 컨테이너(`.header-pages`) 공통 토큰은 `assets/style.css` 한 곳에서 관리한다. 페이지별로 잔여 값(`min-width: 130px`, `width: 64%`, `gap: 12px` 같은 것)을 두지 않는다.

`.hero-inner` 유무에 따른 폭 적용:
- `.hero-inner` (max-width: 700px)가 있는 페이지는 `.header-pages`에 비율 또는 `max-width: 100%`를 써도 된다.
- `.hero-inner`가 없는 페이지는 `.header-pages`에 직접 절대값(700px 또는 490px)을 적용한다. 비율은 헤더 전체 폭에 걸리므로 다른 페이지와 어긋난다.

### 4.5 모바일 햄버거 메뉴 (SM-HAMBURGER)

원칙: 햄버거는 사이트 공통의 단일 패턴이다. 페이지별로 다르게 만들지 않는다.

적용 범위:
- 14개 콘텐츠 페이지 전부에 동일한 코드가 들어 있다 (또는 `assets/nav.js`에서 일괄 주입).
- 마커 주석으로 구역을 명확히 한다. `<!-- ## SM-HAMBURGER START ## -->`와 `<!-- ## SM-HAMBURGER END ## -->` 사이만 수정하거나 교체한다.

브레이크포인트와 동작 전환:
- 데스크톱(`>768px`)에서는 상단 sticky `nav.sub-menu`가 보이고 햄버거 버튼은 숨겨진다.
- 모바일(`≤768px`)에서는 다음이 동시에 일어난다.
  - `nav.sub-menu { display: none !important; }` (가로 sub-menu 숨김)
  - `.sm-menu-toggle { display: inline-flex; }` (우상단 햄버거 버튼 노출)
  - `.header-pages`가 세로 스택으로 바뀐다.

햄버거 UI 구성:

| 요소 | 역할 | 핵심 스펙 |
|---|---|---|
| `.sm-menu-toggle` | 토글 버튼 | `position: fixed; top: 14px; right: 14px; 44×44; border-radius: 12px;` z-index 1200 |
| `.sm-menu-backdrop` | 배경 오버레이 | 전체 화면, `rgba(0,0,0,0.45)`, z-index 1150 |
| `.sm-drawer` | 우측 드로어 | `width: 78%; max-width: 320px;` 100dvh, 우측에서 슬라이드 인, z-index 1160 |
| `.sm-drawer-heading` | 현재 페이지 제목 | active 메뉴 텍스트 > `h1` > `document.title` 순서 |
| `.sm-drawer-back` | "← 목록으로" | 항상 `index.html`로 이동한다 |
| `.sm-drawer-list` | 섹션 메뉴 | `nav.sub-menu`의 `<a>`를 JS가 복제해 렌더한다 |

JS 동작 (단일 IIFE, 외부 의존 없음):
1. `nav.sub-menu`의 모든 `<a>`를 `.sm-drawer-list`에 1:1로 복제한다.
2. 드로어 항목을 클릭하면 드로어가 자동으로 닫힌다.
3. `body.sm-menu-open` 클래스로 상태를 토글한다 (`overflow: hidden` 동반).
4. 닫기 트리거는 토글 버튼·배경·ESC 키 세 가지다.
5. MutationObserver로 `nav.sub-menu`의 active 변경을 드로어에 동기화한다.
6. 접근성을 위해 `aria-label`과 `aria-expanded`를 토글한다.

유지보수 규칙:
- 햄버거 블록은 사이트 공통 자산이다. 한 페이지에서 수정하면 14개 전체에 동일하게 반영해야 한다 (또는 `assets/nav.js`만 고친다).
- 드로어 폭(320px), 버튼 위치(top 14, right 14), 브레이크포인트(768px)는 변경하지 않는다.

### 4.6 중간 분기 (`≤1160px`, 비-모바일 축소)
- `.header-page-link`의 폰트는 12px, padding은 8px 14px, border-radius는 12px로 줄어든다.
- `flex: 1 1 0` 균등 분배는 유지된다 (햄버거로 전환되지 않는다).

### 4.7-A 안티 패턴. AI스러운 시각 장치 금지

다음은 AI가 만든 페이지에서 흔히 나오는 시각적 클리셰다. 이 프로젝트의 어떤 페이지에도 쓰지 않는다.

- **컬러 좌측 강조 바 금지.** 박스 왼쪽에 굵은 컬러 선(`border-left: 3~4px solid <accent>`)을 두고 본문을 들여쓰는 callout 스타일은 쓰지 않는다. ChatGPT 답변 카드, 블로그 인용구, AI 챗봇 UI에서 과도하게 반복돼 즉시 "AI 출신" 시그널을 준다.
- **대안.** 강조가 필요하면 다음 중 하나를 쓴다.
  - 위·아래 얇은 가로선(`border-top` + `border-bottom`, 1px)
  - 미세한 배경 톤(`rgba(14,59,42,0.03~0.05)`)
  - 작은 상단 라벨 칩(라벨이 본문의 맥락을 알려줌)
  - 산세리프 small caps 헤더로 박스를 시작
- **이유.** 컬러 좌측 바는 "이건 AI가 강조하는 인사이트입니다" 같은 인상을 준다. 우리 페이지는 도면/에디토리얼 톤이라 가로선·배경 톤·라벨로 위계를 표현하는 게 일관된다.
- **적용 범위.** `blueprint.html`, 14페이지 본문, 인터랙티브 템플릿, 카드 UI, 콜아웃, 인용구 모두 동일.

추가로 금지하는 AI 시그널 시각 장치.

- 이모지를 헤더·라벨·CTA에 박는 것 (📊 ⚡ 🚀 등).
- 형광 노랑·핫 핑크 강조색. 우리 팔레트는 포레스트 그린 + 크림 + 골드 한 점.
- 그라데이션을 본문 카드 배경에 까는 것. 그라데이션은 상단 헤더 영역 등 한정된 곳에서만.
- "🎯 핵심 포인트" 식의 이모지 + 라벨 콤보 박스.

### 4.7 인터랙티브 템플릿 (E 영역 한정)

`e2-templates.html`은 입력 폼이 있는 유일한 페이지다.

데이터 저장 원칙:
- 기본은 **로컬 저장**(`localStorage`). 각자 채우고 본인만 본다.
- 팀 공유가 필요하면 **내보내기(export)** 버튼으로 마크다운 또는 JSON으로 떨궈, 사내 위키·팀 저장소에 붙인다.
- 외부 서버에 자동 전송하지 않는다. 사내 한정 공유가 기본 보안 원칙이다.

연동:
- 완성된 BRAIN OS 워크시트는 그대로 SKILL.md 본문이 되어, `e3-playbook`의 IT 등록 절차로 넘어가는 흐름을 보여준다.

---

## 5. 한국어 작성 원칙

이 프로젝트의 모든 한국어 글은 다음 규칙을 지킨다. 콘텐츠 페이지의 본문, 카드 설명, 헤더 문구, 운영 문서, commit 메시지, AI 응답 모두 같다.

### 5.1 em dash 절대 금지

`—` 기호는 어디에도 쓰지 않는다. 본문, 표 안, 주석, 제목, 어디에서도 등장하지 않는다.

대체 수단:
- 두 생각이 이어지면 마침표로 끊고 새 문장으로 쓴다.
- 부연 설명이면 괄호나 콜론을 쓴다.
- 표의 빈 칸은 그냥 비우거나 '없음', '미정'으로 적는다.

예시:
- 잘못된 표기: 햄버거 메뉴는 공통 자산 (`—` 사용) 한 페이지만 수정 금지.
- 올바른 표기: 햄버거 메뉴는 공통 자산이다. 한 페이지만 수정하면 안 된다.

**주의**: `plan.md` 원본에는 em dash가 다수 남아 있다. HTML로 옮길 때는 모두 위 대체 수단으로 변환한다. 변환 후 원본도 같이 고치는 것이 SSOT 원칙에 맞다.

### 5.2 주술 구조 맞추기

주어와 서술어가 같은 격으로 끝나야 한다. 주어가 멀어지면 문장을 끊는다.

- 잘못된 표기: 이 페이지의 목적은 사용자가 빠르게 따라할 수 있도록 만든다.
- 올바른 표기: 이 페이지의 목적은 사용자가 빠르게 따라가게 만드는 것이다.

### 5.3 번역투 거두기

| 번역투 | 자연스러운 표기 |
|---|---|
| ~을/를 통해 | ~으로, ~을 써서 |
| ~에 대해서 | ~에 관해, ~을 |
| ~로 인해 | ~ 때문에 |
| ~에 위치한 | ~에 있는 |
| ~을 제공한다 | ~을 준다, ~을 보여준다 |
| ~이 가능하다 | ~을 할 수 있다 |
| ~이 요구된다 | ~이 필요하다 |
| ~의 경우 | ~일 때, ~이면 |
| ~한 것이 아니라 | ~이 아니라 |
| 보다 빠른 | 더 빠른 |
| 다음과 같이 | 다음처럼 |
| 함에 있어 | 할 때 |
| 이를 통해 | 이것으로, 이걸 써서 |
| 부분에 있어서는 | ~ 부분은 |
| ~에 다름 아니다 | ~이다 |
| 매우 중요한 역할을 한다 | 핵심이다, 결정적이다 |
| ~라고 할 수 있다 | ~이다 |

### 5.4 자기해설 금지

글이 자기 자신을 설명하지 않는다.

- 잘못된 표기: 이 섹션에서는 헤더 메뉴의 구성 방식을 설명합니다.
- 올바른 표기: 헤더 메뉴는 다음 구성을 따른다.

### 5.5 과장 어휘 절제

다음 단어는 정말 그럴 때만 쓴다.

혁신적, 획기적, 완벽한, 강력한, 손쉽게, 누구나, 단 한 번에, 게임 체인저.

대신 관찰과 근거로 쓴다. "혁신적인 방법론" 대신 "미시 메서드·Anthropic Skill·4D를 한 순환으로 결합해 COMPANY BRAIN OS를 짓는 방법론"이라고 쓴다.

### 5.6 영어 병기 최소화

한국어로 잘 통하는 단어 옆에 굳이 영어를 붙이지 않는다. 다만 코드 식별자, 라이브러리 이름, 기술 용어, 그리고 이 가이드의 고유 약어(COMPANY BRAIN OS, DRI, 4D, TF, TSR, RAI, SSOT)는 그대로 둔다.

### 5.7 종결체 통일

한 문서 안에서 종결체를 섞지 않는다.

- 운영 문서(AGENTS.md, MEMORY.md, README의 일부)는 평어("~다", "~한다")로 쓴다.
- 사용자에게 보여주는 콘텐츠 본문(14개 HTML 페이지)은 경어("~합니다", "~입니다")로 쓴다.
- 한 페이지 안에서 평어와 경어를 섞지 않는다.

원본 `plan.md`는 평어로 작성되어 있다. HTML로 옮길 때 경어로 변환한다.

### 5.8 AI 마무리 명언 금지

문단 끝에 일반화된 격언이나 다짐을 붙이지 않는다.

- 잘못된 표기: 결국 좋은 전환은 사람을 향한 배려에서 나온다.
- 올바른 표기: (그냥 끝낸다.)

### 5.9 글의 흐름

- 두 문장이 이어지면 접속사 없이도 자연스러운지 살핀다.
- "그리고", "하지만", "따라서"를 남발하지 않는다.
- 한 문단에는 한 주제만 담는다.
- 표나 목록으로 분해할 수 있으면 분해한다.
- 한 문장이 두 줄을 넘으면 잘라본다.

### 5.10 마지막 점검

글을 마치기 전에 스스로 묻는다.

1. em dash가 한 개라도 남아 있는가.
2. 주어와 서술어가 어긋난 문장이 있는가.
3. 번역투 표현이 남아 있는가.
4. 같은 문서에서 평어와 경어가 섞였는가.
5. 자기해설 문장이 있는가.
6. 끝에 군더더기 다짐이나 격언이 붙어 있는가.
7. 과장 어휘가 근거 없이 등장하는가.

하나라도 해당하면 그 자리에서 고친다.

---

## 6. Working Rules

### Rule 1. SSOT는 plan.md다
- 내용 변경은 `plan.md`를 먼저 고치고, HTML에 반영하고, MEMORY.md에 기록한다.
- HTML 페이지에 `plan.md`에 없는 새 주장·수치를 임의로 끼워 넣지 않는다.

### Rule 2. 페이지 분할 원칙을 깨지 않는다
- A·B·E는 3개, C·D는 2개로 나눈다. 임원이 한 페이지를 끝까지 스크롤하도록 만든다.
- 새 페이지를 추가하려면 먼저 분할 원칙(2~3개 원칙)이 깨지지 않는지 확인한다.

### Rule 3. 사이즈 통일은 메뉴 개수별 기준 페이지를 따른다
- 같은 메뉴 수의 페이지는 같은 폭을 쓴다.
- 새 메뉴 카운트가 등장하면 별도 기준 페이지를 먼저 정한다.

### Rule 4. 헤더에서 중복되는 배지는 제거한다
- 본문과 index 메타데이터로 충분한 정보는 헤더 배지로 다시 노출하지 않는다.

### Rule 5. 디자인 토큰을 깨지 않는다
- 폰트, 색, 그림자는 페이지 간 일관성을 유지한다.
- 페이지별 특수 액센트는 E 영역의 골드 보더 같은 명시적 신호일 때만 허용한다.

### Rule 6. 데스크톱과 모바일을 모두 확인하고 보고한다
- `≤1160px` 분기와 모바일(`≤768px`) 분기에 같은 변경이 필요할 수 있다.
- 데스크톱만 수정하고 끝내지 않는다.

### Rule 7. 공통 블록은 일괄 수정한다
- 햄버거 메뉴, `.container` 폭, 헤더 메뉴 토큰, 색상 토큰처럼 전 페이지가 공유하는 구성 요소는 한 페이지만 손대지 않는다.
- 공통 자산은 `assets/style.css`·`assets/nav.js`에 모은다.

### Rule 8. 운영 문서는 AGENTS.md 한 곳에서 관리한다
- 코드 규약, 디자인 시스템, 한국어 작성 원칙, 페이지 인벤토리는 모두 이 파일에 있다.
- 변경 이력은 [MEMORY.md](MEMORY.md)에 남긴다.

### Rule 9. 인터랙티브 입력은 로컬 저장이 기본이다
- `e2-templates`의 입력 폼은 `localStorage`로만 저장한다. 외부 서버 전송 코드를 넣지 않는다.
- 공유는 명시적 내보내기 버튼으로만 가능하다.

---

## 7. 버전 관리

새 저장소다. 첫 commit부터 다음 규칙을 따른다.

### 7.1 버전 번호 규칙 (semver)

`MAJOR.MINOR.PATCH` 형식.

- **메이저**: 사이트 전체 구조 전환. 예: v1.0.0 (14페이지 1차 완성).
- **마이너**: 새 페이지 추가, 큰 디자인 변경, `plan.md` 구조 개편 반영.
- **패치**: 작은 수정, 문구 정리, 부분 보강.

### 7.2 언제 버전을 올리는가
- 기본 리듬은 매주 일요일이다. 그 주에 들어온 commit을 묶어 한 버전을 부여한다.
- 활동이 없는 주는 건너뛴다.
- 메이저 버전 부여는 사용자가 선언한다. AI가 임의로 메이저로 올리지 않는다.

### 7.3 어디에 기록하는가
- [README.md](README.md): 공식 릴리스 노트.
- [MEMORY.md](MEMORY.md): 세션별 작업 로그.
- commit 메시지: `vX.Y.Z: 부제 (핵심 변경)` 형식.

### 7.4 commit 메시지 규칙
- 릴리스 commit: 첫 줄에 버전과 부제, 본문에 변경 항목을 짧은 글머리표로.
- 일반 commit: 변경 대상 파일이나 영역으로 시작해 한 줄로.
- 한국어로 쓰되 5절의 한국어 작성 원칙을 그대로 지킨다.

---

## 8. Anti-Patterns

- `.container` 폭을 1080px 외의 값으로 바꾸지 않는다.
- 페이지마다 `.header-pages max-width`를 임의 값(70%, 64%, 960px 같은 값)으로 두지 않는다.
- `.hero-inner` 유무를 확인하지 않고 폭을 비율로 두지 않는다.
- 햄버거 메뉴 블록을 한 페이지만 수정하고 나머지를 그대로 두지 않는다.
- 햄버거 드로어 폭·위치·브레이크포인트(320px, top14·right14, 768px)를 페이지별로 다르게 두지 않는다.
- 모바일에서 `.header-pages`를 가로로 유지하려고 `flex-direction: column`을 깨지 않는다.
- 본문 메타데이터로 알 수 있는 정보를 헤더 배지에 중복으로 노출하지 않는다.
- 새 페이지를 만들 때 기존 골격(`header → step-nav → header-pages → sticky sub-menu → container → SM-HAMBURGER`)을 따르지 않는 일이 없도록 한다.
- `plan.md`에 없는 주장을 HTML에 임의로 추가하지 않는다.
- 인터랙티브 템플릿의 입력값을 외부 서버에 자동 전송하지 않는다.
- em dash를 그대로 HTML에 옮기지 않는다. 변환은 의무다.

---

## 9. Default Output Pattern

페이지 수정 요청을 받으면 다음 순서로 답한다.

1. 변경 대상 파일 목록과 분류 (SSOT 변경인지, HTML 반영인지, 둘 다인지).
2. `plan.md` 변경이 필요하면 그 변경 내용을 먼저 제시한다.
3. 변경 전과 후의 CSS·HTML 핵심 값을 비교한 표.
4. 데스크톱과 모바일에 미치는 영향 범위.
5. 다음 액션 (commit 여부, MEMORY.md 기록 항목 등).

신규 페이지를 만들 때는 다음을 함께 보고한다.

1. 해당 페이지가 14개 인벤토리의 어느 칸에 들어가는지 (영역·메뉴 수).
2. 골격(header → step-nav → header-pages → sticky sub-menu → container → SM-HAMBURGER)이 갖춰졌는지.
3. 본문 출처(`plan.md`의 어느 절)와 변환 시 적용한 한국어 원칙 점검표.

---

## 10. 진단 페이지 (`diagnosis.html`) 양식

`diagnosis.html`은 blueprint.html과 같은 BP 시각 시스템(`bp-*` 클래스 prefix) 위에서 만든 단일 페이지 인터랙티브 진단이다. `a1-blueprint.html`·`blueprint.html`과 시각 톤은 같지만, **`assets/style.css`의 SM-HAMBURGER 골격(`header → step-nav → header-pages → sticky sub-menu → container`)을 사용하지 않는다.** 자체 `bp-sheet` 도면 래퍼와 자체 sticky sub-menu를 쓴다.

이 절은 그 양식을 단일 진실 원천으로 고정한다. 향후 같은 패턴의 다른 진단 페이지(예. 부서별·산업별 진단)를 만들 때 이 명세를 그대로 따른다.

### 10.1 페이지 골격

```
.bp-sheet (max-width: 1320px, 전체 도면 래퍼)
  └ .bp-stepnav (상단 단계 네비게이션 · 딥 그린 그라데이션 · 6칸 원형 인디케이터 + "← 목록으로")
  └ .bp-hero (eyebrow + h1 + lead + summary)
  └ .bp-hero-nav (sticky sub-menu · 4칸 균등 · scrollspy 대응)
  └ .bp-section × N (각 섹션, 본문 영역)
  └ .bp-footer (딥 그린 그라데이션 · 저작권 한 줄 포함)
```

`.bp-sheet`의 좌상·우하 모서리에 16×16 보조 마크가 박혀 도면 느낌을 살린다. 페이지 한 장당 하나의 sheet만 둔다.

`.bp-stepnav`는 이전의 `.bp-titleblock`(Project / Sheet / By 3칸 메타)을 대체한다. 임원이 "지금 어디까지 왔나"를 진단 + 5단계 로드맵 6칸으로 즉시 확인하도록 설계됐다. 상세는 §10.13 참조.

### 10.2 sticky sub-menu (`.bp-hero-nav`)

- 위치: `position: sticky; top: 0; z-index: 50;`
- 패딩: `12px 56px`
- 배경: `var(--bp-paper-2)`, 위·아래 1px solid `var(--bp-line)` 보더, 미세 그림자
- 링크: `flex: 1 1 0`로 균등 분배. 보더 1px solid `var(--bp-line)`, 배경 `var(--bp-paper)`, 폰트 14px 600
- 활성 상태(`a.active`): 메인 그린 배경 + 페이퍼 글자색 + 하단 인셋 3px 라이트 그린 보더 (`box-shadow: inset 0 -3px 0 var(--bp-accent)`)

링크 개수와 순서는 페이지 콘텐츠 흐름과 같이 간다. `diagnosis.html`의 경우 다음 네 칸이 표준.

| 순서 | 라벨 | 앵커 |
|---|---|---|
| 1 | AX 6대 영역 | `#common` |
| 2 | 24문항 진단 | `#questions` |
| 3 | 결과와 가이드 | `#result` |
| 4 | 컨설팅펌 참고자료 | `#firms` |

링크 라벨은 영역명 + 짧은 보조어 한 단어로 한정한다. "공통으로 ~합니다" 같은 서술형 제목은 메뉴에 넣지 않는다.

### 10.3 scrollspy

별도 IIFE로 구현한다. 다음 규약을 지킨다.

- 트리거 라인은 `nav.offsetHeight + 60px`. 섹션 상단이 이 라인을 지나면 해당 링크에 `.active` 클래스를 부여한다.
- 스크롤 이벤트는 `requestAnimationFrame`으로 감싸 한 프레임에 한 번만 갱신한다.
- `resize` 이벤트에도 재계산한다.
- 페이지 로드 시 한 번 즉시 갱신해 초기 상태를 맞춘다.

### 10.4 앵커 스크롤 보정

```css
html { scroll-behavior: smooth; scroll-padding-top: 50px; }
```

`scroll-padding-top`은 단일 값으로 관리한다. `section[id] { scroll-margin-top: ... }`을 함께 두지 않는다 (두 값이 합쳐져 의도와 다른 오프셋이 잡힌다).

50px 기준으로 섹션 상단 패딩 56px이 더해져, 메뉴 클릭 시 섹션 제목이 sticky 메뉴 아래 약 40px 여유로 자리잡는다. 이보다 더 붙이거나 더 떨어뜨리고 싶으면 이 값 한 곳만 손본다.

### 10.5 섹션 헤더 (`.bp-section-head`)

```css
.bp-section-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 36px;
    padding-bottom: 18px;
    /* border-bottom 없음 */
}
```

좌측에 `<h2 class="bp-section-title">` (30px 700), 우측에 `<div class="bp-section-meta">` (11px uppercase letter-spacing 0.12em).

- **`.bp-section-meta`는 한 줄로 쓴다.** `<br>` 사용 금지. 여러 항목을 나열할 때는 ` · ` 구분자.
- 섹션 헤더 하단 점선(`border-bottom: 1px dashed`) 없다. 상단의 sheet/section solid 보더만 시각 구분으로 쓴다.

### 10.6 폰트 사이즈 표준 (`diagnosis.html` 기준)

| 컴포넌트 | 폰트 | 무게 | 비고 |
|---|---|---|---|
| `.bp-step` | 11.5px | 600 | 36×36 원형, 페이퍼 톤 보더, 활성 시 페이퍼 채움 + 잉크 글자 |
| `.bp-back` | 12.5px | 400 | letter-spacing 0.04em, 호버 시 0.08em로 벌어짐 |
| `.bp-substeps a` | 13px | 600 | letter-spacing 0.02em, `min-width: 220px` 사각 칩 |
| `.bp-hero-eyebrow` | 11px | 400 | uppercase letter-spacing 0.18em, 액션 그린 |
| `.bp-hero h1` | 52px | 700 | line-height 1.18 |
| `.bp-hero .bp-lead` | 15px | 400 | line-height 1.7 (기본 17px에서 2pt 축소) |
| `.bp-hero .bp-summary` | 14px | 400 | line-height 1.75 (기본 16px에서 2pt 축소) |
| `.bp-section-title` | 30px | 700 | line-height 1.25 |
| `.bp-section-meta` | 11px | 400 | uppercase letter-spacing 0.12em |
| `.bp-dim-num` | 11px | 700 | uppercase letter-spacing 0.2em, 액션 그린 |
| `.bp-dim-name` | 16px | 700 | letter-spacing -0.005em |
| `.bp-dim-desc` | 12.5px | 400 | line-height 1.6, 질문형 |
| `.bp-diag-tag` | 12px | 700 | uppercase letter-spacing 0.18em |
| `.bp-diag-title` | 19px | 700 | letter-spacing -0.005em |
| `.bp-diag-title .sub` | 12.5px | 400 | letter-spacing 0.02em, 회색 |
| `.bp-q-text` | 14.5px | 400 | line-height 1.65 |
| `.bp-q-num` | 11px | 700 | letter-spacing 0.1em |
| `.bp-scale label` | 12px | 400 | (안의 `.num`은 17px 700) |
| `.bp-result-head .label` | 11px | 400 | uppercase letter-spacing 0.18em |
| `.bp-result-head .value` | 34px | 700 | letter-spacing -0.02em |
| `.bp-result-head .sub` | 12.5px | 400 | letter-spacing 0.02em |
| `.bp-dim-score-label` | 13.5px | 600 | letter-spacing 0.005em, `white-space: nowrap` |
| `.bp-dim-score-value` | 16px | 700 | letter-spacing -0.02em, 우측 정렬 |
| `.bp-dim-score-total-label` | 13px | 700 | uppercase letter-spacing 0.06em |
| `.bp-dim-score-total-value` | 22px | 700 | letter-spacing -0.02em |
| `.bp-ladder-num` | 10.5px | 700 | uppercase letter-spacing 0.2em |
| `.bp-ladder-name` | 15px | 700 | letter-spacing -0.005em |
| `.bp-ladder-range` | 11.5px | 400 | 회색 |
| `.bp-ladder-desc` | 12.5px | 400 | line-height 1.55 |
| `.bp-guide-tag` | 11px | 700 | uppercase letter-spacing 0.18em |
| `.bp-guide h4` | 17px | 700 | 하단 1px 라인 |
| `.bp-guide ol/ul` | 14px | 400 | line-height 1.75 |
| `.bp-btn` | 13px | 600 | letter-spacing 0.04em |
| `.bp-firms-head > div` | 12px | 600 | uppercase letter-spacing 0.14em |
| `.bp-firms-name` | 13.5px | 700 | letter-spacing 0.04em |
| `.bp-firms-doc` | 13.5px | 500 | (a 태그는 600 + dotted underline) |
| `.bp-firms-doc .sub` | 12px | 400 | letter-spacing 0.02em, 회색 |
| `.bp-firms-axes` | 13.5px | 400 | line-height 1.65 |
| `.bp-chart-caption` | 13px | 400 | line-height 1.7, 회색 |
| `.bp-footer` | 12.5px | 400 | line-height 1.7 |
| 푸터 저작권 | 11.5px | 400 | 상단 1px 라인, 투명도 0.7 |

### 10.7 AX 6대 영역 카드 (`.bp-dim-cell`)

**6대 영역 표준 정의 (이 순서를 깨지 않는다)**:

| D° | 영역명 | key | 라디오 prefix | Q 범위 |
|---|---|---|---|---|
| 1 | 전략 | strategy | s | Q01~Q04 |
| 2 | 인재와 문화 | people | p | Q05~Q08 |
| 3 | 운영모델과 프로세스 | process | o | Q09~Q12 |
| 4 | 데이터 | data | d | Q13~Q16 |
| 5 | AI 도구 | tech | t | Q17~Q20 |
| 6 | 거버넌스와 책임 | governance | g | Q21~Q24 |

- 그리드: `grid-template-columns: repeat(6, 1fr);`. 모바일에서 3칸 또는 1칸으로 접힘.
- 카드 안 구성: 번호(`D° 1` 형식) → 영역명 → **질문형 설명 한 줄**.
- 호버 애니메이션 표준:
  ```css
  transition: background .25s ease, transform .25s ease, box-shadow .25s ease;
  ```
  - 배경: `rgba(27, 110, 79, 0.06)`
  - `translateY(-3px)` 상승
  - `0 8px 24px -10px rgba(6, 32, 24, 0.25)` 그림자
  - 번호 글자색은 메인 그린으로, 자간은 0.24em으로 살짝 벌어진다.

설명은 평어 단정문이 아니라 **컨설턴트가 던지는 진단 질문**으로 쓴다. "~를 봅니다"가 아니라 "~하고 있습니까?"

영역 순서 변경이 필요하면 위 표를 SSOT로 먼저 고친 뒤, 5곳을 일관되게 갱신한다.

1. 히어로 lead 본문의 6개 영역 나열 순서
2. `.bp-dim-cell` 6개 카드 순서 (D° 번호와 함께)
3. `.bp-diag` 6개 진단 블록 순서 (D° 라벨, Q 번호, sub 출처도 함께)
4. `.bp-dim-score-row` 6개 점수 행 순서
5. `<script>`의 `DIMENSIONS` 배열 순서 (레이더 축, 결과 텍스트, 약축 식별 모두 이 배열에 의존)

라디오 input의 `name` 속성(s1·p1·o1·d1·t1·g1)은 영역과 함께 이동하며 절대 키를 바꾸지 않는다. localStorage 저장 키 호환을 위해서다.

### 10.8 결과 블록 (`.bp-result`)

- 헤더(`.bp-result-head`): 3칸 그리드(총점·성숙도·취약 영역). 딥 그린 그라데이션 + 미세 그리드 오버레이.
- 본문(`.bp-result-body`): 레이더 SVG + 6개 막대 + 총점 행 + 5단계 ladder + 2개 가이드 카드 + 액션 버튼.
- **취약 라벨**은 행의 `::after`로 absolute 띄우지 않는다. `.bp-dim-score-label::after`로 인라인 badge를 붙인다. 라벨 셀 폭은 180px로 잡아 한 줄로 들어가게 한다 (`white-space: nowrap`).
- 활성 ladder cell(`.bp-ladder-cell.active`): 딥 그린 그라데이션 배경(`rgba(14,59,42,0.22) → rgba(27,110,79,0.18)`) + 상하 4px 인셋 보더 + 텍스트 잉크 톤. 옅은 회녹빛이 아니라 명확하게 강조된 그린이다.

### 10.9 푸터 저작권

`.bp-footer` 마지막 줄에 다음 한 줄을 둔다.

```html
<p style="margin:22px 0 0; padding-top:18px; border-top:1px solid rgba(247,245,239,0.18); font-size:11.5px; opacity:0.7; letter-spacing:0.04em;">&copy; 2026 AI ROASTING. All rights reserved.</p>
```

연도는 매년 갱신. `&copy;`로 동그라미 안 C를 쓴다. 별도 PNG·SVG 도입 금지.

### 10.10 인터랙티브 입력 저장

`localStorage` 단일 키로 저장한다 (`STORAGE_KEY = 'ax-diagnosis-v1'`). 외부 서버 전송 금지. 공유는 명시적 내보내기 버튼(클립보드 복사·텍스트 파일)으로만 가능하다 (Rule 9와 동일).

### 10.11 24문항 폼

- 영역당 4문항 × 6영역 = 24문항. 각 문항 5점 척도 라디오.
- 점수 합산 규칙: 영역 합계 / 4 = 영역 평균. 24문항 합계 = 총점. 총점 24~120점.
- 5단계 성숙도 구간: Lv1 24~43 / Lv2 44~62 / Lv3 63~81 / Lv4 82~100 / Lv5 101~120.
- 24문항 모두 응답해야 결과가 활성화된다 (`empty` 클래스 토글로 흐림 처리).

### 10.13 상단 단계 네비게이션 (`.bp-stepnav`)

페이지 최상단에 6칸 원형 단계 인디케이터를 배치한다. 임원이 "진단 → 1 → 2 → 3 → 4 → 5" 흐름에서 자기가 어디 있는지 즉시 파악하도록 한다.

```html
<nav class="bp-stepnav" aria-label="전체 단계">
    <ol class="bp-steps">
        <li class="bp-step active" aria-current="step">진단</li>
        <li class="bp-step">1</li>
        <li class="bp-step">2</li>
        <li class="bp-step">3</li>
        <li class="bp-step">4</li>
        <li class="bp-step">5</li>
    </ol>
    <a class="bp-back" href="index.html">← 목록으로</a>
    <div class="bp-substeps" aria-label="현재 단계의 페이지">
        <a href="blueprint.html">AX 추진 원칙</a>
        <a href="diagnosis.html" class="active" aria-current="page">현재 수준 진단</a>
    </div>
</nav>
```

스타일 규약:

- 배경: `.bp-titleblock`과 동일한 딥 그린 그라데이션(`#062018 → #14523B`) + 미세 그리드 오버레이. 페이지 진입 영역의 일관된 톤을 유지한다.
- 원: **36×36**, 폰트 11.5px, 1.5px 페이퍼 톤 보더, 비활성은 투명 배경. 활성(`.active`)은 페이퍼 채움 + 잉크 글자. (52→40→36으로 단계적 축소된 최종값.)
- 연결선: 1px solid `rgba(247,245,239,0.4)` 가로선이 원 사이를 잇는다 (`.bp-step + .bp-step::before`). 폭 24px.
- 6칸 라벨: 첫 칸은 영역 명(여기서는 "진단"). 나머지는 1~5 숫자. 같은 시리즈의 다른 페이지는 자기 위치에 맞게 active 칸을 옮긴다.
- "← 목록으로": 페이퍼 톤 12.5px 산세리프, 호버 시 자간 0.04em → 0.08em으로 살짝 벌어진다. 위 여백 18px.
- **하위 페이지 칩(`.bp-substeps`)**: 단계 안 페이지 2~3개를 항상 보이게 펼친다. `min-width: 220px` 사각 칩, 위 여백 22px, 칩 사이 gap 12px.
  - 비활성: 투명 배경, 보더 알파 0.28, 글자 알파 0.75 → 활성과 대비 폭을 의도적으로 키운다.
  - 호버: `rgba(247,245,239,0.08)` 배경 + 보더 알파 0.6 + 페이퍼 글자.
  - **활성(`.active`)**: 단색 채움이 아닌 **딥 그린 그라데이션**(`linear-gradient(180deg, #14523B 0%, #0E3B2A 100%)`) + **1.5px 페이퍼 보더** + **이중 그림자**(외부 4px 페이퍼-그린 헤일로 `rgba(14,59,42,0.55)` + 8px 잉크 드롭 `rgba(6,32,24,0.7)`) + `translateY(-1px)`로 살짝 들림. 활성 칩은 `pointer-events: none; cursor: default;`로 같은 페이지 재클릭 방지.
- 모바일(`≤600px`): 원 26×26, 폰트 10px, 연결선 16px, 칩은 `flex: 1 1 auto`로 가로 폭 분배.

세로 간격: 단계 원 → "← 목록으로" → 하위 칩 사이가 모두 18~22px로 균일하게 호흡한다.

원칙:

- **이 영역에 이모지·고채도 강조색 금지** (§4.7-A 안티 패턴과 일치).
- 단계 칸은 의미를 가진 라벨이 있어야 한다. 빈 원이나 "TBD"는 두지 않는다.
- 미구현 페이지로 가는 칸은 `<a>` 대신 `<li>` 단독으로 둔다. 페이지가 생기면 `<a>`로 감싼다.
- `aria-current="step"`을 활성 단계 원에, `aria-current="page"`를 활성 하위 칩에 둔다.
- 하위 칩은 단계 안 페이지 수만큼 둔다. 한 페이지뿐이면 `.bp-substeps` 영역을 생략한다.
- 활성 하위 칩은 단순 색 반전이 아니라 "선택된 카드"로 다뤄 그라데이션·보더·이중 그림자·미세 들림을 모두 적용한다. 단색 페이퍼 채움은 비교 대상으로 사용했다가 폐기됐다 (대비가 약하다는 사용자 피드백).

### 10.12 컨설팅펌 참고자료 섹션

페이지 가장 아래 자리(`<footer>` 직전)에 둔다. 표 구조는 `.bp-firms` 그리드:

| 열 | 폭 | 내용 |
|---|---|---|
| 컨설팅사 | 140px | 한글 또는 약어 (Bain, BCG, PwC, KPMG는 영문 유지. McKinsey와 Deloitte는 hero lead에서만 "맥킨지·딜로이트"로 한글 표기) |
| 대표 프레임워크 | 1fr | `<a target="_blank" rel="noopener">`로 공식 페이지 링크 (점선 밑줄) + `<span class="sub">`로 발표 시기 보조 |
| 핵심 영역 | 1.6fr | 평어 단정문 한두 문장 |

URL은 사실 검증된 공식 페이지만 쓴다. 인스턴스가 부정확하면 비워두거나 일반 도메인 페이지로 떨어뜨린다.

---

## 11. 진단 페이지 작업 체크리스트

`diagnosis.html` 패턴으로 새 페이지를 만들거나 같은 페이지를 손볼 때 다음 항목을 점검한다.

- [ ] 6대 영역의 순서가 §10.7 표(전략→인재와 문화→운영모델과 프로세스→데이터→AI 도구→거버넌스와 책임)와 일치한다. 5곳(hero lead·dim-cell·diag·dim-score-row·DIMENSIONS) 모두.
- [ ] `.bp-stepnav` 단계 원 36×36, 연결선 24px, 모바일 26×26·16px 연결선.
- [ ] `.bp-substeps` 활성 칩이 단순 페이퍼 채움이 아니라 딥 그린 그라데이션 + 이중 그림자 + 미세 들림 상태다.
- [ ] sticky sub-menu 링크 개수와 라벨이 섹션 흐름과 일치한다.
- [ ] scrollspy IIFE가 페이지 끝에 살아 있고, 활성 클래스가 적용된다.
- [ ] `scroll-padding-top` 한 곳만 잡혀 있다 (50px 표준).
- [ ] `.bp-section-head`에 dashed border-bottom이 없다.
- [ ] `.bp-section-meta`가 한 줄이고 `<br>`이 없다.
- [ ] AX 6대 영역 카드의 desc가 모두 질문형이다.
- [ ] hero lead 15px, hero summary 14px (2pt 축소된 상태).
- [ ] 취약 라벨이 라벨 셀 안 인라인 badge로 들어간다 (`::after`).
- [ ] 결과 블록의 총점 행이 마지막에 있고 굵은 보더로 구분된다.
- [ ] 푸터 저작권 한 줄이 있다.
- [ ] 컨설팅펌 출처표가 사실 검증된 URL을 가진다.
- [ ] 입력값은 `localStorage`만 사용한다. 외부 전송 코드가 없다.
- [ ] em dash가 본문에 0개다.
- [ ] 평어와 경어가 섞이지 않았다 (페이지 본문은 경어 합쇼체).
