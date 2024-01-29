import { useDispatch, useSelector } from "react-redux";
import { noteAPI } from "../api/noteAPI";
import { onLogin, onLogout } from "../store/authSlice";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);

  const login = async (username, password) => {
    try {
      const { data } = await noteAPI.post("users/login", {
        username,
        password,
      });
      await dispatch(onLogin(data));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    dispatch(onLogout());
  };

  return { status, user, login, logout };
};
