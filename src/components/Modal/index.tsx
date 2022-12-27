import { MouseEvent, ReactNode, useEffect, useRef } from "react";

import styles from "./styles.module.scss";

interface ModalProps {
  onClose: () => void;
  removeFn: () => void;
}

export function RemoveCommentModal({ onClose, removeFn }: ModalProps) {
  const body = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    body.current = document.querySelector("body");

    if (!body.current) {
      return;
    }

    body.current.style.overflow = "hidden";
  });

  function handleClose(e: MouseEvent) {
    if (e.currentTarget != e.target || !body.current) {
      return;
    }

    body.current.style.overflow = "auto";
    onClose();
  }

  function handleRemove(e: MouseEvent) {
    handleClose(e);
    removeFn();
  }

  return (
    <div className={styles.wrapper} onClick={handleClose}>
      <div className={styles.container}>
        <h3>Excluir comentário</h3>
        <p>
          Você tem certeza que gostaria de <br /> excluir este comentário?
        </p>

        <div>
          <button onClick={handleClose}>Cancelar</button>
          <button onClick={handleRemove}>Sim,excluir</button>
        </div>
      </div>
    </div>
  );
}
