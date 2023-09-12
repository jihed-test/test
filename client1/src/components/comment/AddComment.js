import { useState } from "react";

import "./Styles/AddComment.scss";

const AddComment = ({ buttonValue, addComments }) => {
  const [comment, setComment] = useState("");

  const clickHandler = () => {
    if (comment === "" || comment === " ") return;
    const newComment = {
      comment: comment,
      createdAt: new Date(),
    };
    addComments(newComment);
    setComment("");
  };

  return (
    <div className="add-comment">
      <div className="profile-pic"></div>
      <textarea
        className="comment-input"
        placeholder="Add a comment"
        value={ comment}
        onChange={(e) => {
          setComment(
            e.target.value
          );
        }}
      />
      <div className="send-btn-container">
        <div className="profile-pic"></div>
        <button className="add-btn" onClick={clickHandler}>
          {buttonValue}
        </button>
      </div>
    </div>
  );
};

export default AddComment;
