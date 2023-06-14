import { useEffect, useState } from "react";
import axios from "axios";
import SingleComment from "./SingleComment";

export default function CommentArea({ id }) {
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0)
  let postId = id;

  // Chiamata per Dati dei COMMENTI del POST
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}/comments`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [commentsCount]);

  function deleteComment(postId, commentId) {
    axios
      .delete(`http://localhost:3000/posts/${postId}/comments/${commentId}`)
      .then((res) => {
        setComments(comments.filter((comment) => comment._id !== commentId))
  })
  }

  return (
    <div>
      <hr></hr>
      <p className="text-black fs-4 fw-semibold mb-0">Recensioni:</p>
      {comments.map((item, index) => (
        <SingleComment item={item} key={index} postId={postId} deleteComment={deleteComment} setCommentsCount={setCommentsCount}/>
      ))}
    </div>
  );
}
