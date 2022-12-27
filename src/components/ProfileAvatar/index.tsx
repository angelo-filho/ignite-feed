import styles from "./styles.module.scss";

interface ProfileAvatarProps {
  src: string;
  isOutline?: boolean;
}

export function ProfileAvatar({ src, isOutline = true }: ProfileAvatarProps) {
  return (
    <img
      className={`${styles.container} ${isOutline ? styles.outline : ""}`}
      src={src}
      alt="Avatar de perfil"
    />
  );
}
