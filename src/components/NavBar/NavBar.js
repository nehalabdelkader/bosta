import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { useTranslation } from "react-i18next";

import StyledAppBar from "./NavBar.styles";

const NavBar = () => {
  const { t, i18n } = useTranslation("translation");

  const navbarList = [
    {
      text: t("translation:main"),
      href: "#",
    },
    {
      text: t("translation:pricing"),
      href: "#",
    },
    {
      text: t("translation:contact_sales"),
      href: "#",
    },
  ];
  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box className="logoContainer">
            <DeliveryDiningIcon />
            <Typography className="link" variant="h5">
              {t("translation:bosta")}
            </Typography>
          </Box>

          <Box className="linksContainer">
            {navbarList.map((item) => (
              <Typography
                variant="h6"
                component="a"
                className="link"
                href={item.href}
              >
                {item.text}
              </Typography>
            ))}
          </Box>

          <Box className="linksContainer">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select label="Age">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="h6" component="a" className="link" href="#">
              {t("translation:log_in")}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export { NavBar };
