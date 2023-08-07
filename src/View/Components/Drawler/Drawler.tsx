import { FC, useEffect } from "react";
import { IDrawer } from "../../../Model/interface";

export const Drawer: FC<IDrawer> = ({ onCloseModal, list }) => {
  const letMeOut = (event) => {
    if (event.key === "Escape") onCloseModal();
  };

  useEffect(() => {
    document.addEventListener("keydown", letMeOut);
    return () => document.removeEventListener("keydown", letMeOut);
  }, []);

  return (
    <>
      <div className="overlay" onClick={onCloseModal}></div>
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            className="cu-p"
            src="/btn-remove.svg"
            alt="Remove"
            onClick={onCloseModal}
          />
        </h2>

        <div className="items">
          {list.map((item, index) => (
            <div key={index} className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">{item.title}</p>
                <b>{item.price} тг.</b>
              </div>
              <img className="removeBtn" src="/btn-remove.svg" alt="Remove" />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </>
  );
};
