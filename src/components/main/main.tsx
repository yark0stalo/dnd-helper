import styles from "./main.module.scss";
import { ReactNode } from "react";

export default function Main(props: {children : ReactNode}) {
    return (
      <main className={styles.main}>
            {props.children}
      </main>
    );
  }
  