import styles from "./Card.module.scss";
import { FC } from "react";

interface ICard {
  imageUrl: string;
  title: string;
  price: number;
  onClick: () => void;
}

export const Card: FC<ICard> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="../../../public/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img
            width={11}
            height={11}
            src="../../../public/plus.svg"
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
};
