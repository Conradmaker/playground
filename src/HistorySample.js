import React from "react";

export default function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    history.push("/");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}
