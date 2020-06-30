import React from "react";

const profileData = {
  conrad: {
    name: "유원근",
    email: "yhg0337@gmail.com",
  },
  yhg0337: {
    name: "유원근2",
    email: "yhg0337@naver.com",
  },
};
export default function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>없는 유저입니다.</div>;
  }
  return (
    <div>
      <h2>{username}</h2>
      <p>이름: {profile.name}</p>
      <p>이메일: {profile.email}</p>
    </div>
  );
}
