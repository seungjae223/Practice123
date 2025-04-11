import React from "react";
import PerformDetail from "./PerformDetail";
import "../css/Perform.css";

const PerformList = () => {
  return (
    <div className="perform-wrap">
      <div className="perform-header">
        <p>한서대학교 &lt;동아리의 밤&gt; 공연을 확인하세요</p>
        <h1>동아리의 밤에는 어떤 공연을 하나요?</h1>
      </div>

      <div className="perform-card">
        <PerformDetail
          club="무혼"
          leader="문지원"
          songs={[
            { title: "Drowning", singer: "주예원" },
            { title: "모르시나요", singer: "문지원" },
            { title: "내게 사랑이 뭐냐고 물어본다면", singer: "황승재, 이재형" },
            { title: "곰 세마리", singer: "최지인" },
          ]}
        />
      </div>
    </div>
  );
};

export default PerformList;