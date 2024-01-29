import { AppBar, Toolbar } from "@mui/material";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
      <AppBar position='static' className={styles.appBar}>
        <Toolbar>
          <img src='public/firma.svg' alt='logo' className={styles.logo} />
          <div className={styles.spacer} />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBar;
