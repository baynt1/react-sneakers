import { FC } from "react";
import { Card } from "../Components/Cards/Cards";
import { IMainView } from "../../Model/interface";
import Skeleton from "react-loading-skeleton";

export const MainView: FC<IMainView> = ({
  search,
  onClearSearch,
  onSearch,
  onAddToCart,
  list,
  loading,
}) => {
  const arrSkeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
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
        {list.length === 0
          ? arrSkeleton.map((item) => {
              return (
                <div className="card" key={item}>
                  <Skeleton width={"100%"} height={112} />
                  <Skeleton width={"100%"} height={20} className={"mt-20"} />
                  <Skeleton width={"80%"} height={20} />
                  <div className="d-flex justify-between align-center mt-15">
                    <Skeleton width={72} height={36} />
                    <Skeleton width={32} height={32} />
                  </div>
                </div>
              );
            })
          : list
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
                  loading={loading}
                />
              ))}
      </div>
    </div>
  );
};
