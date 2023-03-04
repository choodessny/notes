import React from "react";
import styles from "./Header.module.scss";

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};
