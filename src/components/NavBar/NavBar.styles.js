import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(1.25, 0),
  backgroundColor: theme.palette.common.white,
  color: theme.palette.secondary.main,
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      padding: 0,
    },
  },
  "& .logoContainer": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    "& .MuiTypography-root": {
      color: theme.palette.primary.main,
    },
  },

  "& .linksContainer": {
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
  },

  "& .link": {
    textDecoration: "none",
    fontWeight: 500,
    color: theme.palette.secondary.main,
  },

  "& .langMenu": {
    width: theme.spacing(9.5),
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },

  "& .trackShipment": {
    display: "flex",
    alignItems: "center",
  },

  '& .DrawerItemsContainer':{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
  }
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
export default StyledAppBar;
export { DrawerHeader };
