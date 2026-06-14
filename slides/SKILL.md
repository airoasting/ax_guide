---
name: ax-keynote-deck
description: 단일 HTML 발표 슬라이드 덱을 만들고 고친다. 사이트의 포레스트 그린 디자인 시스템을 차용하고, 16:9 풀스크린 슬라이드 엔진 위에 BCG·맥킨지 톤의 컨설팅 덱을 올린다. "발표 자료·강의 슬라이드·키노트·슬라이드 덱·PPT 대신 HTML"을 만들거나 고칠 때 쓴다. 산출물은 `slides/ax-keynote.html` 한 파일이다.
---

# AX Keynote Deck Skill

50분 강의용 단일 HTML 슬라이드 덱을 만들고 유지보수하는 방법이다. 이 문서 하나로 덱을 처음부터 다시 짓거나, 슬라이드를 추가·수정할 수 있다.

작성·검증 원칙은 저장소의 [AGENTS.md](../AGENTS.md)를 따른다. 특히 §5 한국어 작성 원칙(주술 구조, 번역투 제거, em dash 금지, 합쇼체)과 §13 발표 슬라이드 덱 규약을 같이 본다.

---

## 0. 한 줄 요약

- **산출물**: `slides/ax-keynote.html` (외부 라이브러리 없는 자기완결형 단일 HTML).
- **본문 출처(SSOT)**: 사이트 페이지 내용을 줄이지 않고 옮긴다. 수치·사례·고유명사 100% 보존.
- **불변 규칙 셋**: ① 콘텐츠 밴드 시작·끝점 통일, ② 세 질문(MECE)을 목차·트래커·요약에서 같은 문구로 반복, ③ 공통 변경은 한 슬라이드가 아니라 전역 CSS로.

---

## 1. 언제 쓰나

- "발표 자료 만들어줘", "강의 슬라이드", "키노트", "슬라이드 덱", "PPT 대신 HTML로" 같은 요청.
- 기존 `slides/ax-keynote.html`의 슬라이드를 추가·삭제·재배열·수정하는 요청.
- 사이트(14페이지 HTML)와는 별개 산출물이다. 사이트를 고치는 요청에는 쓰지 않는다.

---

## 2. 파일과 자산

- 위치: `slides/ax-keynote.html` (폴더가 한 단계 안쪽이라 자산은 `../assets/`로 참조).
- 폰트: `../assets/fonts/PretendardVariable.ttf`를 `@font-face`로 등록.
- 로고: 다크 슬라이드 `../assets/logos/logo1-white.png`.
- QR: `../assets/qr/0615.jpeg` (오픈카톡방 입장 QR). 파일이 없을 때를 대비해 `onerror` 자리표시자를 둔다.
- 배포 시 `assets/` 폴더를 함께 올린다.

---

## 3. 디자인 토큰

사이트의 BP 그린 시스템을 그대로 쓴다.

```css
:root {
  --ink: #0F1A16; --ink-soft: #4A554F; --ink-mute: #6E7872;
  --paper: #F7F5EF; --paper-2: #FBFAF6;
  --green: #0E3B2A; --green-deep: #062018; --accent: #1B6E4F;
  --gold: #9A7B0A; --red: #8B2E1F; --rule: #D6D2C5;
  --grid: rgba(14,59,42,0.06); --grid-dark: rgba(247,245,239,0.05);
  --sans: 'Pretendard Variable','Pretendard',-apple-system,sans-serif;
}
```

- 라이트 슬라이드: `--paper` 배경 + 모눈(grid) 패턴. 다크 슬라이드: 딥 그린 그라데이션 + 미세 모눈.
- 강조 그린은 `--green`(딥)과 `--accent`(한 톤 밝게) 둘만 쓴다. 형광·고채도 금지.
- 골드(`--gold`)는 캔버스 08(연결) 셀 같은 한정 신호에만.
- 다크 톤 위 밝은 강조 텍스트는 `#6FBF9B`/`#9FD7BE`.

---

## 4. 슬라이드 엔진

16:9 고정 stage(1280×720)를 JS가 뷰포트에 맞춰 확대·중앙 정렬한다.

```html
<div id="viewport"><div id="stage">
  <section class="slide active" data-tone="dark">...</section>
  <section class="slide" data-tone="light">...</section>
</div></div>
<div id="hud-progress"></div>
<div id="hud-counter"><span class="cur">01</span> / <span class="total">33</span></div>
```

핵심 CSS:

```css
#viewport { position: fixed; inset: 0; overflow: hidden; }
#stage { position: absolute; top: 50%; left: 50%; width: 1280px; height: 720px; transform-origin: center center; }
.slide { position: absolute; inset: 0; display: none; flex-direction: column; overflow: hidden; }
.slide.active { display: flex; }
```

- **중앙 정렬은 flexbox로 하지 않는다.** 특정 레이아웃에서 stage가 좌측으로 밀린다. 반드시 `absolute + transform: translate(-50%,-50%) scale(s)`로 한다. `s = min(innerWidth/1280, innerHeight/720)`.
- 슬라이드 전환은 `display:none/flex`. 한 슬라이드만 `.active`.
- 초기화 시 모든 `.active`를 제거한 뒤 해시(`#8`) 슬라이드만 활성화한다(잔상 방지).
- 네비: `← →`·Space·PageUp/Down·↑↓ 이동, Home/End 처음·끝, `F` 전체화면. 클릭은 좌측 이전·우측 다음. HUD는 우하단 카운터만 둔다(좌하단 힌트 없음).
- 검증·미리보기용으로는 `?v=<timestamp>` 쿼리로 캐시를 무력화한다.

엔진 스크립트(요지):

```js
function fit(){ var s=Math.min(innerWidth/1280, innerHeight/720); stage.style.transform='translate(-50%,-50%) scale('+s+')'; }
function show(idx){ slides[i].classList.remove('active'); i=idx; slides[i].classList.add('active');
  document.body.classList.toggle('is-light', slides[i].dataset.tone==='light'); /* counter, progress, hash */ }
```

---

## 5. 콘텐츠 밴드 통일 (가장 중요)

모든 콘텐츠 슬라이드는 본문 시작점·끝점이 같은 세로 위치에 오도록 통일한다. 슬라이드를 넘길 때 위아래가 흔들리지 않게 한다.

### 5.1 헤더 고정

```css
.s-head { padding: 40px 60px 0; }
.s-eyebrow { font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); }
.s-titlerow { display: flex; align-items: flex-end; justify-content: space-between;
  margin-top: 14px; min-height: 82px; padding-bottom: 15px; border-bottom: 1.5px solid var(--green); }
.s-title { font-size: 34px; font-weight: 700; letter-spacing: -0.02em; color: var(--ink); max-width: 1010px; }
```

- `min-height: 82px` + `align-items: flex-end`로 제목이 1줄이든 2줄이든 **하단 구분선 위치를 고정**한다. 이게 본문 시작선을 통일하는 핵심이다.
- 닫는 태그를 `</div>`로 잘못 닫으면 파서가 본문을 통째로 버린다. 제목은 `<h2 class="s-title">…</h2>`로 닫혔는지 항상 확인한다.

### 5.2 본문 밴드와 채움

```css
.s-body { flex: 1; padding: 52px 60px 66px; display: flex; flex-direction: column; justify-content: flex-start; min-height: 0; }
```

- 위아래 패딩으로 일정한 밴드를 만든다(시작은 충분히 아래, 끝은 충분히 위). 좌우 60px 고정.
- 각 슬라이드의 **주 콘텐츠 블록에 `flex: 1`을 줘 밴드를 꽉 채운다.** 하단 여백을 남기지 않는다.

```css
/* 주 블록을 밴드 높이까지 채운다 */
.s-body > .flow, .s-body > .cmp, .s-body > .tcra, .s-body > .order,
.s-body > .funnel2, .s-body > .metrics, .s-body > .five, .s-body > .pillars,
.s-body > .imp3, .s-body > .costcards, .s-body > .caseblocks, .s-body > .harness,
.s-body > .guard, .s-body > .io, .s-body > .qcard, .s-body > .cond-grid,
.s-body > .stat-trio, .s-body > .cgrid, .s-body > .cgrid-bottom, .s-body > .appr { flex: 1 1 auto; min-height: 0; }

/* 카드 그리드: 한 줄을 밴드 높이까지 늘려 카드가 채워지게 */
.five, .pillars, .imp3, .costcards, .caseblocks, .cond-grid, .shift,
.blocks2, .harness, .guard, .io, .cgrid, .cgrid-bottom, .appr { grid-auto-rows: 1fr; }

/* 표/리스트: 행이 자라서 채움 */
.flow { display: flex; flex-direction: column; }
.flow-row, .cmp-row, .tcra-row, .order-row { flex: 1 1 auto; }

/* 막대 차트·출처 리스트: 항목을 위아래로 고르게 분포 */
.funnel2, .metrics, .srclist { justify-content: space-between; }

/* 인용 카드: 채워진 박스 안에서 내용 중앙 */
.qcard { display: flex; flex-direction: column; justify-content: center; }
```

- **새 레이아웃을 추가하면 이 채움 규칙에도 같이 등록한다.** 빠뜨리면 그 슬라이드만 하단이 비어 통일감이 깨진다.
- 커스텀 레이아웃(커리어·커리큘럼 등)은 자체 컨테이너에 `flex:1; grid-auto-rows:1fr`를 준다.

### 5.3 셀 정렬

```css
/* 단일 내용 셀·카드는 세로 중앙 */
.flow-cap, .flow-reality, .flow-q, .ccell, .cb, .costc, .block,
.pillar, .cond-card, .imp, .harness-col, .guard-card { justify-content: center; }
.tcra-what, .tcra-ex, .order-body, .order-fail { display: flex; flex-direction: column; justify-content: center; }
.cmp-row { align-items: center; }            /* 표는 grid 정렬로 중앙(셀을 flex로 만들면 줄바꿈이 깨진다) */
.ccell { align-items: center; text-align: center; }  /* 캔버스 셀 글자 가운데 */
```

- **상단에 라벨이 있는 카드(five-cell 등)는 중앙 정렬하지 않는다.** 라벨 시작 높이가 어긋난다. 이런 카드는 상단 정렬(`flex-start`)로 둬 라벨 시작점을 맞춘다.
- 표 셀을 `display:flex`로 바꾸면 한국어 줄바꿈이 이상해진다. 표는 `.cmp-row { align-items: center }`로만 세로 중앙을 준다.

---

## 6. 컴포넌트 라이브러리

슬라이드별로 쓰는 레이아웃 클래스다. 같은 성격의 새 슬라이드는 기존 클래스를 재사용한다.

| 클래스 | 용도 | 형태 |
|---|---|---|
| `.shift` | before/after 2단 대비 | 2열, 좌 red 톤·우 green 톤 |
| `.flow` | "지금 → 진짜 질문 → 무엇을 재는가" 3열 흐름표 | grid 1fr 1fr 1.25fr |
| `.caseblocks` + `.pull` | 사례 3칼럼(시도/개인/조직) + 인용 | 3열 카드 + 인용 박스 |
| `.imp3` + `.concl` | 시사점 3카드 + 결론 바 | 3열 |
| `.costcards` + `.cost-common` | 사례 3카드(vs 라벨) + 공통점 | 3열 |
| `.io` + `.io-next` | 입력 vs 출력 2단 + 다음 한 걸음 | 2열 |
| `.funnel2` | 깔때기 막대 차트 | 세로 막대 3단 |
| `.metrics` | 배수 막대 차트 | 라벨·트랙·값 5행 |
| `.stat-trio` + `.dist` | 큰 통계 3 + 분포 막대 + 범례 | |
| `.five` | 5칸 카드(함정·원칙) | grid 5열 |
| `.pillars` + `.os-build` | 3기둥 + 빌드 문장 | 3열 |
| `.cmp` | 7영역 before/after 표 | grid 140px 1fr 1fr |
| `.cgrid` + `.cgrid-bottom` | AX 캔버스 10칸 지도 | 7열 + 3칸 |
| `.canvas-wrap` + `.cv-overlay` | 캔버스 위 반투명 작성규약 오버레이 | 좌우 반투명 패널 + dimmed 셀 |
| `.tcra` | T·C·R·A 4행(스테이지·설명·예시) | grid 190px 1fr 1.15fr |
| `.harness` + `.meta-merge` | Human/AI Harness 2단 + 통합 바 | 2열 |
| `.guard` | 9·10 가드레일·성장 2카드 | 2열 |
| `.order` | 작성 순서 5행(번호·본문·실패 싸인) | grid 50px 1.1fr 1fr |
| `.appr` | 접근법 4원칙 카드(번호·제목·설명·필·불릿) | grid 4열, 녹색 필 |
| `.cond-band` + `.cond-grid` | 작동 4조건(밴드 + 4카드) | |
| `.qcard` | 한 가지 질문 인용 카드 | 단일 박스 |
| `.prose` / `.intro` | 리드 문단 | 16px 통일 |
| `.src-line` | 페이지 하단 출처 한 줄 | 11.5px, 상단 hairline |
| `.agenda-row` / `.agenda-row.sel` | 목차 질문 행 / 선택(빨간 박스) 트래커 | |
| `.curr-*` | 커리큘럼 로드맵(진단·5단계·참고·목표) | 단계는 `.cs-num` 필 |
| `.para-*` | 기술 패러다임 타임라인(년도·라인아이콘·브랜드) | 4열, 셀 사이 → |
| `.car-*` | 커리어 타임라인(시대·카드·주석) | 6열, 경계에 → |

폰트 크기는 통일한다. 리드 문단은 16px(`.intro`/`.prose`), 카드 본문·리스트는 13~14.5px, 밀집 표/그리드 셀은 12~12.5px, 출처·각주는 11.5px. 한 슬라이드만 +2pt 같은 임의 확대를 하지 않는다. 키우면 인접 슬라이드와 어긋난다.

---

## 7. 덱 골격 (현재 33장)

표지 → 오픈카톡방(QR) → AI 패러다임 타임라인 → 강정구 커리어 → 전환 메시지(다크) → 목차 → **Q1 트래커** → Part 1 → **Q2 트래커** → Part 2 → **Q3 트래커** → Part 3 → 한 장 요약(다크) → AX 접근법 4원칙 → 작동 4조건 → 커리큘럼 로드맵 → 감사(다크).

### 7.1 세 질문(MECE, 진단 → 차별점 → 실행)

목차·트래커·마무리 요약에서 **완전히 동일한 문구**로 반복한다. 한 곳을 고치면 네 곳을 같이 고친다.

- **Q1 (AI 네이티브로의 여정 · `cost-output.html`)**: "모두가 AI를 쓰는데, 왜 6%만 성과를 내고 있을까?"
- **Q2 (AX 추진 원칙 · `blueprint.html`)**: "성공과 실패를 가르는 기준점은 무엇일까?"
- **Q3 (AX 캔버스 · `ax-canvas.html`)**: "어디서부터 AX를 시작해야 할까?"

### 7.2 트래커

목차 슬라이드를 복제해 각 Part 진입 직전에 두고, 해당 Q 행을 빨간 라인 박스(`.agenda-row.sel`)로 선택 표시한다. 다크 디바이더 대신 이 트래커를 쓴다.

```css
.agenda-row.sel { border: 2.5px solid #CC3B2E; border-radius: 10px;
  background: rgba(204,59,46,0.045); box-shadow: 0 8px 24px -14px rgba(204,59,46,0.55); }
.agenda-row.sel .agenda-q, .agenda-row.sel .agenda-tag { color: #CC3B2E; }
```

### 7.3 본문 출처

세 페이지(`cost-output`·`blueprint`·`ax-canvas`)의 내용을 줄이지 않고 옮긴다. Part 1 = 여정, Part 2 = 원칙, Part 3 = 캔버스. 분량은 "N장에 국한되지 않는다." 내용이 온전히 살도록 필요한 만큼 늘린다.

---

## 8. 문구·시각 규약

- **eyebrow**: 핵심 한 가지만 짧게. "A · B · C" 식 나열을 피한다.
- **s-meta(우측 상단 라벨)**: 쓰지 않는다(`display: none`).
- **qbadge(Q1-1 칩)**: 표시하지 않는다(`display: none`).
- **출처**: 전용 출처 페이지를 두지 않는다. 각 사례 페이지 하단에 `.src-line` 한 줄로 붙인다. "세부 수치는 보도 시점에 따라 다를 수 있습니다" 같은 자신 없는 단서, "확인 시점 ..." 같은 군더더기는 빼고 매체·기사명만 남긴다.
- **차트(막대)**: 왼쪽에 세로 축선(`border-left`)을 둬 차트로 읽히게 한다.
- **다크 슬라이드**: 표지·전환 메시지·요약·감사. 나머지는 라이트(모눈).
- **표지**: 제목 "컴퍼니 브레인을 키워라 / 암묵지를 증류하는 AX 5단계", 하단 "강정구 · Jayden Kang · 라이너 AI 전략 총괄 · 2026.06".
- **타임라인 화살표(→)**: 박스와 박스 사이(가운데 높이)에 둔다. 라벨 줄에 붙이지 않는다.
- **선참조 금지**: 아직 보여주지 않은 그림·번호(예: 캔버스 10칸, "좌측 2·3·4번")를 그 전 슬라이드 본문에서 끌어다 쓰지 않는다. 보는 사람이 무슨 얘긴지 알 수 없게 된다.
- **한국어**: AGENTS.md §5 그대로. 주술 구조를 맞추고, 번역투를 거두고, em dash를 쓰지 않고, 합쇼체로 통일한다.

---

## 9. 슬라이드 추가·재배열

### 9.1 새 슬라이드 추가

1. 적절한 위치(보통 두 `<section>` 사이)에 `<section class="slide slide--content" data-tone="light">`를 넣는다.
2. `.s-head`(eyebrow + s-titlerow) → `.s-body`(주 블록) 골격을 지킨다.
3. 새 레이아웃이면 §5.2 채움 규칙에 그 클래스를 등록한다(`flex:1` + 필요 시 `grid-auto-rows:1fr`).
4. HUD `total`은 JS가 슬라이드 수로 자동 갱신한다. 손대지 않는다.
5. 같은 그림을 사용자가 가진 자료에서 가져올 수 없으면 SVG로 재현하되, 실제 파일이 들어오면 `<img>`로 교체한다.

### 9.2 재배열

`<section>...</section>` 블록 단위로 옮긴다. 마커(주석/제목 문구)로 경계를 잡고, 다른 장에 영향이 없게 통째로 이동한다.

---

## 10. 빌드·검증

- 정적 서버(`.claude/launch.json`의 `ax-guide-static`)를 띄우고 브라우저 프리뷰로 본다.
- 1280×720에서 성격이 다른 대표 슬라이드(표·카드·차트·캔버스·다크)를 확인한다.
- 점검표:
  1. 콘솔 오류 0건.
  2. 본문 넘침 없음, 하단 빈 여백 없음.
  3. 시작점·끝점 통일(헤더 구분선과 본문 시작선이 슬라이드마다 같은 높이).
  4. 세 질문이 목차·트래커·요약에서 동일 문구.
  5. 제목이 `</h2>`로 닫혔는지(파서가 본문을 버리지 않게).
  6. PDF가 필요하면 전체화면(F) 후 브라우저 인쇄 → PDF 저장.

---

## 11. 흔한 함정

- **공통 변경을 한 슬라이드만 고친다** → 밴드·셀 정렬·eyebrow·필 버튼 폭 같은 공통 요소는 전역 클래스로 고친다.
- **새 블록을 채움 규칙에 빠뜨린다** → 그 슬라이드만 하단이 빈다.
- **표 셀을 flex로 중앙 정렬** → 한국어 줄바꿈이 깨진다. 표는 `align-items: center`만.
- **라벨 카드를 세로 중앙** → 라벨 시작점이 어긋난다. 상단 정렬로.
- **flexbox로 stage 중앙 정렬** → 좌측으로 밀린다. `translate(-50%,-50%) scale()`로.
- **제목 닫는 태그 오타(`</div>`)** → 본문이 사라진다.
- **선참조** → 안 보여준 그림·번호를 앞 슬라이드에서 끌어 쓰면 청중이 헤맨다.

---

## 12. 남길 자산

이 SKILL.md 자체가 자산이다. 새 덱을 짓거나 이 덱을 이어받을 때, §3 토큰 → §4 엔진 → §5 밴드 통일 → §6 컴포넌트 → §7 골격 순으로 읽으면 같은 품질을 재현할 수 있다. 규약이 바뀌면 이 파일과 [AGENTS.md](../AGENTS.md) §13을 같이 갱신한다.
