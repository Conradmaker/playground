import React from "react";
import axios from "axios";
import { useAxiosProfile } from "./AxiosProfile";
import "./Board.scss";

const getComment = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return response.data;
};

export default function Board() {
  const [state, fetchData] = useAxiosProfile(getComment, []);

  const { loading, data: comments, error } = state;
  if (loading) {
    return <div>로딩중!!</div>;
  }
  if (error) {
    return (
      <div>
        에러가 발생했습니다.<button onClick={fetchData}>리로드</button>
      </div>
    );
  }
  if (!comments) {
    return (
      <div>
        데이터가 없습니다.<button onClick={fetchData}>리로드</button>
      </div>
    );
  }
  return (
    <div className="Block">
      <h1>댓글목록</h1>
      <button onClick={fetchData}>리로드</button>
      {comments.map((comment) => (
        <div key={comment.id} className="textBox">
          <b>유저명: {comment.name}</b>
          <div className="commentBox">
            <p>이메일: {comment.email}</p>
            <p>내용: {comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
