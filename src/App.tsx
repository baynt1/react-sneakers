import { HeaderView } from "./View/HeaderView/HeaderView";
import { MainViewModel } from "./ViewModel/MainViewModel/MainViewModel";
import { MainView } from "./View/MainView/MainView";

export const App = () => {
  const { search, onSearch, onClearSearch, onAddToCart, list, loading } =
    MainViewModel();
  return (
    <div className="wrapper clear">
      <HeaderView />
      <MainView
        list={list}
        search={search}
        onSearch={onSearch}
        onAddToCart={onAddToCart}
        onClearSearch={onClearSearch}
        loading={loading}
      />
    </div>
  );
};
