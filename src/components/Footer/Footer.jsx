import React from "react";
import { IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px",
        textAlign: "center",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
      }}
    >
      <IconButton
        component={Link}
        href='https://github.com/Rayvony/iri-challenge'
        target='_blank'
        rel='noopener noreferrer'
        color='purple'
        sx={{
          transform: "scale(2.3)",
          transition: "all 100ms",
          "&:hover": {
            filter: "brightness(1.2)",
            transform: "scale(2.5)",
          },
        }}
      >
        <GitHubIcon />
      </IconButton>
    </footer>
  );
};
