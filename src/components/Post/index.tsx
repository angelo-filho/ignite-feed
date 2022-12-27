import { formatDistanceStrict } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

import { Comment } from "../Comment";
import { ProfileAvatar } from "../ProfileAvatar";
import { PostForm } from "./PostForm";

import styles from "./styles.module.scss";

interface CommentData {
  userImage: string;
  username: string;
  content: string;
  applauses: number;
  applauded: boolean;
  created_at: string;
}

interface User {
  username: string;
  imageURL: string;
  occupation: string;
}

interface PostProps {
  author: User;
  commentsData: CommentData[];
  content: string;
  created_at: string;
}

export function Post({ author, commentsData, content, created_at }: PostProps) {
  const [comments, setComments] = useState(commentsData);

  function handleAddComment(text: string) {
    const commentsWithNewOne = comments.slice();

    commentsWithNewOne.push({
      userImage: "https://avatars.githubusercontent.com/u/60992454?v=4",
      username: "Angelo Filho",
      content: text,
      applauses: 0,
      applauded: false,
      created_at: new Date().toISOString(),
    });

    setComments(commentsWithNewOne);
  }

  function handleRemoveComment(commentContent: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.content !== commentContent
    );

    setComments(commentsWithoutDeletedOne);
  }

  function handleApplause(commentContent: string) {
    const commentsWithModifiedOne = comments.map((comment) => {
      if (comment.content !== commentContent) return comment;

      comment.applauses += comment.applauded ? -1 : 1;

      comment.applauded = !comment.applauded;

      return comment;
    });

    setComments(commentsWithModifiedOne);
  }

  return (
    <div className={styles.container}>
      <div className={styles.post_info}>
        <div>
          <ProfileAvatar src={author.imageURL} />

          <div>
            <strong>{author.username}</strong>
            <span>{author.occupation}</span>
          </div>
        </div>

        <span>
          Públicado{" "}
          {formatDistanceStrict(new Date(created_at), new Date(), {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
      </div>

      <div
        className={styles.post_content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>

      <PostForm handleAddComment={handleAddComment} />

      {comments.map((comment) => {
        return (
          <Comment
            key={comment.content}
            comment={comment}
            handleRemoveComment={handleRemoveComment}
            handleApplause={handleApplause}
          />
        );
      })}
    </div>
  );
}
