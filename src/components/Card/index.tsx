import styles from "./styles.module.scss";

import cardBg from "../../assets/cardBg.png";
import { ProfileAvatar } from "../ProfileAvatar";
import { PencilSimpleLine } from "phosphor-react";
import { Button } from "../Button";

export function Card() {
  return (
    <div className={styles.container}>
      <img className={styles.imageBg} src={cardBg} alt="Folhas" />

      <div className={styles.infos}>
        <ProfileAvatar
          src={"https://avatars.githubusercontent.com/u/60992454?v=4"}
        />

        <strong>Angelo Filho</strong>

        <span>Dev Fullstack</span>
      </div>

      <div className={styles.editProfile}>
        <Button
          text="Editar seu perfil"
          icon={<PencilSimpleLine size={16} />}
          isOutline
        />
      </div>
    </div>
  );
}
