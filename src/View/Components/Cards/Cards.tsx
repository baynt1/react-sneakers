import "./Cards.scss";
import { FC } from "react";
import { ICard } from "../../../Model/interface";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardsViewModel } from "../../../ViewModel/Components/CardsViewModel";

export const Card: FC<ICard> = ({
  imageUrl,
  title,
  price,
  onPlus,
  loading,
}) => {
  const { setAdd, handleAdd, isAdded } = CardsViewModel();

  return loading ? (
    <div className="card">
      <Skeleton width={"100%"} height={112} />
      <Skeleton width={"100%"} height={20} className={"mt-20"} />
      <Skeleton width={"80%"} height={20} />
      <div className="d-flex justify-between align-center mt-15">
        <Skeleton width={72} height={36} />
        <Skeleton width={32} height={32} />
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="favorite">
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
          className="plus"
          src={isAdded ? "/btn-checked.svg" : "/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
};
