import { Card } from "./components/Cards";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawler";
import { useEffect, useState } from "react";
import axios from "axios";
import { IListProducts } from "./interfaces/interfaces";

export const App = () => {
  const [list, setList] = useState<IListProducts[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [cart, setCart] = useState<IListProducts[]>([]);

  // --------------- GET LIST OF PRODUCTS ------------------- //
  useEffect(() => {
    axios
      .get<IListProducts>("https://64beb4b35ee688b6250cd3b1.mockapi.io/product")
      .then((res) => setList(res.data || []))
      .catch((e) => console.error("Error fetching: " + e));
  }, []);

  // --------------- HIDE SCROLL ON MODAL ------------------ //
  useEffect(() => {
    modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modal]);

  const onAddToCart = (item: IListProducts) => {
    setCart((prevState) => [...prevState, item]);
  };
  return (
    <div className="wrapper clear">
      {modal && <Drawer list={cart} onCloseModal={() => setModal(false)} />}
      <Header onOpenModal={() => setModal(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {list.map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
