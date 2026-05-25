(function() {
  const AXIS_MAP = {
    vision:     ['q1', 'q6'],
    adoption:   ['q2', 'q7'],
    governance: ['q3'],
    people:     ['q4'],
    workflow:   ['q5'],
  };

  const LV_THRESHOLDS = [
    { max: 1.5, lv: 1, label: '인식 단계', desc: '한 사람이 가이드를 읽기 시작한 단계' },
    { max: 2.5, lv: 2, label: '파일럿 단계', desc: '비전 v0.5 + 한 직군 파일럿' },
    { max: 3.5, lv: 3, label: '부서 확산 단계', desc: '비전 v1.0 + 3개 직군 챔피언' },
    { max: 4.5, lv: 4, label: '전사 운영 단계', desc: '비전이 외부 메시지에 등장' },
    { max: 5.1, lv: 5, label: '내재화 단계', desc: '비전이 직무 정의·평가·승진에 박힘' },
  ];

  const RECOMMENDATIONS = {
    1: { primary: 'strategy-1-vision.html', primaryLabel: '전략 1 · AX 비전', secondary: ['strategy-2-roi.html', 'diagnostic.html'] },
    2: { primary: 'strategy-1-vision.html', primaryLabel: '전략 1 · AX 비전', secondary: ['strategy-2-roi.html', 'exec-1-workflows.html'] },
    3: { primary: 'exec-1-workflows.html', primaryLabel: '실행 1 · 직군별 워크플로우', secondary: ['exec-2-tools.html', 'strategy-3-governance.html'] },
    4: { primary: 'exec-2-tools.html', primaryLabel: '실행 2 · 도구 선택', secondary: ['exec-3-patterns.html', 'strategy-4-people.html'] },
    5: { primary: 'exec-5-templates.html', primaryLabel: '실행 5 · 사내 가이드 템플릿팩', secondary: ['exec-3-patterns.html', 'ref-downloads.html'] },
  };

  function calculate(scores) {
    const axisScores = {};
    for (const [axis, qs] of Object.entries(AXIS_MAP)) {
      const vals = qs.map(q => scores[parseInt(q.substr(1)) - 1]);
      axisScores[axis] = vals.reduce((a, b) => a + b, 0) / vals.length;
    }
    const total = scores.reduce((a, b) => a + b, 0);
    const avg = total / scores.length;
    const lvInfo = LV_THRESHOLDS.find(t => avg <= t.max);
    return {
      scores,
      axisScores,
      total,
      avg,
      lv: lvInfo.lv,
      lvLabel: lvInfo.label,
      lvDesc: lvInfo.desc,
      recommendation: RECOMMENDATIONS[lvInfo.lv],
    };
  }

  window.AXDiag = { calculate };
})();
