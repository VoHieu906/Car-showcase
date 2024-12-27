"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyle,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        className={`custom-btn ${containerStyle}`}
        disabled={false}
        type={btnType || "button"}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textStyle}`}>{title}</span>
        {rightIcon && ( // Ensure `rightIcon` is defined
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon} // Valid src value (string or StaticImport)
              alt="right icon"
              fill
              className="object-contain"
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
