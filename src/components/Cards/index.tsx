import styles from "./Card.module.scss";
import { FC, useState } from "react";
import { ICard } from "../../interfaces/interfaces";

export const Card: FC<ICard> = ({ imageUrl, title, price, onPlus }) => {
  const [isAdded, setAdd] = useState(false);
  const handleAdd = () => {
    setAdd(!isAdded);
    onPlus({ imageUrl, title, price });
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          onClick={handleAdd}
          className={styles.plus}
          src={isAdded ? "/btn-checked.svg" : "/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
};
