import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "@styles/component/Button.module.css";

type TButton = {
  size?: string;
  width?: string;
  weight?: number;
  height?: string;
  children: string | ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  size = "18px",
  weight = 500,
  width = "auto",
  height = "auto",
  children,
  ...rest
}: TButton): JSX.Element => {
  return (
    <button
      className={styles.btn}
      style={{ width, height, fontWeight: weight, fontSize: size }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
