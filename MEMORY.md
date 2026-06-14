# MEMORY.md: 변경 로그와 구축 진행 상황

이 파일은 페이지별 변경 이력과 21페이지 웹사이트의 구축 진행 상황을 기록한다. 모든 작업 지침(SSOT 규칙, 코드 규약, 디자인 시스템, 한국어 작성 원칙, 페이지 인벤토리)은 [AGENTS.md](AGENTS.md)에 있다. 이 문서의 모든 문장도 AGENTS.md의 한국어 작성 원칙을 지킨다.

---

## 프로젝트 개요 (현재 상태)

- **이름**: 비즈니스 리더를 위한 AX 실행 가이드
- **부제(슈퍼타이틀)**: AI-Native 전환을 위한 5단계 프레임워크
- **정본(SSOT)**: 라이브 사이트(HTML 페이지). 별도 원본 문서를 두지 않는다 (초기 기획안 `plan.md`는 `backups/`에 보관, 참조하지 않음)
- **목표 산출물**: 정적 HTML 21페이지 + 단일 스타일시트 `assets/style.css` (JS는 페이지 인라인)
- **디자인 톤**: BCG·Bain·McKinsey 류 컨설팅 보고서. 진중한 포레스트 그린 + Pretendard 산세리프
- **현재 단계**: 진단 게이트(3) + 5단계 여정(①4·②2·③3·④2·⑤3) + 참고(3) = 21페이지 구현 완료. 옛 E 영역(검증 사례·인터랙티브 템플릿·운영 매뉴얼)만 미구현
- **단계 순서**: 진단 → ① 실행 조직 → ② 파일럿 실행 → ③ 과제 우선순위화 → ④ 업무 재설계(★심장) → ⑤ AI 네이티브 컴퍼니 → 참고 (파일럿이 우선순위화보다 먼저. 사이트·AGENTS.md 일치)

이 가이드는 5층위(A 청사진 + B 5단계 + C 미시 메서드 + D 자산 축적 4단계 순환 + E 검증 사례) 구조이며, 모든 층위는 **COMPANY BRAIN OS 구축**이라는 궁극 목표로 수렴한다. 21페이지 웹사이트로 구현됐다(방법론 A~E는 진단 게이트·AX 캔버스·BRAIN OS로 단계 구조에 흡수). 초기 기획안 `plan.md`는 `backups/`에 보관하며 더 이상 참조하지 않는다.

---

## 최근 세션 변경 로그

### 2026-06-14 (현재 세션) — md 문서 전면 현행화 (plan·AGENTS·MEMORY를 21페이지 단계 구조로 정렬)

운영 3문서가 실제 사이트(21페이지 단계 구조)보다 뒤처져 있던 것을 현재 기준으로 맞췄다. 사이트·AGENTS·MEMORY는 이미 '파일럿 먼저 → 우선순위화 나중' 순서였고 plan.md만 옛 순서(우선순위화→파일럿)였는데, **사용자 결정에 따라 plan.md를 사이트 기준으로 재배열**해 전 문서를 한 방향으로 통일했다. [[ax-stage-order-divergence]] 해소.

| # | 문서 | 변경 |
|---|---|---|
| 1 | `plan.md` | B-2를 '파일럿 실행'(탐색·Build-Measure-Learn·3칸 학습 리포트), B-3를 '과제 우선순위화'(두 축·게이트·DRI)로 재배열. 원칙 연결(②↔원칙4, ③↔원칙3), 미시 엔진 호출(7문항→③, 3문항→④), D-3 단계 연결, '전체 한눈에 보기' 다이어그램, 웹 구조 섹션을 모두 새 순서로 재작성 |
| 2 | `plan.md` | 옛 '웹사이트 페이지 구조 계획'(14페이지 A~E 레터 체계)을 '웹사이트 페이지 구조 (구현 기준)'(21페이지 단계 구조)로 교체. ⑤ 순서(ainative→brainos), 미구현 E 영역, 단일 style.css 명시 |
| 3 | `AGENTS.md` | §3 페이지 인벤토리를 실제 21페이지(진단 게이트 3 + ①4·②2·③3·④2·⑤3 + 참고 3)로 재작성. 미시 엔진=ax-canvas(진단 게이트), ⑤=ainative·brainos·perpetual, 옛 a1/c1/d1/e1~e3 명칭 제거 |
| 4 | `AGENTS.md` | §3.2 공통 자산을 '단일 `assets/style.css`'로 정정(`assets/css/*`·`nav.js`는 레거시 미참조). §4.0 '통합 방향(다음 세션)'을 '통합 완료'로. 사이트 전반 '14개/14페이지' → '21개/21페이지' |
| 5 | `MEMORY.md` | 프로젝트 개요·구축 진행 상황(0/14 미착수 → 21/21 구현)·타이포(serif 폐기, Pretendard 단일)·다음 액션을 현재 상태로 갱신 |

검증: 세 문서의 ②③ 참조 일괄 grep으로 잔여 역순 0건 확인. 콘텐츠 본문(HTML)은 손대지 않음 — 문서만 현행화.

### 2026-06-14 (현재 세션) — 2단계(pilot·insights) 콘텐츠 평가 8.2/10 + 정합성 업그레이드

2단계 파일럿 실행 두 페이지를 plan.md·AGENTS.md 기준으로 평가하고, 페이지에 갇힌 콘텐츠 결함을 고쳤다. 강의 발문(.bp-beat-lead)은 B-단계 전 페이지가 미적용 상태라 별도 전사 사이클로 두고, 이번엔 내용 결함만 손봤다.

| # | 항목 | 파일 | 결과 |
|---|---|---|---|
| 1 | 사실 오류 | `pilot` | "The Lean Startup(2011) ... 같은 해 권한 Do Things That Don't Scale(2013)"의 모순. "2013년 에세이에서 권한"으로 정정 |
| 2 | 핵심 논리 충돌 | `pilot` | "저위험 학습 샘플 선정"과 "반드시 성공시켜 확산 사례로"의 모순. 히어로 요약·#why 본문·비교표 '실행 강도' 3곳을 "저위험 선정이 1순위, 확산은 성공 사이클의 둘째 산출"로 재정합. #execution의 "완성도 노리지 않는다"와의 충돌도 해소(공개 수준 완성은 성공 사이클의 사후 정형화로 한정) |
| 3 | 과한 단정 출처 | `pilot`·`insights` | plan.md에 없는 맥킨지·Bain·BCG 특정 주장 3곳을 출처 유지하되 단정 강도 완화 |
| 4 | 한 페이지 내 중복 | `insights` | #report(3칸 내용 정의)와 #template(한 장 배치)의 관계를 인트로에 명시해 중복감 제거 |

검증: em dash 0, 제거 문구 0, 경어 유지. 새 주장 미추가(오히려 plan.md B-2/B-3 '저위험·학습 우선' 프레임에 더 근접)라 plan.md 수정 불필요.

미결(사용자 결정 필요): 사이트 단계 순서가 plan.md와 역전(사이트 파일럿→우선순위화, plan.md B-2 우선순위화→B-3 파일럿)이고 AGENTS.md §3.1 출처 칸 교차 오기. 개인 메모 [[ax-stage-order-divergence]] 참조. **→ 같은 날 'md 문서 전면 현행화' 세션에서 plan.md를 사이트 기준으로 재배열해 해소.**

### 2026-06-14 (현재 세션) — 1단계 비즈니스 리더 관점 평가(진단 3회) + 정합성·보강 9건

1단계 4페이지(leader-first·organization·operations·capability)를 진단 3회(이성·분야 전문가·공감) 후 비즈니스 리더 관점 10점으로 평가했다. 종합 8.3/10. 강의·참조용 완성도는 9점대지만 임원 의사결정 도구로는 비용·조직 접점·독자 안내의 빈칸이 감점 요인. 돈 환산(비용 블록·금액 KPI)은 사용자 지시로 보류하고 나머지를 보강했다.

| # | 항목 | 범위 | 결과 |
|---|---|---|---|
| 1 | 데일리 회의 시간 모순 해소 | `organization` | organization "코어 데일리(15분)"를 operations의 상세 서술값 30분으로 통일. plan.md는 데일리 길이 미정의(30분은 모두 반데헤이 개인 챌린지)라 충돌 없음 |
| 2 | 딜로이트 오프닝 강도 정합 | `leader-first` | 오프닝 "보고서값을 토해냈습니다"(전액 뉘앙스)를 본문·plan.md의 부분 환불 사실에 맞춰 "받은 돈의 일부를 돌려줬습니다"로 |
| 3 | "최강 예측 변수" 판정 | (변경 없음) | plan.md:118·139에 저자 SSOT 명제로 두 번 박혀 있어 근거 미표시 오류가 아님. 가짜 인용 부착은 SSOT 위반이라 유지 |
| 4 | 기존 DX·IT 조직 관계 신설 | `plan.md` B-1-1 → `organization` | "TF는 DX·IT를 대체하지 않는다. 검증(TF)/운영(DX·IT)으로 역할 분리. CDO·CIO는 스폰서·협력자, 보고선은 CEO/위임 C-레벨" 앵커 추가 후 #why 비교표 아래 bp-section-intro 문단으로 반영. 좌측 컬러바 0(§4.7-A) |
| 5 | 표준 LLM 예외 경로 | `plan.md` B-1-1 | "한 개로 좁히기 어려우면 용도별 2개까지 허용, 핵심은 각자 아무거나 막기" 앵커 추가(향후 HTML 반영 여지) |
| 6 | 강사 주체·시간 단계 적용 | `plan.md` B-1-2 → `capability` | 1차수 외부 부트스트랩→수료자 강사 순환, 70% 기준이나 기본기 2주 집중 후 60~70% 조정·50% 하한 앵커 추가. capability intro에 70% 예외, AI 기본기 모듈에 강사 순환 li 반영 |
| 7 | operations 독자 분기 | `operations` | 6개월 마일스톤 intro에 "경영진은 이행 게이트만, 주차별은 TF 리드·멤버용" 한 줄 추가 |
| 8 | organization 4역할 다리 | `organization` | bp-roles-intro 앞에 "구성 청사진으로 TF 내부를 짰다면, 시선을 조직 전체로 넓힙니다" 전환 문장 |
| 9 | "흔한 실패 패턴" 도입부 반복 완화 | `organization`·`operations`·`capability` | 세 페이지가 공유하던 "좌측은/우측은 ... 3개 이상" 보일러플레이트(열 헤더와 중복)를 각기 다른 문장으로 차별화. 표 구조·정보는 유지 |
| 10 | 검증 | grep + 프리뷰 | HTML em dash 0건, 데일리 30/30 통일, operations 실패 표 5행("다섯" 정합), DX 문단 렌더·border-left 0px 육안 확인 |

### 2026-06-14 (현재 세션) — leader-first 전용 디자인 도입 (참고 페이지와 포맷 차별) + h1 주술 정합

사례를 새로 갈았어도 cost-output(참고)과 똑같은 컴포넌트(bp-twocol·bp-cost 카드·bp-pull)를 써서 포맷이 겹친다는 지적. 같은 메시지·골격을 유지하되 본문 컴포넌트를 leader-first 전용 `lf-*` 디자인으로 교체해 신선함을 줬다. 더불어 h1의 주술 구조(주어 "첫 행동은" + 보어 "하루입니다"의 격 불일치)를 정합으로 고쳤다.

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | h1·푸터·index 주술 정합 | `leader-first`·`index` | "첫 행동은 ... 하루입니다"를 "가장 먼저 바꿀 것은 ... 하루입니다"로(것은=하루). 푸터·index 카드의 같은 오류도 정리("가장 먼저 움직일 사람은 ... 본인입니다") |
| 2 | 컴포넌트 CSS 교체 | `leader-first.html` `<style>` | cost-output 차용분(bp-twocol·bp-cost·bp-pull·bp-imp·bp-case) 제거, 전용 `lf-*` 도입: lf-statement(인용 패널)·lf-facts(3칸 사실 스트립)·lf-ledger(약속 vs 현실 장부)·lf-day(하루 타임라인 rail). bp-srcline 유지 |
| 3 | 본문 재구성 | `leader-first.html` | #leader는 lf-statement+lf-facts, #cost는 lf-ledger 3행(Klarna·CBA·Deloitte 약속/현실), #daily는 lf-day 타임라인 5노드. #why는 bp-compare 유지(organization 계열이라 참고 페이지와 안 겹침). em dash 0(주석 포함) |
| 4 | 검증 | 프리뷰 | lf-statement·사실 3칸·장부 3행·타임라인 5노드(녹색 그라데이션)·옛 컴포넌트 0·콘솔 0건. 긴 뷰포트 캡처로 새 레이아웃 육안 확인. AGENTS 안티패턴(좌측 컬러바·이모지·본문 그라데이션) 위반 없음 |

### 2026-06-14 (현재 세션) — leader-first 사례를 부록과 안 겹치게 전면 교체 + 서브메뉴 '다음 단계' 제거

부록 cost-output과 같은 사례(반데헤이·우버·MS·스타벅스)를 leader-first가 다시 쓰니 재미가 없다는 지적. 메시지는 유지하고 사례만 웹에서 새로 찾아 통째로 교체했다. WebSearch로 1차 보도를 확인하고 plan.md B-1-0에 '근거 사례' 블록으로 먼저 박은 뒤 HTML에 반영했다(SSOT).

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | 새 사례 웹 조사 + SSOT 정착 | `plan.md` B-1-0 | 쇼피파이 뤼트케(2025.03 메모, "AI는 모두의 기본 기대치", "나를 포함한 모두"), 클라르나(700명 몫 AI 상담→품질 저하 인정·사람 재고용), 커먼웰스은행(콜센터 45명 감원→통화 늘어 "오류" 인정·복귀), 딜로이트(GPT-4o가 가짜 판례 인용→44만 호주달러 보고서 환불). 출처 명시 |
| 2 | leader-first 사례 전면 교체 | `leader-first.html` | #leader를 뤼트케(bp-twocol+bp-pull)로, #cost 3카드를 클라르나·커먼웰스은행·딜로이트로, #why·#daily의 옛 사례 인용을 새 사례로. 본문에서 반데헤이·우버·MS·스타벅스·짐GPT 0건. em dash 0 |
| 3 | 서브메뉴 '다음 단계' 제거 | `leader-first.html` | bp-hero-nav를 5칸→4칸(리더가 기준을 세운다·안 써보면 생기는 일·보고서 vs 직접·매일 하는 다섯 가지). 인계 섹션(#stuck)은 본문에 유지하되 네비에서 뺌 |
| 4 | 거버넌스 동기화 + 검증 | `AGENTS.md`·`MEMORY.md`·프리뷰 | AGENTS §3.1 ① 주석을 새 사례·서브메뉴 규약으로 갱신("부록과 사례 중복 금지" 명문화). 프리뷰: 네비 4칸·카드 Klarna/Commonwealth Bank/Deloitte·옛 사례 0건·풀쿼트 뤼트케·콘솔 0건 |

### 2026-06-14 (현재 세션) — leader-first 사례 보강 + 1단계 명칭 '실행 체계'로 변경

최고경영진이 읽었을 때 와닿도록 `leader-first.html`을 사례로 가득 채웠다. cost-output의 풍부한 컴포넌트(bp-twocol·bp-cost·bp-pull)를 차용해 반데헤이의 직접 쓴 1년, 우버·MS·스타벅스의 '안 써보면 생기는 일'을 구체 수치와 함께 넣었다. 더불어 1단계 명칭을 '추진 체계'에서 '실행 체계'로 바꾸고, "TF가 아니라" 같은 부정 프레이밍을 전부 긍정형으로 정리했다. 모든 사례·수치는 plan.md 부록-2가 SSOT다.

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | "TF가 아니라" 부정 프레이밍 삭제 | `leader-first`·`index`·`plan.md`·`AGENTS`·`MEMORY` | 히어로 h1·푸터·메타·index 카드 설명·plan B-1-0·거버넌스 주석에서 "TF가 아니라"·"TF 발족이 아니라"를 긍정형으로. TF를 부정 대상이 아니라 다음 박자로 둠 |
| 2 | leader-first 사례 보강 | `leader-first.html` | 본문을 5섹션으로 재구성. 직접 쓴 1년(반데헤이 bp-twocol 사례/시사점 + bp-pull 풀쿼트)·안 써보면 생기는 일(우버·MS·스타벅스 bp-cost 3카드)·보고서 vs 직접(bp-compare 5행)·매일 다섯 가지(bp-checklist, 사례 연결)·다음 단계(인계). cost-output CSS 차용분 주입. em dash 0 |
| 3 | 1단계 명칭 '실행 체계'로 | 전 파일 | '추진 체계'·'추진체계' → '실행 체계'·'실행체계' 일괄(plan·AGENTS·MEMORY·organization·operations·capability·leader-first). 손으로 직접 하는 1단계 정체성에 맞춤. 잔여 0 |
| 4 | 검증 | 프리뷰 | eyebrow '실행 체계 구축'·h1 '당신의 하루'·nav 5·섹션 5(leader·cost·why·daily·stuck)·사례 카드 Uber/MS/Starbucks·풀쿼트·투칼럼 visible 확인. "TF가 아니라"·"추진" 0건, em dash 0, 콘솔 0건 |

### 2026-06-14 (현재 세션) — 1단계 첫 페이지 신설 (`leader-first.html`, CEO가 먼저 쓴다)

비즈니스 리더 관점의 점검에서, 진단 다음 1단계가 곧장 "TF 세팅"으로 가는 순서가 어색하다는 지적이 나왔다. CEO에게 "먼저 써보라"고 한 상황이면 첫 행동은 경영진 본인이 매일 쓰는 것이어야 한다. 그 메시지는 이미 `cost-output.html`의 '리더의 손끝'(반데헤이 사례)에 있었으나 부록에 묻혀 있었다. 부록은 그대로 두고, 1단계에 "경영진이 먼저 쓴다"를 첫 박자로 세우는 새 페이지를 만들었다. 1단계는 4페이지가 됐다(리더가 먼저 쓴다 → TF 조직 세팅 → 운영 계획 → AI 부트캠프).

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | `plan.md` B-1 재정의 (SSOT 먼저) | `plan.md` B-1 | 제목을 "실행 체계 구축. 경영진이 먼저 쓰고, 조직을 세운다"로. B-1-0 "경영진이 먼저 쓴다" 신설(위임의 함정 + 반데헤이 근거 + 매일의 규율 다섯 가지). B-1-1 TF 도입부를 "경영진이 이미 쓰고 있다는 전제 위에서"로 재서술. 산출물·로드맵 요약줄에 '경영진 채택' 반영 |
| 2 | `leader-first.html` 신규 작성 | 1단계 첫 페이지 | `organization.html` bp-* 골격 클론. 세 섹션: 보고서로 받는 리더 vs 직접 쓰는 리더(`bp-compare` 5행)·경영진이 매일 하는 다섯 가지(`bp-checklist`)·막히는 곳이 TF의 첫 과제(`bp-handoff` 인계). 참고 자료 '리더의 손끝'으로 링크. em dash 0 |
| 3 | 1단계 칩·진입점 갱신 | `organization`·`operations`·`capability`·`index` + 전 페이지 | 세 형제 페이지 `bp-substeps`에 "리더가 먼저 쓴다"를 첫 칩으로 추가(3칩→4칩). index 1단계 네비 라벨 "AX TF 세팅"→"리더가 먼저 쓴다", 카드 제목·설명 재작성, 첫 substep 추가. 전 페이지 단계 인디케이터 "1" 링크를 `organization.html`→`leader-first.html`로 일괄 치환(19개 파일) |
| 4 | 검증 | 프리뷰 | leader-first 200·title·h1·섹션 3·칩 4(첫 칩 active)·인계/참고 링크·단계 1 자기링크 확인, 콘솔 0건. index 네비 라벨·카드 제목·substep 4개 확인. em dash 0 |

### 2026-06-14 (현재 세션) — AX 캔버스를 4단계에서 분리, 진단 트리오 전속

`ax-canvas.html`을 4단계(업무 방식 재설계) 동선에서 완전히 빼고 진단 트리오(AX 추진 원칙 → AX 캔버스 → 현재 수준 진단)에만 두도록 정리했다. 엔트리 13에서 트리오로 옮길 때 `resource.html`·`reshape.html`을 미변경으로 남겨 둬 4단계 서브 칩에 "AX 캔버스"가 중복으로 남아 있던 것을 해소했다.

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | ax-canvas 상단 단계 활성 칸 교정 | `ax-canvas.html` | 상단 `.bp-stepnav` 활성 칸을 "4"(resource.html) → "진단"(blueprint.html)으로 이동. blueprint·diagnosis와 같은 진단 그룹임을 반영. 히어로 eyebrow "Step 4 · 두 번째 작업 …" → "AX Canvas · 직무를 10칸으로 해부하는 표준 양식"으로 교체 |
| 2 | 4단계 동선에서 AX 캔버스 칩 제거 | `resource.html`·`reshape.html` | 두 페이지의 `bp-substeps`를 3칩(자원 재배분·AX 캔버스·업무 재설계) → 2칩(자원 재배분·업무 재설계)으로. ax-canvas는 진단 트리오 전속 |
| 3 | 거버넌스 문서 동기화 | `AGENTS.md`·`lecture-blueprint.md`·`MEMORY.md` | AGENTS.md §10.13 substeps 예시를 진단 트리오 3칩으로 갱신하고 "ax-canvas는 진단 그룹 전속, 4단계 동선에 넣지 않는다" 규약 명문화. lecture-blueprint.md 롤아웃 체크리스트의 ax-canvas 라벨 "Step 4 · AX 캔버스" → "진단 트리오 · AX 캔버스". 본 로그 기록 |
| 4 | 검증 | 프리뷰 | ax-canvas 상단 활성 "진단"·eyebrow 교체 확인, resource 동선 2칩(자원 재배분·업무 재설계) 렌더 확인, 콘솔 0건 |

### 2026-06-14 (현재 세션) — 부록 페이지 신설 (`cost-output.html`, AI 네이티브로의 여정)

진단 다음에 읽을 거리로, "AI를 쓴다는 사실은 더 이상 차별점이 아니다. 사용량(입력)이 아니라 산출(출력)을 같은 장부에 적어야 한다"는 관점 전환 페이지를 신설했다. 외부 콘텐츠(짐 반데헤이·우버·MS·스타벅스 사례)를 기반으로 하되, SSOT 규칙에 따라 `plan.md` 부록에 먼저 박고 HTML로 옮겼다.

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | `plan.md` 부록-2 신설 (SSOT 먼저) | `plan.md` 부록 표 + 부록-2 절 | 새 주장·수치(짐GPT, 우버 4개월, MS 코파일럿 선회, 스타벅스 9개월)를 부록에 먼저 정착. 네 섹션 구조·본문 연결(`diagnosis`→이 페이지, `insights`·`criteria`에서 인용)·금지 사항(사례 수치는 "보도 종합"으로 표기, 특정 매체·날짜 임의 생성 금지) 명문화 |
| 2 | `cost-output.html` 신규 작성 | 부록 페이지 (5단계 본문 외) | `problem-definition.html`의 bp-* 시각 시스템 클론. 네 섹션: 세 가지 질문(`bp-flow` 3단)·리더의 손끝(`bp-twocol` 사례/시사점)·비용의 장부(`bp-cost` 3카드 VS 박스)·입력과 출력(`bp-twocol` 입력/출력 대비). sticky sub-menu + scrollspy IIFE 포함 |
| 3 | 형제 부록 네비 일괄 갱신 (Rule 7) | `ai-services.html`·`problem-definition.html`·`index.html` | 세 곳의 substep 목록에 "비용과 산출의 장부" 칩 추가. index `#refs` 섹션에 substep 카드 추가 |
| 4 | 한국어·디자인 원칙 적용 | 본문 | em dash 0개(렌더 검증), 합쇼체 통일, AI 시각 클리셰(좌측 컬러 바·이모지·형광 강조) 0개. 섹션 제목 형광 마커는 `assets/style.css`의 사이트 공통 스타일(`.bp-section-title`)이라 일관 |
| 5 | 브라우저 검증 | 프리뷰 | 4섹션·3카드·3 flow row·2 twocol 렌더 확인, 콘솔 오류 0건, 공통 자산(brandbar·footer-bar) 로드 확인. 모바일 375px 가로 오버플로 0, 세 그리드 모두 1열 스택 정상 |
| 6 | 출처 검증 + 본문 보강 | `plan.md` 부록-2 · `cost-output.html` | "축약 느낌" 피드백에 대응해 웹 검색으로 네 사례를 1차 매체로 검증(Axios·Fortune·TechCrunch·Windows Central·Reuters/CNBC). 검증된 구체 수치로 본문 보강(우버 32%→84%·월 500~2,000달러·1,500달러 상한·COO 인용, MS 6/30 회수·5,000명 6개월 벤치마크, 스타벅스 Automated Counting·라이다·9개월, 반데헤이 짐GPT 한 시간 제작·경영진 절반). 하단에 링크 달린 '출처와 원문' 섹션(`bp-sources`) 신설, sticky 네비에 #sources 추가. plan.md 부록-2에 검증된 출처 목록 명문화 |
| 7 | 사실 정합 교정 | `cost-output.html` 리더 섹션 | 원본의 "보안 정책·사내 시스템·보고 체계가 발목" 표현은 칼럼이 직접 적시한 인용으로 확인되지 않아, 검증된 'mind-blowing and messy' 프레이밍과 개인↔조직 속도 격차로 재서술. 직접 인용처럼 단정하지 않도록 plan.md 금지 사항에도 기록 |
| 8 | 페이지명 재조정 + 부록 맨 앞 배치 | `cost-output.html`·`ai-services.html`·`problem-definition.html`·`index.html`·`plan.md` | 이 페이지는 기업들이 AI 네이티브로 가는 길에서 부딪힌 사례 모음이라, 라벨을 "비용과 산출의 장부" → "AI 네이티브로의 여정"으로 변경(브라우저 타이틀·eyebrow·네 곳 substep 칩). h1 후킹("'우리도 쓰고 있다'는…")은 유지. 부록 노출 순서를 cost-output → ai-services → problem-definition으로 통일(네 곳). 파일명은 `cost-output` 유지. plan.md 부록 표·부록-2 제목·노출 순서 명문화. 5단계 도착지 `ainative`(AI-Native 조직)와는 다른 자리(여정 vs 도착지)임을 plan.md에 구분 기록. 렌더·순서·콘솔 0건 검증 |
| 16 | 비용 장부 인트로 주술 정리 + 노조 제거 + 순서/라벨 변경 | `cost-output.html`·`ai-services.html`·`problem-definition.html`·`index.html`·`plan.md` | (1) 비용 장부 인트로의 중간 반말("줄어들 것이다")·구어체("걸")를 합쇼체로 통일하고 네 문장 주술 정합("같은 가정에서 출발했습니다 … 그 가정이 틀렸음을 보여줬습니다 … 세 사례는 같은 곳을 가리킵니다"). (2) 반데헤이 조직 벽에서 "노조" 언급 제거(섹션 본문·시사점·plan.md). (3) 부록 노출 순서 변경: 여정 → 문제 정의력 → 서비스 비교(네 곳 일괄). (4) "AI 서비스 선택" → "AI 서비스 비교"로 리네이밍(네비 칩·ai-services 타이틀·메타·eyebrow·plan.md 표). em dash 0, 콘솔 0건 |
| 17 | 참고 3페이지 윤문 (프로페셔널·주술·이해 쉬움, 병렬) | `cost-output.html`·`ai-services.html`·`problem-definition.html` | 사용자 요청으로 부록 3페이지 전체 윤문. ai-services·problem-definition은 서브에이전트 병렬 윤문(번역투·주술 불일치·어색 동사구 외과 교정: "~을 통해→으로", "제공한다→준다", "옮겨 왔습니다→시대마다 옮겨 왔습니다" 등, ai-services lead의 em dash 1개 제거). cost-output은 직접 최종 점검: 요약 문장 조각 "~봐야 한다는 것."→"~것입니다." 완결, "규제 산업이면 규제"→"규제 환경". 세 페이지 모두 숫자·고유명사·직접 인용(Karpathy 영문·반데헤이 인용)·영어 역량명(Limitless·Unlearn-Relearn)·HTML·nav 라벨·title 100% 보존. em dash 0, 합쇼체 유지, 3페이지 렌더·콘솔 0건 검증 |
| 13 | 푸터 윤문 + 하단 CTA + 반데헤이 사례 심화 | `cost-output.html`·`plan.md` | (1) 푸터 요약 번역투("다음 라운드를 가져갑니다") → "얼마나 썼는지는 누구나 셀 수 있습니다 … 비용과 성과를 한 장부에 나란히 적는 회사가 결국 앞서갑니다"로 자연화. (2) 맨 하단(출처 다음·푸터 앞)에 `.bp-cta` 밴드 신설 → blueprint.html 연결("그래서, 우리는 어디쯤일까요?" + "AX 청사진으로 가기"). 도입부→진단 동선 완결. (3) 반데헤이 사례 심화: Axios 원문 'Confessions of an AI lab rat'(2026.06.08) 재검증으로 디테일 보강 — 매일 새벽 1~2시간, 의료 기록·혈액 검사·식단까지 학습, 폰 상시 에이전트 개인 운영체계, 조직의 벽(보안·시스템 연결·에이전트 협업, 경영진조차 "무엇을 알고·공유·실행해도 되는지"에서 막힘)이 이제 원문으로 검증돼 복원, 그리고 핵심 통찰 추가: "비용 절감이 아니라 새 사업"(Axios가 AI 없이는 불가능했던 새 수익 사업 셋 시작). 시사점 3개를 매일·직접/막히는 건 조직/진짜 기회=새 사업으로 재구성. plan.md 부록-2 섹션·출처·금지 사항(조직 벽 미검증 보류 해제), 페이지 출처 Axios 항목 갱신. em dash 0, 데스크톱·모바일 오버플로 0, 콘솔 0건 |

| 12 | 라벨 수정 + 사례별 구체 수치 보강 | `cost-output.html`·`plan.md` | (1) 서브 메뉴 "비용의 장부" → "비용 장부", plan.md 부록-2 섹션명도 동기화. (2) 마이크로소프트 카드에 빠져 있던 비용 수치 추가(웹 재검증): 1인당 월 500~2,000달러·4월 사용률 84~95%·약 5,000명. 우버는 비용 범위를 500~2,000달러 전체로 명시. 스타벅스는 북미 1만 1,000여 개 매장·'99% 정확도' 표방·스캔 재확인 부담 추가(NomadGo 발표 2025.09 + Reuters·CNBC·Fortune). plan.md 부록-2 검증 출처·금지 사항에 신규 수치 반영, 출처 섹션 캡션도 갱신. "우버 AI 예산 34억 달러"는 1인당 비용과 모순돼 코딩 지출 아님으로 판단, 미채택. em dash 0, 숫자·인용 보존 검증 |

| 11 | 윤문(korean 스킬): 어색 표현 외과 교정 | `cost-output.html` 본문 | 사용자 플래그(그림을 그렸다·쥐여주고·셈을 틀리면서)와 전반 톤을 "일상적이지만 프로페셔널"로 다듬음. "같은 그림을 그렸다→같은 계산을 했다", "그림에 금을 냈다→그 계산이 틀렸다는 걸 보여줬다", "쥐여주고→열어주고", "거둬들이고→회수하고", "셈을 틀리면서→수량을 잘못 세는 일이 잦아지자", "바리스타를 붙잡았다→바리스타의 일손을 늦췄다", "헛다리를 짚습니다→착각합니다", "구독을 많이 깔았는지→늘렸는지", "거창한 정비→거창한 준비", "적게 하십시오→적게 하면 됩니다", "앞세우지 못합니다→앞서갈 수 없습니다". 의미·숫자(88%·32/84%·2,000·1,500·4/6/9개월·5,000명)·직접 인용("아직 그 연결고리는 없다")·고유명사 100% 보존. em dash 0, 합쇼체 유지. 데스크톱·콘솔 0건 검증 |

| 10 | 위치 프레이밍 반전: 진단 다음 → 진단의 도입부 | `cost-output.html` 히어로 요약 · `plan.md` 부록-2 | 사용자가 강의·발표에서 이 이야기를 맨 앞(오프닝)으로 꺼낸다고 함. 히어로 요약을 "진단을 마친 뒤 이어서 읽기 좋은 자료" → "그래서 이 이야기로 시작합니다 … 그제야 '그럼 우리는 어디쯤인가'라는 진단이 절실해집니다. 이 페이지가 진단의 출발선입니다"로 반전. plan.md 부록-2 본문·본문 연결도 "진단 직후 읽을 거리" → "진단 도입부(오프닝), 진단의 동기를 만든다"로 동기화. 네비·구조는 부록 유지(노출 순서·stepnav 불변). 리로드 후 렌더·em dash 0 검증 |

| 9 | 서브 메뉴 정리 + 스토리텔링 10점화 | `cost-output.html` | (1) sticky 서브 메뉴(`bp-hero-nav`)에서 #sources 링크 제거(4칸), 하단 출처 섹션은 유지. (2) 비즈니스 리더(GOLD·RED·BLUE·SILVER) 관점 평가 후 "telling→showing"으로 본문 재서술. 히어로에 회의실 장면("우리도 쓰고 있다") 도입, 섹션1에 88%(plan.md A-1 SSOT 회수)로 긴장 부여, 반데헤이를 'AI 실험용 쥐' 1년 자가 실험 서사로, 우버 카드에 "청구서도 불었다"+COO "아직 그 연결고리는 없다", MS "발목 잡은 건 청구서", 스타벅스 "바리스타를 붙잡았다" 장면화. 섹션3 핸드오프를 "비용 칸은 또박또박, 성과 칸은 비어 있다"로 다듬어 섹션4 장부 은유와 연결. 섹션4에 같은 토큰 두 팀 대비 강화 + "다음 한 걸음"(비용 옆 빈 칸에 '무엇이 달라졌나' 한 줄) 구체 행동 추가. 새 사실 0건(검증·SSOT 범위 내), em dash 0, 합쇼체, 과장어·AI 마무리 명언 없음. 데스크톱·모바일(오버플로 0)·콘솔 0건 검증 |

### 2026-06-14 (현재 세션) — 강의용 재편 패턴 도입 (`blueprint.html` 대표 적용)

사이트를 빔으로 띄워 강의하기에 적합하도록 페이지 자체를 재편하는 작업을 시작했다. 별도 슬라이드 덱이나 발표자 모드를 만들지 않고, 페이지의 비주얼 위계를 다시 잡는 A안으로 확정했다. 패턴 정의와 전 페이지 롤아웃 절차는 [lecture-blueprint.md](backups/lecture-blueprint.md)에 둔다.

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | 강의용 재편 패턴(A안) 정의 | `lecture-blueprint.md` | 세 요소 확정: 강의 발문(`.bp-beat-lead`) · 밀도 종속화(`.bp-cite`) · beat 리듬(`scroll-margin-top`). 발문 작성 원칙(긴장 먼저, 기존 사실만 재구성, 한 섹션 한 메시지)과 전 페이지 롤아웃 체크리스트 포함 |
| 2 | `blueprint.html` 패턴 적용 | 다섯 섹션 + 증거 차트 3개 | 섹션마다 강의 발문 한 줄 삽입(성과 분석·다섯 함정·도착지·다섯 원칙·자가 진단). 증거 섹션 차트 3개의 "표본·출처"를 `.bp-cite`로 종속화. CSS 세 블록은 현재 인라인 |
| 3 | 검증 | 브라우저 프리뷰 | 발문 5개·종속화 3개 렌더 확인, 콘솔 오류 0건, 스크롤스파이 정상. 발문은 페이지에 이미 있는 사실(6%·94곳·5함정·5원칙·6차원)만 재구성해 SSOT 새 주장 금지 준수 |
| 4 | 후속 과제 명시 | `lecture-blueprint.md` | CSS를 `assets/style.css` 공통으로 승격 후 나머지 페이지로 전이. README.md 불일치(다른 프로젝트 커리큘럼) 정리 대상 기록 |
| 5 | COMPANY BRAIN OS 명명 섹션 신설 | `blueprint.html` `#brain-os` | 푸터가 "COMPANY BRAIN OS = AX의 도착지"라 선언하는데 페이지에 정의가 없던 갭을 메움. 도착지(AI-Native 조직 비교)와 다섯 원칙 사이에 삽입. 강의 발문 + 정의 문단 + 3개 기둥 카드(구조화된 지식·에이전트 실행·협업 루프, `.bp-os-grid`) + 5단계 빌드업 한 줄(`.bp-os-build`). 정의는 AGENTS.md North Star·plan.md D의 SSOT 문구를 그대로 끌어옴(새 주장 없음). sticky 네비에 `#brain-os` 링크 추가, 스크롤스파이 정상 |
| 6 | AI 클리셰 제거 + 라벨 단순화 | `blueprint.html` | `.bp-beat-lead`·`.bp-os-build`의 좌측 컬러 바(border-left accent) 제거 — AGENTS.md 금지 클리셰("좌측 컬러 바") 위반 교정. `.bp-os-build`는 중립 1px 보더로 교체. 증거 섹션 차트 2·3의 "읽는 법" 박스(`.bp-read-hint`)와 해당 CSS 삭제. `#blueprint` 나브·제목을 "우리가 가야 할 도착지, AI-Native 조직" → "AI-Native 조직"으로 단순화(도착지 프레이밍은 `#brain-os`가 전담) |
| 7 | 도착지 두 섹션 순서 재배열(엔진→겉모습) | `blueprint.html` | `#brain-os`(COMPANY BRAIN OS, 도착지 정의)를 `#blueprint`(AI-Native 조직, 도착지의 일상) 앞으로 스왑. "도착지" 명명은 BRAIN OS만 전담. AI-Native 발문을 다리 문장으로 교체("이 두뇌가 자리 잡으면, 회사의 하루가 이렇게 달라집니다"), meta도 "두뇌가 만드는 일상 · 7개 영역 비교"로. 나브 순서 동기화. 흐름: 6%→함정→BRAIN OS(무엇)→AI-Native(어떻게 일하나)→원칙→진단 |
| 8 | MECE 정리: 비교표 중복 행 디듀프 | `blueprint.html` `#blueprint` | 두 축을 직교화. BRAIN OS 3기둥=자산 구조(무엇을 짓는가), AI-Native 7행=운영 행동(어떻게 일하나). 자산 구조 어휘를 다시 쓰던 두 행의 after를 결과 톤으로 교체. "AI와의 관계": "작업별로 신뢰 수준이 다릅니다" → "일을 맡기는 강도를 업무 성격에 따라 다르게 잡습니다". "에이전트": "여러 에이전트가 한 작업을 이어서 처리합니다"(메커니즘) → "재고 확인·고객 안내·배송 예약이 한 흐름으로 이어집니다. 사람이 단계마다 끼어들지 않아도 업무 한 건이 끝까지 굴러갑니다"(결과). 의미(조정된 신뢰·오케스트레이션)는 SSOT 보존, 표면 어휘만 조정 |
| 9 | 강의용 재편 패턴 규약화 (전 md 정합) | `AGENTS.md`·`plan.md`·`CLAUDE.md`·`MEMORY.md`·`lecture-blueprint.md` | 패턴을 거버넌스 문서에 박아 앞으로 강의용 작업이 반드시 참조하게 함. AGENTS.md에 §12 신설(세 요소·발문 원칙·도착지 MECE 두 축, lecture-blueprint.md 참조 필수). plan.md A-2에 엔진(BRAIN OS)/겉모습(AI-Native) 두 축 명문화. CLAUDE.md 진입점에 §12·lecture-blueprint 포인터 추가. MEMORY 기준 페이지에 blueprint.html 명시. lecture-blueprint.md 예시 CSS의 좌측 바 제거(클리셰 재유입 차단). README.md는 타 프로젝트 내용이라 손대지 않음(별도 정리 대상) |
| 10 | 강의용 재편 전이 1번: `ax-canvas.html` | `ax-canvas.html` (Step 4 · AX 캔버스) | 임팩트 우선 롤아웃의 첫 페이지. 6개 섹션(왜 10칸·캔버스 한눈에·암묵지 Mark-down화·Human-Agent Team·가드레일과 성장·작성 순서)에 강의 발문 삽입. `.bp-beat-lead` CSS 인라인 추가(좌측 바 없음, §4.7-A 준수). beat 리듬은 기존 `scroll-padding-top: 50px`로 이미 충족돼 scroll-margin 미추가. 밀도 종속화는 이 페이지에 출처 캡션이 없고 "패션 커머스 A사 예시"가 핵심 교보재라 미적용(패턴의 적응적 적용). 발문 6개·26px·좌측 바 0px 렌더 확인, 콘솔 0건 |
| 11 | 강의 동선 변경: 블루프린트 → AX 캔버스 → 진단 | `blueprint.html`·`ax-canvas.html` | 하단 NEXT STEP 게이트 재배선. 블루프린트 하단 #diagnosis(→diagnosis.html) 섹션을 #to-canvas로 바꿔 AX 캔버스로 보냄(발문·카피를 캔버스 핸드오프로 재작성, "이 캔버스가 BRAIN OS 지식을 한 직무씩 채우는 양식" 회수 추가). ax-canvas 하단(#order 다음, 푸터 앞)에 #to-diagnosis 게이트 신설(→diagnosis.html, "이제 우리는 어디쯤인가"). 블루프린트의 진단 마무리 발문이 ax-canvas 하단으로 이동. `.bp-roadmap-gate` CSS를 ax-canvas에 이식. 글로벌 stepnav·substeps는 미변경(구조 지도 유지, 하단 CTA만 강의 동선). 링크·렌더·콘솔 0건 검증 |
| 12 | 검증 사례 회사명 익명화 | `plan.md`·`ax-canvas.html`·`blueprint.html`·`AGENTS.md`·`MEMORY.md` | 실명 노출 방지. `게스코리아` → `패션 커머스 A사`(컨설팅 표준 익명 라벨), 채널 예시의 타사명 `무신사` → `입점몰`, SKILL.md 식별자 `guess-cs-return-handling` → `fashion-cs-return-handling`. 사례의 운영 디테일(채널별 처리·14일·핏 불만 등)은 그대로 유지. SSOT(plan.md) 포함 전 파일 일괄 치환. 잔존 0건(게스·GUESS·무신사), 가시 페이지 ex-tag·채널 렌더 확인, 콘솔 0건 |
| 13 | 강의 트리오: 인덱스 3카드 + 서브 메뉴 3개 통일 | `index.html`·`blueprint.html`·`ax-canvas.html`·`diagnosis.html` | 강의 동선(블루프린트 → AX 캔버스 → 진단)을 1급 네비로. index `#diagnosis` 게이트 그리드를 2열→3열로 바꾸고 가운데 AX 캔버스 카드 신설(순서: AX 추진 원칙 → AX 캔버스 → 현재 수준 진단). 섹션 제목/메타/인트로를 3걸음 흐름으로 재작성("청사진에서 진단까지, 세 걸음"). 세 페이지의 `bp-substeps`를 동일 트리오 3칩으로 통일(aria-label "강의 동선"). ax-canvas는 기존 4단계 그룹(자원·AX캔버스·업무재설계) 대신 트리오로 교체 — resource/reshape는 미변경. 데스크톱 3열(377px)·콘솔 0건 검증 |
| 14 | 4C 프레임워크 신설: 컴퍼니 브레인 작동 4조건 | `plan.md`(SSOT)·`ax-canvas.html` | TCRA 대체가 아니라 별도 프레임워크로. 4C(Context·Connections·Capabilities·Cadence)를 조직 레벨로 번역해 "컴퍼니 브레인이 잘 작동하는 네 가지 조건"으로. SSOT 먼저: plan.md D-0 신설(4조건 표 + 3기둥과의 관계 명시: 지식=Context·Connections 두 층, 실행=Capabilities, 순환=Cadence). ax-canvas `#order` 다음·`#to-diagnosis` 앞에 `#conditions` 섹션 신설(발문 + 세컨드 브레인/운영체계 2그룹 밴드 + 4카드 `.bp-cond-grid`). 핵심 기여는 C2 Connections(살아 있는 데이터) 층 보강. 캔버스=Context 한 장이라는 미시-거시 연결 명시. hero-nav에 "작동 4조건" 링크 추가(7개). 좌측 바 0px(§4.7-A), 4카드·콘솔 0건 검증 |

### 2026-05-25 (현재 세션, 4차) — 참고 자료 페이지 신설 (`problem-definition.html`)

| # | 명령 | 범위 | 결과 |
|---|---|---|---|
| 1 | `problem-definition.html` 신규 작성 | 참고 자료 (5단계 본문 외 부록) | 다섯 섹션: 시대의 전환(Karpathy 사례) · Why의 시대(4시대 매트릭스) · 5대 핵심 역량(3단 흐름) · 인재의 모습(5 컬럼 카드) · 에이전트 리더십(피플 vs 에이전트 6작업 비교표). bp-* 시각 시스템 차용, sticky sub-menu + scrollspy IIFE 포함 |
| 2 | `index.html` 참고 자료 섹션에 진입점 추가 | `#refs` 섹션 | 기존 `ai-services.html` 옆에 새 substep 링크 추가. 라벨 "AI 퍼스트 문제 정의력" |
| 3 | `plan.md` 부록 항목 신설 | SSOT 끝부분 | "부록. 참고 자료" 절을 신설하고 `ai-services` · `problem-definition` 두 페이지를 표로 정리. 다섯 섹션 구조와 본문 연결 지점(`capability` 리더 트랙, `reshape` 출발점) 명문화. 새 원칙 신설·6원칙 확장 금지 명시 |
| 4 | 디자인 원칙 적용 | 본문 | em dash 0개, 합쇼체 통일, AI 시각 클리셰(좌측 컬러 바·이모지·형광 강조) 0개. 5대 카드의 1~5 번호는 숫자만 사용(아이콘·이모지 미사용) |

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

## 21페이지 구축 진행 상황

| 묶음 | 페이지 | 상태 | 비고 |
|---|---|---|---|
| 진입 | `index.html` | ✅ 구현 | 전체 여정 지도·요약·참고 진입점 |
| 진단 | `blueprint.html` | ✅ 구현 | AX 추진 원칙 · 청사진 · 북극성 원칙 5 |
| 진단 | `ax-canvas.html` | ✅ 구현 | AX 캔버스 = 미시 엔진 (한 직무 10칸 해부) |
| 진단 | `diagnosis.html` | ✅ 구현 | 6영역 24문항 인터랙티브 진단 |
| ① 실행 조직 | `leader-first.html` | ✅ 구현 | 경영진이 먼저 쓴다 |
| ① 실행 조직 | `organization.html` | ✅ 구현 | TF 조직 세팅 |
| ① 실행 조직 | `operations.html` | ✅ 구현 | 운영 계획 수립 |
| ① 실행 조직 | `capability.html` | ✅ 구현 | 90일 부트캠프·해커톤 |
| ② 파일럿 실행 | `pilot.html` | ✅ 구현 | 대상 선정과 실행 |
| ② 파일럿 실행 | `insights.html` | ✅ 구현 | 핵심 시사점 도출 |
| ③ 우선순위화 | `criteria.html` | ✅ 구현 | 우선순위 기준 설정 |
| ③ 우선순위화 | `evaluation.html` | ✅ 구현 | 후보 평가 |
| ③ 우선순위화 | `bets.html` | ✅ 구현 | 전략 과제 선정 |
| ④ 업무 재설계 | `resource.html` | ✅ 구현 | 자원 재배분 (10-20-70) |
| ④ 업무 재설계 | `reshape.html` | ✅ 구현 | 업무 재설계 ★심장 (4D·전사 확장) |
| ⑤ AI 네이티브 | `ainative.html` | ✅ 구현 | AI 네이티브의 모습 · 도착지 |
| ⑤ AI 네이티브 | `brainos.html` | ✅ 구현 | BRAIN OS 완성도 · 자산 축적 4단계 순환 |
| ⑤ AI 네이티브 | `perpetual.html` | ✅ 구현 | 지속 운영과 출발선 |
| 참고 | `cost-output.html` | ✅ 구현 | AI 네이티브로의 여정 |
| 참고 | `problem-definition.html` | ✅ 구현 | AI 퍼스트 문제 정의력 |
| 참고 | `ai-services.html` | ✅ 구현 | AI 서비스 비교 |

진행률: 21 / 21 (옛 E 영역 검증 사례·템플릿·운영 매뉴얼은 미구현)

별도: `slide.html` 한 장 요약 슬라이드 (네비 미연결).

### 공통 자산

| 파일 | 상태 | 비고 |
|---|---|---|
| `assets/style.css` | ✅ 사용 | 디자인 토큰, `.container`, 단계 네비·서브메뉴, SM-HAMBURGER, 카드·표 등 전부 |
| `assets/nav.js`, `assets/css/*`, `assets/js/*` | ⚠ 레거시 | 1차 다중 파일 시도의 잔재. 현재 어떤 페이지도 미참조. 정리 대상 |

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
- 본문·UI·제목 모두 로컬 **Pretendard** 단일 (산세리프). 세리프 본문 안은 폐기됐다.
- 폰트는 `assets/fonts/`의 로컬 Pretendard를 `@font-face`로 등록 (외부 CDN 불사용).

### 폭 규격 (확정)
- `.container`: max-width 1080px, padding 32px 32px 80px
- `.header-pages` 2-menu: 490px / 3-menu: 700px
- 햄버거 브레이크포인트 768px, 드로어 320px

### 기준 페이지 (메뉴 폭 통일)
- 서브 메뉴 폭은 메뉴 개수별 기준 페이지를 따른다 (AGENTS.md Rule 3·§4.4).
- 단계 네비는 진단·1·2·3·4·5·참고 7칸 고정.

### 강의용 재편 기준 페이지 (확정)
- `blueprint.html`이 강의용 재편 표준 구현이다 (강의 발문 `.bp-beat-lead`·밀도 종속화 `.bp-cite`·beat 리듬·도착지 두 축 MECE 적용 완료).
- 패턴 규약은 [AGENTS.md](AGENTS.md) §12, 상세 패턴과 전 페이지 롤아웃은 [lecture-blueprint.md](backups/lecture-blueprint.md). 강의용 작업은 두 문서를 반드시 따른다.
- 좌측 컬러 바는 AGENTS.md §4.7-A 금지 클리셰. 발문·요약 박스에 쓰지 않는다.

---

## 본문 작성 점검 항목

새 카피를 본문에 넣거나 외부 초안을 옮길 때 다음을 자동으로 적용한다.

| 점검 | 사유 |
|---|---|
| em dash `—` 제거 (마침표·괄호·콜론으로 치환) | AGENTS.md 5.1 (em dash 절대 금지) |
| 평어 초안은 경어로 변환 | AGENTS.md 5.7 (콘텐츠 본문은 경어) |
| 번역투 점검 | AGENTS.md 5.3 |
| 자기해설·마무리 명언 제거 | AGENTS.md 5.4, 5.8 |
| 약어 유지 (COMPANY BRAIN OS·DRI·4D·TF·TSR·RAI·SSOT) | AGENTS.md 5.6 예외 목록 |

---

## 다음 액션 (Open Items)

21페이지 본문은 구현 완료. 남은 일은 미구현 영역과 품질·정리다.

### 1순위 · 콘텐츠 품질
1. **강의 발문(`.bp-beat-lead`) 전 페이지 롤아웃**: `blueprint.html`이 표준 구현. B 단계(①~⑤) 본문 전 페이지에 강의용 재편 패턴(발문·beat 리듬·도착지 두 축 MECE)을 아직 다 적용하지 않았다. AGENTS.md §12·[lecture-blueprint.md](backups/lecture-blueprint.md)를 따른다.
2. **단계별 콘텐츠 평가 마무리**: 2단계(pilot·insights) 평가 8.2/10까지 진행. 1·3·4·5단계도 같은 기준으로 정합성·사실 검증을 돈다 (개인 메모 [[stage4-evaluation-gaps]] 참조).

### 2순위 · 미구현 영역
3. **옛 E 영역 구현 여부 결정**: 검증 사례(패션 커머스 A사 CS)·인터랙티브 템플릿(로컬 저장)·운영 매뉴얼을 독립 페이지로 만들지, 기존 페이지에 흡수할지 결정.
4. **`assets/downloads/` 매핑**: 워크북(roi-calculator·job-redesign-workbook·tool-decision-tree 등)을 어느 페이지의 다운로드 카드로 노출할지 정리.

### 3순위 · 자산 정리
5. **레거시 자산 삭제**: 미참조 `assets/nav.js`·`assets/css/*`·`assets/js/*` 정리 (다운로드 빌드 스크립트 의존만 확인 후).
6. **백업 파일 정리**: `*.backup-20260614-*.html`, `index.backup-*.html` 등 작업 백업 정리 여부 결정.
