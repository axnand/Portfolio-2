import React, { MouseEventHandler } from "react";
import styles from "./outlinebutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  href?: string;
  target?: string;
  disabled?: boolean; // Add disabled to Props interface
  style?: string;
}

export const DownloadResumeBtn = ({ children, onClick, className, href, target, disabled }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
    if (href) {
      window.open(href, target);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.outlineButton} ${className ? className : ""}`}
      disabled={disabled}
      // Pass disabled to the button element
    >
      {children}
    </button>
  );
};
