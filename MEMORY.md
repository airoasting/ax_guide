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
| 13 | 푸터 윤문 + 하단 CTA + 반데헤이 사례 심화 | `cost-output.html`·`plan.md` | (1) 푸터 요약 번역투("다음 라운드를 가져갑니다") → "얼마나 썼는지는 누구나 셀 수 있습니다 … 비용과 성과를 한 장부에 나란히 적는 회사가 결국 앞서갑니다"로 자연화. (2) 맨 하단(출처 다음·푸터 앞)에 `.bp-cta` 밴드 신설 → blueprint.html 연결("그래서, 우리는 어디쯤일까요?" + "AX 청사진으로 가기"). 도입부→진단 동선 완결. (3) 반데헤이 사례 심화: Axios 원문 'Confessions of an AI lab rat'(2026.06.08) 재검증으로 디테일 보강 — 매일 새벽 1~2시간, 의료 기록·혈액 검사·식단까지 학습, 폰 상시 에이전트 개인 운영체계, 조직의 벽(보안·시스템 연결·에이전트 협업, 경영진조차 "무엇을 알고·공유·실행해도 되는지"에서 막힘)이 이제 원문으로 검증돼 복원, 그리고 핵심 통찰 추가: "비용 절감이 아니라 새 사업"(Axios가 AI 없이는 불가능했던 새 수익 사업 셋 시작). 시사점 3개를 매일·직접/막히는 건 조직/진짜 기회=새 사업으로 재구성. plan.md 부록-2 섹션·출처·금지 사항(조직 벽 미검증 보류 해제), 페이지 출처 Axios 항목 갱신. em dash 0, 데스크톱·모바일 오버플로 0, 콘솔 0건 |

| 12 | 라벨 수정 + 사례별 구체 수치 보강 | `cost-output.html`·`plan.md` | (1) 서브 메뉴 "비용의 장부" → "비용 장부", plan.md 부록-2 섹션명도 동기화. (2) 마이크로소프트 카드에 빠져 있던 비용 수치 추가(웹 재검증): 1인당 월 500~2,000달러·4월 사용률 84~95%·약 5,000명. 우버는 비용 범위를 500~2,000달러 전체로 명시. 스타벅스는 북미 1만 1,000여 개 매장·'99% 정확도' 표방·스캔 재확인 부담 추가(NomadGo 발표 2025.09 + Reuters·CNBC·Fortune). plan.md 부록-2 검증 출처·금지 사항에 신규 수치 반영, 출처 섹션 캡션도 갱신. "우버 AI 예산 34억 달러"는 1인당 비용과 모순돼 코딩 지출 아님으로 판단, 미채택. em dash 0, 숫자·인용 보존 검증 |

| 11 | 윤문(korean 스킬): 어색 표현 외과 교정 | `cost-output.html` 본문 | 사용자 플래그(그림을 그렸다·쥐여주고·셈을 틀리면서)와 전반 톤을 "일상적이지만 프로페셔널"로 다듬음. "같은 그림을 그렸다→같은 계산을 했다", "그림에 금을 냈다→그 계산이 틀렸다는 걸 보여줬다", "쥐여주고→열어주고", "거둬들이고→회수하고", "셈을 틀리면서→수량을 잘못 세는 일이 잦아지자", "바리스타를 붙잡았다→바리스타의 일손을 늦췄다", "헛다리를 짚습니다→착각합니다", "구독을 많이 깔았는지→늘렸는지", "거창한 정비→거창한 준비", "적게 하십시오→적게 하면 됩니다", "앞세우지 못합니다→앞서갈 수 없습니다". 의미·숫자(88%·32/84%·2,000·1,500·4/6/9개월·5,000명)·직접 인용("아직 그 연결고리는 없다")·고유명사 100% 보존. em dash 0, 합쇼체 유지. 데스크톱·콘솔 0건 검증 |

| 10 | 위치 프레이밍 반전: 진단 다음 → 진단의 도입부 | `cost-output.html` 히어로 요약 · `plan.md` 부록-2 | 사용자가 강의·발표에서 이 이야기를 맨 앞(오프닝)으로 꺼낸다고 함. 히어로 요약을 "진단을 마친 뒤 이어서 읽기 좋은 자료" → "그래서 이 이야기로 시작합니다 … 그제야 '그럼 우리는 어디쯤인가'라는 진단이 절실해집니다. 이 페이지가 진단의 출발선입니다"로 반전. plan.md 부록-2 본문·본문 연결도 "진단 직후 읽을 거리" → "진단 도입부(오프닝), 진단의 동기를 만든다"로 동기화. 네비·구조는 부록 유지(노출 순서·stepnav 불변). 리로드 후 렌더·em dash 0 검증 |

| 9 | 서브 메뉴 정리 + 스토리텔링 10점화 | `cost-output.html` | (1) sticky 서브 메뉴(`bp-hero-nav`)에서 #sources 링크 제거(4칸), 하단 출처 섹션은 유지. (2) 비즈니스 리더(GOLD·RED·BLUE·SILVER) 관점 평가 후 "telling→showing"으로 본문 재서술. 히어로에 회의실 장면("우리도 쓰고 있다") 도입, 섹션1에 88%(plan.md A-1 SSOT 회수)로 긴장 부여, 반데헤이를 'AI 실험용 쥐' 1년 자가 실험 서사로, 우버 카드에 "청구서도 불었다"+COO "아직 그 연결고리는 없다", MS "발목 잡은 건 청구서", 스타벅스 "바리스타를 붙잡았다" 장면화. 섹션3 핸드오프를 "비용 칸은 또박또박, 성과 칸은 비어 있다"로 다듬어 섹션4 장부 은유와 연결. 섹션4에 같은 토큰 두 팀 대비 강화 + "다음 한 걸음"(비용 옆 빈 칸에 '무엇이 달라졌나' 한 줄) 구체 행동 추가. 새 사실 0건(검증·SSOT 범위 내), em dash 0, 합쇼체, 과장어·AI 마무리 명언 없음. 데스크톱·모바일(오버플로 0)·콘솔 0건 검증 |

### 2026-06-14 (현재 세션) — 강의용 재편 패턴 도입 (`blueprint.html` 대표 적용)

사이트를 빔으로 띄워 강의하기에 적합하도록 페이지 자체를 재편하는 작업을 시작했다. 별도 슬라이드 덱이나 발표자 모드를 만들지 않고, 페이지의 비주얼 위계를 다시 잡는 A안으로 확정했다. 패턴 정의와 전 페이지 롤아웃 절차는 [lecture-blueprint.md](lecture-blueprint.md)에 둔다.

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
| E | `e1-casestudy.html` | ⏸ 미착수 | plan.md E 전체 (패션 커머스 A사 CS) |
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

### 강의용 재편 기준 페이지 (확정)
- `blueprint.html`이 강의용 재편 표준 구현이다 (강의 발문 `.bp-beat-lead`·밀도 종속화 `.bp-cite`·beat 리듬·도착지 두 축 MECE 적용 완료).
- 패턴 규약은 [AGENTS.md](AGENTS.md) §12, 상세 패턴과 전 페이지 롤아웃은 [lecture-blueprint.md](lecture-blueprint.md). 강의용 작업은 두 문서를 반드시 따른다.
- 좌측 컬러 바는 AGENTS.md §4.7-A 금지 클리셰. 발문·요약 박스에 쓰지 않는다.

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
