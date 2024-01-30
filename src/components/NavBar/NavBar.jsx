import { AppBar, Toolbar, Button } from "@mui/material";
import styles from "./NavBar.module.css";
import { useAuthStore } from "../../hooks/useAuthStore";

export const NavBar = () => {
  const { status, logout } = useAuthStore();

  return (
    <>
      <AppBar position='static' className={styles.appBar}>
        <Toolbar>
          <img src='./firma.svg' alt='logo' className={styles.logo} />
          <div className={styles.spacer} />

          {status === "authenticated" && (
            <Button variant='outlined' className={styles.logout} color='inherit' onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
