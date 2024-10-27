"use client";
import { useEffect, useState } from "react";
import styles from "./stat-card.module.scss";

export default function StatCard(props: {
  name: string;
  value?: number;
  addOne: boolean;
  addTwo: boolean;
}) {
  const [modifier, setModifier] = useState(
    props.value ? `${Math.floor((props.value - 10) / 2)}` : ""
  );

  useEffect(() => {
    setModifier(props.value ? `${Math.floor((props.value - 10) / 2)}` : "");
  }, [props.value]);

  const [isExpand, setExpand] = useState(false);

  const statContainer = (
    <div className={styles.wrapperStat}>
      {props.value ? (
        <p>{`${props.value} ${
          Number(modifier) <= 0 ? "(" : "(+"
        }${modifier})`}</p>
      ) : (
        ""
      )}
    </div>
  );

  function onCheckedOne() {}

  function onCheckedTwo() {}

  function toggleExpand() {
    console.log(isExpand);
    console.log("click");
    setExpand(!isExpand);
  }

  return (
    <li className={styles.card}>
      <div className={styles.cardName}>
        <p>{props.name}</p>
      </div>
      <div
        className={`${styles.informationCard} ${
          isExpand ? styles.expanded : ""
        }`}
      >
        {statContainer}
        <div className={styles.additional}>
          <p>
            Row Value: <span>{props.value}</span>
          </p>
          <p>
            Modifier: <span>{modifier}</span>
          </p>
          <p>
            Bonus One: <span>{props.addOne ? "1" : "0"}</span>
          </p>
          <p>
            Bonus Two: <span>{props.addTwo ? "2" : "0"}</span>
          </p>
        </div>
        <div className={styles.arrowContainer} onClick={toggleExpand}>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </li>
  );
}

{
  /*  <p className={styles.cardName}>{props.name}</p>
      <div className={styles.wrapperStat}>
        <p className={styles.statValue}></p>
      </div>
      <div className={styles.additional}>
        <p>Value {modifier}</p>
        <label htmlFor="addOne">
          Plus One
          <input
            type="checkbox"
            name="addOne"
            checked={props.addOne}
            onChange={onCheckedOne}
          />
        </label>
        <label htmlFor="addTwo">
          Plus Two
          <input
            type="checkbox"
            name="addTwo"
            checked={props.addTwo}
            onChange={onCheckedTwo}
          />
        </label>
      </div>  */
}
