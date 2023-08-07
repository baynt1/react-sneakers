import { FC } from "react";
import { Drawer } from "../Components/Drawler/Drawler";
import { Header } from "../Components/Header/Header";
import { HeaderViewModel } from "../../ViewModel/HeaderViewModel/HeaderViewModel";

export const HeaderView: FC = () => {
  const { modal, setModal, cart } = HeaderViewModel();
  return (
    <>
      {modal && <Drawer list={cart} onCloseModal={() => setModal(false)} />}
      <Header onOpenModal={() => setModal(true)} />
    </>
  );
};
