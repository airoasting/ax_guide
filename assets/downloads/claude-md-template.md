# CLAUDE.md

이 파일은 Claude Code가 이 프로젝트에서 작업할 때 참고하는 지침이다.

## 프로젝트 컨텍스트

- **회사/팀:** [회사명]
- **프로젝트 목적:** [한 줄 정의]
- **주요 사용자:** [누구]
- **현재 단계:** [기획 / 개발 / 운영]

## 코딩 컨벤션

- 언어/프레임워크: [예: Python 3.11 + FastAPI, TypeScript + Next.js]
- 들여쓰기: [2 spaces / 4 spaces / tab]
- 네이밍: [camelCase / snake_case]
- 주석: [필수 항목 / 영문 vs 한글]

## 작업 원칙

- TDD 적용 여부: [예/아니오, 적용 범위]
- 커밋 메시지 컨벤션: [Conventional Commits 사용 여부]
- PR 단위: [1 feature = 1 PR / multi-task PR 허용]

## 핵심 자산

- `docs/architecture.md` — 시스템 아키텍처 (참조 필수)
- `docs/glossary.md` — 사내 어휘집
- `scripts/setup.sh` — 로컬 환경 부트스트랩

## 절대 하지 말 것

- 프로덕션 DB에 직접 쿼리
- 비밀 키를 코드에 인라인 (사용 시 환경 변수)
- 외부 LLM에 고객 데이터 입력 (사내 LLM만 허용)
- 검증 없이 자동화 워크플로우 배포

## 기본 출력 패턴

1. 핵심 판단
2. 이유
3. 실행안
4. 남길 자산
5. 다음 액션

---

> AX Guide for Enterprise · v0.2 / 사내 사용자가 회사에 맞춰 채워 사용.
> 원본 패턴은 https://github.com/[org]/ax-guide
