import { ReactNode, useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./styles.module.scss";
import { ProfileAvatar } from "../ProfileAvatar";
import { RemoveCommentModal } from "../Modal";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Comment {
  userImage: string;
  username: string;
  content: string;
  applauses: number;
  applauded: boolean;
  created_at: string;
}

interface CommentProps {
  comment: Comment;
  handleRemoveComment: (commentContent: string) => void;
  handleApplause: (commentContent: string) => void;
}

export function Comment({
  comment,
  handleRemoveComment,
  handleApplause,
}: CommentProps) {
  const [remove, setRemove] = useState(false);

  return (
    <div className={styles.container}>
      <ProfileAvatar src={comment.userImage} isOutline={false} />

      {remove && (
        <RemoveCommentModal
          onClose={() => setRemove(false)}
          removeFn={() => handleRemoveComment(comment.content)}
        />
      )}

      <div>
        <div className={styles.comment_content}>
          <div>
            <div>
              <strong>
                {comment.username} <span>(você)</span>
              </strong>

              <span>
                {formatDistance(new Date(comment.created_at), new Date(), {
                  locale: ptBR,
                })}
              </span>
            </div>

            <button onClick={() => setRemove(true)}>
              <Trash size={24} />
            </button>
          </div>

          <p>{comment.content}</p>
        </div>

        <button
          className={comment.applauded ? styles.button_active : ""}
          onClick={() => handleApplause(comment.content)}
        >
          <ThumbsUp size={20} /> Aplaudir • {comment.applauses}
        </button>
      </div>
    </div>
  );
}
