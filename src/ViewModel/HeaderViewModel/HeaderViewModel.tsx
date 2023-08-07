import { useEffect, useState } from "react";
import { IListProducts } from "../../Model/interface";

export const HeaderViewModel = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [cart, setCart] = useState<IListProducts[]>([]);

  const onAddToCart = (item: IListProducts) => {
    setCart((prevState) => [...prevState, item]);
  };

  useEffect(() => {
    modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modal]);

  return { modal, setModal, cart, onAddToCart };
};
