import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Typography variant='h5' align='center'>
          Welcome!
        </Typography>
        <TextField label='Email' type='email' color='purple' fullWidth margin='normal' value={email} onChange={handleEmailChange} />
        <TextField label='Password' type='password' color='purple' fullWidth margin='normal' value={password} onChange={handlePasswordChange} />
        <Button variant='contained' color='purple' onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};
