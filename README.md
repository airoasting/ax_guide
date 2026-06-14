# 비즈니스 리더를 위한 AX 실행 가이드

AI-Native 전환을 위한 5단계 프레임워크. 경영진이 끊김 없이 읽도록 21페이지 정적 웹사이트로 구현한 AX(AI Transformation) 실행 가이드입니다.

모든 층위는 **COMPANY BRAIN OS 구축**이라는 궁극 목표로 수렴합니다. AI 도구를 더 쓰는 회사가 아니라, AI를 운영체계로 쓰는 회사를 만드는 길을 다룹니다.

---

## 읽는 순서 (사이트 구조)

진단 게이트에서 자기 위치를 잰 뒤, 다섯 단계 여정을 따라갑니다.

### 진단 게이트 — 5단계 진입 전 자기 위치 측정
| 페이지 | 내용 |
|--------|------|
| [AX 추진 원칙](blueprint.html) | 청사진과 북극성 원칙 5가지 |
| [AX 캔버스](ax-canvas.html) | 한 직무를 10칸으로 해부하는 미시 엔진 |
| [현재 수준 진단](diagnosis.html) | 6대 영역 24문항 인터랙티브 자가진단 |

### 1단계. 실행 조직
| 페이지 | 내용 |
|--------|------|
| [CEO가 먼저 쓴다](leader-first.html) | 첫 행동은 위임이 아니라 경영진 본인의 매일 사용 |
| [TF 조직 세팅](organization.html) | 경영진 스폰서 직속 한시 정예팀 구성 |
| [운영 계획 수립](operations.html) | TF의 6개월을 한 장의 운영 계획으로 |
| [AI 부트캠프](capability.html) | 90일 부트캠프와 해커톤으로 챔피언 양성 |

### 2단계. 파일럿 실행
| 페이지 | 내용 |
|--------|------|
| [대상 선정과 실행](pilot.html) | 작게 돌려 현장 데이터를 모으는 Build-Measure-Learn |
| [핵심 시사점 도출](insights.html) | 됨·안 됨·조직 역량 발견의 3칸 학습 리포트 |

### 3단계. 과제 우선순위화
| 페이지 | 내용 |
|--------|------|
| [우선순위 기준 설정](criteria.html) | 전략 기여도 × 실현 가능성, 두 축과 게이트 |
| [후보 평가](evaluation.html) | 미시 엔진 7문항으로 후보를 해부해 DRI 분류 |
| [전략 과제 선정](bets.html) | 만들 자산을 3~5개로 압축 |

### 4단계. 업무 방식 재설계 (★ 가이드의 심장)
| 페이지 | 내용 |
|--------|------|
| [자원 재배분](resource.html) | 10-20-70, 사람·프로세스·문화에 70% |
| [업무 재설계](reshape.html) | 끝에서 끝까지 흐름 재설계 + 4D 전사 표준 |

### 5단계. AI 네이티브 컴퍼니
| 페이지 | 내용 |
|--------|------|
| [AI 네이티브의 모습](ainative.html) | OPEN/CLOSED LOOP, Queryable Org, 세 아키타입 |
| [BRAIN OS 완성도](brainos.html) | 자산 축적 4단계 순환의 완성 |
| [지속 운영과 출발선](perpetual.html) | 일회성이 아닌 상시 운영체계로 |

### 참고 자료
| 페이지 | 내용 |
|--------|------|
| [AI 네이티브로의 여정](cost-output.html) | 기업 사례로 읽는 비용·산출 |
| [AI 퍼스트 문제 정의력](problem-definition.html) | 5대 핵심 역량과 에이전트 리더십 |
| [AI 서비스 비교](ai-services.html) | 빅3·OpenRouter·Enterprise/VPC 선택 가이드 |

진입점은 [index.html](index.html)이며, 한 장 요약 슬라이드 [slide.html](slide.html)이 별도로 있습니다.

---

## 디자인·기술

- **디자인 톤:** BCG·Bain·McKinsey 류 컨설팅 보고서. 진중한 포레스트 그린
- **폰트:** 로컬 Pretendard (산세리프 단일)
- **프론트엔드:** HTML5, CSS3, Vanilla JavaScript (단일 `assets/style.css`, JS는 페이지 인라인)
- **호스팅:** 정적 사이트 (별도 서버 불필요), 사내 한정 공유 기본

---

## 문서 체계

루트에는 운영 문서 네 개만 둡니다. 그 외 작업 문서는 `backups/`에 보관합니다.

**운영 문서 (루트)**
| 문서 | 역할 |
|------|------|
| [CLAUDE.md](CLAUDE.md) | 진입점. AGENTS.md·MEMORY.md로 안내 |
| [AGENTS.md](AGENTS.md) | 작업 지침 — 정본 규칙, 페이지 인벤토리, 디자인 시스템, 한국어 작성 원칙 |
| [MEMORY.md](MEMORY.md) | 변경 로그와 구축 진행 상황 |
| [README.md](README.md) | 이 문서. 프로젝트 개요와 읽는 순서 |

`backups/`에는 옛 작업 문서(초기 기획안·강의 패턴 메모·디자인 평가 스냅샷)를 보관합니다. 현재 운영에는 쓰지 않습니다.

내용의 정본은 **라이브 사이트(HTML 페이지)**입니다. 수정은 해당 페이지에서 직접 하고, 규약은 `AGENTS.md` 한 곳에서만 관리합니다.

---

## 라이선스

이 가이드의 저작권은 AI ROASTING에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

© 2026 AI ROASTING. All rights reserved.
