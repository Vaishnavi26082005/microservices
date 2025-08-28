import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateComment = ({ snippet }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch all comments
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:1000/api/v1/snippet/${snippet.id}/comment`
        );
        console.log("Fetched comments:", res.data);
        setComments(res.data); // res.data is already an array
      } catch (error) {
        console.log("Error occurred", error);
      }
    };
    fetchComment();
  }, [snippet.id]);

  // Add new comment
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:1000/api/v1/snippet/${snippet.id}/comment`,
        { text }
      );
      console.log("New comment response:", res.data);
      setComments((prev) => [...prev, res.data]); // res.data is a single comment object
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-3">
      {comments.map((comment) => (
        <li key={comment.commentId} className="text-sm">
          {comment.text}
        </li>
      ))}
      <form onSubmit={addComment} className="flex mt-3 items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add comment"
          className="border rounded px-2 text-sm py-1"
        />
        <button className="bg-black text-white px-4">Add</button>
      </form>
    </div>
  );
};

export default CreateComment;
