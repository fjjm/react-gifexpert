//yarn para instalar dependencias de yarn

import { useState } from "react";
import { AddCategory, GifGrid } from "./componets";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    //setCategories((cat) => [...cat, "Call of duty"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

//oGqaKfMXksPISUNO1szNwJUKjVamSZ6D
