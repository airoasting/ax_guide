(function() {
  function buildHtml(res) {
    const date = new Date().toISOString().slice(0, 10);
    return `
      <div style="padding: 40px; font-family: -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif; color: #3A3530;">
        <div style="border-bottom: 2px solid #D97757; padding-bottom: 16px; margin-bottom: 24px;">
          <div style="font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #D97757; font-weight: 700;">AX Guide for Enterprise</div>
          <h1 style="font-size: 28px; margin-top: 8px;">우리 조직 AX 성숙도 진단 결과</h1>
          <p style="color: #999; font-size: 12px; margin-top: 4px;">진단일: ${date}</p>
        </div>

        <div style="background: linear-gradient(135deg, #1E3A8A 0%, #3B5BB5 100%); color: white; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
          <div style="font-size: 14px; opacity: 0.85;">현재 단계</div>
          <div style="font-size: 36px; font-weight: 800; margin: 8px 0;">Lv${res.lv} · ${res.lvLabel}</div>
          <div style="font-size: 14px; opacity: 0.9;">${res.lvDesc}</div>
        </div>

        <h2 style="font-size: 18px; margin-bottom: 12px;">축별 점수 (5점 만점)</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <thead><tr style="background: #F5F2EC;"><th style="padding: 8px; text-align: left; font-size: 12px;">축</th><th style="padding: 8px; text-align: right; font-size: 12px;">점수</th></tr></thead>
          <tbody>
            <tr><td style="padding: 8px; border-bottom: 1px solid #EEE;">비전</td><td style="padding: 8px; text-align: right; border-bottom: 1px solid #EEE;">${res.axisScores.vision.toFixed(1)}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #EEE;">도구 도입</td><td style="padding: 8px; text-align: right; border-bottom: 1px solid #EEE;">${res.axisScores.adoption.toFixed(1)}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #EEE;">거버넌스</td><td style="padding: 8px; text-align: right; border-bottom: 1px solid #EEE;">${res.axisScores.governance.toFixed(1)}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #EEE;">인재</td><td style="padding: 8px; text-align: right; border-bottom: 1px solid #EEE;">${res.axisScores.people.toFixed(1)}</td></tr>
            <tr><td style="padding: 8px;">워크플로우</td><td style="padding: 8px; text-align: right;">${res.axisScores.workflow.toFixed(1)}</td></tr>
          </tbody>
        </table>

        <h2 style="font-size: 18px; margin-bottom: 12px;">다음 단계</h2>
        <p style="line-height: 1.7;">가장 먼저 가야 할 곳: <strong style="color: #D97757;">${res.recommendation.primaryLabel}</strong> (${res.recommendation.primary})</p>
        <p style="line-height: 1.7; color: #6B655E; font-size: 13px; margin-top: 8px;">참고 챕터: ${res.recommendation.secondary.join(', ')}</p>

        <div style="margin-top: 40px; padding-top: 16px; border-top: 1px solid #DDD; font-size: 11px; color: #999;">
          AX Guide for Enterprise · v1.0 / 2026-05 · jade@linercorp.com
        </div>
      </div>
    `;
  }

  function exportPDF(res) {
    if (typeof html2pdf === 'undefined') {
      alert('PDF 라이브러리를 불러올 수 없습니다. 인터넷 연결을 확인하세요.');
      return;
    }
    const html = buildHtml(res);
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    document.body.appendChild(tmp);

    const opt = {
      margin: 0,
      filename: `AX-진단-Lv${res.lv}-${new Date().toISOString().slice(0,10)}.pdf`,
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(tmp.firstElementChild).set(opt).save().then(() => {
      document.body.removeChild(tmp);
    }).catch(err => {
      console.error('PDF export error:', err);
      document.body.removeChild(tmp);
      alert('PDF 생성 중 오류가 발생했습니다.');
    });
  }

  window.AXDiagPDF = { export: exportPDF };
})();
