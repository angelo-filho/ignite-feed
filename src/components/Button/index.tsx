import { cloneElement, MouseEvent, ReactElement } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  icon?: ReactElement;
  isOutline?: boolean;
}

export function Button({ text, icon, isOutline = false }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${isOutline ? styles.outline : styles.full}`}
    >
      {icon && cloneElement(icon)}
      {text}
    </button>
  );
}
