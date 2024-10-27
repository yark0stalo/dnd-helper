"use client";
import styles from "./tool-section.module.scss";
import { useRouter } from "next/navigation";

export default function ToolSection(props: {
  name: string;
  path: string;
  bgImage: string;
  gradientStart: string;
}) {
  const router = useRouter();
  const propsStyle = {
    backgroundImage: `url(${props.bgImage})`,
  };
  return (
    <section
      className={styles["tool-section"]}
      style={propsStyle}
      onClick={() => {
        router.push(props.path);
      }}
    >
      <div className={`${styles.layout} ${styles[props.gradientStart]}`}></div>
      <p className={styles["tool-name"]}>{props.name}</p>
    </section>
  );
}
