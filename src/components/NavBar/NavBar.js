import React, { useState } from "react";
import {
  Container,
  Toolbar,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  TextField,
  useTheme,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTranslation } from "react-i18next";

import StyledAppBar, { DrawerHeader } from "./NavBar.styles";

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

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const [trackingNumber, setTrackingNumber] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleTrackingNumberChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleLangaugeChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const renderNavBarLinksMidSectoin = () => {
    return navbarList.map((item) => (
      <Typography component="a" className="link" href={item.href}>
        {item.text}
      </Typography>
    ));
  };
  const renderNavBarLinksEndSection = () => {
    return (
      <>
        <Typography component="a" className="link" href="#">
          {t("translation:log_in")}
        </Typography>

        <FormControl className="langMenu" variant="standard">
          <InputLabel>{t("translation:lang")}</InputLabel>
          <Select value={i18n.langauge} onChange={handleLangaugeChange}>
            <MenuItem value="en">{t("translation:english")}</MenuItem>
            <MenuItem value="ar">{t("translation:arabic")}</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box className="logoContainer">
            <DeliveryDiningIcon fontSize="large" color="primary" />
            <Typography className="link" variant="h5">
              {t("translation:bosta")}
            </Typography>
          </Box>
          {!isTablet && (
            <Box className="linksContainer">{renderNavBarLinksMidSectoin()}</Box>
          )}

          <Box className="linksContainer">
            <Box className="trackShipment">
              <TextField
                placeholder={t("translation:track_shipment")}
                onChange={handleTrackingNumberChange}
                value={trackingNumber}
              />
              <IconButton
                component="a"
                href={`/shipments/track/${trackingNumber}`}
              >
                <SearchIcon color="primary" />
              </IconButton>
            </Box>

            {isTablet ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(openDrawer && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
                {openDrawer && (
                  <Drawer
                    sx={{
                      width: 240,
                      flexShrink: 0,
                      "& .MuiDrawer-paper": {
                        width: 240,
                        boxSizing: "border-box",
                      },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={openDrawer}
                  >
                    <DrawerHeader>
                      <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                          <ChevronLeftIcon />
                        ) : (
                          <ChevronRightIcon />
                        )}
                      </IconButton>
                    </DrawerHeader>
                    <Box className="DrawerItemsContainer">
                      {renderNavBarLinksMidSectoin()}
                      {renderNavBarLinksEndSection()}
                    </Box>
                  </Drawer>
                )}
              </>
            ) : (
              <>
                {renderNavBarLinksEndSection()}
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export { NavBar };
