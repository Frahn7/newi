import { MouseEventHandler } from "react";

export const Button = ({
  title,
  onclick,
}: {
  title: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onclick}
      className="p-2 bg-orange-400 rounded-sm hover:bg-orange-300 cursor-pointer"
    >
      {title}
    </button>
  );
};
