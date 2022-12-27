import { FormEvent, useState } from "react";
import { Button } from "../Button";
import styles from "./styles.module.scss";

interface PostFormProps {
  handleAddComment: (value: string) => void;
}

export function PostForm({ handleAddComment }: PostFormProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    handleAddComment(value);
    setValue("");
  }

  return (
    <form className={styles.post_leave_your_feedback} onSubmit={handleSubmit}>
      <strong>Deixe seu feedback</strong>

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={"Escreva um comentário..."}
      ></textarea>

      {value && <Button text="Publicar" />}
    </form>
  );
}
