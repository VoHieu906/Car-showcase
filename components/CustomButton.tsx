"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        className={`custom-btn ${containerStyle}`}
        disabled={false}
        type={btnType || "button"}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;
