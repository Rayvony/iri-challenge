import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { AddInfo } from "./components/AddInfo/AddInfo";
import { useAuthStore } from "./hooks/useAuthStore";
import "./App.css";

function App() {
  const { status } = useAuthStore();
  return (
    <>
      <NavBar />
      {status === "not-authenticated" && <LoginForm />}
      {status === "authenticated" && <AddInfo />}
      <Footer />
    </>
  );
}

export default App;
