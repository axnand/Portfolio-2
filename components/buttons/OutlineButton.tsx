import { MouseEventHandler } from "react";
import styles from "./outlinebutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string; // Add className to props
}

export const OutlineButton = ({ children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.outlineButton} ${className ? className : ''}`} // Combine className prop with existing styles
    >
      {children}
    </button>
  );
};
