import React, { MouseEventHandler } from "react";
import styles from "./outlinebutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  href?: string;
  target?: string;
}

export const DownloadResumeBtn = ({ children, onClick, className, href, target }: Props) => {
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
    >
      {children}
    </button>
  );
};
