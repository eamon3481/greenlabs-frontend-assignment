import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Title = ({ title, onClick }: { title: string; onClick?: () => void }) => (
  <div className="p-2">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      {onClick && (
        <button name="plus" onClick={onClick}>
          <AiOutlinePlus />
        </button>
      )}
    </div>
  </div>
);

export default Title;
