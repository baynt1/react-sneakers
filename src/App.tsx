import { Card } from "./View/Components/Cards/Cards";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { IListProducts } from "Model/interface";
import { HeaderView } from "./View/HeaderView/HeaderView";
import { HeaderViewModel } from "./ViewModel/HeaderViewModel/HeaderViewModel";

export const App = () => {
  const [list, setList] = useState<IListProducts[]>([]);
  const [search, setSearch] = useState<string>("");
  const { onAddToCart } = HeaderViewModel();
  // --------------- GET LIST OF PRODUCTS ------------------- //
  useEffect(() => {
    axios
      .get<IListProducts>("https://64beb4b35ee688b6250cd3b1.mockapi.io/product")
      .then((res) => setList(res.data || []))
      .catch((e) => console.error("Error fetching: " + e));
  }, []);

  // --------------- HIDE SCROLL ON MODAL ------------------ //

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClearSearch = () => setSearch("");

  return (
    <div className="wrapper clear">
      <HeaderView />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="cut-text" style={{ maxWidth: "70%" }}>
            {search === "" ? "Все кроссовки" : `Поиск по запросу: "${search}"`}
          </h1>
          <div className="search-block d-flex">
            {search && (
              <img
                className="clear cu-p"
                src="/btn-remove.svg"
                alt="clear"
                onClick={onClearSearch}
              />
            )}
            <img src="/search.svg" alt="Search" />
            <input placeholder="Поиск..." value={search} onChange={onSearch} />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {list
            .filter((obj) =>
              obj.title
                .toLowerCase()
                .replace(/\s+/g, " ")
                .includes(search.toLowerCase().replace(/\s+/g, " ")),
            )
            .map((obj, index) => (
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
