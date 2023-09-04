import { ChangeEvent } from "react";

export interface IListProducts {
  title: string;
  price: number;
  imageUrl: string;
}

export interface IHeader {
  onOpenModal: () => void;
}

export interface IDrawer {
  onCloseModal: () => void;
  list: IListProducts[];
}

export interface ICard {
  imageUrl: string;
  title: string;
  price: number;
  onPlus: (p: { price: number; imageUrl: string; title: string }) => void;
  loading: boolean;
}

export interface IMainView {
  search: string;
  onClearSearch: () => void;
  onSearch: (evt: ChangeEvent<HTMLInputElement>) => void;
  onAddToCart: (val: IListProducts) => void;
  list: IListProducts[];
  loading: boolean;
}
