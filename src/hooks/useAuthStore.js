import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../store/authSlice";
import { loginUser } from "../api/airtableAPI";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);

  const login = async (username, password) => {
    try {
      const user = await loginUser(username, password);

      if (user) {
        await dispatch(onLogin(user));
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };

  const logout = () => {
    dispatch(onLogout());
  };

  return { status, user, login, logout };
};
