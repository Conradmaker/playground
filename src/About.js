import React from "react";
import qs from "qs";

export default function About({ location }) {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const detail = query.detail;
  return (
    <div>
      <h1>설명페이지</h1>
      <p>
        이페이지는 연습용으로 만들어진 페이지입니다. 주소창에<b>?detail=true</b>
        를 입력해보세요
      </p>
      {detail === "true" ? <div>추가적인 정보.....</div> : null}
    </div>
  );
}
