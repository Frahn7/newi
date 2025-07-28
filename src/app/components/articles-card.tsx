import React from "react";

export const ArticlesCard = ({
  id,
  name,
  price,
}: {
  id: number;
  name: string;
  price: string;
}) => {
  return (
    <div className="w-[200px] h-[200px] font-bold rounded-sm bg-gray-300 flex flex-col gap-2 justify-center items-center uppercase text-2xl cursor-pointer hover:bg-gray-400">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};
