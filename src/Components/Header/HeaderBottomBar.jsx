import React from "react";

const HeaderBottomBar = () => {
  const category = [
    "category1",
    "category2",
    "category3",
    "category4",
    "category5",
    "category6",
  ];
  return (
    <ul className="h-[40px] mt-6 flex gap-8 items-center justify-center max-md:hidden  containerA ">
      {category.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default HeaderBottomBar;
