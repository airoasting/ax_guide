# MEMORY.md: 변경 로그와 구축 진행 상황

이 파일은 페이지별 변경 이력과 14페이지 웹사이트의 구축 진행 상황을 기록한다. 모든 작업 지침(SSOT 규칙, 코드 규약, 디자인 시스템, 한국어 작성 원칙, 페이지 인벤토리)은 [AGENTS.md](AGENTS.md)에 있다. 이 문서의 모든 문장도 AGENTS.md의 한국어 작성 원칙을 지킨다.

---

## 프로젝트 개요 (현재 상태)

- **이름**: 비즈니스 리더를 위한 AX 실행 가이드
- **부제(슈퍼타이틀)**: AI-Native 전환을 위한 5단계 프레임워크
- **단일 진실 원천(SSOT)**: [plan.md](plan.md)
- **목표 산출물**: 정적 HTML 14페이지 + 공통 자산 2개 (`assets/style.css`, `assets/nav.js`)
- **디자인 톤**: BCG·Bain·McKinsey 류 컨설팅 보고서. 진중한 포레스트 그린 + 에디토리얼 세리프
- **현재 단계**: A 영역 진단·청사진, B 영역 ①②③④ 단계 페이지 구현 완료. ⑤ 운영 내재화와 C·D·E 영역 미착수

원본 가이드(`plan.md`)는 5층위(A 청사진 + B 5단계 + C 미시 메서드 + D 자산 축적 4단계 순환 + E 검증 사례) 구조로 완성되어 있고, 모든 층위는 **COMPANY BRAIN OS 구축**이라는 궁극 목표로 수렴한다. 본 저장소는 이 원본을 14페이지 웹사이트로 구현하는 작업을 담는다.

---

## 최근 세션 변경 로그

### 2026-05-25 (현재 세션, 3차) — COMPANY BRAIN OS 명제 박기 + 라이너·KAL 용어 전면 폐기

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | 궁극 목표 재정의 | 전 페이지 | "AX의 도착지는 도구가 아니라 COMPANY BRAIN OS"로 명제 통일. 5단계 각각이 BRAIN OS의 한 층(운영 주체→첫 모듈→우선 적재 자산→전사 확장→지속 운영)을 쌓는 빌드업 구조로 재정렬 |
| 2 | 금지 용어 일괄 치환 | 13개 HTML + plan.md + AGENTS.md | `라이너`/`라이너 AX Methodology` → `미시 엔진`/`미시 메서드`. `KAL`/`Knowledge-to-Agent Loop` → `자산 축적 4단계 순환`. `K1~K4` → `추출·구조화·자산화·검증`. `AX 브레인` → `COMPANY BRAIN OS` |
| 3 | `index.html` 재작성 | 히어로·요약·테시스·푸터·5단계 카드 | 히어로 카피를 "AX의 도착지는 도구가 아니라 회사의 두뇌"로 바꾸고, 각 단계 카드에 BRAIN OS 층 태그 노출. 테시스 블록을 "복제 불가능한 자산 = COMPANY BRAIN OS"로 재작성 |
| 4 | 각 페이지 헤드 BRAIN OS 빌드업 라인 삽입 | 12개 HTML 히어로 | 모든 페이지 eyebrow에 BRAIN OS 층 표기를 박고, lead 끝에 "이 단계가 BRAIN OS의 어느 층을 쌓는가" 한 문장 삽입 |
| 5 | AGENTS.md 금지 용어 표 추가 | `AGENTS.md` North Star | 궁극 목표 절과 금지 용어 매핑 표를 명시. 향후 모든 변경은 이 표를 기준으로 검수 |
| 6 | CSS 클래스·SVG ID 비가시 식별자 | `.bp-liner`·`.bp-kal`·`#lineR` | 사용자 눈에 보이지 않으므로 이번 세션에서는 유지. blueprint.html 내 두 개 주석만 새 어휘로 갈음 |

### 2026-05-25 (현재 세션, 2차) — 4단계 페이지를 2개로 분할 (`resource.html` + `reshape.html`)

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | `resource.html` 신규 작성 | B-4-1 자원 재배분 | reshape.html에서 자원 갈래만 떼어 독립 페이지로. 6개 섹션: 확장의 벽(자원 분포로 본 두 풍경) · 10-20-70 스택 바 + 현재 vs 목표 비교 · 70% 안의 세 갈래(리더십·도입·업스킬링) 카드 · 자원 함정 3가지 · 산출(예산 재배분 + 책임자 매핑) · 참고 자료 |
| 2 | `reshape.html` 재작성 | B-4-2 업무 재설계 | 자원 관련 콘텐츠 제거. 6개 섹션: 부분 자동화의 한계 · 끝에서 끝까지 흐름 재설계(부분 자동화 vs 가치 사슬 단위 비교) · 4D 카드 · 미시 엔진의 전사 확장 · 업무 함정 3가지(부분 자동화·슬로건 4D·권한 정체) · 산출(워크플로우 청사진 + 4D 교육 체계) |
| 3 | 두 페이지 단계 네비게이션 통일 | `bp-substeps` | `자원 재배분` · `업무 재설계` 두 칩을 두 페이지 모두에 노출. 현재 페이지 칩만 active 그라데이션 적용. pilot.html ↔ insights.html과 동일한 패턴 |
| 4 | `index.html` step-4 카드 변환 | `<a>` → `<div>` + `bp-substeps` | 단일 링크 카드에서 substeps 패턴으로. step-2·step-3과 동일한 구조. resource.html · reshape.html 두 substep 노출 |
| 5 | AGENTS.md 인벤토리 재갱신 | `AGENTS.md` §3.1 ④행 | `reshape.html` 단일 → `resource.html` · `reshape.html` 두 페이지. 하단 보조 문단도 단일 페이지 원칙에서 분할 원칙으로 교체 |

### 2026-05-25 (현재 세션) — 4단계 페이지(`reshape.html`) 신규 작성

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | `reshape.html` 신규 작성 | 4단계 업무 방식 재설계 | pilot.html의 bp-* 시각 시스템 차용. 단일 페이지로 두 갈래(B-4-1 자원 재배분 · B-4-2 업무 재설계)를 함께 다룸. 7개 섹션: 확장의 벽 · 자원 재배분(10-20-70 스택 바) · 업무 재설계(부분 자동화 vs 끝-to-끝 흐름) · 4D 카드 · 미시 엔진 전사 확장(What·Why 두 축 → 전사 자산) · 함정 4가지 · 산출물 인계 · 참고 자료 |
| 2 | AX 특화 강화 | 본문 | 일반 컨설팅 4단계 권고에 더해 미시 엔진 전사 확장, 자산 축적 4단계 순환에서 자산화·검증의 작동점, 사람·에이전트 협업 충돌의 본질을 본문 중심에 배치 |
| 3 | `index.html` 4단계 카드 링크 갱신 | `index.html` line 880 | `b2-steps-3-4.html#step-4` → `reshape.html` |
| 4 | `plan.md` B-4 정리 | SSOT | em dash 5개 모두 제거(마침표·괄호·새 문장으로 치환). 두 갈래 구조(B-4-1 / B-4-2) 명시. 미시 엔진 확장 문장에 자산 축적 4단계 순환의 자산화·검증 연결 추가 |
| 5 | AGENTS.md 인벤토리 갱신 | `AGENTS.md` §3.1 B 영역 | 원래 3개 묶음 페이지 계획에서 단계별 작업 단위 분할로 변경된 현재 구조 반영. ④ 단계는 단일 페이지(`reshape.html`)로 두 갈래를 한 자리에 둔다는 분할 원칙 명시 |
| 6 | /korean 적용 | `reshape.html` 본문 | em dash 0개. 평어 → 합쇼체 통일. 직역체("가른다") 풀어쓰기. AI 마무리 명언 제거. 영어 병기 최소화(고유명사·약어만 유지) |

### 2026-05-24 (현재 세션, 3차 갱신) — 기존 자산 발견 + 통합 방향 확정

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | `assets/` 디렉터리 전체 탐색 | 자산 발견 | `assets/css/{tokens,base,layout,components,strategy,execution}.css`, `assets/js/{nav,diagnostic,pdf-export}.js`, `assets/fonts/Pretendard*`, `assets/logos/`, `assets/img/thumbnails/`, `assets/downloads/`(워크북 다수) 존재 확인 |
| 2 | 구조 충돌 발견 | `diagnostic.js`·`downloads/` | 기존 시스템은 strategy×4 + exec×5 + 진단/다운로드 구조 전제. plan.md의 A~E 14페이지와 충돌. 5축 진단도 plan.md의 6차원과 다름 |
| 3 | 폰트 로컬 전환 | `assets/style.css` | 외부 CDN(Google Fonts·jsdelivr) 제거, `assets/fonts/`의 PretendardVariable + 정적 5단계(Regular~ExtraBold) `@font-face` 등록. 세리프(Noto Serif KR) 폐기, Pretendard 단일화 |
| 4 | 통합 방향 결정 | 사용자 컨펌 | plan.md(A~E 14페이지) 구조 유지, 기존 `assets/css/*` 시각 컴포넌트(뉴모피즘·카드·박스) 차용. 트랙 컬러 2개를 그린 두 톤(`--green` 메인 + `--green-accent` 보조)으로 통합 매핑. 실 통합 작업은 다음 세션 |
| 5 | 임시 자산 처리 결정 | `assets/style.css`·`assets/nav.js`·`a1-blueprint.html` | 일단 둔다. 다음 세션에서 기존 시스템에 흡수 후 정리 |
| 6 | AGENTS.md 통합 방향 명문화 | `AGENTS.md` 3.2·4.0 | 자산 분포 표 + 시각 컴포넌트 차용·트랙 컬러 매핑·diagnostic.js 재작성 계획 추가 |

### 2026-05-24 (현재 세션, 2차 갱신) — 프로젝트명·색상 톤 확정

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | 프로젝트명 변경 | `plan.md`, `AGENTS.md`, `MEMORY.md` | "AI-Native 전환 프레임워크 / 경영진을 위한 AX 가이드" → "비즈니스 리더를 위한 AX 실행 가이드" / 슈퍼타이틀 "AI-Native 전환을 위한 5단계 프레임워크" |
| 2 | 색상 토큰 톤다운 | `AGENTS.md` 4.2 | 메인 그린 `#1F4D3F` → `#0E3B2A`(Deep Forest), 헤더 끝 `#143329` → `#062018`, 액션 그린 `#1B6E4F` 신설, 골드 `#B8860B` → `#9A7B0A`로 채도 낮춤 |
| 3 | 디자인 톤 명시 | `AGENTS.md` 1절 | BCG·Bain·McKinsey 류 컨설팅 보고서 톤 명문화. 형광·고채도 금지 원칙 추가 |
| 4 | 본문 배경·잉크 조정 | `AGENTS.md` 4.2 | 배경 `#F5F2EA` → `#F7F5EF`(중성), 잉크 `#1A2421` → `#0F1A16`(잉크 검정) |

### 2026-05-24 (현재 세션, 1차) — 프로젝트 전환

이전 저장소 정체성("AI ROASTING · Claude 완전 정복", 29개 페이지)에서 새 프로젝트(14개 페이지 AX 가이드 사이트)로 전면 전환했다.

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | `plan.md`를 SSOT로 선언 | 운영 규칙 | 모든 콘텐츠 변경은 `plan.md`를 먼저 고치고 HTML에 반영하는 순서로 고정 |
| 2 | `AGENTS.md` 전면 재작성 | `AGENTS.md` | 프로젝트 정체성·페이지 인벤토리(14개)·디자인 토큰(딥 그린)·SSOT 규칙·Working Rules 9개로 재구성 |
| 3 | `MEMORY.md` 새로 작성 | `MEMORY.md` | 이전 29페이지 표준화 기록을 폐기하고, 14페이지 신규 구축의 출발 상태로 초기화 |
| 4 | 한국어 작성 원칙 10항 유지 | `AGENTS.md` 5절 | em dash 금지, 주술 구조, 번역투 거두기, 자기해설 금지, 과장 어휘 절제, 영어 병기 최소화, 종결체 통일, AI 마무리 명언 금지 외 보강 |
| 5 | 14페이지 분할 원칙 명문화 | `AGENTS.md` 3절 | A·B·E는 3개, C·D는 2개, 진입 1개로 총 14개. 분할 근거를 함께 명시 |
| 6 | 디자인 토큰 갈아끼움 | `AGENTS.md` 4.2·4.3 | 오렌지(`#D97757`)+뉴모피즘+산세리프 단일 → 딥 그린(`#1F4D3F`)+에디토리얼 세리프+산세리프 UI 하이브리드 |

---

## 14페이지 구축 진행 상황

| 영역 | 페이지 | 상태 | 비고 |
|---|---|---|---|
| 진입 | `index.html` | ⏸ 미착수 | 5층위 지도와 5분 요약 카드 |
| A | `a1-blueprint.html` | ⏸ 미착수 | plan.md A-1·A-2·A-3 |
| A | `a2-principles.html` | ⏸ 미착수 | plan.md A-4 (북극성 원칙 5) |
| A | `a3-diagnosis.html` | ⏸ 미착수 | plan.md B-0 (6차원 진단, 진입 게이트) |
| B | `b1-steps-1-2.html` | ⏸ 미착수 | plan.md B-1, B-2 |
| B | `b2-steps-3-4.html` | ⏸ 미착수 | plan.md B-3, B-4 (★ 심장) |
| B | `b3-step-5.html` | ⏸ 미착수 | plan.md B-5 |
| C | `c1-method-intro.html` | ⏸ 미착수 | plan.md C-1, C-2 (상단 7문항) |
| C | `c2-method-exec.html` | ⏸ 미착수 | plan.md C-3 (하단 3문항) |
| D | `d1-kal-loop.html` | ⏸ 미착수 | plan.md D-1 (K1~K4 순환) |
| D | `d2-kal-edge.html` | ⏸ 미착수 | plan.md D-2, D-3 |
| E | `e1-casestudy.html` | ⏸ 미착수 | plan.md E 전체 (게스코리아 CS) |
| E | `e2-templates.html` | ⏸ 미착수 | 인터랙티브 입력 폼 (로컬 저장) |
| E | `e3-playbook.html` | ⏸ 미착수 | 운영 매뉴얼 |

진행률: 0 / 14

### 공통 자산

| 파일 | 상태 | 비고 |
|---|---|---|
| `assets/style.css` | ⏸ 미착수 | 디자인 토큰, `.container`, `.header-pages`, SM-HAMBURGER 공통 |
| `assets/nav.js` | ⏸ 미착수 | 햄버거 메뉴와 스크롤 스파이 단일 IIFE |

---

## 디자인 시스템 결정 사항

### 색상 토큰 (확정 · 진중한 포레스트 그린)
- 메인 강조: `--green: #0E3B2A` (Deep Forest, 채도 낮춤)
- 헤더 그라데이션: `linear-gradient(150deg, #0E3B2A, #062018)`
- 액션·링크: `--green-accent: #1B6E4F` (한 단계 밝은 그린)
- 카드 배경: `--green-soft: #EAF0EC` (회녹빛)
- 본문 배경: `--bg: #F7F5EF` (중성 아이보리)
- 본문 글자: `--ink: #0F1A16` (잉크 검정)
- 검증 사례 강조(E 영역 한정): `--gold: #9A7B0A` (채도 낮은 골드)
- 형광·고채도 강조색 추가 금지. 컨설팅 보고서 톤 유지.

### 타이포그래피 (확정)
- 본문 세리프: `Noto Serif KR` 또는 `Source Serif Pro`
- UI 산세리프: `Pretendard Variable` 또는 `Inter`
- h1·h2는 세리프, 메뉴·버튼·태그는 산세리프

### 폭 규격 (확정)
- `.container`: max-width 1080px, padding 32px 32px 80px
- `.header-pages` 2-menu: 490px / 3-menu: 700px
- 햄버거 브레이크포인트 768px, 드로어 320px

### 기준 페이지 (미정)
- 2-menu 기준 페이지 선정 필요
- 3-menu 기준 페이지 선정 필요
- 그 외 메뉴 수가 등장하면 그때 기준 페이지를 정한다

---

## plan.md 변환 시 점검 항목

원본 `plan.md`를 HTML로 옮길 때 다음을 자동으로 적용한다.

| 변환 | 사유 |
|---|---|
| em dash `—` 제거 | AGENTS.md 5.1 (em dash 절대 금지) |
| 평어 → 경어 변환 | AGENTS.md 5.7 (콘텐츠 본문은 경어) |
| 번역투 점검 | AGENTS.md 5.3 |
| 자기해설·마무리 명언 제거 | AGENTS.md 5.4, 5.8 |
| 약어 유지 (COMPANY BRAIN OS·DRI·4D·TF·TSR·RAI·SSOT) | AGENTS.md 5.6 예외 목록 |

원본 `plan.md`에는 em dash가 다수 남아 있다. HTML 변환 시 모두 마침표·괄호·콜론으로 치환하고, 가능하면 원본도 같이 정리한다 (SSOT 원칙).

---

## 다음 액션 (Open Items, 다음 세션부터)

순서대로 처리하면 한 사이클이 닫힌다.

### 1순위 · 통합 작업
1. **`assets/css/tokens.css` 그린 재매핑**: `--strategy-primary` `#1E3A8A` → `--green` `#0E3B2A`, `--execution-primary` `#D97757` → `--green-accent` `#1B6E4F`. 베이지 배경(`#EDE8DF`) 유지 여부 결정.
2. **컨테이너 폭 결정**: 기존 1280px 유지 + 본문 reading column 720~800px 별도 잡기 vs 1080px 단일. 컨설팅 톤 톤앤매너 기준으로 선택.
3. **`diagnostic.js` 재작성**: 5축(vision·adoption·governance·people·workflow) → plan.md B-0의 6차원(전략·인재·운영모델·기술·데이터·도입). 추천 페이지 파일명을 `strategy-*`/`exec-*` → `a*`/`b*`/`c*`/`d*`/`e*`로 매핑.
4. **임시 자산 정리**: `assets/style.css`, `assets/nav.js`, 임시 `a1-blueprint.html`를 기존 시스템에 흡수 또는 삭제. 햄버거 메뉴 패턴은 기존 `nav-wrapper`/`nav-btn`과 합쳐 단일 시스템으로.

### 2순위 · 페이지 구현
5. **공통 골격 템플릿**: 기존 `.site-header` + `.nav-wrapper` + `.nav-row` 위에 plan.md A~E 라우팅을 얹은 빈 HTML 템플릿 1장. 14개 페이지에 복제.
6. **A 영역 3개 페이지 먼저**: `a1-blueprint`(청사진)·`a2-principles`(원칙 5)·`a3-diagnosis`(6차원 진단). a3는 `diagnostic.js`와 직결.
7. **B·C·D·E 차례로 구현**: B 3개 → C 2개 → D 2개 → E 3개. 마지막에 `index.html`(라우팅 허브) 완성.

### 3순위 · 자산 활용
8. **`assets/downloads/` 매핑**: 기존 워크북(roi-calculator, job-redesign-workbook, tool-decision-tree 등)을 plan.md의 어느 페이지에 노출할지 결정. `e2-templates`/`e3-playbook` 후보가 유력.
9. **`assets/logos/` 활용**: `logo1-white.png`/`logo1-transparent.png`를 site-header에 배치할지 결정.

### 인프라
10. **첫 commit 여부 결정**: 운영 문서(AGENTS.md, MEMORY.md, plan.md) 정리분만 먼저 commit할지, 다음 세션 통합 작업과 같이 묶을지 사용자 컨펌 필요.
