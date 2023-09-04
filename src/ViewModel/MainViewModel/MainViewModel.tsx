import { ChangeEvent, useEffect, useState } from "react";
import { IListProducts } from "../../Model/interface";
import { HeaderViewModel } from "../HeaderViewModel/HeaderViewModel";
import axios from "axios";

export const MainViewModel = () => {
  const [list, setList] = useState<IListProducts[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const { onAddToCart } = HeaderViewModel();

  // --------------- GET LIST OF PRODUCTS ------------------- //
  useEffect(() => {
    axios
      .get<IListProducts>("https://64beb4b35ee688b6250cd3b1.mockapi.io/product")
      .then((res) => {
        setList(res.data || []);
        setLoading(false);
      })
      .catch((e) => console.error("Error fetching: " + e));
  }, []);

  // --------------- HIDE SCROLL ON MODAL ------------------ //

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClearSearch = () => setSearch("");

  return { list, search, onAddToCart, onSearch, onClearSearch, loading };
};
