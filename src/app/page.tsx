import styles from "./page.module.scss";
import ToolSection from "@/components/tool-section/tool-section";
import Main from "@/components/main/main";

export default function Index() {
  return (
    <Main>
      <div className={styles.content}>
        <div className={styles["project-heading"]}>
          <h1>DnD Tools</h1>
          <p>This project will help you to organize your dnd games better</p>
          <a href="#" className={styles.githubLink}></a>
        </div>
        <ToolSection
          name="Dice Roller"
          path="/dice-roller"
          bgImage="/images/backgrounds/bg1.jpg"
          gradientStart="left"
        />
        <ToolSection
          name="Stats Generator"
          path="/stats"
          bgImage="/images/backgrounds/bg2.jpg"
          gradientStart="right"
        />
      </div>
    </Main>
  );
}
