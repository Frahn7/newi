import { MouseEventHandler } from "react";

export const Button = ({
  title,
  onclick,
  type,
}: {
  title: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <button
      onClick={onclick}
      className="p-2 bg-orange-400 rounded-sm hover:bg-orange-300 cursor-pointer"
      type={type}
    >
      {title}
    </button>
  );
};
