import { useState } from "react";

export const CardsViewModel = () => {
  const [isAdded, setAdd] = useState(false);
  const handleAdd = () => {
    setAdd(!isAdded);
    onPlus({ imageUrl, title, price });
  };

  return { handleAdd, isAdded, setAdd };
};
