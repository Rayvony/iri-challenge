import React, { useState } from "react";
import { Typography, TextField, Button, Box, Modal, Backdrop, Fade } from "@mui/material";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useAirtable } from "../../hooks/useAirtable";

export const AddInfo = () => {
  const { user, logout } = useAuthStore();
  const { addInfo } = useAirtable();
  const [student, setStudent] = useState("");
  const [hours, setHours] = useState("");
  const [progress, setProgress] = useState("");
  const [thankYouModalOpen, setThankYouModalOpen] = useState(false);
  const [studentError, setStudentError] = useState("");
  const [hoursError, setHoursError] = useState("");
  const [progressError, setProgressError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!student || !/^[a-zA-Z\s]+$/.test(student)) {
      setStudentError("Please enter a valid student name with only letters.");
      isValid = false;
    } else {
      setStudentError("");
    }

    if (!hours || isNaN(hours)) {
      setHoursError("Please enter a valid number for hours.");
      isValid = false;
    } else {
      setHoursError("");
    }

    if (!student.trim()) {
      setStudentError("Please enter a student name.");
      isValid = false;
    }

    if (!hours.trim()) {
      setHoursError("Please enter the number of hours.");
      isValid = false;
    }

    if (!progress.trim()) {
      setProgressError("Please enter the progress.");
      isValid = false;
    } else {
      setProgressError("");
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await addInfo({ user, student, hours, progress });
        console.log("Information submitted successfully");
        setThankYouModalOpen(true);
      } catch (error) {
        console.error("Failed to submit information:", error.message);
      }
    }
  };

  const handleModalClose = () => {
    setThankYouModalOpen(false);
    logout();
  };

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
      <Typography variant='h5' align='center'>
        Please enter your student's information
      </Typography>
      <TextField label='User' variant='outlined' color='purple' value={user} disabled margin='normal' />
      <TextField label='Student' variant='outlined' color='purple' value={student} onChange={(e) => setStudent(e.target.value)} margin='normal' error={!!studentError} helperText={studentError} />
      <TextField label='Hours' variant='outlined' color='purple' type='number' value={hours} onChange={(e) => setHours(e.target.value)} margin='normal' error={!!hoursError} helperText={hoursError} />
      <TextField label='Progress' variant='outlined' color='purple' multiline rows={4} value={progress} onChange={(e) => setProgress(e.target.value)} margin='normal' error={!!progressError} helperText={progressError} />
      <Button variant='contained' color='purple' onClick={handleSubmit}>
        Submit
      </Button>

      <Modal open={thankYouModalOpen} onClose={handleModalClose} closeAfterTransition BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.22)" } }}>
        <Fade in={thankYouModalOpen}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "3px",
              maxWidth: "300px",
              margin: "auto",
              marginTop: "10%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant='h6' align='center'>
              Thank you for submitting!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
