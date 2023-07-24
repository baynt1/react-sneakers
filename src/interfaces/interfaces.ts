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
  onPlus: () => void;
}
