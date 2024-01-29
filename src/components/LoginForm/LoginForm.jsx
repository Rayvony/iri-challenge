import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useAuthStore } from "../../hooks/useAuthStore";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const { login } = useAuthStore();

  const [email, setEmail] = useState("marianoluisvargas@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(null);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(null);
  };

  const handleSubmit = async () => {
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error.message);
      setError("Incorrect email or password");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Typography variant='h5' align='center'>
          Welcome!
        </Typography>
        <TextField label='Email' type='email' color='purple' fullWidth margin='normal' value={email} onChange={handleEmailChange} />
        <TextField label='Password' type='password' color='purple' fullWidth margin='normal' value={password} onChange={handlePasswordChange} />
        {error && (
          <Typography variant='body2' color='error'>
            {error}
          </Typography>
        )}
        <Button variant='contained' color='purple' onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};
