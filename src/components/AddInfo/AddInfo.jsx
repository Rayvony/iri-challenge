import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useAuthStore } from "../../hooks/useAuthStore";

export const AddInfo = () => {
  const { user } = useAuthStore();
  const [student, setStudent] = useState("");
  const [hours, setHours] = useState("");
  const [progress, setProgress] = useState("");

  // const handleSubmit = async () => {
  //   try {
  //     // Call your API function to submit information
  //     await submitInfo(user, student, hours, progress);
  //     // Handle any additional logic after successful submission
  //   } catch (error) {
  //     console.error("Failed to submit information:", error.message);
  //     // Handle error appropriately
  //   }
  // };

  const handleSubmit = async () => {};

  return (
    <Box
      component='form'
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "30%",
        margin: "auto",
        marginTop: "10%",
        textAlign: "center",
      }}
    >
      <TextField label='User' variant='outlined' color='purple' value={user} disabled margin='normal' />
      <TextField label='Student' variant='outlined' color='purple' value={student} onChange={(e) => setStudent(e.target.value)} margin='normal' />
      <TextField label='Hours' variant='outlined' color='purple' type='number' value={hours} onChange={(e) => setHours(e.target.value)} margin='normal' />
      <TextField label='Progress' variant='outlined' color='purple' multiline rows={4} value={progress} onChange={(e) => setProgress(e.target.value)} margin='normal' />
      <Button variant='contained' color='purple' onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};
